import React from 'react'
import './TodoItem.css'

const TodoItem = ({ listItem, deleteItem, editItem }) => {
    return (
        <div>
            <div className="task">
                <p className='taskName'>{listItem.taskText}</p>
                <div className="btns">
                    <button className="editTask" onClick={() => { editItem(listItem.id) }}>Edit</button>
                    <button className="deleteTask" onClick={() => { deleteItem(listItem.id) }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
