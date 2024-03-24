import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import resortService from './resortService'
import { ResortsDetailsReq } from '../../../models/request/resortsDetailsReq'
import { ResortsDetailsRes } from '../../../models/response/resortsDetailsRes'


interface UserLoginDetails {
    resorts: any,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string,
}

const initialState: UserLoginDetails = {
    resorts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Login user
export const getResorts = createAsyncThunk('auth/login', async (_, thunkAPI) => {
    try {
        return await resortService.getResorts()
    } catch (error: any) {
        const message = error.response.data.error
        console.log('message', message)
        return thunkAPI.rejectWithValue(message)
    }
})


export const resortSlice = createSlice({
    name: 'resorts',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder
            .addCase(getResorts.pending, (state: UserLoginDetails) => {
                state.isLoading = true
            })
            .addCase(getResorts.fulfilled, (state: UserLoginDetails, action: any) => {
                state.isLoading = false
                state.isSuccess = true
                state.resorts = action.payload
            })
            .addCase(getResorts.rejected, (state: UserLoginDetails, action: PayloadAction<string>) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export default resortSlice.reducer