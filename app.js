const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

// import routes
const userRoutes = require('./routes/user');

require('dotenv').config();

// app
const app = express();

// DB
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
).then(() => console.log('DB Connected'));

// mongoose.connect.on('error', error => {
//     console.log(`DB connection error: ${error.message}`)
// });

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

// routes middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});