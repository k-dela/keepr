const db = require('../prisma/db');
const bcrypt = require('bcryptjs');

const {userSchema} = require('../utils/validators');

module.exports.new = (req,res) => {
    res.render('signup')
};

module.exports.create = async (req,res) => {
    const {email, password} = req.body;

    const {value, error} = userSchema.validate({email, password});

    // Something like this...
    if(error) return res.render('signup', {errors: error});

    try{
        const existingUser = await db.user.findUnique({
            where: {
                email
            }
        });

        if(existingUser) return res.render('signup', {errors: 'An account with that email already exists'});

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.user.create({
            data:{
                email,
                password: hashedPassword
            }
        });

        res.redirect('/login');

    }catch(error){
        console.error(error)
    }
};