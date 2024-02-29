const formhelp = require('../../../models/modeluser/helpmodel')


//เรียกข้อมูลจาก form admin
module.exports = (req,res) => {
    const editIDscript = req.body.editIDscript
    // console.log(editIDscript)  //ตรวจสอบรหัสของ  editIDscript

    formhelp.findOne({IDscript:editIDscript })
    .then(doc => {
        if (!doc) {
            return res.status(404).send('not found');
        }
        // console.log(doc)
        res.render('editformhelp', { problemData: doc });
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
};