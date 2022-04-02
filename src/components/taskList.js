import React, { useState } from "react";
import Form from "./form";
import '../styles/taskList.css'
import Task from "./task";

export default function TaskList() {

    const [listTask, setListTask] = useState([])

    return (
        <>
            <Form />
            <div className='task-list-container'>
                {
                    listTask.map((task) =>
                        <Task
                            text={task.text}
                            finished={task.finished}
                        />

                    )
                }
            </div>
        </>
    );
}