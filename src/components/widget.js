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

const Widget = forwardRef(({ size, type, children, Wrapper, ...others }, ref) => {
  // Compute widget size
  let responsive = { xs: { span: 24 }, sm: { span: 12 }, xl: { span: 6 } }
  if (size === "medium") responsive = { xs: { span: 24 }, md: { span: 24 }, xl: { span: 12 } }
  if (size === "large") responsive = { xs: { span: 24 }, md: { span: 24 }, xl: { span: 24 } }
  // Wrap children
  let CardWrapper = DefaultCard;
  if (type === 'solid') CardWrapper = SolidCard;
  if (type === 'glass') CardWrapper = GlassCard;
  // Render
  return <Col
    {...responsive}
    {...others}
    style={{ height: 1400 / 4 - 16, overflowY: 'visible' }}
    ref={ref}
  >
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
  Wrapper: PropTypes.object,
}

export default Widget;