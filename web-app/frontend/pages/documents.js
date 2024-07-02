import verifyToken from '../getInitialProps/verifyToken';

import Layout from '../components/Layout';
import Documents from '../components/Documents';

const DocumentsPage = () => {
  return (
    <Layout title="User Documents">
      <Documents></Documents>
    </Layout>
  );
};

DocumentsPage.getInitialProps = function (ctx) {
  verifyToken(ctx);
};

export default DocumentsPage;