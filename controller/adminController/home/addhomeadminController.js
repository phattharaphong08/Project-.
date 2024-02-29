const multer = require('multer');
const addHomedata = require('../../../models/modeladmin/modeladmin'); // เพิ่มบรรทัดนี้

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/image/imageAdmin/homeimg'); // ตำแหน่งที่จัดเก็บไฟล์
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() +  ".jpg"); // เปลี่ยนชื่อไฟล์ ป้องกันชื่อซ้ำกัน
    }
});

// เริ่มต้น upload
const upload = multer({
    storage: storage
})

// Middleware function สำหรับการอัปโหลดไฟล์รูปภาพ
const uploadImage = upload.single('imagehome');

// Controller function สำหรับการเพิ่มข้อมูล "home" และอัปโหลดรูปภาพ
module.exports = (req, res) => {
    uploadImage(req, res, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        
        // คำสั่งที่จะทำหลังจากอัปโหลดไฟล์เสร็จสิ้น
        let homedata = new addHomedata({
            namehome: req.body.namehome,
            detailhome: req.body.detailhome,
            imagehome: req.file.filename
        });

        addHomedata.saveForm(homedata, (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            } else {
                res.redirect('/homeAdmin');
            }
        });
    });
};
