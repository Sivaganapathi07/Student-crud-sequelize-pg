const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database.js');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Origin','GET,POST,PUT,DELETE');
    next();
})


//Test route
app.get('/',(req,res,next)=>{
    res.send('Hello world');
})

//CRUD Routes
app.use('/stud', require('./routes/student.js'));

//error handling
app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message:message});
})


//sync database
sequelize
    .sync()
    .then(result =>{
        console.log('Database connected');
        app.listen(3000);
    })
    .catch(err=>console.log(err));