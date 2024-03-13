const express = require('express')
const path = require('path')
const adminapp = express()
const userapp = express()
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const flash = require('express-flash');
const expressSession = require('express-session')

global.loggedIn = null

userapp.use(express.urlencoded({ extended: true }))

adminapp.use(express.urlencoded({ extended: true }))

adminapp.use(flash())
adminapp.use(expressSession({
    secret: "node secret",
    resave: false, // ปิดการใช้งาน resave
    saveUninitialized: false // ปิดการใช้งาน saveUninitialized
}))
adminapp.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    next()
})

// เส้นทางสำหรับผู้ใช้ทั่วไป
userapp.set('views',path.join(__dirname , 'views/user'))
userapp.set('view engine','ejs')
userapp.use(userRoutes)

// เส้นทางสำหรับผู้ดูแลระบบ
adminapp.set('views', path.join(__dirname, 'views/admin'))
// adminapp.set('views', path.join(__dirname, 'views/admin/activity'))
adminapp.set('view engine', 'ejs')
adminapp.use(adminRoutes) // เพิ่มเส้นทาง '/admin' สำหรับผู้ดูแลระบบ


userapp.use(express.static(path.join(__dirname , 'public')))
// ระบุให้ Express ใช้ middleware เพื่อจัดการไฟล์ CSS
userapp.use('/public/css/user', express.static(path.join(__dirname, 'public', 'css', 'user')));
// ระบุให้ Express ใช้ middleware เพื่อจัดการไฟล์ JS
userapp.use('/public/js/userJs', express.static(path.join(__dirname, 'public', 'js', 'userJs')));
// userapp.use('/user', userRoutes)

adminapp.use(express.static(path.join(__dirname, 'public')));
// ระบุให้ Express ใช้ middleware เพื่อจัดการไฟล์ CSS
adminapp.use('/public/css/admin', express.static(path.join(__dirname, 'public', 'css', 'admin')));
// ระบุให้ Express ใช้ middleware เพื่อจัดการไฟล์ JS
adminapp.use('/public/js/adminJs', express.static(path.join(__dirname, 'public', 'js', 'adminJs')));

adminapp.use('/admin', adminRoutes)

adminapp.listen(8080, () => {
    console.log("Admin server is running on port 8080!");
});

userapp.listen(8081, () => {
    console.log("User server is running on port 8081!");
});