import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodoProps, TodoSchema} from "../types/todo";
import {createEntity} from "../../../../pages/TodoPage/model/services/createEntity";
import {EntityProps} from "../../../../pages/TodoPage";
import {getTreeRows} from "../services/getTreeRows";
import {addNewRow} from "../../../../features/AddNewRow";
import {NewRowProps} from "../../../../features/AddNewRow/model/services/addNewRow";

const initialState: TodoSchema = {
    data: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getTreeRows.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(getTreeRows.fulfilled, (state, action: PayloadAction<TodoProps[]>) => {
                state.isLoading = false
                state.error = undefined
                state.data = action.payload
            })
            .addCase(getTreeRows.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(addNewRow.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(addNewRow.fulfilled, (state, action: PayloadAction<NewRowProps>) => {
                state.isLoading = false
                state.error = undefined
                state.data = action.payload
            })
            .addCase(addNewRow.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: todoReducer } = todoSlice
export const { actions: todoActions} = todoSlice
