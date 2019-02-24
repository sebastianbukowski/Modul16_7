import React from 'react';

const ToDo = props => {
    console.log('element from todo ',props)
    console.log('props.element.id', props.element.id)
    console.log('props.element.text', props.element.text)
    return (
        <div>
            <li>{props.element.text}</li>
            <button onClick={() => props.removeTodo(props.element.id)}>x</button>
        </div>
       
    )
}

export default ToDo; 