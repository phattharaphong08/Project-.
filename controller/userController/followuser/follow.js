const formDatas = require('../../../models/modeluser/modeluser')
const formassist = require('../../../models/modeluser/assistuser')


// module.exports = (req,res) => {
//     formDatas.find().exec((err,doc) => {
//         res.render('follow',{products:doc})
//     })
//     formassist.find().exec((err,doc) => {
//         res.render('follow',{assist:doc})
//     })
// }

module.exports = (req,res) => {
    formDatas.find().exec((err, products) => {
        formassist.find().exec((err, assist) => {
            res.render('follow', { products: products, assist: assist });
        });
    });
}