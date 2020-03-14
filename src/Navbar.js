import React from 'react'
import logoTiny from './images/logo-purp-tiny.png';
import { Navbar } from 'react-bulma-components';

import Subscribe from './Subscribe';
const NavbarComponent = () => {
    return (
      <div className="is-transparent">
      <Navbar className="is-transparent" style={{backgroundColor: 'rgb(0, 0, 0, 0)'}}>
        <Navbar.Brand>
            <img src={logoTiny} alt="logo-tiny"></img>
          <Navbar.Item href="/Product">
          Hybrid Insurance
          </Navbar.Item>
          <Navbar.Burger />           
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position="end">
          <Navbar.Item href="/Subscribe">Subscribe</Navbar.Item>
          <Navbar.Item href="/Team">About Us</Navbar.Item>
          <Navbar.Item href="/Contacts">Contacts</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
      </div>

    )
}

export default NavbarComponent