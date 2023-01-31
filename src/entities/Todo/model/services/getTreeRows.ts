import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "pages/TodoPage/UI/TodoPage";
import {TodoProps} from "../..";

export const getTreeRows = createAsyncThunk<TodoProps[], string, {rejectValue: string}> (
    'todo/getTreeRows',
    async (eID, ThunkAPI) => {
        try {
            const rowInfo = await axios.get<TodoProps[]>(`${baseURL}/${eID}/row/list`)

            return rowInfo.data
        } catch (e) {
            return ThunkAPI.rejectWithValue('error')
        }
    }
)