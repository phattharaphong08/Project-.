const formDatas = require('../../../models/modeluser/modeluser')
const formassist = require('../../../models/modeluser/assistuser')
const formhelp = require('../../../models/modeluser/helpmodel')

// module.exports = (req, res) => {
//     formDatas.find().exec((err,doc) => {
//         res.render('followadmin',{products:doc})
//     })
//     formassist.find().exec((err,doc) => {
//         res.render('followadmin',{assist:doc})
//     })
//     formhelp.find().exec((err,doc) => {
//         res.render('followadmin',{help:doc})
//     })
// }

module.exports = async (req, res) => {
    try {
        const docPromises = [
            formDatas.find().exec(),
            formassist.find().exec(),
            formhelp.find().exec()
        ];

        const [products, assist, help] = await Promise.all(docPromises);

        res.render('followadmin', { products, assist, help });
    } catch (err) {
        console.error(err);
        res.status(500).send('เกิดข้อผิดพลาดในการดึงข้อมูล');
    }
};