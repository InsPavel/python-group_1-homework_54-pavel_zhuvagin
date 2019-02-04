import React from 'react';
import './Task.css';

function Task(props) {
    return <div className="task_style">
        <p>{props.task}</p>
        <button onClick={props.onDelete}></button>
    </div>
}

export default Task;