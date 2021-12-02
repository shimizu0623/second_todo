import React from 'react';

export const TodoLists = (props) => {
    const {todo, onClickDelete, onClickDetail, onChange, filter} = props;
    return(
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
                {todo.filter(filter).map((todo, index) => {
                    return (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.date}</td>
                            <td>
                                <select value={todo.status} name="todoStatus" id="todoStatus" onChange={function(event) { onChange(event, todo) }}>
                                    <option value="Todo">Todo</option>
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
    )
}