import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import authService from './authService'
import { UserLoginDetailsReq } from '../../../models/request/userLoginDetailsReq'
import { UserLoginDetailsRes } from '../../../models/response/userLoginDetailsRes'

const user = JSON.parse(sessionStorage.getItem('user') || '""')

interface UserLoginDetails {
  user: any,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string,
}

const initialState: UserLoginDetails = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Login user
export const login = createAsyncThunk('auth/login', async (request: UserLoginDetailsReq, thunkAPI) => {
  try {
    return await authService.login(request)
  } catch (error: any) {
    const message = error.response.data.error
    return thunkAPI.rejectWithValue(message)
  }
})


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(login.pending, (state: UserLoginDetails) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state: UserLoginDetails, action: PayloadAction<UserLoginDetailsRes>) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state: UserLoginDetails, action: PayloadAction<string>) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
  },
})

export default authSlice.reducer