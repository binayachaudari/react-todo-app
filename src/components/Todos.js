import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todos extends Component {
  render() {
    const { onMarkComplete, onDeleteBtn } = this.props;

    return (
      <div className="todo-list">
        <ul>
          {this.props.data.todos.map(todo =>
            <TodoItem key={todo.id} data={todo} onMarkComplete={onMarkComplete} onDeleteBtn={onDeleteBtn} />)}
        </ul>
      </div>
    )
  }
}
