import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { Row, Col } from 'antd';

import Home from 'containers/home';


class App extends Component {

  render() {
    return <div style={{ padding: 8 }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path='/home' component={Home} />
          </Switch>
        </Col>
      </Row>
    </div>
  }
}

export default withRouter(App);
