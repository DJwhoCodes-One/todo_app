import { useState } from 'react'
import './Todo.css'
import { useRef } from 'react';
import TodoItem from '../todoItem/TodoItem.jsx';


function Todo() {

    const [todoList, setTodoList] = useState([]);
    const [editFlag, setEditFlag] = useState(0);
    const [editId, setEditID] = useState(null);

    const inputRef = useRef();

    const handleAddTask = () => {
        const taskItem = {
            taskText: inputRef.current.value,
            id: Date.now()
        }
        setTodoList((prev) => ([...prev, taskItem]));
        inputRef.current.value = '';
    }

    const deleteItem = (id) => {
        setTodoList(todoList.filter((item) => (item.id !== id)));
    }

    const editItem = (id) => {
        setEditFlag(1);
        const item = todoList.find((item) => {
            return item.id === id;
        })
        inputRef.current.value = item.taskText;
        setEditID(id);

        console.log(item);
    }

    const handleEditTask = () => {
        const taskToEdit = todoList.find((item) => {
            return item.id == editId;
        })
        taskToEdit.taskText = inputRef.current.value;
        inputRef.current.value = '';
        setEditFlag(0);
    }
    return (
        <>
            <div className="container">

                <h2 className='appHeading'>To-Do App</h2>
                <hr />

                <div className="input">
                    <input type="text" placeholder="Enter your task here..." className='inputBox' ref={inputRef} />
                    {
                        (editFlag == 0) ?
                            <button className='addTask' onClick={() => { handleAddTask() }}>Add +</button>
                            :
                            <button className='edited' onClick={() => { handleEditTask() }}>Save + </button>
                    }
                </div>

                <div className="tasks">
                    {
                        todoList.map((listItem, index) => (
                            <TodoItem key={index} listItem={listItem} deleteItem={deleteItem} editItem={editItem} />
                        ))
                    }
                </div>
            </div >
        </>
    )
}

export default Todo
