
import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Hero, Heading, Menu, Columns, Image, Navbar } from 'react-bulma-components';

// import MenuComponent from './Menu.js';
import logo from './images/logo-purp.png';

const HeroComponent = () => {
    return (
    <Hero size="large">

      <Hero.Head renderAs="header">
      </Hero.Head>
      <Hero.Body >
        
        <div className="company-logo-overlay">
        <Columns>
          <Columns.Column size={3}>
            <div style={{ width: 250 }}><Image src={logo}/></div>
          </Columns.Column>
          <Columns.Column size={9}>
            <h1 className="company-name">Hybrid Insurance</h1>
            <h2>Adaptive insurance for you & your vehicle - we've got you covered</h2>
          </Columns.Column>
        </Columns>
        </div>
      </Hero.Body>
      <Hero.Footer>
        <div className="bd-notification is-danger"></div>
      </Hero.Footer>
    </Hero>
    )
    }
export default HeroComponent