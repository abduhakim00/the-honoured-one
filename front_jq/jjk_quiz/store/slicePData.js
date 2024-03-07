import { createSlice } from "@reduxjs/toolkit";

const initialState = {fullName: 'void', email: 'void', score: '0'}

const dataToEmail = createSlice({
    name: 'pData',
    initialState, 
    reducers: {
        signUp(state, action) {
            state.fullName = action.payload[0]
            state.email = action.payload[1]
        },
        setScore(state, action){
            state.score = action.payload
        }
    }
})




export default dataToEmail.reducer
export const {signUp, setScore} = dataToEmail.actions
