import { CATEGORIES_ACTION_TYPES } from "./categories-types";

const INITIAL_STATE = {
    categories: [],
    isLoading: true,
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {
                ...state,
                ...payload,
            }
        default: 
            return state;
    }
}