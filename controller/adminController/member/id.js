const datamembers = require('../../../models/modeladmin/modelregister')

// module.exports = (req,res) => {
//     // datamembers.find().exec((err,doc) => {
//     //     res.render('member', {memberuser:doc})
//     // })
    
//     const product_id = req.params.product_id
//     if (problem_id === 'favicon.ico') {
//         return res.status(200).send();
//     }

//     if (isNaN(problem_id)) {
//         return res.status(400).send('Invalid problem ID');
//     }
//     // console.log(product_id)
//     datamembers.findOne({_id:product_id}).exec((err,doc) => {
//         if (err) {
//             // จัดการข้อผิดพลาด
//             console.error(err);
//             return res.status(500).send('Internal Server Error');
//         }
//         res.render('member', {memberuser:doc})
//     })
// };

module.exports = (req, res) => {
    const product_id = req.params.id;
    // console.log(product_id)
    // ตรวจสอบค่า product_id ว่าถูกส่งมาให้ถูกต้องหรือไม่
    if (product_id === 'favicon.ico') {
        return res.status(200).send();
    }
    
    // if (isNaN(product_id)) {
    //     return res.status(400).send('Invalid product ID');
    // }

    datamembers.findOne({ _id: product_id }).exec((err, doc) => {
        if (err) {
            // จัดการข้อผิดพลาด
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        if (!doc) {
            // ถ้าไม่พบข้อมูล
            return res.status(404).send('User not found'); // เพิ่มข้อความที่คุณต้องการแสดง
        }

        // console.log(doc)

        res.render('member', { memberuser: doc });
    });
};





