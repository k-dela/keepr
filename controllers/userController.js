const db = require('../prisma/db');

module.exports.new = (req,res) => {
    res.render('signup')
};

module.exports.create = async (req,res) => {
    // const {email, password} = req.body;
    // console.log(email,password);
    console.log(req.body);
};