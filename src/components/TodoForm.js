import React, { Component } from 'react'

export default class TodoForm extends Component {

  state = {
    title: "",
    content: ""
  }
  s
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render() {
    return (
      <form className="todo-form">
        <h2>New Todo Form</h2>
        <lable>Title</lable>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label>Content</label>
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <input type="submit" value="Create TO-DO" />
      </form>
    )
  }
}
