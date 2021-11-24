import {useState} from 'react'
import {TodoFilter} from './TodoFilter/TodoFilter'
import {TodoForm} from './TodoForm/TodoForm'
import shortid from 'shortid'
import {TodoList} from './TodoList/TodoList'

function Todo() {

    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('');

    const onAddTodo = (todo) => {

        setTodos(prevState => [...prevState, {
            ...todos,
            id: shortid.generate(),
        }]);

    }

    const onFilterChange = (filter) => {
        setFilter(filter);
    }

    // const onTodoStatusChange =

    const filteredTodos = filter !== 'Не сделано' ? todos.filter(todo => todo.checked === filter) : todos;

    return (
        <>
            <TodoFilter onFilter={onFilterChange} />
            <TodoForm onAdd={onAddTodo} />
            <TodoList todos={filteredTodos} onTodoStatusChange={onTodoStatusChange} />
        </>
    );

}

export default Todo;