import React, { Component, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { loremIpsum } from 'lorem-ipsum';

import {
  Row, Col, Button, Typography, Input,
  Widget, Icons, Animate
} from 'components';

const { FcFaq } = Icons;
const { Title, Text } = Typography;


function Contents() {
  const [more, setMore] = useState(false);
  const onMore = () => setMore(!more);

  return <Row gutter={[16, 16]} align="middle">
    <Col span={24}>
      <Title level={3}>{loremIpsum({ count: 5, units: 'word' })}</Title>
    </Col>
    <Col span={24}>
      <Text>{loremIpsum({ count: 1, units: 'paragraphs' })}</Text>
    </Col>
    <Animate transitionName="fade">
      {more ? <Col span={24}>
        <Text>{loremIpsum({ count: 1, units: 'paragraphs' })}</Text>
      </Col> : null}
    </Animate>
    <Col span={24}>
      <Input
        suffix={<Button
          type="text"
          shape="circle"
          icon={<FcFaq style={{ verticalAlign: 'middle' }} />}
          style={{ marginRight: -7 }}
        />}
      />
    </Col>
    <Col span={24}>
      <Row gutter={[16, 16]} justify="end">
        <Col >
          <Button>Default</Button>
        </Col>
        <Col >
          <Button type="primary" onClick={onMore}>Primary</Button>
        </Col>
      </Row>
    </Col>
  </Row>
}


class Home extends Component {

  render() {
    return <Row gutter={[16, 16]} align="center" justify="center">
      <Col span={24} style={{ height: 64 }} />
      {/* Row 0 */}
      <Widget variant="default" size="large">
        <Contents />
      </Widget>
      {/* Row 1 */}
      <Widget variant="solid" size="small">
        <Contents />
      </Widget>
      <Widget variant="glass" size="small">
        <Contents />
      </Widget>
      <Widget variant="glass" size="small">
        <Contents />
      </Widget>
      {/* Row 2 */}
      <Widget variant="glass" size="small">
        <Contents />
      </Widget>
      <Widget variant="solid" size="medium">
        <Contents />
      </Widget>
      <Col span={24} style={{ height: 64 }} />
    </Row>
  }
}

export default withRouter(Home);
