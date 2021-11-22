import React, {useState} from 'react';
import './Style.css'
import './img/picture.jpeg';





const App =()=>{
    const [inputText, setInputText] = useState()
    const [inputTextarea, setInputTextarea] = useState()
    const [todoList, setTodoList] = useState([{id:1,name:'aaaa'}]);
    const [completedList, setCompletedList] = useState([{name:'pppp'},{name:'ssss'}]);
    const [detail, setDetail] = useState();

    const onChangeInputText = (event) => setInputText(event.target.value)

    const onChangeInputTextarea = (event) => setInputTextarea(event.target.value)
    
    const onClickCreate = () => {
        if(inputText === '') return;
        const newTodos = [...todoList, inputText];
        const countUpId = () => {
            setTodoList(todoList.id + 1)
        }

        setTodoList(newTodos);
        setInputText('');
        countUpId(todoList)
    };

    const onClickEdit = () => {
        // const textEdit = [...todoList]
        // textEdit.splice(index, 1)

        // const inputText = [todoList[index]]
        // setTodoList(textEdit)
        // setInputText(inputText)
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

    const onClickNewTodo = (todo) => {
        setInputText(todo)
    }

    const onClickDetail = (todo) => {
        setDetail(todo)
    }
    
    const onClickClose = () => {
        setDetail(null)
        setInputText(null)
    }

    return(
        <>
         <div className="inputTitle">
            <h1>TO DO LIST</h1>
         </div>
         
         <div className="inputTodo">
             <button onClick={onClickNewTodo}>New Todo</button>
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
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td></td>
                                <td><button>In progress/Pending</button></td>
                                <td>
                                    <label><input type="checkbox" onClick={() => onClickCheck(index)}></input>{todo.name}</label>
                                </td>
                                <td>
                                    <button onClick={() => onClickDelete(index)}>delete</button>
                                    <button onClick={() => onClickDetail(todo)} id="detailBtn">Check the details</button>
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
                    <div key={todo.id} className="completedLists">
                        <p>{todo.name}</p>
                        <button onClick={() => onClickBack(index)}>put back</button>
                    </div>
                )
            })}
         </div>

        {
            inputText &&
            (
            <>
            <div id="appearDetail"></div>  {/* グレーの背景 */}
            <div id="create">
                <h2 className="createTitle">New Task</h2>
                <div className="modalCreate">
                    <div>
                        <label for="date">Limit Date</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label for="todo">Todo</label>
                        <input type="text" onChange={onChangeInputText} placeholder="todoを入力" />
                    </div>
                    <div>
                        <label for="memo">Memo</label>
                        <textarea id="textbox" onChange={onChangeInputTextarea} placeholder="Write down the memo" />
                        {/* maxlength='80' */}
                    </div>
                </div>
                <div className="createBtn">
                <button onClick={onClickCreate}>CREATE</button>
                <button onClick={onClickClose} id="closeBtn">CLOSE</button>
                </div>
            </div>
            </>
            )
        }



        {
            detail && 
            (
            <>
            <div id="appearDetail"></div>  {/* グレーの背景 */}
                <div id="detail">
                    <h2 className="detailTitle">DETAIL</h2>
                    <div className="modalDetailTable">
                        <table>
                            <tbody>
                                    <tr>
                                       <td>ID</td>
                                       <td>{detail.id}</td>
                                    </tr>
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
                                       <td>{detail.name}</td>
                                    </tr>
                                    <tr>
                                       <td>MEMO</td>
                                       <td></td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="detailBtn">
                    <button onClick={onClickEdit}>EDIT</button>
                    <button onClick={onClickClose} id="closeBtn">CLOSE</button>
                    </div>
                </div>
            </>
            )
        }       


         
        </>
    );
};

export default App;