import React, { forwardRef, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Card, Col } from 'antd';

const DefaultCard = (props) => {
  const { children } = props;
  return <div
    style={{
      width: '100%',
      height: '100%',
      overflow: 'scroll',
    }}
  >{children}</div>
}

const SolidCard = (props) => {
  const { children } = props;
  return <Card
    style={{ height: '100%', backgroundColor: '#2D3355', overflow: 'scroll' }}
    bodyStyle={{ height: '100%' }}
    bordered={false}
    hoverable
  >{children}</Card>
}

const GlassCard = (props) => {
  const { children } = props;
  return <Card
    style={{ height: '100%', overflow: 'scroll' }}
    bodyStyle={{ height: '100%' }}
    hoverable
  >{children}</Card>
}

const Widget = forwardRef(({ size, type, children, Wrapper, style, ...rest }, ref) => {
  // Compute widget size
  let responsive = { xs: { span: 24 }, sm: { span: 12 }, xl: { span: 6 } }
  if (size === 'medium') responsive = { xs: { span: 24 }, md: { span: 24 }, xl: { span: 12 } }
  if (size === 'large') responsive = { xs: { span: 24 }, md: { span: 24 }, xl: { span: 24 } }
  // Wrap children
  let CardWrapper = DefaultCard;
  if (type === 'solid') CardWrapper = SolidCard;
  if (type === 'glass') CardWrapper = GlassCard;
  // Combine styles
  const combinedStyle = { ...style, height: 1400 / 4 - 16, overflowY: 'visible' }
  // Render
  return <Col {...rest} {...responsive} style={combinedStyle} ref={ref}>
    <Wrapper>
      <CardWrapper>
        {children}
      </CardWrapper>
    </Wrapper>
  </Col>
});

Widget.defaultProps = {
  type: 'default',
  size: 'small',
  Wrapper: Fragment,
}

Widget.propTypes = {
  type: PropTypes.oneOf(['default', 'solid', 'glass']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  Wrapper: PropTypes.elementType,
}

export default Widget;