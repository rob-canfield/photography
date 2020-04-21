const express = require('express');
const mongoose = require('mongoose');

// import routes
const userRoutes = require('./routes/user')

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

// routes middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});