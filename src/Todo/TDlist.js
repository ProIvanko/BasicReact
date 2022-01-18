import react from "react";
import TodoItem from "./TDItem";
import propTypes from "prop-types";



const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} key = {todo.id} index={index} />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: propTypes.arrayOf(propTypes.object)
}


export default TodoList