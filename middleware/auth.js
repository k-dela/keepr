const requireUser = (req,res,next) => {
    if(req.session.user){
        return next();
    }

    return res.redirect('/login'); // Maybe send flash message
}

module.exports = {requireUser};