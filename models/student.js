const Sequelize = require('sequelize')
const db = require('../util/database');


const Student = db.define('stud',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    surName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    company:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    shortAddress:{
        type:Sequelize.STRING,
        allowNull:false
    },
    completeAddress:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Student;