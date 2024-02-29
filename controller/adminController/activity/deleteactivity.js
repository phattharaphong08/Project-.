const imageadmins = require('../../../models/modeladmin/modelimage')
const path = require ('path');
const fs = require('fs');


module.exports = (req, res) => {
    const itemIds = req.params.id;
    // console.log(itemIds)

    //ค้นหาข้อมูลที่ต้องการลบ
    imageadmins.findById(itemIds)
        .then((items) => {
            if (!items) {
                return res.status(404).send('Data not found');
            }

    //ลบรูปภาพของรายการ
    const imagePathToDelete = path.join(__dirname, '..', '..', '..', 'public', 'image', 'imageAdmin', 'activityimg',  items.imageput1);
        fs.unlink(imagePathToDelete, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // console.log("File deleted successfully!");
        
        // หลังจากลบไฟล์สำเร็จ ลบข้อมูลจาก MongoDB
        imageadmins.findByIdAndDelete(itemIds, { useFindAndModify: false })
        .then(() => {
            res.redirect('/activityAdmin');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
    });
});
};