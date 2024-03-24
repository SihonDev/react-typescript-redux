import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/slices/auth/authSlice'
// import invoiceReducer from '../features/invoices/invoiceSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // invoices: invoiceReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;