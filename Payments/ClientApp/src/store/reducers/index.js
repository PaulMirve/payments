import { combineReducers } from "redux";
import PaymentsReducers from './payments.reducers';

export default combineReducers({
    payments: PaymentsReducers
});