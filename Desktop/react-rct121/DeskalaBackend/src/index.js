
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const registerController = require('./controllers/register.controller');
const loginController = require('../src/controllers/login.controller');
const studentController = require('../src/controllers/student.controller');

app.use(express.json());
app.use(cors({origin: true, credentials: true}));

const connect = async () => {
    try {
        return mongoose.connect(`mongodb+srv://deskala:deskala@cluster0.3uder.mongodb.net/?retryWrites=true&w=majority`)
    } catch(Error) {
        console.log(Error.message)
    }
}

// app.use('/', (req, res) => { 
//     res.send('This is blog backend server')
// });

app.use('/signup', registerController);
app.use('/signin', loginController);
app.use('/student', studentController);

app.listen(process.env.PORT || 8080, async () => {
    try {
        connect();
        console.log('Listening 8080')
    } catch(err) {
        console.log(err.message)
    }
});