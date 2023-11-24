import React from 'react'
import './Todo.css'

const Todo = () => {
  return (
    <div className='container'>
    <div className='outer'>
  
      <div className='taskBox'>
        <h3 className='content'>
          <label htmlFor="">Enter name</label>
          <input type="text" />
        </h3>
      </div>
    </div>
    <div className='outerProg'>
  
      <div className='taskBoxProg'>
        <h3 className='contentProg'>
          <label htmlFor="">Enter name</label>
          <input type="text" />
        </h3>
      </div>
    </div>
    <div className='outerComp'>
  
      <div className='taskBoxComp'>
        <h3 className='contentComp'>
          <label htmlFor="">Enter name</label>
          <input type="text" />
        </h3>
      </div>
    </div>
    
    
    </div>
  )
}

export default Todo