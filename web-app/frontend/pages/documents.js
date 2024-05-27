import { useState } from 'react';
import { getWeb3 } from '../ethereum/utils';

import Layout from '../components/Layout';
import Documents from '../components/Documents';


const DocumentsPage = () => {
  return (
    <Layout title="User Documents">
      <Documents></Documents>
    </Layout>
  );
};
export default DocumentsPage;