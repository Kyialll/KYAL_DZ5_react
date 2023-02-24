
import TodoCard from "../TodoCard/TodoCard";



const List=({list,handleDone,search,handleDelete})=>{
    return(
        <div >
            <div >
                {list.filter((todo)=>
                     todo.title.toLowerCase().includes(search.toLowerCase())).map((todo) =>
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        handleDone={handleDone}
                        handleDelete={handleDelete}/>)}
            </div>

        </div>

    )
}
export default List;