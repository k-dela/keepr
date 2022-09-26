const db = require('../prisma/db');
const bcrypt = require('bcryptjs');

module.exports.new = (req,res) => {
    res.render('login');
}

module.exports.create = async (req,res) => {
    const {email, password} = req.body;

    console.log(email, password);

    try{
        console.log('this ran?')
        const user = await db.user.findUnique({
            where: {
                email
            }
        });
        console.log(user);
        if(!user) return res.json({m: 'Invalid credentials'});

        const correctPassword = await bcrypt.compare(password, user.password);
        if(!correctPassword) return res.json({m: 'Invalid credentials'});

        
    }catch(error) {
        console.error(error);
    }
}