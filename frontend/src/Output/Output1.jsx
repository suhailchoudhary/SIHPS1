import React from 'react'
import Navbar from '../Components/Navbar'

const Output1 = () => {
    const output='hello'
  return (
    <div className='bg-white'>
      <Navbar />
      <div className="container">
<div className="row">
    <div
        className="col-sm-5 d-flex align-items-center"
        style={{ minHeight: "100vh"}}
      >
        <form className="p-4 mx-5 p-5 shadow-lg rounded bg-light" style={{ width: "350px" }}>
          <h4 className="text-center mb-4">Upload File</h4>
          <input type="file" className="form-control mb-3" />
          <input type="submit" className="btn btn-secondary w-100" value="Ingest Data" />
        </form>
      </div>
      <div className="col-sm-7 mt-5 pt-5">
        <h1>Output</h1>
        {output}
      </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default Output1
