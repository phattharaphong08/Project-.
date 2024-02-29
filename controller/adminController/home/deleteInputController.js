const addHomedata = require('../../../models/modeladmin/modeladmin');
const path = require ('path');
const fs = require('fs');

// เส้นทางสำหรับการลบข้อมูล "home"
module.exports = (req, res) => {

    const itemId = req.params.id;

    //ค้นหาข้อมูลที่ต้องการลบ
    addHomedata.findById(itemId)
        .then((item) => {
            if (!item) {
                return res.status(404).send('Data not found');
            }
            

    //ลบรูปภาพของรายการ
    const imagePathToDelete = path.join(__dirname, '..','..','..', 'public', 'image', 'imageAdmin', 'homeimg', item.imagehome);
        fs.unlink(imagePathToDelete, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // console.log("File deleted successfully!");
        
        // หลังจากลบไฟล์สำเร็จ ลบข้อมูลจาก MongoDB
        addHomedata.findByIdAndDelete(itemId, { useFindAndModify: false })
        .then(() => {
            res.redirect('/homeAdmin');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
    });
    });


    // addHomedata.findByIdAndDelete(req.params.id, { useFindAndModify: false }).then(result => {
    //     if (!result) {
    //         return res.status(404).send('Data not found');
    //     }
    //     res.redirect('/homeAdmin');
    // }).catch(err => {
    //     console.log(err);
    //     res.status(500).send('Internal Server Error');
    // });
};


// module.exports = (req, res) => {
//     const itemId = req.params.id;

//     // ค้นหาข้อมูลที่ต้องการลบ
//     addHomedata.findById(itemId)
//         .then((item) => {
//             if (!item) {
//                 return res.status(404).send('Data not found');
//             }

//             // รับค่า pathVariable จาก item.image
//             const pathVariable = item.image;

//             // ใช้ path.join โดยมีค่า __dirname เพื่อสร้าง fullPath
//             const fullPath = path.join(__dirname, '..', '..', '..', 'public', 'image', 'imageAdmin', 'homeimg', pathVariable);

//             // ตรวจสอบค่า pathVariable และ fullPath ว่าถูกต้องหรือไม่
//             console.log('pathVariable:', pathVariable);
//             console.log('fullPath:', fullPath);

//             // ลบไฟล์รูปภาพ
//             fs.unlink(fullPath, (err) => {
//                 if (err) {
//                     console.error("Error deleting file:", err);
//                     res.status(500).send('Internal Server Error');
//                     return;
//                 }

//                 // หลังจากลบไฟล์สำเร็จ ลบข้อมูลจาก MongoDB
//                 addHomedata.findByIdAndDelete(itemId, { useFindAndModify: false })
//                     .then(() => {
//                         res.redirect('/homeAdmin');
//                     })
//                     .catch((error) => {
//                         console.error(error);
//                         res.status(500).send('Internal Server Error');
//                     });
//             });
//         });
// };
