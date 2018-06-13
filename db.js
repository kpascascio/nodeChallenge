const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodeChallenge', 'postgres', 'password here', {
    dialect: 'postgres'
})

sequelize.authenticate().then(() => {
    console.log('PG connected')
})

module.exports = sequelize;