import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { createEntity } from "../services/createEntity";
import {EntityProps, EntitySchema} from "../types/entity";

const initialState: EntitySchema = {}

export const entitySlice = createSlice({
    name: 'entity',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createEntity.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(createEntity.fulfilled, (state, action: PayloadAction<EntityProps>) => {
                state.isLoading = false
                state.error = undefined
                state.data = action.payload
            })
            .addCase(createEntity.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: entityReducer } = entitySlice
export const { actions: entityActions} = entitySlice
