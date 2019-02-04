import React from 'react';
import './Task.css';

function Task(props) {
    return <div className="task_style">
        <p>{props.task}</p>
        <button onClick={props.onDelete}/>
        <p>Выполнено:</p>
        <input type="checkbox" onChange={props.onChange} checked={props.status === true}/>
    </div>
}

export default Task;