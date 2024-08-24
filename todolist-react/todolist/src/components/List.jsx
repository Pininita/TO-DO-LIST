import React, { useState } from 'react'
import { NoteComponent } from './NoteComponent'

export const List = () => {

    const [note, setNote] = useState('')
    const [task, setTask] = useState([])

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


    return (
        <div>
            <section className='info-list'>
                <input
                    type="text"
                    placeholder='Type note'
                    value={note}
                    onChange={handleInput}
                />
                <button
                    type='button'
                    onClick={handleAddButton}
                >
                    +
                </button>
            </section>
            <div>
                <div>
                    <h3>PENDING LIST</h3>
                    <section className='pending-list'>
                        {
                            task.map((taskItem, index) => (
                                <div key={index} >
                                    <NoteComponent
                                        note={taskItem.note}
                                    />
                                    <button
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
                    <section className='completed-list'>

                    </section>
                </div>


            </div>
        </div>
    )
}
