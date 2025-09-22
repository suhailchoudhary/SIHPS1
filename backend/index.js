import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Allow your frontend
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Temporary DB simulation
const users = []; // Replace with real DB in production

app.post("/api/google-login", async (req, res) => {
  const { credential } = req.body;

  if (!credential) {
    return res.status(400).json({ message: "Missing credential" });
  }

  try {
    // Verify token with Google
    const response = await axios.get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`
    );

    const { email, name, picture, sub, aud } = response.data;

    // Check if token was issued for your client ID
    if (aud !== process.env.GOOGLE_CLIENT_ID) {
      return res.status(401).json({ message: "Invalid Google Client ID" });
    }

    // Find or create user
    let user = users.find(u => u.googleId === sub);
    if (!user) {
      user = { id: users.length + 1, googleId: sub, name, email, picture };
      users.push(user);
    }

    // Create JWT for frontend
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token, user });
  } catch (error) {
    console.error("Google login error:", error.response?.data || error.message);
    res.status(401).json({ message: "Invalid Google Token" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
