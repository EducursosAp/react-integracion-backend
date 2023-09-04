import { useState } from "react"
import { Task } from "./Task"

//Hooks establecer states o utilidades
//tasks = []


export function Todo(){

    const tasks = [
        {
            title: 'Lavar Ropa',
            description: 'Lavar antes de que llueva',
            imgUrl: 'https://images.unsplash.com/photo-1578852612716-854e527abf2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
        },
        {
            title: 'Escribir Novela',
            description: 'Antes de medianoche',
            imgUrl: 'https://images.unsplash.com/photo-1581007871115-f14bc016e0a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
        },
        {
            title: 'Escribir Libro',
            description: 'Antes de medianoche',
            imgUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80'
        }
    ]

    const [tasksState, setTasksState] = useState(tasks)

    const [titleState, setTitleState] = useState('')
    const [descriptionState, setDescriptionState] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        
        
        const tasksStateClone = [...tasksState]
        tasksStateClone.push({
            title: titleState,
            description: descriptionState,
            imgUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80'
        })

        setTasksState(tasksStateClone)

    }

    return (
        <>
           <form onSubmit={handleSubmit}>
            <label htmlFor="title">Ingresa Titulo</label>
            <input onChange={(e)=>setTitleState(e.target.value)} name="title"></input>
            <br></br>
            <label htmlFor="description">Ingresa Descripcion</label>
            <input onChange={(e)=>setDescriptionState(e.target.value)} name="description"></input>

            <button type="submit">Agregar Tarea</button>
           </form>
            
            <div className="task-list">
                {tasksState.map((task, index) => {
                    return <Task key={index} task={task}></Task>
                })}
            </div>
        </>
    )
}