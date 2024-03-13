//จัดการ Routing
const express = require ('express')
const router = express.Router()

const path = require ('path')

// Controllers
/*  ==================== HomeAdmin ==================== */ 
const homeAdminController = require('../controller/adminController/home/homeadminController') 
const addNewHomeAdminController = require('../controller/adminController/home/addhomeadminController')
const deleteIDhomeController = require('../controller/adminController/home/deleteInputController')
/*  ==================== followAdmin ==================== */ 
const followAdminController = require('../controller/adminController/follow/followadminController')
const deletefollowController = require('../controller/adminController/follow/deleteformdataController')
const editfollowController = require('../controller/adminController/follow/editController')
const updatefollowController = require('../controller/adminController/follow/updateformController')
const deleteformassist = require('../controller/adminController/follow/deleteformassistController')
const deleteformhelp = require('../controller/adminController/follow/deleteformhelpController')
const editformassistController = require('../controller/adminController/follow/editassistController')
const updateformassistController = require('../controller/adminController/follow/updateformassistController')
const editformhelpController = require('../controller/adminController/follow/editformhelpController')
const updateformhelpController = require('../controller/adminController/follow/updateformhelpController')
/*  ==================== activityAdmin ==================== */ 
const activityadminController = require('../controller/adminController/activity/activityadmin')
const eventactivityController = require('../controller/adminController/activity/eventactivity')
const imageactivityController = require('../controller/adminController/activity/imagenewactivity')
const deleteactivityController = require('../controller/adminController/activity/deleteactivity')
/*  ==================== activityAdmin event ==================== */ 
const deletemonth = require('../controller/adminController/activityevent/deletemonth')
/*  ==================== memberAdmin ==================== */
const memberController = require('../controller/adminController/member/memberController')
const deleteMember = require('../controller/adminController/member/deletemember')
// const idmember = require('../controller/adminController/member/id')
/*  ==================== officerAdmin ==================== */
const officerController = require('../controller/adminController/officer/officerController')
/*  ==================== loginAdmin ==================== */ 
const loginUserController = require('../controller/adminController/login/loginUserController')
const loginController = require('../controller/adminController/login/loginController')
/*  ==================== addmemberAdmin ==================== */ 
const addmemberController = require('../controller/adminController/addmember/addmemberController')
const registerController = require('../controller/adminController/addmember/registerController')
/*  ==================== logout ==================== */ 
const logoutController = require('../controller/adminController/logout/logoutController')


/*  ==================== Middleware ==================== */ 
const redirectifAuth = require('../middleware/redirectifAuth')
const authMiddleware = require('../middleware/authMiddleware')
const middlewareUser = require('../middleware/middlewareUser')

/*  ==================== HomeAdmin ==================== */ 
router.get('/homeAdmin', authMiddleware, homeAdminController) // มี Middleware "authMiddleware"
router.post('/addhome', addNewHomeAdminController)
router.get('/deleteAddHomedata/:id', deleteIDhomeController)
/*  ==================== followAdmin ==================== */ 
router.get('/followAdmin', authMiddleware, followAdminController)
router.get('/deleteFormhelp/:id', deleteformhelp)
router.get('/deleteFormDatas/:id', deletefollowController)
router.get('/deleteformassis/:id', deleteformassist) 
router.post('/edit', editfollowController)
router.post('/editformassist', editformassistController)
router.post('/editformhelp', editformhelpController)
router.post('/update', updatefollowController)
router.post('/updateformassist', updateformassistController)
router.post('/updateformhelp', updateformhelpController)
/*  ==================== activityAdmin ==================== */ 
router.get('/activityAdmin', authMiddleware, activityadminController)
router.post('/events', eventactivityController)
router.post('/inputImage1', imageactivityController)
router.get('/deleteimageadmins/:id', deleteactivityController)
/*  ==================== activityAdmin event ==================== */ 
router.get('/deletejanuary/:id', deletemonth)
router.get('/deletefebruary/:id', deletemonth)
router.get('/deletemarch/:id', deletemonth)
router.get('/deleteapril/:id', deletemonth)
router.get('/deletemay/:id', deletemonth)
router.get('/deletejune/:id', deletemonth)
router.get('/deletejuly/:id', deletemonth)
router.get('/deleteaugust/:id', deletemonth)
router.get('/deleteseptember/:id', deletemonth)
router.get('/deleteoctober/:id', deletemonth)
router.get('/deletenovember/:id', deletemonth)
router.get('/deletedecember/:id', deletemonth)
/*  ==================== memberAdmin ==================== */
router.get('/memberAdmin', authMiddleware, middlewareUser, memberController)
router.get('/deletemember/:id', deleteMember)
// router.get('/:id', idmember)
/*  ==================== officerAdmin ==================== */
router.get('/officerAdmin', authMiddleware, officerController)
/*  ==================== loginAdmin ==================== */ 
router.get('/loginAdmin', redirectifAuth, loginController)
router.post('/user/login', loginUserController) 
/*  ==================== addmemberAdmin ==================== */ 
router.get('/addmemberAdmin', authMiddleware, addmemberController)
router.post('/register', registerController)
/*  ==================== logout ==================== */ 
router.get('/logout', logoutController)


// ระบุตัวเก็บ file รูป
router.get('/public/image/อสม.1.png', (req, res) => {
    res.setHeader('Content-Type', 'image/jpeg'); // ระบุ Content-Type ที่ถูกต้องสำหรับไฟล์ภาพ JPEG
    res.sendFile(path.join(__dirname, '..', 'public', 'image', 'image.jpg'));
});
router.get('/public/image/kaopansa65.png', (req, res) => {
    res.setHeader('Content-Type', 'image/jpeg'); // ระบุ Content-Type ที่ถูกต้องสำหรับไฟล์ภาพ JPEG
    res.sendFile(path.join(__dirname, '..', 'public', 'image', 'image.jpg'));
});

router.get('/public/image/imageAdmin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'image', 'imageAdmin'));
});


module.exports = router