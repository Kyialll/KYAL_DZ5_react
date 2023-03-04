import classes from  '../TodoCard/TodoCard.module.css'
import {useState} from "react";
import Delete from "../Delete/Delete";
import trashIcon from '../../assets/trash-solid.svg';
import ButtonAction from "../ButtonAction/ButtonAction";
import Input from "../Input/Input";




const TodoCard=({todo,handleDelete,currentEdit,handleChangeCurrent,handleEdit,handleDone,handleSearch})=>{
    // const [check,setCheck]=useState(false)
    const[newTitle,setNewTitle]=useState(todo.title)
    const handleSetTitle=(event)=>{
        setNewTitle(event.target.value)
    }
    if(currentEdit){
        return(
            <div>
                <Input
                    onChange={handleSetTitle}
                    name={'new title'}
                    placeholder={"New task..."}
                    value={newTitle}

                />

        <div  className={classes.buttons}>

        <button className={classes.save}
                onClick={()=>{
                setNewTitle(todo.title)
                handleEdit({
                id:todo.id,
                title:newTitle,
                 completed:todo.completed

        })}}>Save</button>

        <button className={classes.cancel}
                onClick={()=>{
                handleEdit({
                id:todo.id,
                title:todo.title,
                completed:todo.completed

            })
        }}>Cancel</button>
        </div>

            </div>)

    }

    return(
        <div className={classes.wrapperTodoCard}>
            <div className={todo.completed ?    classes['todoCard'] + " " + classes.done : classes.todoCard }>
                <h3 >{todo.title}</h3>
                <div className={classes.actionButton}>
                <ButtonAction handleClick={handleChangeCurrent}
                              todo={todo}
                              type={'edit'}>Edit</ButtonAction>

                 <ButtonAction handleClick={handleDone}
                               todo={todo}
                                type={'done'}>Done</ButtonAction>
                </div>
            </div>
            <Delete onClick={handleDelete} id={todo.id}>
                <img src={trashIcon} className={classes.trashIcon} alt={'trash icon'}/>
            </Delete>

        </div>

    )
}
export default TodoCard;



