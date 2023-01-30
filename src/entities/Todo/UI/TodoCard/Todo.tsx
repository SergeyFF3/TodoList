import React from 'react';
import cls from './Todo.module.scss'
import {ITodo} from "../../model/types/todo";
import FileIcon from 'shared/assets/icons/list-file.svg'
import DeleteIcon from 'shared/assets/icons/delete.svg'

interface TodoProps {
    todo?: ITodo
}

const Todo = (props: TodoProps) => {

    const {
        todo
    } = props

    return (
        <tr className={cls.table}>
            <td className={cls.column}>
                <img
                    className={cls.addString}
                    alt="#"
                    src={FileIcon}
                />
                <img
                    className={cls.delete}
                    alt="#"
                    src={DeleteIcon}
                />
            </td>
            <td className={cls.column}>{todo?.rowName}</td>
            <td className={cls.column}>{todo?.salary}1</td>
            <td className={cls.column}>{todo?.equipmentCosts}</td>
            <td className={cls.column}>{todo?.overheads}</td>
            <td className={cls.column}>{todo?.estimatedProfit}</td>
        </tr>
    );
};

export default React.memo(Todo);