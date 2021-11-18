import React, {useState} from 'react';
import './Style.css'
import './img/picture.jpeg';

// const inputTodo = () => {
    
// }






const App =()=>{
    const [inputText, setInputText] = useState('')
    const [todoList, setTodoList] = useState(['aaaa','bbbb','cccc']);
    const [completedList, setCompletedList] = useState(['pppp','ssss']);

    const onChangeInputText = (event) => setInputText(event.target.value)
    const onClickAdd = () => {
        if(inputText === '') return;
        const newTodos = [...todoList, inputText];
        setTodoList(newTodos);
        setInputText('');
    };

    const onClickEdit = (index) => {
        const textEdit = [...todoList]
        textEdit.splice(index, 1)

        const inputText = [todoList[index]]
        setTodoList(textEdit)
        setInputText(inputText)
    }
    
    const onClickDelete = (index) => {
        const newTodos = [...todoList]
        newTodos.splice(index, 1)               
        setTodoList(newTodos)
    }
    
    const onClickCheck = (index) => {
        const newIncompleteTodos = [...todoList]
        newIncompleteTodos.splice(index, 1)
        
        const newCompleteTodos = [...completedList, todoList[index]]

        setTodoList(newIncompleteTodos)
        setCompletedList(newCompleteTodos)
    }

    const onClickBack = (index) => {
        const newCompleteTodos = [...completedList]
        newCompleteTodos.splice(index, 1)

        const newIncompleteTodos = [...todoList, completedList[index]]

        setCompletedList(newCompleteTodos)
        setTodoList(newIncompleteTodos)

    }

    const onClickDetail = (index) => {
        const appearDetail= document.getElementById('appearDetail')
        const detail= document.getElementById('detail')
        const detailBtn= document.getElementById('detailBtn')

        detailBtn.addEventListener('click', (index)=>{
            appearDetail.classList.remove('hiddenDetail')
            detail.classList.remove('hiddenDetail')
            
        })
        
        console.log(index)
    }
    
    const onClickClose = () => {
        const appearDetail= document.getElementById('appearDetail')
        const detail= document.getElementById('detail')
        const closeBtn= document.getElementById('closeBtn')
    
        closeBtn.addEventListener('click', ()=>{
            appearDetail.classList.add('hiddenDetail')
            detail.classList.add('hiddenDetail')
        })
    }

    return(
        <>
         <div className="inputTitle">
            <h1>TO DO LIST</h1>
         </div>
         
         <div className="inputTodo">
            <input 
                type="text"
                placeholder="New task"
                value={inputText}
                onChange={onChangeInputText}
            />
            <button onClick={onClickAdd}>Add</button>
         </div>

         <div className="todoList">
            <p className="todoListTitle">Work In Progress</p>
            <table className="todoListsTable">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>LIMIT</th>
                    <th>STATUS</th>
                    <th>TODO</th>
                    <th>DETAIL</th>
                </tr>
                </thead>
                <tbody>
                    {todoList.map((todo, index) => {
                        return (
                            <tr key={todo}>
                                <td></td>
                                <td></td>
                                <td><button></button></td>
                                <td>
                                    <label><input type="checkbox" onClick={() => onClickCheck(index)}></input>{todo}</label>
                                </td>
                                <td>
                                    <button onClick={() => onClickEdit(index)}>edit</button>
                                    <button onClick={() => onClickDelete(index)}>delete</button>
                                    <button onClick={() => onClickDetail(index)} id="detailBtn">Check the details</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
         </div>

         <div className="completedList">
            <p className="completedListTitle">Completed Todo</p>
            {completedList.map((todo, index)=> {
                return (
                    <div key={todo} className="completedLists">
                        <p>{todo}</p>
                        <button onClick={() => onClickBack(index)}>put back</button>
                    </div>
                )
            })}
         </div>

        
        <div id="appearDetail" className="hiddenDetail"></div>
            <div id="detail" className="hiddenDetail">
                <h2 className="detailTitle">DETAIL</h2>
                <div className="modalDetailTable">
                    <table>
                        <tbody>
                                <tr>
                                   <td>LIMIT</td>
                                   <td></td>
                                </tr>
                                <tr>
                                   <td>STATUS</td>
                                   <td></td>
                                </tr>
                                <tr>
                                   <td>TODO</td>
                                   <td></td>
                                </tr>
                                <tr>
                                   <td>MEMO</td>
                                   <td></td>
                                </tr>
                        </tbody>
                    </table>
                </div>
                <div className="detailClose">
                <button onClick={onClickClose} id="closeBtn">CLOSE</button>
                </div>
            </div>
        

         
        </>
    );
};

export default App;