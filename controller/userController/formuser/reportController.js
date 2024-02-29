const multer = require('multer')
const formDatas = require('../../../models/modeluser/modeluser')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/image/userImage'); // ตำแหน่งที่จัดเก็บไฟล์
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() +  ".jpg"); // เปลี่ยนชื่อไฟล์ ป้องกันชื่อซ้ำกัน
    }
});


// เริ่มต้น upload
const upload = multer({
    storage:storage
})

const uploadData = upload.single('image1')

module.exports = (req,res) => {
    //date
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // เดือนจะเริ่มจาก 0 เพื่อให้เริ่มจาก 1 ให้เพิ่ม 1
    let year = currentDate.getFullYear();

    // ตรวจสอบเพื่อให้วันที่และเดือนเป็นตัวเลข 2 หลัก
    if (day < 10) {
    day = '0' + day;
    }

    if (month < 10) {
    month = '0' + month;
    }

    let formattedDate = day + '/' + month + '/' + year;
    // console.log(formattedDate);
    uploadData(req, res, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // console.log(req.file);
        let data = new formDatas ({
            // เก็บเวลาปัจจุบัน
            IDscript: new Date(),
            Date: formattedDate,
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            problem: req.body.problem,
            address: req.body.address,
            moo: req.body.moo,
            subdistrict: req.body.subdistrict,
            district: req.body.district,
            province: req.body.province, 
            description: req.body.description,
            statuss: req.body.statuss,
            descriptionstatuss: req.body.descriptionstatuss,
            image: req.file.filename
        }) 

        formDatas.saveForm(data,(err) => {
            if(err) console.log(err)   
            res.redirect('/formreport') 
        })
    }) 
}