import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Avatar, Typography, Space } from 'antd';

import SEN from './sen.svg';

const Brand = forwardRef((props, ref) => {
  const { lite, size, href } = props;
  return <Space
    size={0}
    onClick={() => window.location.href = href}
    ref={ref}
    style={{ cursor: 'pointer' }}
  >
    <Avatar size={size} src={SEN} />
    {lite ? null : <Typography.Text style={{
      fontFamily: 'Barlow',
      fontSize: size / 2,
      fontWeight: 400,
    }}>SenSwap</Typography.Text>}
  </Space>
});

Brand.defaultProps = {
  lite: false,
  href: '#',
  size: 40,
}

Brand.propTypes = {
  lite: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.number,
}

export default Brand;