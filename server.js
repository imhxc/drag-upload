const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const server = express();
server.listen(8888);

server.use(bodyParser.urlencoded({extended: false}));

let multerObj = multer({dest: './upload/'});
server.use(multerObj.any());

server.get('/', (req, res) => {
    res.send('hi ss');
})
server.use('/api', (req,res) => {
    res.send('ok');
    console.log(req.body);
    console.log(req.files);
})

server.use(express.static('./www'));