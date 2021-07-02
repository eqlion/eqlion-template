import { createAction, createReducer } from "@reduxjs/toolkit";
import { RootState } from ".";

interface InitialState {
    token: string;
}

const initialState: InitialState = {
    token: "",
};

export const isLoggedIn = (state: RootState) => !!state.app.token;

export const setToken = createAction<string>("SET_TOKEN");

export default createReducer(initialState, builder =>
    builder.addCase(setToken, (state, { payload }) => ({
        ...state,
        payload,
    })),
);
