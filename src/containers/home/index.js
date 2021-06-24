import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loremIpsum } from 'lorem-ipsum';

import {
  Row, Col, Card, Button, Typography, Space
} from 'antd';
const { Title, Text } = Typography;


function Application(props) {
  return <Card
    style={{
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
      borderColor: '#FFFFFF22',
    }}
    hoverable
  >
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Title level={3}>{loremIpsum({ count: 5, units: 'word' })}</Title>
      </Col>
      <Col span={24}>
        <Text>{loremIpsum({ units: 'paragraphs' })}</Text>
      </Col>
      <Col span={24}>
        <Row gutter={[16, 16]} justify="end">
          <Space size={16}>
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
          </Space>
        </Row>
      </Col>
    </Row>
  </Card>
}


class Home extends Component {

  render() {
    return <Row gutter={[16, 16]} align="center" justify="center">
      <Col span={24} style={{ height: 132 }} />
      {[1, 2, 3, 4, 5, 6].map(i => <Col key={i} sm={{ span: 24 }} md={{ span: 8 }}>
        <Application />
      </Col>)}
    </Row>
  }
}

export default withRouter(Home);
