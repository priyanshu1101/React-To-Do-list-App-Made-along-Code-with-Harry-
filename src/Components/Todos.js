import React from 'react'
import TodoItem from "./TodoItem"
import './list.css'

export const Todos = (props) => {
    return (
        <div className='listBody'>
            <h1>To Do List</h1>
            <div className='list'>
            {
                (props.list.length!==0)?
                props.list.map((item) => { return <TodoItem listItem={item} key={item.Sno} Delete={props.Delete} Update={props.Update}></TodoItem> }):
                <p>List is empty</p>
            }
            </div>
        </div>
    )
}

