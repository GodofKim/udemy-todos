import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const mapTodos = (todos, handleItemClick, handleDeleteButtonClick) => {
  return todos.map(todo => {
    return (
      <TodoItem
        key={todo.id}
        todoId={todo.id}
        text={todo.text}
        isFinished={todo.isFinished}
        handleItemClick={handleItemClick}
        handleDeleteButtonClick={handleDeleteButtonClick}
      />
    )
  })
}

const TodoList = props => {
  return (
    <div className="todo-list">
      {mapTodos(
        props.todos,
        props.handleItemClick,
        props.handleDeleteButtonClick
      )}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleItemClick: PropTypes.func.isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired
}

export default TodoList
