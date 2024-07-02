import useMetaMask from '../../hooks/useMetamask';
import {
  Button,
  Message,
  MessageHeader, 
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Table,
} from 'semantic-ui-react';
import useDocuments from '../../hooks/useDocuments';
import { useEffect } from 'react';

const Documents = () => {

  // const { address } = URLSearchParams(); // Get address from URL
  const { account, web3Instance, connectMetaMask } = useMetaMask();

  const { documents } = useDocuments(account, web3Instance);

  useEffect(() => {
    connectMetaMask();
  }, []);

  return (
    <>
      {!account && (
        <>
          <Message info>
            <MessageHeader>Website is not connected to Ethereum</MessageHeader>
            <p>You need to connect your wallet first</p>
          </Message>
          <Button primary onClick={() => connectMetaMask()}>Connect Wallet</Button>
        </>
      )}
      <h3>Documents available :</h3>
      {documents ? (
        <>
          <Table celled>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Document Title</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
                <TableHeaderCell>Client 1</TableHeaderCell>
                <TableHeaderCell>Client 2</TableHeaderCell>
                <TableHeaderCell>Owner</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              {documents.map((d) => (
                <TableRow key={d.id}>
                  <TableCell>{d.name}</TableCell>
                  <TableCell>{d.description}</TableCell>
                  <TableCell>{d.client1}</TableCell>
                  <TableCell>{d.client2}</TableCell>
                  <TableCell>{d.owner}</TableCell>
                  <TableCell>{d.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </>
      ) : null }
    </>
  );
};

export default Documents;