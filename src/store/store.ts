import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    useDispatch,
    useSelector
  } from 'react-redux';
import { BasketSlice } from "./slices/Basket/BasketSlice";

export const rootReducer = combineReducers({
  [BasketSlice.name]: BasketSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;