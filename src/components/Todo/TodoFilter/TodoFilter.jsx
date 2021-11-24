import {STATUS} from "../Todo.constants";

export function TodoFilter({onFilter}) {

    const onFilterChange = (e) => onFilter(e.target.value);


    return (
        <div className="Todo-Filter">
            <select
                className="Todo-Filter__select"
                onChange={onFilterChange}
            >
                <option value="">Default</option>
                {
                    Object.keys(STATUS).map(item => (
                        <option value={STATUS[item]} key={item}>{STATUS[item]}</option>
                    ))
                }
            </select>
        </div>
    );

}