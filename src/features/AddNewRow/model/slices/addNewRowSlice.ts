import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addNewRow} from "../../../../features/AddNewRow";
import {NewRowProps, rowSchema} from '../types/addRowData';

const initialState: rowSchema = {
    data: {
        equipmentCosts: 0,
        estimatedProfit: 0,
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: 0,
        parentId: 0,
        rowName: "",
        salary: "0",
        supportCosts: 0
    }

}
    export const addRowSlice = createSlice({
    name: 'addRow',
    initialState,
    reducers: {
        setSalary(state, action: PayloadAction<string>) {
            state.data.salary = action.payload
        }
    },
    // extraReducers: builder => {
    //     builder
    //     .addCase(addNewRow.fulfilled, (state, action: PayloadAction<NewRowProps>) => {
    //         state.data = action.payload
    //     })
    //
    // }
})

export const { reducer: addRowReducer } = addRowSlice
export const { actions: addRowActions} = addRowSlice
