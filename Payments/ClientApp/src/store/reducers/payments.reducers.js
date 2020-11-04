import { FETCH_PAYMENTS } from "../actions/payments.actions"

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_PAYMENTS:
        const object = {};
            payload.forEach((element) => {
                object[element.id] = element
            });
            return object;

    default:
        return state
    }
}
