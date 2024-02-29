const User = require('../models/modeladmin/modelregister')

module.exports = (req, res, next) => {
    User.findById(req.session.userId).then((user) => {
        if (!user) {
            return res.redirect('/loginAdmin')
        }
        // console.log('User logged in successfully')
        next()
    }).catch(error => {
        console.error(error)
    })
}