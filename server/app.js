const express = require('express');
const app = express();
const path = require('path');


//app.use(express.static(__dirname + '/cliet/dist/assets'));
app.use('/assets', express.static(path.join(__dirname, '../client/dist/assets')));

app.get('/', (req,res) => {
    console.log('the dirname is: ', __dirname);
    //app.use(express.static('dist'));

    console.log(path.join(__dirname, '../client/dist/index.html'));

    //res.set('Content-Type', 'text/css');

    return res.sendFile(path.join(__dirname, '../client/dist/index.html'));

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});