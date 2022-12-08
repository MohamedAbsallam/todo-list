import React from 'react'

function TaskList(props){
    return(
        <div>
            <li key={props.index}>{props.todo.text}
            <button onClick={() => props.completeTask()}>-</button>
            </li>
        </div>
    )
}

export default TaskList