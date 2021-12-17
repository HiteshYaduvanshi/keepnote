import React from 'react';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

const Note=(props)=>{
    const deletenote =()=>{
       props.delete(props.id) 
    }
    return <>
    <div className="note">
        <h1>{props.tittle}</h1>
        <p>{props.content}</p>
        <button onClick={deletenote} className="delbtn">
        <DeleteOutlineRoundedIcon className="btn"/>
        </button>
    </div>
    </>
}
export default Note;
