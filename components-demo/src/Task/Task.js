import React from 'react';
import './Task.css';

function Task(props) {
    return <div className="task_style">
        <p>{props.task}</p>
    </div>
}

export default Task;