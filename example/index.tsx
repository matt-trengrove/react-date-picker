import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloWorld } from '../.';

const App = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
