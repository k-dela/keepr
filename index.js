const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

// My own routers for different parts of the app
const authRoutes = require('./routes/authRouter')


app.get('/', (req,res) => {
    res.render('signup')
});

// Register routers in the app
app.use(authRoutes);

app.listen(PORT, () => console.log('We are live on ', PORT));