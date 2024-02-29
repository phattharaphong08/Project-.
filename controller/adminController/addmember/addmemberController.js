module.exports = (req,res) => {
    res.render('addmember', {
        errors: req.flash('validationErrors')
    })
}