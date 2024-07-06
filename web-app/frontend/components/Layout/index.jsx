import Navbar from './Navbar';
import ErrorMessage from './ErrorMessage';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Layout = ({ children, title }) => {
  useDocumentTitle(title);

  return (
    <div className="ui container">
      <Navbar />
      <ErrorMessage />
      <div className="has-text-centered">{children}</div>
    </div>
  );
};

export default Layout;
