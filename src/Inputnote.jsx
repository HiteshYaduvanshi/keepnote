import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Inputnote =(props)=>{
    const [expand,setexpand]= useState(false);
    const [data,setdata] = useState(
        {tittle:"",
    content:""}
    )
    const inputEvent =(event)=>{
        // const {value,name}= event.target
        const {name,value} = event.target
        setdata((olddata)=>{
            return {...olddata, [name]:value}
        })
    }
    const addevent =()=>{
        props.passdata(data);
        setdata({tittle:"",
        content:""})
    }
    const expandit =()=>{
        setexpand(true)
    }
  
    return <>
    <div className="input">
        <form>
       { expand ?
        <input  placeholder='Title'
            value={data.tittle}
            onChange={inputEvent}
            name='tittle'
        /> : null}
        <textarea placeholder='Write a note...'
            value={data.content}
            onChange={inputEvent}
            name='content'
            onClick={expandit}
            onDoubleClick={shrinkit}
        />
        {expand ?
        <Button variant="contained" className='btn' onClick={addevent} ><AddIcon className='plussign'/></Button>: null}
        </form>
    </div>
    </>
}
export default Inputnote