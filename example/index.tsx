import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import moment from 'moment';
import { CalendarMonth } from '../.';

const App = () => {
  return (
    <div>
      <CalendarMonth month={moment()} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
