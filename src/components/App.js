import React, { Component } from 'react';
import './../assets/css/index.css';
import './../assets/css/App.css';
import Header from './Header';
import AddTodo from './AddTodo';
import Todos from './Todos';
import TodoStatus from './TodoStatus';
import Axios from 'axios';

export class App extends Component {
  /**
   * APP STATE (WITHOUT USING JSON PLACEHOLDER)
   
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Watch Alita The Battle Angels',
        completed: false
      },
      {
        id: 3,
        title: 'Download Aladin Movie from YTS',
        completed: false
      }
    ]
  }
  */

  state = {
    todos: []
  };

  markComplete(todo) {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo };
    todos[index].completed = (!todos[index].completed);

    this.setState({ todos });

  }


  /**
   * ADD ITEM (WITHOUT USING JSON PLACEHOLDER)
   * @param {string} title

  addItem(title) {
    const lastItem = [...this.state.todos].length;
    const lastID = [...this.state.todos][lastItem - 1].id;

    const newTodo = {
      id: lastID + 1,
      title,
      completed: false
    };
    const todos = [...this.state.todos, newTodo];

    if (title.trim() !== '')
      this.setState({ todos })
  }
 */

  /**
   * ADD ITEM (USING JSON PLACEHOLDER)
   * @param {string} title 
   */
  addItem(title) {
    const lastItem = [...this.state.todos].length;
    const lastID = [...this.state.todos][lastItem - 1].id;

    const newTodo = {
      id: lastID + 1,
      title,
      completed: false
    };
    if (title.trim() !== '')
      Axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
        .then(res => this.setState({ todos: [...this.state.todos, newTodo] }))
  }

  /**
   * DELETE ITEM (WITHOUT USING JSON PLACEHOLDER)
   * @param {Number} id 
  deleteItem(id) {
    const todos = [...this.state.todos].filter(todo => todo.id !== id);
    this.setState({ todos })
  }
  */

  deleteItem(id) {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos].filter(todo => todo.id !== id) }));
  }

  calculateStatus() {
    const completed = this.state.todos.filter(todo => todo.completed).length;
    const incomplete = this.state.todos.length - completed;

    return { completed, incomplete };
  }

  render() {
    return (
      <div className="container" >
        <Header />
        <AddTodo addTodo={this.addItem.bind(this)} />
        <TodoStatus todoStatus={this.calculateStatus()} />
        <Todos data={this.state} onMarkComplete={this.markComplete.bind(this)} onDeleteBtn={this.deleteItem.bind(this)} />
      </div>
    );
  }
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }
}

export default App;
