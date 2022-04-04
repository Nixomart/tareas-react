import React, { useState } from "react";
import Form from "./form";
import '../styles/taskList.css'
import Task from "./task";

export default function TaskList() {

    const [listTask, setListTask] = useState([])
    const addTask = (task) => {

        //hasta ahora se agrego y se muestra en consola como json
        console.log("tarea agregada")
        console.log(task)
    }
    return (
        <>
            <Form onSubmit={addTask} />
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