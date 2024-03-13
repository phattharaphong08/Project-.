//จัดการ Routing
const express = require('express');
const router = express.Router()
const path = require('path');


// Controllers
/*  ==================== Home ==================== */ 
const homeUserController = require('../controller/userController/homeuser/homeController')
/*  ==================== form ==================== */ 
const formreport = require('../controller/userController/formuser/formreport')
const report = require('../controller/userController/formuser/reportController')
const formassist = require('../controller/userController/formuser/formassist')
const formhelppatient = require('../controller/userController/formuser/helpPatientController')

/*  ==================== follow ==================== */ 
const follow = require('../controller/userController/followuser/follow')
const problem = require('../controller/userController/followuser/problem')
/*  ==================== activity ==================== */ 
const activity = require('../controller/userController/activityuser/activityController');
/*  ==================== conyact ==================== */ 
const conyact = require('../controller/userController/conyactuser/conyact');
const assistController = require('../controller/userController/formuser/assistController');
const helpformdata = require('../controller/userController/formuser/formhelp')


router.get('/activity', activity)
router.get('/conyact', conyact)
/*  ==================== Home ==================== */ 
router.get('/home', homeUserController)
/*  ==================== form ==================== */ 
router.get('/formhelppatient', formhelppatient)
router.get('/formreport', formreport)
router.get('/formassist', formassist)
router.post('/help', helpformdata)
router.post('/insert', report)
router.post('/assist', assistController)
/*  ==================== follow ==================== */
router.get('/follow', follow)
router.get('/:IDscript', problem)


router.get('/public/image/imageAdmin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'image', 'imageAdmin'));
});

// ระบุตัวเก็บ file รูป
router.get('/public/image/userImage', (req, res) => {
    res.setHeader('Content-Type', 'image/jpeg'); // ระบุ Content-Type ที่ถูกต้องสำหรับไฟล์ภาพ JPEG
    res.sendFile(path.join(__dirname, '..', 'public', 'image', 'userImage' , 'image.jpg'));
});


module.exports = router


