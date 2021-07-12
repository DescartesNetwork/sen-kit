// Available vars: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

const BASE_BACKGROUND = 'linear-gradient(105.88deg, rgba(26, 30, 56, 0.5) 0%, rgba(35, 31, 54, 0.5) 95.29%);';

module.exports = {
  // Basis
  hack: `true;@import "${require.resolve('./index.less')}"`,

  // Colors
  '@primary-color': '#F9575E',
  '@info-color': '#37CDFA',
  '@success-color': '#3DBA4E',
  '@warning-color': '#FCB017',
  '@error-color': '#F2323F',
  '@body-background': '#181C36',
  '@component-background': '#2D3355',

  // Fonts
  '@font-family': "'Barlow', 'Open Sans', sans-serif",

  // Border
  '@border-radius-base': '8px',
  '@border-color-base': 'rgba(255, 255, 255, 0.2)',
  '@border-width-base': '1px',

  // Card
  '@card-radius': '16px',
  '@card-actions-background': BASE_BACKGROUND,
  '@card-background': BASE_BACKGROUND,

  // Drawer
  '@drawer-bg': BASE_BACKGROUND,
}