import React, { Component } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Divider, Grid, List, ListItem, ListItemSecondaryAction, ListItemText, TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchPayments, addPayment, deletePayment, updatePayment } from '../store/actions/payments.actions';
import Payment from '../models/Payment';

class Main extends Component {
    state = { amount: 0, motive: "", receiver: "", updating: false, selectedPaymentId: null }

    componentDidMount() {
        this.props.fetchPayments();
    }


    addPayment = () => {
        const { amount, motive, receiver } = this.state;
        this.props.addPayment(new Payment(0, amount, motive, receiver));
        this.cleanTextFields();
    }

    cleanTextFields = () => {
        this.setState({ amount: 0, motive: "", receiver: "" });
    }

    updatePayment = () => {
        const { amount, motive, receiver, selectedPaymentId } = this.state;
        this.props.updatePayment(new Payment(selectedPaymentId, amount, motive, receiver));
    }

    fillTextFields = (payment) => {
        this.setState({ amount: payment.amount, motive: payment.motive, receiver: payment.receiver });
    }

    render() {

        const { payments, deletePayment } = this.props;
        const { amount, motive, receiver, updating } = this.state;

        return (
            <Grid container style={{ padding: 20 }} spacing={5}>
                <Grid item xs={4}>
                    <Typography variant="h3">Payments:</Typography>
                    <Divider />
                    <Grid>
                        {payments.map(payment => {

                            return (
                                <Card style={{ marginTop: 10 }} component={Grid} key={payment.id_payment}>
                                    <CardHeader title={`${payment.motive} - ${payment.receiver}`} />
                                    <CardContent>
                                        <Typography variant="h3">
                                            {payment.amount}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => {
                                            this.fillTextFields(payment);
                                            this.setState({ selectedPaymentId: payment.id_payment, updating: true });
                                        }} variant="outlined" color="primary">Update</Button>
                                        <Button onClick={() => deletePayment(payment.id_payment)} variant="outlined" color="secondary">Delete</Button>
                                    </CardActions>
                                </Card>
                            );
                        })}
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h3">New Payment:</Typography>
                    <Divider />
                    <Grid style={{ marginTop: 10 }} container spacing={3} >
                        <Grid item xs={4}>
                            <TextField value={amount} onChange={e => this.setState({ amount: e.target.value })} fullWidth style={{ marginRight: 10 }} variant="outlined" label="Amount" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField value={motive} onChange={e => this.setState({ motive: e.target.value })} fullWidth style={{ marginRight: 10 }} variant="outlined" label="Motive" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField value={receiver} onChange={e => this.setState({ receiver: e.target.value })} fullWidth style={{ marginRight: 10 }} variant="outlined" label="Receiver" />
                        </Grid>
                    </Grid>

                    {
                        !updating ?
                            <Grid item>
                                <Button onClick={this.addPayment} fullWidth style={{ marginTop: 10 }} variant="outlined" color="primary">Pay</Button>
                            </Grid> :
                            <Grid item>
                                <Button onClick={() => {
                                    this.updatePayment();
                                    this.cleanTextFields();
                                    this.setState({ selectedPaymentId: null, updating: false });
                                }} fullWidth style={{ marginTop: 10 }} variant="outlined" color="primary">Update</Button>
                                <Button onClick={() => {
                                    this.cleanTextFields();
                                    this.setState({ selectedPaymentId: null, updating: false });
                                }} fullWidth style={{ marginTop: 10 }} variant="outlined" color="secondary">Cancel</Button>
                            </Grid>
                    }
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({

    payments: Object.values(state.payments)
})

const mapDispatchToProps = {
    fetchPayments,
    addPayment,
    deletePayment,
    updatePayment
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);