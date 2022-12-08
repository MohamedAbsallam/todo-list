import React from 'react'

function NewTask(props){
    return(
        <div>
            <input type='text' value={props.value} onChange={props.onChange}/>
            {props.value !== ''? 
            <button className='submit-btn' onClick={props.clickFun}> NEW Task</button>
            : ''}
        </div>
    )
}

export default NewTask