import { Fragment } from 'react';
import './App.css';

import Search from './components/Search';
import Landing from './components/Landing';

function App() {
  return (
    <Fragment>
            <Landing />
            <Search />
    </Fragment>
  );
}

export default App;
