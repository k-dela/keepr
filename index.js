const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send('I will make this work no matter what')
});

app.listen(PORT, () => console.log('We are live on ', PORT));