import React from 'react'
import Todo from './Todo'
import style from './TodoList.css'

const ToDoList = (props) =>  {
    console.log(props)
    const elements = props.data.map(element => <Todo key={element.id} element={element} removeTodo={props.remove}/>)
    return (
        <ul className={style.TodoList}>
            {elements}
        </ul>
    )
}

export default ToDoList;