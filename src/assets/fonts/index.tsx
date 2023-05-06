import { createGlobalStyle } from 'styled-components';
import LatoBlack from './Lato/Lato-Black.ttf';
import LatoBlackItalic from './Lato/Lato-BlackItalic.ttf';
import LatoRegularItalic from './Lato/Lato-Italic.ttf';
import LatoRegular from './Lato/Lato-Regular.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegular});
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegularItalic});
    font-style: italic;
    font-weight: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoBlack});
    font-style: normal;
    font-weight: 900;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoBlackItalic});
    font-style: italic;
    font-weight: 900;
  }
`;

export default FontStyles;