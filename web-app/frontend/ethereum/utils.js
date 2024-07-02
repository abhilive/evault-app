import Web3 from 'web3';
import documentStorageAbi from './documentStorageAbi';
// import helloWorldAbi from './helloWorldAbi';

// Not in USE
export function getWeb3() {
  return new Web3(window.ethereum);
}

export function getContract(web3, contractAddress) {
  // return new web3.eth.Contract(helloWorldAbi, contractAddress);
  return new web3.eth.Contract(documentStorageAbi, contractAddress);
}