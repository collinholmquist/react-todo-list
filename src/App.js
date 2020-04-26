import React from 'react'
import TodoItem from './TodoItem'
import './App.css'
import todosData from './todosData'

class App extends React.Component{

  constructor() {
    super()
    this.state ={
        todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if(todo.id === id) {
            return {
              ...todo, 
              completed: !todo.completed
            }
          }
          return todo
        })

        return {
          todos: updatedTodos
           
        }
      })
  }
  
  render() {
   
    const todoComponents = this.state.todos.map(item => <TodoItem key = {item.id} handleChange ={this.handleChange} item={item} />) 

    return (

      <div>
        <h1>My Todo List</h1>
        <div className = "todo-list">
            {todoComponents} 
        </div>
      </div>
        )
    } 

}
  

export default App;
