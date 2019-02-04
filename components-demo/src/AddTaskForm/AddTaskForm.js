import React from 'react';
import './AddTaskForm.css';


function AddTaskForm (props) {
    return (
        <div className="addtask_style">
            <form>
                <input type="text" name="task" value={props.task.task} onChange={props.onChangeInput}/>
                    <button disabled={props.isAddButtonDisabled} type="submit" onClick={props.onAddTask}>Добавить</button>
            </form>
        </div>
    )
}

export default AddTaskForm;