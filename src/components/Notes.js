import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './Noteitem'


const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, setNotes } = context
    return (
        <div>
            <h3 className='my-2'>Your notes</h3>
            <div className="row">
                {notes.map((note) => {
                    return <NoteItem note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes