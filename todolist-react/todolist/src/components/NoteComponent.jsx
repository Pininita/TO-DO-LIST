import React from 'react'

export const NoteComponent = (props) => {
  return (
    <div>
        <p>{props.note}</p>
        <input type="checkbox"/>
    </div>
  )
}
