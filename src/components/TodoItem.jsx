import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = props => {
  const {
    todoId,
    text,
    isFinished,
    handleItemClick,
    handleDeleteButtonClick
  } = props

  return (
    <div
      className={`todo-item ${isFinished && 'finished'}`}
      onClick={() => handleItemClick(todoId, !isFinished)}
    >
      {text}
      <div
        className="delete-button"
        onClick={() => handleDeleteButtonClick(todoId)}
      >
        X
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  todoId: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
  handleItemClick: PropTypes.func.isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired
}

export default TodoItem
