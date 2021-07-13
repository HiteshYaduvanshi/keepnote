import React, { useState } from 'react';
import Header from './Header';
import Inputnote from './Inputnote';
import Note from './Note';



const App =()=> {
  const [newdata,setnewdata]= useState([])
  const adddata =(data)=>{
    setnewdata((olddata)=>{
      return [...olddata,data];
    })
  }
  const onDelete =(id)=>{
    setnewdata((predata)=>{
    return  predata.filter((currdata,indx)=>{
        return indx !==id}
    )})
  }
 
  return (
    <>
    <Header />
    <Inputnote passdata={adddata}
    />
    {newdata.map((val,index)=>{
      return <Note 
        key={index}
        id={index}
        tittle={val.tittle}
        content={val.content}
        delete={onDelete}
      />
    })}
    </>
)
  }
export default App;