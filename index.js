const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;
const db = require('./prisma/db');

app.set('view engine', 'ejs');
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

const session = require('express-session');
const {PrismaSessionStore} = require('@quixo3/prisma-session-store');

const sessionConfig = {
    cookie: {
        httpOnly: true,
        maxAge: 86400000, // One day in ms
        sameSite: 'strict',
        secure: true
    },
    name: 'sid',
    resave: false,
    rolling: true,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    store: new PrismaSessionStore(
        db,
        {
            checkPeriod: 2 * 60 * 1000,  //ms
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
          }
    )
}

// My own routers for different parts of the app
const authRoutes = require('./routes/authRouter')


app.get('/', (req,res) => {
    res.render('signup')
});

// Register routers in the app
app.use(authRoutes);

app.listen(PORT, () => console.log('We are live on ', PORT));