// export const pinatakey = "aba2dce237abf95b497d";
// export const pinatasecret =
//   "cc65bfa25a4bcf2a5cd47457ef914fd5fdbcfd3de9a3a4526b6657f320f27f63";
// export const pinatajwt =
//   "PoAbBKMjV_VBt0t8CX8_JnoHVkMyxmds8YuTLx1r3ekvz3HeGNImoNtlZ4kv-vmU";
// export const ipfsgateway = "purple-chemical-cricket-698";

export const pinatakey = "a155f6537ce06d1188b8";
export const pinatasecret =
  "1811863c268821ec90c70a9e0cf3ef8b88c1213551e475af29a2da5e8d706694";

// pinata access control gateway key
export const pinatajwt =
  "LYUQ-2lBjCIllf6Jupa8GZ7g-xWRsf4ArZiDoJwcaZjxoxiHmWodcAvui-O6k4Mv";
// "PoAbBKMjV_VBt0t8CX8_JnoHVkMyxmds8YuTLx1r3ekvz3HeGNImoNtlZ4kv-vmU";

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
