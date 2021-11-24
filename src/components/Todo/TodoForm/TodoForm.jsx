import {useState} from 'react'
import {FORM_STATE} from '../Todo.constants'

export function TodoForm(onAdd) {

    const [form, setForm] = useState(FORM_STATE);

    const onFieldChange = (e) => {

        const {target} = e;

        setForm(prevState => ({
            ...prevState,
            [e.target.name]: target.type === 'checkbox' ? target.checked : target.value
        }));

    }

    const onAddTodo = (e) => {

        onAdd(form);

        setForm(FORM_STATE);

        e.preventDefault();

    }

    return (
        <form className="Todo-Form" onSubmit={onAddTodo}>
            <div className="Todo-Form__Field">
                <label htmlFor="title">
                    Заголовок:
                </label>
                <input
                    className="Field-Control"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={onFieldChange}
                />
            </div>
            <div className="Todo-Form__Field">
                <label htmlFor="description">
                    Описание:
                </label>
                <input
                    className="Field-Control"
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={onFieldChange}
                />
            </div>
        </form>
    );

}