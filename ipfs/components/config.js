export const pinatakey = "aba2dce237abf95b497d";
export const pinatasecret =
  "cc65bfa25a4bcf2a5cd47457ef914fd5fdbcfd3de9a3a4526b6657f320f27f63";
export const pinatajwt =
  "PoAbBKMjV_VBt0t8CX8_JnoHVkMyxmds8YuTLx1r3ekvz3HeGNImoNtlZ4kv-vmU";
export const ipfsgateway = "purple-chemical-cricket-698";

export const readHeader = {
  "Content-Type": "application/json",
};

export const getHeader = {
  headers: {
    pinata_api_key: pinatakey,
    pinata_secret_api_key: pinatasecret,
  },
};

export const sendJsonHeader = {
  headers: {
    "Content-Type": "application/json",
    pinata_api_key: pinatakey,
    pinata_secret_api_key: pinatasecret,
  },
};
