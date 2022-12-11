const connectToMongo= require('./db');
const mongoose = require('mongoose');
const express = require('express')

mongoose.set('strictQuery', false);
connectToMongo();
const port = 3000
const app = express();
app.use(express.json())
//available routes
app.use('/api/form',require('./routes/form')) 

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
// })


app.use(express.static(path.join(__dirname, 'lib')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

let server = app.listen(port, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });