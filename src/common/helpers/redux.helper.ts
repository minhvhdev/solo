import { createTransform } from 'redux-persist';

import { decrypt, encrypt } from './data.helper';

export const encryptTransform = () => {
  return createTransform(
    (inboundState) => encrypt(inboundState),
    (outboundState) => decrypt(outboundState),
  );
};
