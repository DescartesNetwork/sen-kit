import React, { forwardRef, Fragment } from 'react'
import PropTypes from 'prop-types'

import { Row, Col, Card } from 'antd'

import './style.less'

const DefaultCard = (props) => {
  const { children } = props
  return (
    <div
      className="widget-no-scrollbar"
      style={{
        width: '100%',
        height: '100%',
        overflow: 'scroll',
      }}
    >
      {children}
    </div>
  )
}

const SolidCard = (props) => {
  const { children } = props
  return (
    <Card
      className="shadowed widget-no-scrollbar"
      style={{ height: '100%', backgroundColor: '#2D3355', overflow: 'scroll' }}
      bodyStyle={{ height: '100%' }}
      bordered={false}
    >
      {children}
    </Card>
  )
}

const GlassCard = (props) => {
  const { children } = props
  return (
    <Card
      className="shadowed widget-no-scrollbar"
      style={{ height: '100%', overflow: 'scroll' }}
      bodyStyle={{ height: '100%' }}
    >
      {children}
    </Card>
  )
}

const Widget = forwardRef(
  ({ size, type, header, children, Wrapper, style, ...rest }, ref) => {
    // Compute widget size
    let responsive = { xs: { span: 24 }, sm: { span: 12 }, xl: { span: 6 } }
    if (size === 'middle')
      responsive = { xs: { span: 24 }, md: { span: 24 }, xl: { span: 12 } }
    if (size === 'large')
      responsive = { xs: { span: 24 }, md: { span: 24 }, xl: { span: 24 } }
    // Wrap children
    let CardWrapper = DefaultCard
    if (type === 'solid') CardWrapper = SolidCard
    if (type === 'glass') CardWrapper = GlassCard
    // Widget style: height = 1400 / 4 - 16
    const widgetStyle = { height: 334, overflowY: 'visible' }
    // Render
    return (
      <Col style={style} {...rest} {...responsive}>
        <Row gutter={[2, 2]}>
          <Col span={24} style={{ height: 24, overflow: 'visible' }}>
            {header}
          </Col>
          <Col span={24} style={widgetStyle} ref={ref}>
            <Wrapper>
              <CardWrapper>{children}</CardWrapper>
            </Wrapper>
          </Col>
        </Row>
      </Col>
    )
  },
)

Widget.defaultProps = {
  type: 'default',
  size: 'small',
  Wrapper: Fragment,
}

Widget.propTypes = {
  type: PropTypes.oneOf(['default', 'solid', 'glass']),
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  Wrapper: PropTypes.elementType,
}

export default Widget
