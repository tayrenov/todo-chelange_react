import AddTodo from "./AddTodo";

const TodoForm = () => {

    const addTodo = (e) => {
        console.log('click')
    }
    
    return (
        <div className="todo-form main_container">

            <AddTodo addTodo={addTodo}/>
            <div className="todo-form_todoList">
                <div className="todo-form_todoList_item">

                </div>
                <div className="todo-form_todoList_item">
                    
                </div>
            </div>
        </div>
    )
}

export default TodoForm;