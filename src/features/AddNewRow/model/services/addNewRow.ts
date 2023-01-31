import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "pages/TodoPage/UI/TodoPage";
import {TodoProps} from "entities/Todo";

export interface NewRowProps {
    rowName?: string
    salary?: number
    equipmentCosts?: number
    overheads?: number
    estimatedProfit?: number
}

export const addNewRow = createAsyncThunk<NewRowProps, string, {rejectValue: string}> (
    'newRow/addNewRow',
    async (eID, ThunkAPI) => {
        try {
            const rowInfo = await axios.post<NewRowProps>(`${baseURL}/${eID}/row/create`)

            return rowInfo.data
        } catch (e) {
            return ThunkAPI.rejectWithValue('error')
        }
    }
)