import React from 'react'

export default function AddToList(props) {
  return (
    <form className='container' onSubmit={
      (e) => {
        e.preventDefault();
        props.addFunc();
      }
    }>
      <div style={{margin : "10px auto" ,padding: "10px" , border :"3px solid green" ,width: "20%"}}>
      <h3>Title</h3>
      <input className='w-100' value={props.title} id="title" type="text" onChange={(e) => { props.setTitle(e.target.value) }}></input>
      <h3>Description</h3>
      <textarea className='w-100' value={props.description} id="description" type="text" onChange={(e) => { props.setDescription(e.target.value) }}></textarea>
      <br />
      <button className='btn btn-sm btn-success' type='submit'>Add</button>
      </div>
    </form>
  )
}
