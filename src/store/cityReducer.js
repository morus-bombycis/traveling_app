import {
    FETCH_CITIES,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAIL
} from './cityActions'

const initialState = {
    isFetching: false,
    cities: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CITIES:
            return {
                ...state, cities: [], isFetching: true
            };
        case FETCH_CITIES_SUCCESS:
            return {
                ...state, isFetching: false, cities: action.cities
            };
        case FETCH_CITIES_FAIL:
            return {
                ...state, isFetching: false
            };
        default:
            return state
    }
}

export default reducer;