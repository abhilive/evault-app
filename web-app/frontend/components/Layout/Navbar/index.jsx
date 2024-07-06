import { useSelector, useDispatch } from 'react-redux';
import { MenuItem, Menu } from 'semantic-ui-react';

import Link from 'next/link';
import NavLink from './NavLink/';

import actions from '../../../redux/actions/';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => !!state.authentication.token);
  return (
    <div className="tabs is-centered">
      <Menu.Menu>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <NavLink position="right" href="/register" privateRoute={false}>
          Register
        </NavLink>
        <NavLink position="right" href="/login" privateRoute={false}>
          Login
        </NavLink>
        <NavLink href="/user" privateRoute={true}>
          Profile
        </NavLink>
        <NavLink href="/documents" privateRoute={true}>
          Documents
        </NavLink>
        {isAuthenticated && (
          <MenuItem onClick={() => dispatch(actions.deauthenticate())}>
            Log Out
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default Navbar;
