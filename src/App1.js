import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import './App.css'

function App1() {
  const[listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }

  const deleteListItem =(key)=>{
    let newListTodo =[...listTodo];//copy the listtodo to new array
    newListTodo.splice(key,1) //since we have to delete 1 item
    setListTodo([...newListTodo])           //update the new list
  }
  return (
    <div className='main-container'>
        <div className='center-contaier'>
        <TodoInput addList={addList}/>
        <h1 className='app-heading'>TODO</h1>
        <hr/>
        {listTodo.map(
          (listItem,i)=>{
            return(
              <TodoList key={i} item={listItem} deleteitem={deleteListItem} index={i}/>
            )
          }
        )}
    
        </div>
      
    </div>
  )
}

export default App1
