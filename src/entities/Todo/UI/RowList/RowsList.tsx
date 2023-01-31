import React from 'react';
import {RowItem, TodoProps} from "entities/Todo";

interface RowsListProps {
    rowsList?: TodoProps[]
}

const RowsList = (props: RowsListProps) => {

    const {
        rowsList
    } = props

    return (
        <>
            {rowsList?.length && rowsList.map((row) => {
                return <RowItem
                    key={row.id}
                    row={row}
                />
            })}
        </>
    );
};

export default React.memo(RowsList);