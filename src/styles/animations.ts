import { css } from 'styled-components';

export const onMouseOver = css`
  opacity: .9;
  
  &:hover {
    opacity: .8;
  }

  &:active {
    opacity: 1;
  }
`;