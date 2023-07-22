import { useTodos } from '../store/context'
import {useSearchParams} from "react-router-dom"
const Todos = () => {
    const {todos,toggleCheck,handledelete} = useTodos()

    const [searchParams] = useSearchParams()
    let todosData = searchParams.get("todos")
    let filterData = todos;
    
    if (todosData === "active") {
        filterData = filterData.filter((todo)=> !todo.completed)
    }
    if (todosData === "completed") {
        filterData = filterData.filter((todo)=> todo.completed)
    }
    
  return (
    <ul className= "main-task">
        {
            filterData.map((todo)=>{
                return(
                    <li key={todo.id}>
                        <input type="checkbox" 
                        id={`todos-${todo.id}`}  
                        checked={todo.completed? true : false}
                        onChange={()=> toggleCheck(todo.id)} />
                        <label htmlFor={`todos-${todo.id}`}>{todo.task}</label>
                        {
                            todo.completed && (
                                <button onClick={()=>handledelete(todo.id)}>Delete</button>
                            )
                        }
                    </li>
                )
            })
        }
    </ul>
  )
}

export default Todos