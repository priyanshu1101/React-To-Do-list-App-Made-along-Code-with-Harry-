import React from 'react'
import { Link } from 'react-router-dom'

export default function Todo({ listItem ,Delete, Update}) {
  return (
    <div className="card" style={{width: "100%",height: "150px",margin: "20px auto",textAlign:"left"}}>
      <div className="card-body">
        <h5 className="card-title">{listItem.title}</h5>
        <p className="card-text">{listItem.description}</p>
        <Link to="#" className="btn btn-sm btn-danger mt-3 mx-2 " onClick={()=>{Delete(listItem)}}>Delete</Link>
        <Link to="#" className="btn btn-sm btn-warning mt-3 mx-2 " onClick={()=>{Update(listItem)}}>Update</Link>
      </div>
    </div>
  )
}
