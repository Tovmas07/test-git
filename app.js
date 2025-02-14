import 'dotenv/config';

import http from 'http';

const port = 3001;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    try{
        console.log('Server started');
    }catch(err){
        console.error(err);
    }
})