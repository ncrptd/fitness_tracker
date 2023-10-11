import * as api from '../../api/index'

export const ACTIONS = {
    AUTH: 'AUTH',
    LOGOUT: 'LOGOUT'
}
export const googleAuthentication = (data) => async (dispatch) => {
    try {
        dispatch({ type: ACTIONS.AUTH, payload: { data } })
    } catch (error) {
        console.error(error)
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: ACTIONS.LOGOUT })
    } catch (error) {
        console.error(error)

    }
};


export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        const res = await api.signin(formData);

        if (res.status === 200) {
            const data = res.data;
            dispatch({ type: ACTIONS.AUTH, payload: { data } })
            navigate('/')
        }
    } catch (error) {
        console.error(error)
    }
}

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        const res = await api.signup(formData);
        if (res.status === 201) {
            const data = res.data;
            dispatch({ type: ACTIONS.AUTH, payload: { data } })
            navigate('/')
        }
    } catch (error) {
        console.error(error)
    }
}