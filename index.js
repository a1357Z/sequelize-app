const express = require('express')
const app = express();
const controller = require('./controller')
require('./model')
require('./database')
app.use(express.json());

app.post('/create-user', controller.createUser)

app.listen(3000, (err) => {
    if(err)console.log(err)
    else console.log('listening on port 3000');
})