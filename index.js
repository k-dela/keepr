const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;
const db = require('./prisma/db');

app.set('view engine', 'ejs');
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

const session = require('express-session');

// Bring it knex for the session store
const KnexSessionStore = require('connect-session-knex')(session);
const Knex = require('knex');
const knex = Knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      },
    },
);

const sessionStore = new KnexSessionStore({
    knex,
    tablename: 'Session',
    createtable: true
});

const sessionConfig = {
    cookie: {
        httpOnly: true,
        maxAge: 86400000, // One day in ms
        sameSite: 'strict',
        secure: false
    },
    name: 'sid',
    resave: false,
    rolling: true,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    store: sessionStore
}

app.use(session(sessionConfig));
// My own routers for different parts of the app
const authRoutes = require('./routes/authRouter')


app.get('/', (req,res) => {
    res.render('home')
});

// Register routers in the app
app.use(authRoutes);

app.listen(PORT, () => console.log('We are live on ', PORT));