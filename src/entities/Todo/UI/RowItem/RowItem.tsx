import React from 'react';
import cls from './RowItem.module.scss'
import FileIcon from 'shared/assets/icons/list-file.svg'
import DeleteIcon from 'shared/assets/icons/delete.svg'
import { TodoProps } from 'entities/Todo';

interface RowItemProps {
    row?: TodoProps
}

const RowItem = (props: RowItemProps) => {

    const {
        row
    } = props

    return (
        <table>
            <tbody>
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
                <td className={cls.column}>{row?.rowName}</td>
                <td className={cls.column}>{row?.salary}</td>
                <td className={cls.column}>{row?.equipmentCosts}</td>
                <td className={cls.column}>{row?.overheads}</td>
                <td className={cls.column}>{row?.estimatedProfit}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default React.memo(RowItem);