import React, { useState } from 'react'
import { NoteComponent } from './NoteComponent'

export const List = () => {

    const [note, setNote] = useState('')
    const [task, setTask] = useState([])
    const [completedTask, setCompletedTask] = useState([])

    const handleInput = (event) => {
        setNote(event.target.value)
    }

    const handleAddButton = () => {
        if (note.trim() !== '') {
            setTask([...task, { note }])
            setNote('')
        }
    }

    const handleRemoveButton = (index) => {
        setTask(task.filter((_, i) => i !== index));
    }

    const handleRemoveCompletedList = (index) => {
        setCompletedTask(completedTask.filter((_, i) => i !== index));
    }

    const handleCheck = (taskIndex, taskItem) => {
        const newTaskValue = task.filter((_, index) => index !== taskIndex)
        const completedItem = { ...taskItem, checked: true }

        setTask(newTaskValue)
        setCompletedTask([...completedTask, completedItem])
    }

    const handleCheckToPendingList = (taskIndex, taskItem) => {
        const newCompleteTaskValue = completedTask.filter((_, index) => index !== taskIndex)
        const completedItem = { ...taskItem, checked: false }

        setTask([...task, completedItem])
        setCompletedTask(newCompleteTaskValue)
    }


    return (
        <div className='flex flex-col justify-between gap-10'>
            <section className='info-list flex justify-center gap-10'>
                <input
                    className='input-task'
                    type="text"
                    placeholder='Type note'
                    value={note}
                    onChange={handleInput}
                />
                <button
                    className='add-button'
                    type='button'
                    title='Add Task'
                    onClick={handleAddButton}
                >
                    +
                </button>
            </section>
            <div className='flex justify-between gap-10'>
                <div>
                    <h3>PENDING LIST</h3>
                    <section className='pending-list p-5'>
                        {
                            task.map((taskItem, index) => (
                                <div className='flex gap-5' key={index} >
                                    <NoteComponent
                                        task={taskItem}
                                        check={() => handleCheck(index, taskItem)}
                                    />
                                    <button
                                    className='delete-button'
                                    title='Delete Task'
                                        type='button'
                                        onClick={() => handleRemoveButton(index)}
                                    >
                                        X
                                    </button>
                                </div>
                            ))
                        }
                    </section>
                </div>
                <div>
                    <h3>COMPLETED LIST</h3>
                    <section className='completed-list p-5'>
                        {
                            completedTask.map((taskItem, index) => (
                                <div className='flex gap-5' key={index}>
                                    <NoteComponent
                                        task={taskItem}
                                        check={() => handleCheckToPendingList(index, taskItem)}

                                    />
                                    <button
                                    className='delete-button'
                                    title='Delete Task'
                                        type='button'
                                        onClick={() => handleRemoveCompletedList(index)}
                                    >
                                        X
                                    </button>
                                </div>
                            ))
                        }
                    </section>
                </div>


            </div>
        </div>
    )
}
