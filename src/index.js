require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://DarshitJain04:cyotheking@cluster0-wkalv.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', ()=> {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (e)=> {
    console.log('Error connecting to mongo instance' + e);
});

// Whenever a http request is made we basically call the get method on our app

app.get('/', requireAuth, (req, res) =>{
    res.send(`Your email: ${req.user.email}`);
});

// To start your local server

app.listen( 3000, () => {
    console.log('Running on port 3000');
});
