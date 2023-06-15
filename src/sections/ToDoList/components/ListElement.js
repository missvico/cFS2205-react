import './style.css'

function ListElement(props){
    return(
        <li key={props.index}>
            <span>{props.task}</span>
            <button class="remove_task" onClick={props.handleRemove} id="task_button">Eliminar</button>
        </li>
    )
}

export default ListElement;