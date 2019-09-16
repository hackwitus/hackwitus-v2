import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Logo from '../../assets/images/logos/leologo.svg';
import './style.scss';

const Navbar = props => {
  const { pathname } = props.location;

  return (
    <Menu pointing secondary className="nav">
      <Menu.Item active={pathname === '/'}>
        <Link to="/">
          <img src={Logo} alt="HackWITus Logo" style={{minWidth: '2rem'}}/>
        </Link>
      </Menu.Item>
      <Menu.Item name="/api" active={pathname === '/api'}>
        <Link className="link"  to="/api">API</Link>
      </Menu.Item>
      <Menu.Item name="/about"active={pathname === '/about'}>
        <Link className="link"  to="/about">About</Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="/logout" active={pathname === '/logout'}>
          <a href="/logout" className="link"></a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(props => <Navbar {...props} />);
