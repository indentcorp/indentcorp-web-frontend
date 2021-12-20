import React from 'react';
import './App.css';
import Main from '../src/pages/Main';
import GlobalStyles from './components/GlobalStyles';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-PKCPL48'
}
TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <>
      <Main />
      <GlobalStyles />
    </>
  );
}

export default App;
