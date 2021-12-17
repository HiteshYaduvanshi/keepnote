import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note=(props)=>{
    const deletenote =()=>{
       props.delete(props.id) 
    }
    return <>
    <div className="note">
        <h1>{props.tittle}</h1>
        <p>{props.content}</p>
        <button onClick={deletenote} className="delbtn">
        <DeleteOutlineIcon className="btn"/>
        </button>
    </div>
    </>
}
export default Note;
