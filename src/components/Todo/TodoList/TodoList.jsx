// import {TodoItem} from '../TodoItem/TodoItem'

export function TodoList({todos, onTodoStatusChange}) {

    const onStatusChange = (id) => {

        return(e) => {
            const checked = e.target.checked;

            onTodoStatusChange({id, checked});
        }

    }

    return (
        <div className="Todo-List">
            {
                todos.map(todo => (
                    <div
                        key={todo.id}
                        className="Todo-Item"
                    >
                        <div>
                            {todo.title}
                        </div>
                        <div>
                            {todo.description}
                        </div>
                        <div className="Todo-Item-Checkbox">
                            <input
                                type="checkbox"
                                checked={todo.checked === 'Не сделано' ? false : true}
                                onChange={onStatusChange(todo.id)}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    );

}