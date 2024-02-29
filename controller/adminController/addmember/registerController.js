const User = require('../../../models/modeladmin/modelregister');
const multer = require('multer');

// จัดเก็บไฟล์รูป
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './public/image/imageAdmin/Admin'); // ตำแหน่งที่จัดเก็บไฟล์
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() +  ".jpg"); // เปลี่ยนชื่อไฟล์ ป้องกันชื่อซ้ำกัน
  }
});

// เริ่มต้น upload
const uploadImages = multer({
  storage: storage
})

// Middleware function สำหรับการอัปโหลดไฟล์รูปภาพ
const fileAdmins = uploadImages.single('fileAdmin');

// Middleware function สำหรับการอัปโหลดไฟล์รูปภาพ
module.exports = (req, res) => {
  fileAdmins(req, res, (err) => { // ใช้ uploadfile แทน uploadImages
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const newUser = new User({
      fileAdmin: req.file.filename,
      nameAdmin: req.body.nameAdmin,
      rankAdmin: req.body.rankAdmin,
      emailAdmin: req.body.emailAdmin,
      facebookAdmin: req.body.facebookAdmin,
      lineAdmin: req.body.lineAdmin,
      telAdmin: req.body.telAdmin,
      usernameAdmin: req.body.usernameAdmin,
      passwordAdmin: req.body.passwordAdmin
    });

    if (!newUser.passwordAdmin) {
      return res.status(400).send('Password is required.');
    }

    newUser.save((err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.redirect('/memberAdmin');
      }
    });
  });
};

