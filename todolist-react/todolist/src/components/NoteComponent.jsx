import React from 'react'

export const NoteComponent = (props) => {

  return (
    <div className='flex gap-5 '>
      <p className='task-text'>{props.task.note}</p>
      <input
        type="checkbox"
        checked={props.task.checked ?? false}
        readOnly
        onClick={props.check}
      />
    </div>
  )
}
