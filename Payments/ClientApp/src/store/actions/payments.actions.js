import axios from 'axios';
export const FETCH_PAYMENTS = "FETCH_PAYMENTS";

export const fetchPayments = () => {
    return async dispatch => {
        const { data } = await axios.get("api/Payment/");
        dispatch({ type: FETCH_PAYMENTS, payload: data });
    }
}
