import {useEffect, useState} from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes  from "../TodoList/TodoList.module.css"
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List";

const TodoList=()=>{
    const [ isShow, setIsShow ] = useState(false);
    const [ newTitle, setNewTitle ] = useState('');
    const[search,setSearch]=useState('');
    const [currentEdit,setCurrentEdit]=useState('');
    const [todoList,setTodoList]=useState([])
    const [select,setSelect]=useState('all')




    const handleShow = () => {
        setIsShow(!isShow);
        setSearch('')
        setNewTitle('')
    };
    const handleAdd=()=>{
        setTodoList((prevTodo)=>{
            return [...prevTodo,{id:todoList.length +1,title:newTitle,completed:false}]
        })
        setNewTitle('')
        handleShow()
    }


    const handleDone = (id) => {
        const currentIndex = todoList.findIndex((todo) => todo.id === id);
        todoList[currentIndex].completed = !todoList[currentIndex].completed;
        setTodoList([... todoList]);
    }



    const handleChangeText = (event) => {
        setNewTitle(event.target.value);
    }


    const handeSearch=(event)=>{
        setSearch(event.target.value)
    }


    const handleDelete = (id) =>
    {
        const filtered = todoList.filter(todo => todo.id !== id)
        setTodoList([...filtered])
    }

    const handleEdit=(editTodo)=>{
        const editList=todoList.map(todo=>{
            if (editTodo.id===todo.id){
                return{...todo,title:editTodo.title}
            }
            return todo
        })

        setTodoList([...editList]);
        setCurrentEdit()
    }

    const resultSearch = todoList.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));
    const resultFilter = select ==='all'
        ? resultSearch : select ==='completed'
        ? resultSearch.filter(todo=>todo.completed) : select=== 'notCompleted'
        ? resultSearch.filter(todo=> !todo.completed) : null



    useEffect(() => {
        console.log('render1');
        const myLocalList = JSON.parse(localStorage.getItem('todoList'));
        if(myLocalList?.length !== 0) {
            setTodoList(myLocalList);
        }

    },[])


    useEffect(() => {
        console.log('render 2');
        localStorage.setItem('todoList', JSON.stringify(todoList)) // запись
        return () => {

        }
    }, [todoList])



    const handleSelect=(event)=>{
        setSelect(event.target.value)
    }
    const clearTasks=()=>{
        localStorage.clear()
        setTodoList([])
    }





    return (
        <div className={classes.wrapper}>
            <select onChange={handleSelect}
            className={classes.select}>
                <option value={'all'}>Все</option>
                <option value={'completed'}>Выполненные</option>
                <option value={'notCompleted'}>Невыполненные</option>
            </select>


            <Button onClick={handleShow}
            className={classes.addButton}>
                Добавить
            </Button>
            <Input
            type={'text'}
            placeholder={'Search...'}
            onChange={handeSearch}
            name={'search'}
            value={search}
            />



            { isShow && <Modal handleShow={handleShow}>
                <p>{newTitle}</p>
                <Input
                 type={'text'}
                placeholder={"Add new task"}
                onChange={handleChangeText}
                name={'add'}
                value={newTitle}/>
                <Button onClick={handleAdd}
                className={classes.addButton}>
                    Добавить
                </Button>
                <p>{search}</p>

            </Modal> }
            <List list={resultFilter}
                  handleDone={handleDone}
                  search={search}
                  handleDelete={handleDelete}
                  currentEdit={currentEdit}
                  handleChangeCurrent={setCurrentEdit}
                  handleEdit={handleEdit}
            />

            <Button
                onClick={clearTasks}
                className={classes.clearButton}
            >Очистить все</Button>
        </div>


    )
}

export default TodoList;