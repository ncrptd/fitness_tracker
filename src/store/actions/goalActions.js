import * as api from '../../api/index';

export const ACTIONS = {
    ADD_GOAL: 'ADD_GOAL',
    REMOVE_GOAL: 'REMOVE_GOAL',
    FETCH_GOAL_SUCCESS: 'FETCH_GOAL_SUCCESS',
    FETCH_GOAL_FAILURE: 'FETCH_GOAL_FAILURE',
    FETCH_GOAL_LOADING: 'FETCH_GOAL_LOADING',
};

export const fetchGoals = () => async (dispatch) => {
    try {
        dispatch({ type: ACTIONS.FETCH_GOAL_LOADING, payload: { loading: true } });
        const res = await api.getGoals();
        if (res.status === 200) {
            const data = res.data;
            if (data) {
                dispatch({ type: ACTIONS.FETCH_GOAL_SUCCESS, payload: { goals: data } });
                dispatch({ type: ACTIONS.FETCH_GOAL_LOADING, payload: { loading: false } });
            }
        }
    } catch (error) {
        console.error('Error fetching goal data: ', error);
        dispatch({ type: ACTIONS.FETCH_GOAL_FAILURE });
    }
};

export const addGoal = (goalDetails) => async (dispatch) => {
    try {
        const res = await api.addGoal(goalDetails);
        if (res.status === 201) {
            const data = res.data;
            if (data) {
                return dispatch({ type: ACTIONS.ADD_GOAL, payload: { goal: data } });
            }
        }
    } catch (error) {
        console.error('Error while adding goal', error);
    }
};

export const removeGoal = (id) => async (dispatch) => {
    try {
        const res = await api.deleteGoal(id);
        if (res.status === 204) {
            return dispatch({ type: ACTIONS.REMOVE_GOAL, payload: { id } });
        }
    } catch (error) {
        console.error('Error while removing goal', error);
    }
};
