import React, { Component } from 'react'
import ProtoTypes from 'prop-types';

export default class TodoStatus extends Component {
  render() {
    const { completed, incomplete } = this.props.todoStatus;

    return (
      <div className="todo-status">
        {completed !== 0 ? < span className="completed">{completed} task completed!</span> : <span></span>}
        {incomplete !== 0 ? <span className="incomplete">{incomplete} task remaining!</span> : <span></span>}
      </div >
    )
  }
}
TodoStatus.propTypes = {
  todoStatus: ProtoTypes.object.isRequired
}
