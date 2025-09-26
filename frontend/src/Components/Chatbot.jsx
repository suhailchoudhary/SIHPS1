import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋! Ask me about Deep sea biodiversity " }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // <-- new state

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, newMsg]);
    setInput("");
    setLoading(true); // <-- show loading indicator

    try {
      const res = await axios.post("https://4b3832c27865.ngrok-free.app/chat", {
        question: input
      });

      setMessages(prev => [
        ...prev,
        { sender: "bot", text: res.data.answer }
      ]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to chatbot." }
      ]);
    } finally {
      setLoading(false); // <-- hide loading indicator
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h4>Ask your query</h4>
            <button onClick={toggleChat}>✖</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="message bot">
                <span className="typing">…</span> {/* Skeleton/typing indicator */}
              </div>
            )}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading} // optional: disable input while loading
            />
            <button onClick={sendMessage} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
      <button className="chatbot-button" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default Chatbot;
