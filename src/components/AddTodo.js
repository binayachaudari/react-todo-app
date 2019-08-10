import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    todoTitle: ''
  }

  changeFormValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todoTitle);
    this.setState({ todoTitle: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-todo-form" autoComplete="off" >
        <input type="text" name="todoTitle" placeholder="Add todo..." value={this.state.todoTitle} onChange={this.changeFormValue}></input>
        <button className="add-todo-form-btn">Add</button>
      </form >
    )
  }
}
