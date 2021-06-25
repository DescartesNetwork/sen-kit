import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { Layout, Row, Col } from 'antd';

import Home from 'containers/home';

const { Header, Footer, Content } = Layout;


class App extends Component {

  render() {
    return <Layout style={{ backgroundColor: '#00000000' }}>
      <Header style={{ backgroundColor: '#00000000' }}>Header</Header>
      <Content style={{ padding: 8 }}>
        <Row gutter={[16, 16]} justify="center">
          <Col span={24} style={{ maxWidth: 1400 }}>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path='/home' component={Home} />
            </Switch>
          </Col>
        </Row>
      </Content>
      <Footer style={{ backgroundColor: '#00000000' }}>Footer</Footer>
    </Layout>
  }
}

export default withRouter(App);
