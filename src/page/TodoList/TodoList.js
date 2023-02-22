import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes  from "../TodoList/TodoList.module.css"
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List";

const TodoList=()=>{
    const [ isShow, setIsShow ] = useState(false);
    const [ newTask, setNewTask ] = useState('Пусто');
    const [add,setAdd]=useState('')
    const[search,setSearch]=useState('')
    // console.log(search)
    // console.log(add)

    const handleShow = () => {
        setIsShow(!isShow);
        setAdd('')
        setSearch('')
        setNewTask('Пусто')
    };
    const handleChangeText = (text) => {
        setNewTask(text);
        setAdd(text)
    }

    const todos=[ {
        task: 'coding',
        id:1 ,

    },
        {
            task: 'homework',
            id:2,

        },
        {
            task:'read',
            id:3,

        },
        {
            task: 'sleep',
            id:4,

        },]
    return (
        <div className={classes.wrapper}>
            <Button handleShow={handleShow}>
                Добавить
            </Button>
            <List todos={todos}/>
            { isShow && <Modal handleShow={handleShow}>
                <p>{newTask}</p>
                <input type="text" onChange={(event) =>  handleChangeText(event.target.value) } className={classes.input} />
                <p>{add}</p>
                <Button>
                    Добавить
                </Button>
                <input type="text" onChange={(event)=>{setSearch(event.target.value)}}/>
                <p>{search}</p>
                <button  className={classes.button}>Close</button>
            </Modal> }

        </div>
    )
}

export default TodoList;