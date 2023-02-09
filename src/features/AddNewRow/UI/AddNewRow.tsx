import React from 'react';
import cls from './AddNewRow.module.scss'
import {useSelector} from "react-redux";
import {getNewRowData} from "../model/selectors/getNewRowData";

interface AddNewTodoProps {
    createRowInEntity?: () => void
}

const AddNewRow = (props: AddNewTodoProps) => {

    const {
        createRowInEntity
    } = props

    const data = useSelector(getNewRowData)

    const [state, setState] = React.useState(data)

    // const [rowName, setRowName] = React.useState('')
    // const onChangeRowName = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //     setRowName(e.target.value)
    // }, [])


    const onChangeRowName = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({...prev, rowName: e.target.value}))
    }, [])


    // const [salary, setSalary] = React.useState('0')
    // const onChangeSalary = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSalary(e.target.value)
    // }, [])


    const onChangeSalary = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({...prev, salary: Number(e.target.value)}))
    }, [])


    // const [equipmentCosts, setEquipmentCosts] = React.useState('0')
    // const onChangeEquipmentCosts = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //     setEquipmentCosts(e.target.value)
    // }, [])

    const onChangeEquipmentCosts = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({...prev, equipmentCosts: Number(e.target.value)}))
    }, [])


    // const [overheads, setOverheads] = React.useState('0')
    // const onChangeOverheads = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //     setOverheads(e.target.value)
    // }, [])


    const onChangeOverheads = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({...prev, overheads: Number(e.target.value)}))
    }, [])




    // const [estimatedProfit, setEstimatedProfit] = React.useState('0')
    // const onChangeEstimatedProfit = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //     setEstimatedProfit(e.target.value)
    // }, [])


    const onChangeEstimatedProfit = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({...prev, estimatedProfit: Number(e.target.value)}))
    }, [])


    return (
        <form>
            <table className={cls.wrapper}>
                <tbody>
                <tr className={cls.table}>
                    <td className={cls.column}>
                        <button onClick={createRowInEntity}>send</button>
                    </td>
                    <td className={cls.column}>
                        <input
                            className={cls.input}
                            placeholder="Укажите название"
                            type='text'
                            value={state?.rowName}
                            onChange={onChangeRowName}
                            onKeyPress={createRowInEntity}
                        />
                    </td>
                    <td className={cls.column}>
                        <input
                            className={cls.input}
                            placeholder="0"
                            type='number'
                            value={state?.salary}
                            onChange={onChangeSalary}
                            onKeyPress={createRowInEntity}
                        />
                    </td>
                    <td className={cls.column}>
                        <input
                            className={cls.input}
                            placeholder="0"
                            type='number'
                            value={state?.equipmentCosts}
                            onChange={onChangeEquipmentCosts}
                            onKeyPress={createRowInEntity}
                        />
                    </td>
                    <td className={cls.column}>
                        <input
                            className={cls.input}
                            placeholder="0"
                            type='number'
                            value={state?.overheads}
                            onChange={onChangeOverheads}
                            onKeyPress={createRowInEntity}
                        />
                    </td>
                    <td className={cls.column}>
                        <input
                            className={cls.input}
                            placeholder="0"
                            type='number'
                            value={state?.estimatedProfit}
                            onChange={onChangeEstimatedProfit}
                            onKeyPress={createRowInEntity}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    );
};

export default React.memo(AddNewRow);