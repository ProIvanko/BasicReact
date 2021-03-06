import react, {useContext} from "react";
import propTypes from "prop-types";
import context from "../context";

const styles = {
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    }
}

function TodoItem({ todo, index, onChange }) {
    const {removeTodo} = useContext(context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li style = {styles.li}>
            <span className={classes.join('')}>
                <input 
                type="checkbox"
                checked = {todo.completed}
                style={styles.input} 
                onChange = {() => onChange(todo.id)}
                />
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
            </span>

            <button className="rm" onClick={removeTodo.bind(null,todo.id) }>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    index: propTypes.number,
    onChange: propTypes.func.isRequired
}


export default TodoItem