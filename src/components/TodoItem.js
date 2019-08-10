import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getClassName(isCompleted) {
    if (isCompleted)
      return "complete"

    return "incomplete"
  }

  render() {
    const { id, title, completed: isCompleted } = this.props.data;
    const { onMarkComplete, onDeleteBtn } = this.props;

    return (
      <React.Fragment>
        <li className={`todo ${this.getClassName(isCompleted)}`}>
          {isCompleted ? <input type="checkbox" onChange={() => onMarkComplete(this.props.data)} checked="true" /> :
            <input type="checkbox" onChange={() => onMarkComplete(this.props.data)} />}
          <span className="todo-title">{title}</span>
          <button className="btn delete-btn" onClick={() => onDeleteBtn(id)}></button>
        </li>
      </React.Fragment>
    )
  }
}

TodoItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default TodoItem;
