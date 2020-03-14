import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import BackgroundVideo from './BackgroundVideo.js';
import NavbarComponent from './Navbar.js';
import Vision from './Vision.js';
import Mission from './Mission.js';
import Product from './Product.js';
import Subscribe from './Subscribe.js';
import Team from './Team.js';
import Contacts from './Contacts.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Columns } from 'react-bulma-components'

function App() {
  return (
    <Switch>  
      <Route path='/Subscribe' component={Subscribe} /> 
      <Route path='/Product' component={Product} /> 
      <Route path='/Team' component={Team} /> 
      <Route path='/Contacts' component={Contacts} /> 
      <div className="App">
        <NavbarComponent/>
        <BackgroundVideo/>
        <Columns>
          <Columns.Column>
            <Vision/>
          </Columns.Column>
          <Columns.Column>
            <Mission/>
          </Columns.Column>
        </Columns>
        <Product/>
        <Subscribe/>
        <Team/>
        <Contacts/>
      </div>
    </Switch>

  );
}

export default App;
