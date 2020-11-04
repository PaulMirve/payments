export default class Payment {
    constructor(id_payment, amount, motive, receiver) {
        this.id_payment = id_payment;
        this.amount = amount;
        this.motive = motive;
        this.receiver = receiver;
    }
}