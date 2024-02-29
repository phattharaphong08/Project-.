const bcrypt = require('bcrypt')
const User = require('../../../models/modeladmin/modelregister')

module.exports = (req,res) => {
    const { usernameAdmin, passwordAdmin } = req.body

    User.findOne({usernameAdmin: usernameAdmin}).then((user) => {
        console.log(user)

        if (user) {
            let cmp = bcrypt.compare(passwordAdmin, user.passwordAdmin).then((match) => {
                if (match) {
                    req.session.userId = user._id
                    res.redirect('/homeAdmin')
                    if (passwordAdmin.includes('admin')) {
                        showAddMemberButton = true
                        console.log(showAddMemberButton)
                        // next()
                    } else {
                        showAddMemberButton = false
                        console.log(showAddMemberButton)
                        // next()
                    }
                    // next()
                } else {
                    res.redirect('/loginAdmin')
                }
            })
        } else {
            res.redirect('/loginAdmin')
        }
    })
}