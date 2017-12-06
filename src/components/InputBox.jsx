import React from 'react'
import PropTypes from 'prop-types'

const InputBox = props => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="todo-input"
        placeholder="Tell me what to do..."
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <button className="add-button" onClick={props.handleButtonClick}>
        +
      </button>
    </div>
  )
}

InputBox.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired
}

export default InputBox
