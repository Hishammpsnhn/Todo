import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './Context/TodoContext'
import './Todo.css'
import User from './User'

function Todo() {
    //const [value,setValue] = useState(0)   
    const { detail } = useGlobalContext()
    const [value, SetValue] = useState(0)
    console.log(value)

    return (
        <div className='parent'>
            <div className='todo-container'>
               <table className='table'>
                <tbody>
                    <tr>
                        <th>ToDo Id</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                    {
                        detail.map((data, index, btnindex) => {
                            const { userId, id, title, completed } = data
                            return (
                                <tr key={index}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>{completed ? "Incompleted" : "Completed"}</td>
                                    <td>
                                        <button
                                            key={index}
                                            className={`${index + 1 === value && 'active-btn'}`}
                                            onClick={() => SetValue(index + 1)}  >View User</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
            <div>
                <User value={value} SetValue={SetValue} />
                {
                    value >= 1 &&
                   <button onClick={() => SetValue(0)} >clear</button>
                }
            </div>
        </div>
    )
}

export default Todo