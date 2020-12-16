import Commerce from '@chec/commerce.js';

// first value is the API key 
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);