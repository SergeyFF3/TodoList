import React from 'react';
import cls from './TodoPage.module.scss'
import {AddNewTodo} from 'features/AddNewTodo';
import {TodoList} from 'entities/Todo';
import axios from "axios";

const baseURL = 'http://185.244.172.108:8081/v1/outlay-rows/entity'

const TodoPage = () => {

    const [entityId, setEntityId] = React.useState<string>('')
    const [rows, setRows] = React.useState<any>([])

    async function createEntity() {
        const eInfo = await axios.post(`${baseURL}/create`)

        if (eInfo.data.id) setEntityId(String(eInfo.data.id))
    }

    async function getTreeRows(eID: string) {
        const rowInfo = await axios.get(`${baseURL}/${eID}/row/list`)
        console.log(rowInfo)
        if (rowInfo) setRows(rowInfo)
    }

    const createRowInEntity = React.useCallback((eID: string, rowValues: any) => {
        return axios.post(`${baseURL}/${eID}/row/create`, rowValues)
    }, [])

    React.useEffect(() => {
        createEntity()
    }, [])

    React.useEffect(() => {
        if (entityId) getTreeRows(entityId)
    }, [entityId])

    return (
        <div className={cls.wrapper}>
            <div className={cls.label}>
                <p className={cls.title}>Строительно-монтажные работы</p>
            </div>
            <table className={cls.tableWrapper}>
                <tr className={cls.table}>
                    <td className={cls.column}>Уровень</td>
                    <td className={cls.column}>Наименование работ</td>
                    <td className={cls.column}>Основная з/п</td>
                    <td className={cls.column}>Оборудование</td>
                    <td className={cls.column}>Накладные расходы</td>
                    <td className={cls.column}>Сметная прибыль</td>
                </tr>
                <TodoList todoList={rows}/>
            </table>
            <AddNewTodo
                createRowInEntity={() => createRowInEntity(entityId, rows)}
            />
        </div>
    );
};

export default React.memo(TodoPage);