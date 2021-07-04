import React, { forwardRef } from 'react';

const importDependency = () => {
  if (!document) return;
  const scripts = document.getElementsByTagName('script') || [];
  for (let { id } of scripts) if (id === 'ionicons5') return;
  let ionicons = document.createElement('script');
  ionicons.type = 'module';
  ionicons.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
  return document.body.appendChild(ionicons);
}

// Import https://ionic.io/ionicons/usage
importDependency();

const Icon = forwardRef((props, ref) => {
  const { className, ...others } = props;
  const cln = className ? 'anticon ' + className : 'anticon';
  return <ion-icon class={cln} ref={ref} {...others} />
});

export default Icon;