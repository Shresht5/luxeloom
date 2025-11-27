'use client'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartDataReducer from '@/redux/cartSlice'


export const store = configureStore({
    reducer: {
        cartData: cartDataReducer,
    },
});

export function ReduxProvider({ children }) {
    return <Provider store={store}>{children}</Provider>
}