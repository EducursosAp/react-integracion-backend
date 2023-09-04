import './Task.css'

export function Task(props){
    const task = props.task
    
    return (
        <div className="task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <img width={200} src={task.imgUrl}></img>
        </div>
    )
}