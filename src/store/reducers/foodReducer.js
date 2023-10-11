import { ACTIONS } from '../actions/foodActions';

const initialState = {
    foodItems: [],
    loading: false,
    error: null,
};

export default function foodReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.FETCH_FOOD_SUCCESS: {
            return { ...state, loading: false, foodItems: payload.foodItems };
        }
        case ACTIONS.FETCH_FOOD_FAILURE: {
            return { ...state, loading: false, error: payload.error };
        }
        case ACTIONS.FETCH_FOOD_LOADING: {
            return { ...state, loading: payload.loading };
        }
        case ACTIONS.ADD_FOOD: {
            return { ...state, foodItems: [...state.foodItems, payload.foodItem] };
        }
        case ACTIONS.REMOVE_FOOD: {
            const updatedFoodItems = state.foodItems.filter((foodItem) => foodItem._id !== payload.id);
            return { ...state, foodItems: updatedFoodItems };
        }
        default: {
            return state;
        }
    }
}
