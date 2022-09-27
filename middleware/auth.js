// Use to protect routes
const requireUser = (req,res,next) => {
    if(req.session.user){
        return next();
    }

    return res.redirect('/login'); // Maybe send flash message
}

// Use to make login and signup not accesible when user is logged in
const checkForUser = (req,res, next) => {
    if(req.session.user){
        return res.redirect('/');
    }

    return next();
}

module.exports = {requireUser, checkForUser};