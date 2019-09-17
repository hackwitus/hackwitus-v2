import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const NavLink = (props) => {
  const { pathname } = props.location;
  return <Link to={props.to} className={`navbar__link ${pathname === props.to ? 'navbar__link--active' : ''}`}>{props.label}</Link>
}

export default withRouter(props => <NavLink {...props} />);