const express = require('express');
const app = express();

const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'));

mongoose.connect.on('error', error => {
    console.log(`DB connection error: ${error.message}`)
});

app.get('/', (request, response) => {
    response.send('hello from node');
});

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});