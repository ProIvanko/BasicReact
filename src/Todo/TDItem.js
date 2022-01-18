import react from "react";
import propTypes from "prop-types";

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

function TodoItem({ todo, index }) {
    return (
        <li style = {styles.li}>
            <span>
                <input type="checkbox" />
            <strong>{index + 1}</strong>
            {todo.title}
            </span>
            
            <button>$times</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    index: propTypes.number
}


export default TodoItem