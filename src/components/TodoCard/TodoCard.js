import classes from  '../TodoCard/TodoCard.module.css'
import {useState} from "react";
import Delete from "../Delete/Delete";



const TodoCard=({todo,handleDelete})=>{
    const [check,setCheck]=useState(false)

    return(
        <div className={classes.wrapperTodoCard}>
            <div className={check ?   classes.done:classes.todoCard  }>
                <h3>{todo.title}</h3>
                <input checked={check} onChange={()=>setCheck(!check)} type={'checkbox'} className={classes.checkbox}></input>

            </div>
            <Delete onClick={handleDelete} id={todo.id}>Delete</Delete>
            {/*<Button onClick={handleDone} id={todo.id}>Done</Button>*/}

        </div>

    )
}
export default TodoCard;



