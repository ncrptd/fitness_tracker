import { ACTIONS } from '../actions/exerciseActions'

const initialState = {
    exercises: [],
    loading: false,
    error: null,
};


export default function exerciseReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.FETCH_EXERCISE_SUCCESS: {
            return { ...state, loading: false, exercises: payload.exercises }
        }
        case ACTIONS.FETCH_EXERCISE_FAILURE: {
            return { ...state, loading: false, error: 'Error fetching exercise data' }
        }
        case ACTIONS.FETCH_EXERCISE_LOADING: {
            return { ...state, loading: payload.loading }
        }
        case ACTIONS.ADD_EXERCISE: {
            const updatedExercises = [...state.exercises, payload.exercise]
            return { ...state, exercises: updatedExercises }
        }
        case ACTIONS.REMOVE_EXERCISE: {
            const updatedExercises = state.exercises.filter((exercise) => exercise._id !== payload.id)
            return { ...state, exercises: updatedExercises }
        }
        default: {
            return state
        }
    }
}