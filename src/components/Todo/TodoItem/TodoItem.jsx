export function TodoItem({todo, onTodoStatusChange}) {

    const onStatusChange = (id) => {

        return(e) => {
            const checked = e.target.checked;

            onTodoStatusChange({id, checked});
        }

    }

    return (
        <div className="Todo-Item">
            <div>
                {todo.title}
            </div>
            <div>
                {todo.description}
            </div>
            <div>
                {todo.id}
            </div>
            <div>
                {todo.checked}
            </div>
            <div className="Todo-Item-Checkbox">
                <input
                    type="checkbox"
                    checked={todo.checked === 'Не сделано' ? false : true}
                    onChange={onStatusChange(todo.id)}
                />
            </div>
        </div>
    );

}