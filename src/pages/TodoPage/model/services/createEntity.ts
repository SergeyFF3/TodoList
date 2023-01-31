import {createAsyncThunk} from "@reduxjs/toolkit";
import {EntityProps} from "../types/entity";
import axios from "axios";
import {baseURL} from "../../UI/TodoPage";

export const createEntity = createAsyncThunk<EntityProps, void, {rejectValue: string}> (
    'entity/createEntity',
    async (_, ThunkAPI) => {
        try {
            const eInfo = await axios.post<EntityProps>(`${baseURL}/create`)

            return eInfo.data
        } catch (e) {
            return ThunkAPI.rejectWithValue('error')
        }
    }
)