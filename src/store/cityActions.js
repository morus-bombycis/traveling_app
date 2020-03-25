export const FETCH_CITIES = 'FETCH_CITIES';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_FAIL = 'FETCH_CITIES_FAIL';

function requestCities() {
    return {
        type: FETCH_CITIES
    }
}

function receiveCities(cities) {
    return {
        type: FETCH_CITIES_SUCCESS,
        cities
    }
}

function fail(error) {
    return {
        type: FETCH_CITIES_FAIL,
        error
    }
}

export function fetchCities() {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return function (dispatch) {
        dispatch(requestCities())

        return fetch("http://127.0.0.1:5000/cities/all")
            .then(response => response.json())
            .then(cities => dispatch(receiveCities(cities)))
            .catch(error => dispatch(fail(error)));
    }
}