import axios from 'axios';
export const FETCH_PAYMENTS = "FETCH_PAYMENTS";
export const ADD_PAYMENT = "ADD_PAYMENT";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";
export const DELETE_PAYMENT = "DELETE_PAYMENT";

export const fetchPayments = () => {
    return async dispatch => {
        const { data } = await axios.get("api/Payment/");
        dispatch({ type: FETCH_PAYMENTS, payload: data });
    }
}

export const addPayment = (payment) => {
    console.log(payment);
    return async dispatch => {
        const { data } = await axios.post("api/Payment/", payment, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        dispatch({ type: ADD_PAYMENT, payload: data });
    }
}

export const updatePayment = (payment) => {
    console.log(payment);
    return async dispatch => {
        const { data } = await axios.put("api/Payment/", payment, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        dispatch({ type: UPDATE_PAYMENT, payload: data });
    }
}

export const deletePayment = (id) => {
    return async dispatch => {
        const { data } = await axios.delete(`api/Payment/${id}`);
        dispatch({ type: DELETE_PAYMENT, payload: data });
    }
}



