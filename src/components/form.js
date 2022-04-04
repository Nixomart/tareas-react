import React, { useState } from "react";
import '../styles/form.css'
import { v4 as uuidv4 } from 'uuid'

export default function Form(props) {

    const [window, setWindow] = useState('');

    const manipuleChange = e => {
        //para extraer el valor del campo de texto
        setWindow(e.target.value)
        // esta linea sirve para ver lo q escribe console.log(e.target.value)
    }

    const manipuleSed = (e) => {
        //para que no se vuelva a cargar la pagina 
        e.preventDefault();
        console.log('enviando form')
        const newTask = {
            id: uuidv4(),
            text: window,
            finished: false
        }
        props.onSubmit(newTask);
        // para ver en console.log(newTask);
    }

    return (
        <form
            onSubmit={manipuleSed}
            className='task-form'>
            <input
                onChange={manipuleChange}
                className='task-input' type='text' placeholder='Escribe una tarea' name='text' />
            <button className='task-button'>Agregar tarea</button>
        </form>
    );

}