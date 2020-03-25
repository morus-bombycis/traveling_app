import {
    FETCH_ACTIVITIES,
    FETCH_ACTIVITIES_SUCCESS,
    FETCH_ACTIVITIES_FAIL
} from './activityActions'

const initialState = {
    isFetching: false,
    activities: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ACTIVITIES:
            return {
                ...state, activities: [], isFetching: true, city: action.city
            };
        case FETCH_ACTIVITIES_SUCCESS:
            return {
                ...state, isFetching: false, activities: action.activities, city: action.city
            };
        case FETCH_ACTIVITIES_FAIL:
            return {
                ...state, isFetching: false, city: action.city
            };
        default:
            return state
    }
}

export default reducer;