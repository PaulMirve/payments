import { ADD_PAYMENT, DELETE_PAYMENT, FETCH_PAYMENTS, UPDATE_PAYMENT } from "../actions/payments.actions"

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_PAYMENTS: {
            const object = {};
            payload.forEach((element) => {
                object[element.id_payment] = element
            });
            return object;
        }


        case ADD_PAYMENT: {
            let payment = Object.assign({}, state);
            payment[payload.id_payment] = payload;
            return payment;
        }

        case UPDATE_PAYMENT: {
            return { ...state, [payload.id_payment]: payload };
        }

        case DELETE_PAYMENT: {
            let payment = Object.assign({}, state);
            delete payment[payload];
            return payment;

        }

        default:
            return state
    }
}
