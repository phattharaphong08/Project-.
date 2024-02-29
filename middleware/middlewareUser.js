// const User = require('../models/modeladmin/modelregister')
const middle = require('../controller/adminController/login/loginUserController')


// middlewareUser.js

module.exports = (req, res, next) => {
    const showAddMemberButton = res.locals.showAddMemberButton;
    

    // ตรวจสอบค่า showAddMemberButton และควบคุมการแสดง/ซ่อนปุ่ม
    if (showAddMemberButton === true) {
        // แสดงปุ่ม "เพิ่มสมาชิก"
        console.log('แสดงปุ่ม "เพิ่มสมาชิก"');
    } else {
        // ซ่อนปุ่ม "เพิ่มสมาชิก"
        console.log('ซ่อนปุ่ม "เพิ่มสมาชิก"');
    }
    
    next(); // ไปยัง middleware ถัดไปหรือเส้นทางสุดท้าย
};





