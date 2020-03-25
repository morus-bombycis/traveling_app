import {
    FETCH_ITINERARIES,
    FETCH_ITINERARIES_SUCCESS,
    FETCH_ITINERARIES_FAIL
} from './itineraryActions'

const initialState = {
    isFetching: false,
    itineraries: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ITINERARIES:
            return {
                ...state, itineraries: [], isFetching: true, city: action.city
            };
        case FETCH_ITINERARIES_SUCCESS:
            return {
                ...state, isFetching: false, itineraries: action.itineraries, city: action.city
            };
        case FETCH_ITINERARIES_FAIL:
            return {
                ...state, isFetching: false, city: action.city
            };
        default:
            return state
    }
}

export default reducer;