const router = require('express').Router();
const sequelize = require('./db')
const User = sequelize.import('./model')

router.get('/', (request, response) => {
    User.findAll().then(users => {
        response.status(200).json({users: users})
    })
})

router.post('/', (request, response) => {
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

module.exports = router;