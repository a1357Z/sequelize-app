const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database')

const User = sequelize.define('user',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    }
})

const userProfile = sequelize.define('profile',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING
    },
    contact: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    married: {
        type: DataTypes.BOOLEAN
    },
    userId: {
        type: DataTypes.INTEGER
    }
})
//synchronize the table
User.sync({alter: true}) //alter makes sure that if we make any change in the schema it is updated in the actual sql table
userProfile.sync({alter: true})
//

// form the relationships
User.hasOne(userProfile,{
    onDelete: "cascade", // this will delete the row in userprofile if the corresponding user is deleted
    hooks: true
})

module.exports = {
    User, userProfile
}