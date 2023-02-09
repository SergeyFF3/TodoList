import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "pages/TodoPage/UI/TodoPage";
import {TodoProps} from "entities/Todo";
import { NewRowProps } from "../types/addRowData";

export const addNewRow = createAsyncThunk<NewRowProps, { eID: string, test: NewRowProps }, {rejectValue: string}> (
    'newRow/addNewRow',
    async (data, ThunkAPI) => {
        try {
            const rowInfo = await axios.post<NewRowProps>(`${baseURL}/${data.eID}/row/create`, data.test)

            return rowInfo.data
        } catch (e) {
            return ThunkAPI.rejectWithValue('error')
        }
    }
)