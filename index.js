const express = require('express');
const app = express(); 
const Sequelize = require('sequelize');
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const sequelize = new Sequelize('nodeChallenge', 'postgres', 'your password here', {
    dialect: 'postgres'
})

sequelize.authenticate().then(() => {
    console.log('PG connected')
})

const User = sequelize.define('user', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    age: Sequelize.INTEGER 
})

app.get('/api/user', (request, response) => {
    User.findAll().then(users => {
        response.status(200).json({users: users})
    })
})

app.post('/api/user', (request, response) => {
    console.log(request.body.firstName)
    User.create({
        first_name: request.body.firstName,
        last_name: request.body.lastName,
        age: request.body.age
    }).then((userCreationSuccessObject) => {
        response.status(200).json({
            message: 'Well done',
            userCreated: userCreationSuccessObject
        })
    })
})

sequelize.sync();

app.listen(3000, () => {
    console.log('The server is working!')
})