import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../style';
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
console.log(themes);
addDecorator(story => <ThemeProvider theme={themes.default}>{story()}</ThemeProvider>);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
