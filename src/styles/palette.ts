import { createGlobalStyle } from 'styled-components';

const PaletteStyles = createGlobalStyle`
  :root {
    --professor-s-red: #cf000f;

    /* https://flatuicolors.com/ */
    --electron-blue: #0984e3;
    --city-lights: #dfe6e9;
    --orange: #f39c12;
    --lynx-white: #f5f6fa;
  }
`;

export default PaletteStyles;