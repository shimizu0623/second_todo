import React from 'react'

export const InputTodos = (props) => {
    const {onClick, onChange} = props;
    return(
        <>
           <div className="inputTitle">
           <h1>TO DO LIST</h1>
           </div>
            
           <div className="inputTodo">
            <button onClick={onClick}>New Todo</button>
            <select name="todoStatusSelect" id="todoStatusSelect" onChange={onChange}>
               <option value="All">All</option>
               <option value="Todo">Todo</option>
               <option value="Done">Done</option>
            </select>
           </div>
        </>
    );
}