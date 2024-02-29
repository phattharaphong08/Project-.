const formDatas = require('../../../models/modeluser/modeluser');
const path = require ('path');
const fs = require('fs');

// เส้นทางสำหรับ delete formDatas และลบไฟล์รูปภาพ
module.exports = (req, res) => {
    const itemId = req.params.id;

    //ค้นหาข้อมูลที่ต้องการลบ
    formDatas.findById(itemId)
        .then((item) => {
            if (!item) {
                return res.status(404).send('Data not found');
            }

    //ลบรูปภาพของรายการ
    const imagePathToDelete = path.join(__dirname, '..','..','..', 'public', 'image', 'userImage' ,  item.image);
        fs.unlink(imagePathToDelete, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // console.log("File deleted successfully!");
        
        // หลังจากลบไฟล์สำเร็จ ลบข้อมูลจาก MongoDB
    formDatas.findByIdAndDelete(itemId, { useFindAndModify: false })
        .then(() => {
            res.redirect('/followAdmin');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
    });
    });
};