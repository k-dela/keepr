const db = require('../prisma/db');

module.new = (req,res) => {
    res.render('signup')
};

module.create = async (req,res) => {
    const {email, password} = req.body;
    console.log(email,password);
};