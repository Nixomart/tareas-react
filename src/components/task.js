import React from "react";
import '../styles/task.css'
import { AiFillCloseCircle } from "react-icons/ai";

export default function Task({ id, text, finished, completeTask, deleteTask }) {
    return (
        <div className={finished ? 'task-container finished' : 'task-container'}>
            <div
                onClick={() => completeTask(id)}
                className='task-text'>
                {text}
            </div>
            <div className='task-icon-container'>
                <AiFillCloseCircle className="task-icon" />
            </div>
        </div>
    );
}