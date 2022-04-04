import React, { useState } from "react";
import Form from "./form";
import '../styles/taskList.css'
import Task from "./task";

export default function TaskList() {

    const [listTask, setListTask] = useState([])
    const addTask = (task) => {
        if (task.text.trim()) {
            //trim nos permite quitar los espacios en blancos de una cadena 
            //del principio y del final
            task.text = task.text.trim();
            //usamos spread para que se muestre la tarea guardada al principio
            //y la listTask se convierten en arreglos indivuales en obj independintes
            const tasksUpdates = [task, ...listTask];
            //actualizamos el estado de las tareas con la constante de arreglo creada
            setListTask(tasksUpdates);

        }
        //hasta ahora se agrego y se muestra en consola como json
        console.log("tarea agregada")
        console.log(task)
    };

    const deleteTask = (id) => {
        const tasksUpdates = listTask.filter(task => task.id !== id);
        setListTask(tasksUpdates)
    };

    const completeTask = (id) => {
        const tasksUpdates = listTask.map(task => {
            if (task.id === id) {
                task.finished = !task.finished;
            }
            return task;
        });
        setListTask(tasksUpdates);
    };

    return (
        <>
            <Form onSubmit={addTask} />
            <div className='task-list-container'>
                {
                    listTask.map((task) =>
                        <Task
                            //key es un props de cada component de react
                            //id es un props que creamos con desectructuracion
                            //y es el que se va a usar
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            finished={task.finished}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                        />

                    )
                }
            </div>
        </>
    );
}