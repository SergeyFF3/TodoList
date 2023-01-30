import React from 'react';
import {ITodo} from "../../model/types/todo";
import Todo from "../TodoCard/Todo";

interface TodoListProps {
    todoList?: ITodo[]
}

const TodoList = (props: TodoListProps) => {

    const {
        todoList
    } = props

    return (
        <>
            {todoList?.length && todoList.map((todo) => {
                return <Todo
                    key={todo.id}
                    todo={todo}
                />
            })}
        </>
    );
};

export default React.memo(TodoList);