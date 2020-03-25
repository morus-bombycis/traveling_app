export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const FETCH_ACTIVITIES_SUCCESS = 'FETCH_ACTIVITIES_SUCCESS';
export const FETCH_ACTIVITIES_FAIL = 'FETCH_ACTIVITIES_FAIL';

function requestActivities(city) {
    return {
        type: FETCH_ACTIVITIES,
        city
    }
}

function receiveActivities(activities, city) {
    return {
        type: FETCH_ACTIVITIES_SUCCESS,
        activities,
        city
    }
}

function fail(error, city) {
    return {
        type: FETCH_ACTIVITIES_FAIL,
        error,
        city
    }
}

export function fetchActivities(city) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return function (dispatch) {
        dispatch(requestActivities(city))

        return fetch(`http://127.0.0.1:5000/activities/${city}`)
            .then(response => response.json())
            .then(activities => dispatch(receiveActivities(activities, city)))
            .catch(error => dispatch(fail(error, city)));
    }
}