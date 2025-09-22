import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import images1 from '../assets/image4.jpg'

const Content1 = () => {
  return (
    <div className="content-page">
      <Navbar />
      <div className="hero-container text-white d-flex align-items-center px-5">
        <div className="text-box">
          <h1 className="mb-3">What is Deep Sea?</h1>
          <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
            The <span className="fw-bold">deep sea</span> is the part of the ocean far below sunlight, starting around 200 meters deep. 
            <br/>
            It is mostly dark, cold, and under high pressure, making it a harsh environment.
          </p>
          <a 
            href="https://en.wikipedia.org/wiki/Deep_sea" 
            className="btn btn-outline-light mt-3"
          >
            Know More
          </a>
        </div>
      </div>
      <div className="hero-container2 pt-5 text-white text-center">
        <div className="text-box2">
            <h1>
                Ready to be the part of Solution ?
            </h1>
            <p>
                Explore our services<br/><br/>
                <br /><br /><br /><br /><br /><br />
                
            </p>
                      <Link to="/login"
            
            className="btn btn-outline-light mt-3"
          >
            Explore
          </Link>

        </div>
      </div>
      <div className="hero-container3 pt-5 text-white text-center">
        <div className="text-box2">
            <h1>
                Ready to be the part of Solution ?
            </h1>
            <p>
                Explore our services<br/><br/>
                <br /><br /><br /><br /><br /><br />
                
            </p>
                      <Link to="/login"
            
            className="btn btn-outline-light mt-3"
          >
            Explore
          </Link>

        </div>
      </div>      
<div className="hero-container4 pt-5 text-white text-center">
  <div className="container">
    <div className="row justify-content-center g-3" style={{textAlign:"justify"}}>
      <div className="col-md-4 col-lg-5">
        <div className="card mb-3 text-white cardshome" style={{ background: "none" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={images1} className="img-fluid h-100 rounded-start" alt="Sample"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-lg-5">
        <div className="card mb-3 text-white cardshome" style={{ background: "none" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={images1} className="img-fluid h-100 rounded-start" alt="Sample"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>

    </div>
  );
};

export default Content1;
