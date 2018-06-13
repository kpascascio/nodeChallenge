const express = require('express');
const app = express(); 
const bodyParser = require('body-parser')
const sequelize = require('./db')
const router = require('./controller')

app.use(bodyParser.json())
app.use('/api/user', router)
sequelize.sync();

app.listen(3000, () => {
    console.log('The server is working!')
})