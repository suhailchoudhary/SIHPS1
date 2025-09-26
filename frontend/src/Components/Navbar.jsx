import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-sm" style={{backgroundColor:"#01161cff"}}>
                <div className="container-fluid">
                    {/* Brand stays on the left */}
                    <Link className="navbar-brand text-white" to={'/'}>VERIDIAN</Link>

                    {/* Toggler for mobile */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu items pushed to the right */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'/dataset'}>Datasets</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'/getstarted'}>Get Started</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'/faq'}>FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white " to={'/references'}>References</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className="btn btn-outline-light">Login/Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
