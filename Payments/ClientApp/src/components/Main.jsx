import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchPayments } from '../store/actions/payments.actions';

class Main extends Component {
    componentDidMount() {
        this.props.fetchPayments();
    }

    render() {
        return (
            <div>
                <Button>Hello world</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    fetchPayments
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);