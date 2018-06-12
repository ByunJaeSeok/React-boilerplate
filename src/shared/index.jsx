import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, withRouter, Redirect } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';

import Route from './AppRoute';
import TestLayout from '../layout/layout_test';

import savoTheme from '../theme';
import '../index.css';

import * as Pages from '../pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <BrowserRouter> */}
        <MuiThemeProvider theme={savoTheme}>
          <Switch>
            <Redirect exact from="/" to="/test" />
            <Route exact path="/test" layout={TestLayout} component={Pages.Test} />
            <Route exact path="/test1" layout={TestLayout} component={Pages.Test1} />
            {/* <Route path="/*" component={Pages.NotFound} layout={TestLayout} /> */}
          </Switch>
        </MuiThemeProvider>
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

App.propTypes = {
  // location: PropTypes.object.isRequired,
};

export default App;
