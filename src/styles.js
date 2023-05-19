import { createGlobalStyle } from 'styled-components';
import LatoBold from './fonts/Lato-Bold.woff2';
import LatoRegular from './fonts/Lato-Regular.woff2';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-style: normal;
  font-weight: 400;
  font-family: "Lato";
  font-display: swap;
  src: url(${LatoRegular}) format("woff2");
}

@font-face {
  font-style: normal;
  font-weight: 700;
  font-family: "Lato";
  font-display: swap;
  src: url(${LatoBold}) format("woff2");
}

html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  font-family: 'Lato', 'Tahoma', sans-serif;
  font-weight: 400px;
  font-size: 13px;
  line-height: 20px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

img, small, span {
  display: block;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

p, h1, h2, h3 {
  margin: 0;
}

a, button {
  display: block;
  cursor: pointer;
  transition: 0.3s ease;
  box-sizing: border-box;

  &:hover {
    opacity: 0.5;
  }
}

#root {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;

  white-space: nowrap;

  border: 0;

  clip: rect(0 0 0 0);
  clip-path: inset(100%);
}
`;
