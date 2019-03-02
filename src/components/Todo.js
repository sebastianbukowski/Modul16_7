import React from 'react';
import style from './Todo.css';

const Todo = (props) => {
	console.log('todo props',props)
	return (
		<li className={style.Todo}>
			<a href={'#'}>
				<p>{props.element.text}</p>
				<button onClick={() => props.removeTodo(props.element.id)}>x</button>
			</a>
		</li>
	);
}

export default Todo; 