import React, { Component } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, List, ListItem, ListItemSecondaryAction, ListItemText, TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchPayments, addPayment, deletePayment } from '../store/actions/payments.actions';
import Payment from '../models/Payment';

class Main extends Component {
    state = { amount: 0, motive: "", receiver: "" }

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

    deletePayment = () => {

    }

    render() {

        const { payments } = this.props;
        const { amount, motive, receiver } = this.state;

        return (
            <Grid container direction="column" style={{ padding: 20 }}>
                <Typography variant="h3">Payments:</Typography>
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
                                <Button variant="outlined" color="primary">Update</Button>
                                <Button variant="outlined" color="secondary">Delete</Button>
                            </CardActions>
                        </Card>
                    );
                })}
                <Typography variant="h3">New Payment:</Typography>
                <Grid container spacing={3} >
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
                <Grid>
                    <Button onClick={this.addPayment} fullWidth style={{ marginTop: 10 }} variant="outlined" color="primary">Pay</Button>
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
    deletePayment
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);