import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class AppRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    layout: PropTypes.func.isRequired,
    // history: PropTypes.object.isRequired,
  };

  state = {};

  render() {
    const { component: ChildComponent, layout: Layout, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          const handlerSetViewer = (viewer) => {
            // const { history } = props;
          };

          return (
            <Layout handlerSetViewer={handlerSetViewer}>
              <ChildComponent {...props} handlerSetViewer={handlerSetViewer} />
            </Layout>
          );
        }}
      />
    );
  }
}

export default AppRoute;
