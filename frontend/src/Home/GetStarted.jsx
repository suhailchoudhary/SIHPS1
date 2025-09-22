import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
const GetStarted = () => {
  return (
    <div>
        <Navbar/>
        <div style={{ minHeight: "100vh", background: "white" }}>
            <h1>Get Started will coming soon...</h1>
            <Link to={'/output'} className="btn btn-outline-dark">Ingest the Data </Link>
        </div>
    </div>
  )
}

export default GetStarted