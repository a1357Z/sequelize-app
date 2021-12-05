const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database')

const User = sequelize.define('user',{
    name: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    profileId: {
        type: DataTypes.STRING
    }
})

const userProfile = sequelize.define('profile',{
    email: {
        type: DataTypes.STRING
    },
    contact: {
        type: DataTypes.INTEGER
    },
    address: {
        type: DataTypes.STRING
    }
})
//synchronize the table
User.sync({ alter: true })
userProfile.sync({alter: true})

// form the relationships
userProfile.hasOne(User,{
    foreignKey: 'profileId'
})
User.belongsTo(userProfile)

module.exports = {
    User, userProfile
}