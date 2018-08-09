import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="container mt-4">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
        >
        <div className="form-group">
            <input ref={node => input = node} className="form-control" placeholder="&#xf067; Add a to-do..."/>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
