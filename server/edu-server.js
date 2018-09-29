const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const http = require('http');
const isProd = process.argv.includes('--prod');
const util = require('./util');

const app = express();
const rootPath = util.getRootPath();

const whitelist = ['http://localhost:4300', 'http://localhost:4200', 'https://faceshopviet.com', 'https://quanly.faceshopviet.com'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}


app.use(compression());
app.use(express.static(`${rootPath}/build`));

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(bodyParser.json({ limit: '5mb', extended: true }));


app.get('*', (req, res) => {
     res.sendFile(`${rootPath}/build/index.html`);
});


const port = isProd ? 80 : 3002;



app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
