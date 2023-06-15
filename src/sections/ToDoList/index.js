
import {useState} from "react"
import InputTask from './components/InputTask'
import ListElement from "./components/ListElement"

function ToDoList(){
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState([])

    const handleChange = (event)=>{
        setNewTask(event.target.value)
    }

    const handleClick = (event)=>{
        setTasks([...tasks, newTask])
        setNewTask("")
    }

    const handleRemove = (event) =>{
        const newArray = tasks.filter((task,index)=>{
            return index != event.target.id
        })
        setTasks(newArray)
    }

    return(
        <section id="toDoList">
            <h1>To Do List</h1>
            <InputTask handleChange={handleChange} handleClick={handleClick} newTask={newTask}/>
            <ul>
                {tasks.map((task, index)=><ListElement handleRemove={handleRemove} index={index} task={task}/>)}
            </ul>
        </section>
    )
}

export default ToDoList