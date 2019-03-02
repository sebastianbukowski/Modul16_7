import React from 'react';
import uuid from 'uuid';
import ToDoList from '../components/ToDoList'
import ToDoForm from '../components/ToDoForm'
import Title from '../components/Title'
import { hot } from 'react-hot-loader';
import style from './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    text: "Lorem" ,
                    id: uuid(),
                },
                {   
                    text: "Ipsum",
                    id: uuid(),
                },
                {
                    text: "dolor",
                    id: uuid(),
                },
            ],
            title: "Połączenie Webpacka z Reactem, wstęp do aplikacji Todo."
        };
    }
    addTodo = (val) => {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
        
    }
    removeTodo = (id) => {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render =() => {
        return (
            <div className={style.TodoApp}>
                <Title title={this.state.title} number={this.state.data.length} />
                <ToDoForm add={this.addTodo}/>
                <ToDoList data={this.state.data} remove={this.removeTodo}/>
            </div>
        );
    }
}

export default hot(module)(App);
