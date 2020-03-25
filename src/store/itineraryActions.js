export const FETCH_ITINERARIES = 'FETCH_ITINERARIES';
export const FETCH_ITINERARIES_SUCCESS = 'FETCH_ITINERARIES_SUCCESS';
export const FETCH_ITINERARIES_FAIL = 'FETCH_ITINERARIES_FAIL';

function requestItineraries(city) {
    return {
        type: FETCH_ITINERARIES,
        city
    }
}

function receiveItinearies(itineraries, city) {
    return {
        type: FETCH_ITINERARIES_SUCCESS,
        itineraries,
        city
    }
}

function fail(error, city) {
    return {
        type: FETCH_ITINERARIES_FAIL,
        error,
        city
    }
}

export function fetchItineraries(city) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return function (dispatch) {
        dispatch(requestItineraries(city))

        return fetch(`http://127.0.0.1:5000/itineraries/${city}`)
            .then(response => response.json())
            .then(itineraries => dispatch(receiveItinearies(itineraries, city)))
            .catch(error => dispatch(fail(error, city)));
    }
}