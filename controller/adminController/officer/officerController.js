const User = require('../../../models/modeladmin/modelregister')

module.exports = async (req,res) => {

    let UserData = await User.findById(req.session.userId)
    res.render('officer', {UserData: UserData})
}