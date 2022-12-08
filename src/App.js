import React, {Component} from 'react'
import TaskList from './components/tasklist'
import NewTask from './components/newtask'

class App extends Component{
    
    state = {
        newTask: '',
        todos: [
            {text: 'Learn Reactjs'},
            {text: 'Learn Typescript'},
            {text: 'Learn Nodejs'},
            {text: 'Learn Angular'}
        ]
    }
    
    completeTask = (index) => {
        const todos = [...this.state.todos]
        todos.splice(index, 1)
        this.setState({
            todos
        })
    }

    updateTask = (e) => {
        this.setState({
            newTask: e.target.value
        })
    }

    addTask = () => {
        const todos = [... this.state.todos]
        todos.push({
            text: this.state.newTask
        })
        this.setState({
            todos,
            newTask: ''
        })
    } 

    render(){
        return(
            <div>
                <h2> Simple TODO list!</h2>
                <ul>
                {this.state.todos.map((todo, index) => 
                <TaskList key={index} todo={todo} completeTask={() => this.completeTask(index)}/>)} 
                <NewTask value={this.state.newTask} onChange={this.updateTask} clickFun={this.addTask}/>
                </ul>
            </div>
        )
    }
}

export default App