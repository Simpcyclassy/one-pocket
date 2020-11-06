import { config } from 'dotenv';

config();

const keys = {
    publicKey: process.env.PUBLIC_KEY,
    secret: process.env.SECRET,
};

export default keys;
