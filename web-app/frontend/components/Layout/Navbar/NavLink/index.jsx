import { useSelector } from 'react-redux';

import Link from 'next/link';
import { MenuItem } from 'semantic-ui-react';

const NavLink = ({ position, href, privateRoute, children }) => {
  const isAuthenticated = useSelector(state => !!state.authentication.token);
  return (
    <>
      {privateRoute === isAuthenticated && (
        <MenuItem position="right" href={href}>
          {children}
        </MenuItem>
      )}
    </>
  );
};

export default NavLink;
