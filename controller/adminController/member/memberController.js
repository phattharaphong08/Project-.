const member = require('../../../models/modeladmin/modelregister')

module.exports = (req,res) => {
    member.find().exec((err,doc) => {
        res.render('member', {member:doc})
    })
};
// // ตรวจสอบรหัสผ่าน
// const password = req.body.password; // สมมติว่าคุณมีรหัสผ่านใน req.body

// if (password.includes('admin')) {
//   res.locals.showAddMemberButton = true;
// } else {
//   res.locals.showAddMemberButton = false;
// }

// // ส่งข้อมูลไปยังหน้า EJS
// res.render('your_ejs_template', { loggedIn: true });

// module.exports = (req, res) => {
//     member.find().exec((err, doc) => {
//         // ตรวจสอบรหัสผ่าน
//         const passwordAdmin = req.body.passwordAdmin; // สมมติว่าคุณมีรหัสผ่านใน req.body

//         if (passwordAdmin && passwordAdmin.includes('admin')) {
//             res.locals.showAddMemberButton = true;
//             // console.log(showAddMemberButton)
//         } else {
//             res.locals.showAddMemberButton = false;
//         }
        

//         // ส่งข้อมูลไปยังหน้า EJS
//         res.render('member', { loggedIn: true, member: doc });
//     });
// };