import {
    combineReducers
} from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";

const rootReducer = combineReducers({
    cities: cityReducer,
    itinerary: itineraryReducer,
    activity: activityReducer
});
export default rootReducer;