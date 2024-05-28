import { useState } from 'react';

const AddTodo = (props) => {

    const changeStatus = (e) => {
        e.target.classList.toggle('checked');
    }
    
    const [inputValue, setInputValue] = useState('');
    
    const submitForm = (e) => {
        e.preventDefault();
        resetInputs(e.target)
        props.addTodo();
    }

    function resetInputs(form) {
        form.querySelector('#newTodoValue').value='';
        setInputValue('')
        form.querySelector('#newTodoCheckbox').checked=false;
        form.querySelector('.todo-form_addTodo_checkbox').classList.remove('checked');
    }

    return (
        <form className="todo-form_addTodo" onSubmit={submitForm}>
            <input id='newTodoValue' type="text" placeholder="Create a  new todo..." onChange={e => setInputValue(e.target.value)}/>
            <label>
                <input id='newTodoCheckbox' type="checkbox" hidden/>
                <div className="todo-form_addTodo_checkbox" onClick={changeStatus}></div>
            </label>
            <input type="submit"  value='AddTodo' disabled={inputValue ? false : true} />
        </form>
    )
}

export default AddTodo;