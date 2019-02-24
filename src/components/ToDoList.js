import React, {Component} from 'react'
import Todo from './Todo'

const ToDoList = (props) =>  {
    console.log(props)
    const elements = props.data.map(element => <Todo key={element.id} element={element} removeTodo={props.remove}/>)
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default ToDoList;