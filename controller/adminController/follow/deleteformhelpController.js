const formhelp = require('../../../models/modeluser/helpmodel');

// เส้นทางสำหรับการลบข้อมูล
module.exports = (req, res) => {
    formhelp.findByIdAndDelete(req.params.id, { useFindAndModify: false }).then(result => {
        if (!result) {
            return res.status(404).send('Data not found');
        }
        res.redirect('/followAdmin');
    }).catch(err => {
        console.log(err);
        res.status(500).send('Internal Server Error');
    });
};