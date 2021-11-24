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
            ...todo,
            id: shortid.generate(),
        }]);

    }

    const onFilterChange = (filter) => {
        setFilter(filter);
    }

    const onTodoStatusChange = (statusChangeData) => {
        const {id, checked} = statusChangeData;

        setTodos(prevState => prevState.map(todo => {
            if(todo.id === id) {
                todo.checked = checked ? 'Сделано' : 'Не сделано';

            }
            return todos;
        }));
    }

    const filteredTodos = filter ? todos.filter(todo => todo.checked === filter) : todos;
    // const filteredTodos = todos;

    return (
        <>
            <TodoFilter onFilter={onFilterChange} />
            <TodoForm onAdd={onAddTodo} />
            <TodoList todos={filteredTodos} onTodoStatusChange={onTodoStatusChange} />
        </>
    );

}

export default Todo;