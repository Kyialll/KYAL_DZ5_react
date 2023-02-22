import classes from '../List/List.module.css'

const List=(props)=>{
    return(
        <div className={classes.list_block}>
            <div className={classes.list}>
                {props.todos.map(el=><li key={el.id}>
                    {el.task}
                </li>)}
            </div>
        </div>
    )
}
export default List;