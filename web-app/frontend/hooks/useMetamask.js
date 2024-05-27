import { useState, useEffect } from 'react';
import Web3 from 'web3';

const useMetaMask = () => {
  const [web3Instance, setWeb3Instance] = useState(null);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        setWeb3Instance(web3Instance);

        // Request account access
        // const accounts = await window.ethereum.request({
        //   method: 'eth_requestAccounts',
        // });
        const accounts = await web3Instance.eth.requestAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        setError('Error connecting to MetaMask:', error);
      }
    } else {
      setError('MetaMask not detected. Please install the MetaMask extension.');
    //   console.error(
    //     'MetaMask not detected. Please install the MetaMask extension.'
    //   );
    }
  };

  const disconnectMetaMask = () => {
    setAccount(null);
    setWeb3Instance(null);
    setError(null);
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts[0]);
      });
    }
  }, []);

  return { web3Instance, account, error, connectMetaMask, disconnectMetaMask };
};

export default useMetaMask;