import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

import InputBox from './components/InputBox'
import TodoList from './components/TodoList'

const SERVER_URI = 'http://localhost:4000'

class App extends Component {
  state = {
    inputValue: '',
    todos: []
  }

  addTodo = () => {
    return axios.post(`${SERVER_URI}/todos`, {
      text: this.state.inputValue,
      isFinished: false,
      createdAt: Date.now()
    })
  }

  getTodos = () => {
    return axios.get(`${SERVER_URI}/todos`).then(response => {
      this.setState({ todos: response.data })
    })
  }

  updateTodo = (todoId, isFinished) => {
    return axios.patch(`${SERVER_URI}/todos/${todoId}`, {
      isFinished
    })
  }

  deleteTodo = todoId => {
    return axios.delete(`${SERVER_URI}/todos/${todoId}`)
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  handleButtonClick = () => {
    this.addTodo()
      .then(this.getTodos)
      .then(() => this.setState({ inputValue: '' }))
      .catch(e => {
        console.log('[App.js] there is an error!', e)
      })
  }

  handleItemClick = (todoId, isFinished) => {
    this.updateTodo(todoId, isFinished)
      .then(this.getTodos)
      .catch(e => {
        console.log('[App.js] there is an error!', e)
      })
  }

  handleDeleteButtonClick = todoId => {
    this.deleteTodo(todoId)
      .then(this.getTodos)
      .catch(e => {
        console.log('[App.js] there is an error!', e)
      })
  }

  componentDidMount() {
    this.getTodos()
  }

  render() {
    return (
      <div className="root">
        <div className="container">
          <h1 className="title">My Todo</h1>
          <h2 className="subtitle">Made by GodofKim</h2>
          <InputBox
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleButtonClick={this.handleButtonClick}
          />
          <TodoList
            todos={this.state.todos}
            handleItemClick={this.handleItemClick}
            handleDeleteButtonClick={this.handleDeleteButtonClick}
          />
        </div>
      </div>
    )
  }
}

export default App
