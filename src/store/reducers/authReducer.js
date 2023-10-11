import { ACTIONS } from "../actions/authActions";

const initialState = {
    authData: null
}

export default function authReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.AUTH: {
            localStorage.setItem('profile', JSON.stringify({ ...payload.data }))
            return { ...state, authData: payload.data }
        }
        case ACTIONS.LOGOUT: {
            localStorage.clear()
            return { ...state, authData: null }
        }
        default: {
            return state
        }
    }
}