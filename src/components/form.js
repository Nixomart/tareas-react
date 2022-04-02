import React from "react";
import '../styles/form.css'

export default function Form(props) {
    return (
        <form className='task-form'>
            <input className='task-input' type='text' placeholder='Escribe una tarea' name='text' />
            <button className='task-button'>Agregar tarea</button>
        </form>
    );

}