const formDatas = require('../../../models/modeluser/modeluser')

module.exports = (req,res) => {

    const update_id = req.body.update_id

    // console.log(req.file);
    let data = ({
        // ข้อมูลใหม่
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
    }) 
    formDatas.findByIdAndUpdate(update_id,data,{useFindAndModify:false}).exec(err => {
        if (err) {
            console.error(err);
            // ทำการจัดการกับข้อผิดพลาด และส่งข้อความแจ้งเตือนให้ผู้ใช้
            res.status(500).send("เกิดข้อผิดพลาดในการอัปเดตข้อมูล");
        } else {
            res.redirect('/followAdmin');
        }
        // res.redirect('/followAdmin')
    })
};