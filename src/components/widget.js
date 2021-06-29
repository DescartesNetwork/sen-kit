import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Card, Col } from 'antd';

const DefaultCard = (props) => {
  const { children } = props;
  return children;
}

const SolidCard = (props) => {
  const { children } = props;
  return <Card
    style={{
      border: 'none',
      height: '100%',
      backgroundColor: '#2D3355',
      overflow: 'scroll'
    }}
    bodyStyle={{ height: '100%' }}
    hoverable
  >{children}</Card>
}

const GlassCard = (props) => {
  const { children } = props;
  return <Card
    style={{
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderColor: '#FFFFFF22',
      height: '100%',
      overflow: 'scroll'
    }}
    bodyStyle={{ height: '100%' }}
    hoverable
  >{children}</Card>
}

const Widget = forwardRef((props, ref) => {
  // Props
  const { size, type, children } = props;
  // Compute widget size
  let responsive = { xs: { span: 24 }, md: { span: 12 }, lg: { span: 6 } }
  if (size === "medium") responsive = { xs: { span: 24 }, md: { span: 24 }, lg: { span: 12 } }
  if (size === "large") responsive = { xs: { span: 24 }, md: { span: 24 }, lg: { span: 24 } }
  // Wrap children
  let Wrapper = DefaultCard;
  if (type === 'solid') Wrapper = SolidCard;
  if (type === 'glass') Wrapper = GlassCard;
  // Render
  return <Col
    {...responsive}
    style={{ height: 1400 / 4 - 16, overflowY: 'visible' }}
    ref={ref}
  >
    <Wrapper>
      {children}
    </Wrapper>
  </Col>
});

Widget.defaultProps = {
  type: 'default',
  size: 'small',
}

Widget.propTypes = {
  type: PropTypes.oneOf(['default', 'solid', 'glass']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Widget;