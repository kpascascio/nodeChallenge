
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        age: DataTypes.INTEGER
    })
    return User
}