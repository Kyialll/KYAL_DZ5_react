import classes from './ButtonAction.module.css'

const ButtonAction=({handleClick,todo,children,type})=>{
    return(
        <button
                onClick={()=>handleClick(todo.id)}
                className={classes['actionButton'] + ' ' +  classes[type]}>
                {children}
        </button>
    )
}
export default ButtonAction;