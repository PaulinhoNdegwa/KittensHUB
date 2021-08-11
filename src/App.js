import { Fragment } from 'react';
import './App.css';

import Search from './components/Search';
import Landing from './components/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
            <Landing />
            <Search />
            <Footer />
    </Fragment>
  );
}

export default App;
