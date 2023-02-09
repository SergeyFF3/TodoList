import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {EntitySchema} from "pages/TodoPage";
import { entityReducer } from "pages/TodoPage/model/slices/entitySlice";
import { todoReducer } from "entities/Todo/model/slices/todoSlice";
import {TodoSchema} from "entities/Todo";
import {rowSchema} from "../../features/AddNewRow/model/types/addRowData";
import { addRowReducer } from "features/AddNewRow/model/slices/addNewRowSlice";

export interface StateSchema {
    entity: EntitySchema
    todo: TodoSchema
    addRow: rowSchema
}

const RootReducer = combineReducers({
    entity: entityReducer,
    todo: todoReducer,
    addRow: addRowReducer
})

export const store = configureStore<StateSchema>({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch