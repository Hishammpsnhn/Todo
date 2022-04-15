import React, { useState, useEffect } from 'react'
import './User.css'
import { useGlobalContext } from './Context/TodoContext'

function User({value,setValue}) {
    const { detail } = useGlobalContext()





    return (
        <div className='user-parent'>
            <h5>User Detail</h5>
            <div className='user-child'>
                {
                  detail.map((item,index) => {
                        const { userId, id, title, completed } = item
                        if(index+1 === value){

                            return (
                                <div key={index} className='users'>
                                    <p> {`ToDo ID  \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0  ${id}`} </p>
                                    <p> {`ToDo Title \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0${title}`} </p>
                                    <p>{`User ID \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 ${userId}`}</p>
                                    <p>Name  </p>
                                    <p>Email </p>
                                </div>
                            )
                        }
                    })
                }

            </div >
        </div >
    )
}

export default User