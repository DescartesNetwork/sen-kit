import React, { forwardRef } from 'react';

const Icon = forwardRef((props, ref) => {
  const { className, ...others } = props;
  const cln = className ? 'anticon ' + className : 'anticon';
  return <ion-icon class={cln} ref={ref} {...others} />
});

export default Icon;