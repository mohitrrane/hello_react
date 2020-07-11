import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos:[
      {
        id: uuid(),
        title:'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title:'Dinner with friends',
        completed: false
      },
      {
        id: uuid(),
        title:'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })  });
  }

  delTodo = (id) => {
    this.setState({ 
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  render(){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos 
            key={this.state.todos.id} 
            todos={this.state.todos} 
            markComplete={this.markComplete}
            delTodo={this.delTodo}/>
        </div>
      </div>
    );
  };
} 

export default App;
