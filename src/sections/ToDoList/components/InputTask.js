import './style.css'

function InputTask(props){
    return(
        <>
            <input class="task_input" value={props.newTask} onChange={props.handleChange} placeholder="Ingresa una nueva tarea"/><button onClick={props.handleClick} class="task_button">Add</button>
        </> 
    )
}

export default InputTask