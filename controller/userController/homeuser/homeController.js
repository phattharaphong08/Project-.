const addHomedata = require('../../../models/modeladmin/modeladmin')

module.exports = (req,res) => {
    addHomedata.find().exec((err,doc) => {
        res.render('home',{homeadmin:doc})
    })
}
