module.exports.index = (req,res) => {
    const userId = req.session.user;
    res.render('home', {id: userId});
}