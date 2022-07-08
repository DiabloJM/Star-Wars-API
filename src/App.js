import React from 'react';
import Header from './shared/layout/Header';
import Content from './shared/layout/Content';
import './App.css';

import {element} from 'prop-types'; 

function App(props) {
  return (
    <div className="App">
      <Header title="API"/>
      <Content>
        {props.children}
      </Content>
    </div>
  );
}

App.prototype = {
  children: element.isRequired,
}

export default App;
