import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as HelloWorld } from '../stories/HelloWorld.stories';

describe('HelloWorld', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HelloWorld />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
