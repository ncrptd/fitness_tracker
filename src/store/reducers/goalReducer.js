import { ACTIONS } from '../actions/goalActions';

const initialState = {
    goals: [],
    loading: false,
    error: null,
};

export default function goalReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.FETCH_GOAL_SUCCESS: {
            return { ...state, loading: false, goals: payload.goals };
        }
        case ACTIONS.FETCH_GOAL_FAILURE: {
            return { ...state, loading: false, error: payload.error };
        }
        case ACTIONS.FETCH_GOAL_LOADING: {
            return { ...state, loading: payload.loading };
        }
        case ACTIONS.ADD_GOAL: {
            return { ...state, goals: [...state.goals, payload.goal] };
        }
        case ACTIONS.REMOVE_GOAL: {
            const updatedGoals = state.goals.filter((goal) => goal._id !== payload.id);
            return { ...state, goals: updatedGoals };
        }
        default: {
            return state;
        }
    }
}
