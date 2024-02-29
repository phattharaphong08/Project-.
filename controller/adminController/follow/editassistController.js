const formassist = require('../../../models/modeluser/assistuser')


//เรียกข้อมูลจาก form admin
module.exports = (req,res) => {
    const editIDscript = req.body.editIDscript
    // console.log(editIDscript)  //ตรวจสอบรหัสของ  editIDscript

    formassist.findOne({IDscript:editIDscript })
    .then(doc => {
        if (!doc) {
            return res.status(404).send('not found');
        }
        // console.log(doc)
        res.render('editformassist', { problemData: doc });
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
};