import React from 'react';
import { Route } from 'react-router';
import Main from './Main';

export default () => (
    <Route exact path='/' component={Main} />
);