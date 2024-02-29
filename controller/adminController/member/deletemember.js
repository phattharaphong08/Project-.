const member = require('../../../models/modeladmin/modelregister');
const path = require ('path');
const fs = require('fs');

// เส้นทางสำหรับการลบข้อมูล
module.exports = (req, res) => {
    const memberId = req.params.id;

    //ค้นหาข้อมูลที่ต้องการลบ
    member.findById(memberId)
        .then((item) => {
            if (!item) {
                return res.status(404).send('Data not found');
            }

    //ลบรูปภาพของรายการ
    const imagePathToDelete = path.join(__dirname, '..','..','..', 'public', 'image', 'imageAdmin', 'Admin',  item.fileAdmin);
        fs.unlink(imagePathToDelete, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // console.log("File deleted successfully!");
        
        // หลังจากลบไฟล์สำเร็จ ลบข้อมูลจาก MongoDB
        member.findByIdAndDelete(memberId, { useFindAndModify: false })
        .then(() => {
            res.redirect('/memberAdmin');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
    });
    });


    // member.findByIdAndDelete(memberId, { useFindAndModify: false }).then(result => {
    //     if (!result) {
    //         return res.status(404).send('Data not found');
    //     }
    //     res.redirect('/memberAdmin');
    // }).catch(err => {
    //     console.log(err);
    //     res.status(500).send('Internal Server Error');
    // });
};