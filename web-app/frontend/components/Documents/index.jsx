// import { useEffect, useState } from 'react';
// import { getWeb3 } from '../../ethereum/utils';
import useMetaMask from '../../hooks/useMetamask';
import { Button, Message, MessageHeader } from 'semantic-ui-react';

const Documents = () => {
  const { account, error, connectMetaMask, disconnectMetaMask } = useMetaMask();

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
      <h3>Inside Documents Page.</h3>
    </>
  );
};

export default Documents;