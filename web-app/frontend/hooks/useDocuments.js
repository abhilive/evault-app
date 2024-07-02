import { useState, useEffect, useMemo } from 'react';
// import useMetaMask from './useMetamask';
import { getContract, getWeb3 } from '../ethereum/utils';

const useDocuments = (account, web3Instance) => {
//   const web3Instance = useMemo(() => getWeb3(), []);

  const address = "0xa50a51c09a5c451C52BB714527E1974b686D8e77"; // contract address
  // const { web3Instance } = useMetaMask();
  const [ documents, setDocuments ] = useState([]);

  useEffect(() => {
    const fetchDocuments = async (address) => {
      console.log("account: ", account);
      if (!account) return;
      const contract = getContract(web3Instance, address);
      let documentsArr = [];
      try {
        const documentsCount = await contract.methods.documentCount().call();
        console.log('documentsCount:'+ documentsCount);
        for (let i = 1; i <= documentsCount; i++) {
          let documentData = await contract.methods.documents(i).call();
          documentsArr.push({
            id: i,
            client1: documentData.client1,
            client2: documentData.client2,
            description: documentData.description,
            name: documentData.name,
            owner: documentData.owner,
            status: documentData.status
          });
        }
        console.log(documentsArr);        
      } catch (e) {
        console.log(e);
      }
      setDocuments(documentsArr);
    };
    fetchDocuments(address);
  }, [web3Instance, account, address]);
       
  return { documents };

};

export default useDocuments;