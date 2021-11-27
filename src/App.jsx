import React, {useState, useEffect} from 'react';
import './Style.css'
import './img/picture.jpeg';

// localStorage.getItem('inputTodo') ? localStorage.getItem('inputTodo').split() : []

const App =()=>{
    const [inputTodo, setInputTodo] = useState()
    const [todoList, setTodoList] = useState([]);
    // const [completedList, setCompletedList] = useState([{name:'pppp'}]);
    const [detail, setDetail] = useState();
    const [edit, setEdit] = useState();

    const onChangeInputText = (event) => setInputTodo({...inputTodo, name: event.target.value})

    // const onChangeInputTextarea = (event) => setInputTextarea(event.target.value)
    
    const onClickCreate = () => {
        if(!inputTodo.name) {
            return;
        }
                
        const newTodos = [...todoList, inputTodo];
        // const countUpId = () => {
        //     setTodoList(todoList.id + 1)
        // }

        setTodoList(newTodos);
        console.log(newTodos)
        // countUpId(todoList)
        setInputTodo(null)
        
    };

    // const onClickEdit = (index) => {
        // const textEdit = [...todoList]
        // textEdit.splice(index, 1)

        // const inputText = [todoList[index]]
        // setTodoList(textEdit)
        // setInputText(inputText)
    // }
    
    const onClickDelete = (index) => {
        const newTodos = [...todoList]
        newTodos.splice(index, 1)               
        setTodoList(newTodos)
    }
    
    
    const onChangeDate = (event) => setInputTodo({...inputTodo, date:event.target.value})
    
    const onChangeInputTextarea = (event) => setInputTodo({...inputTodo, memo:event.target.value})
    
    const onChangeEdit = (event) => setEdit({...inputTodo, memo:event.target.value})
    
    const onClickNewTodo = () => {
        console.log(todoList)
        // ↓const ids = todoList.map((todo) => { 
            //     return todo.id
            //   })
        const ids = todoList.map(todo => todo.id)
        const id = ids.length === 0 ? 1 : Math.max(...ids) + 1
        setInputTodo({id})
    }
    // {
        //     // ↓一番大きい数字に１足していく処理を考える
        //     // const id = () => setInputTodo({...inputTodo.id})
        //     // const maxNumber = () => Math.max.apply(null,...inputTodo.id)
        //     // const id = maxNumber()
        //     // const maxNumber = () => {Math.max(...inputTodo.id)}
        
        //     // console.log(Math.max(id))
        // setTodoList();
        
        
        //     // setInputTodo(Math.max(...inputTodo.id + 1))
        
        //     const id = () => {
            //         Math.max({...todoList.id}) + 1
            //     }
            // console.log({id})
            // }
            
            const onClickDetail = (todo) => {
                setDetail(todo)
            }

            const onClickEdit = () => {
                setEdit(detail)
                setDetail(null)
            }
            
            
            const onClickClose = () => {
                setDetail(null)
                setInputTodo(null)
            }

            const onClickSave = () => {
                console.log('save')

                // const newTodos = [...todoList, inputTodo];
                // setTodoList(newTodos);
                // setEdit(null)   
            }
            
            const onClickCloseEdit = () => {
                const confirmMessage = '編集は保存されませんがよろしいですか？'
                let result = window.confirm(confirmMessage);
                if(result){
                    setEdit(null)
                    setInputTodo(null)
                }else{
                    return;
                }
            }

            
            return(
                <>
         <div className="inputTitle">
            <h1>TO DO LIST</h1>
         </div>
         
         <div className="inputTodo">
             <button onClick={onClickNewTodo}>New Todo</button>
             <select name="todoStatusSelect" id="todoStatusSelect" onChange="">
                <option value="">-- Select --</option>
                <option value="Todo">Todo</option>
                <option value="In progress">In progress</option>
                <option value="Done">Done</option>
             </select>
         </div>

         <div className="todoList">
            <p className="todoListTitle">Todo</p>
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
                                <td>{todo.date}</td>
                                <td>
                                    <select name="todoStatus" id="todoStatus">
                                        <option value="Todo">Todo</option>
                                        <option value="In progress">In progress</option>
                                        <option value="Done">Done</option>
                                    </select>
                                </td>
                                <td>
                                    <p>{todo.name}</p>
                                </td>
                                <td>
                                    <button onClick={() => onClickDelete(index)}>delete</button>
                                    <button onClick={() => onClickDetail(todo)}>Check the details</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
         </div>


        {
            inputTodo &&
            (
                <>
                <div id="appearDetail"></div>  {/* グレーの背景 */}
                <div id="create">
                    {/* <h2 className="createTitle">New Task</h2> */}
                    <div className="modalCreate">
                        <div>
                            <label for="date">Limit Date</label>
                            <input type="date" value={inputTodo.date} onChange={onChangeDate}/>
                        </div>
                        <div>
                            <label for="todo">Todo</label>
                            <input type="text" value={inputTodo.name} onChange={onChangeInputText} placeholder="todoを入力" />
                        </div>
                        <div>
                            <label for="memo">Memo</label>
                            <textarea
                             id="textbox"
                             value={inputTodo.memo}
                             onChange={onChangeInputTextarea}
                             placeholder="Write down the memo" />
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
                                           <td>{detail.date}</td>
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
                                           <td>{detail.memo}</td>
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


        {
            edit &&
            (
                <>
                <div id="appearDetail"></div>  {/* グレーの背景 */}
                <div id="edit">
                    <div className="modalEdit">
                        <div>
                            <label for="date">Limit Date</label>
                            <input type="date" value={edit.date} onChange={onChangeDate}/>
                        </div>
                        <div>
                            <label for="todo">Todo</label>
                            <input type="text" value={edit.name} onChange={onChangeEdit} placeholder="todoを入力" />
                        </div>
                        <div>
                            <label for="memo">Memo</label>
                            <textarea
                             id="textbox"
                             value={edit.memo}
                             onChange={onChangeInputTextarea}
                             placeholder="Write down the memo" />
                        </div>
                    </div>
                    <div className="saveBtn">
                    <button onClick={onClickSave}>SAVE</button>
                    <button onClick={onClickCloseEdit} id="closeBtn">CLOSE</button>
                    </div>
                </div>
                </>
            )
        }


            {/* const onClickBack = (index) => {
                const newCompleteTodos = [...completedList]
                newCompleteTodos.splice(index, 1)

                const newIncompleteTodos = [...todoList, completedList[index]]

                setCompletedList(newCompleteTodos)
                setTodoList(newIncompleteTodos)

            } */}


            {/* <div className="completedList">
           <p className="completedListTitle">Completed Todo</p>
           {completedList.map((todo, index)=> {
               return (
                   <div key={todo.id} className="completedLists">
                   <p>{todo.name}</p>
                   <button onClick={() => onClickBack(index)}>put back</button>
                   </div>
                   )
                })}
            </div> */}




















         
        </>
    );
};

export default App;