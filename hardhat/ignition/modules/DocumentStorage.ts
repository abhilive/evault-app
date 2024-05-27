import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DocumentStorageModule = buildModule("DocumentStorage", (m) => {

  const documentStorage = m.contract("DocumentStorage");

  return { documentStorage };
});

export default DocumentStorageModule;
