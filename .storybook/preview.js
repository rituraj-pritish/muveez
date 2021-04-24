import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/theme/globalStyle'

addDecorator(story => (
  <>
    <GlobalStyle/>
    {story()}
  </>
))