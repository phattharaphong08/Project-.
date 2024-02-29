const multer = require('multer');
const imageadmins = require('../../../models/modeladmin/modelimage');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/image/imageAdmin/activityimg'); // ตำแหน่งที่จัดเก็บไฟล์
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // เปลี่ยนชื่อไฟล์ ป้องกันชื่อซ้ำกัน
    }
});

// เริ่มต้น upload
const uploads = multer({
    storage: storage,
});

const uploadImageactivity = uploads.single('imageput1');

module.exports = (req, res) => {
    uploadImageactivity(req, res, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        let newImage1 = new imageadmins({
            imageput1: req.file.filename
        });

        imageadmins.saveForm(newImage1, (err) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/activityAdmin');
        });
    });
};