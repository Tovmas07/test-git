import 'dotenv/config';

import http from 'http';

const port = 3001;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    try{
        res.statusCode = 200;
        console.log('Server started');
    }catch(err){
        res.statusCode = 404;
        console.error(err);

        console.log('Server failed.');
        console.error(lof);
        console.log('apreee');

    }
})

