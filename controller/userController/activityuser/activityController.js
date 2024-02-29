const eventsadmin = require('../../../models/modeladmin/modelevent')
const imageadmins = require('../../../models/modeladmin/modelimage')

// module.exports = (req,res) => {
//     res.render('acc')
// }

module.exports = (req, res) => {
    imageadmins.find().exec((err, imgactivity) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการค้นหาข้อมูล imageadmins', err);
            return res.status(500).send('เกิดข้อผิดพลาดในการค้นหาข้อมูล imageadmins');
        }

        eventsadmin.find().exec((err, monthData) => {
            // console.log(monthData);
            if (err) {
                console.error('เกิดข้อผิดพลาดในการค้นหาข้อมูล eventsadmin', err);
                return res.status(500).send('เกิดข้อผิดพลาดในการค้นหาข้อมูล eventsadmin');
            }
        const januaryData = monthData.filter(month => month.month === 'มกราคม');
        const februaryData = monthData.filter(month => month.month === 'กุมภาพันธ์');
        const marchData = monthData.filter(month => month.month === 'มีนาคม');
        const aprilData = monthData.filter(month => month.month === 'เมษายน');
        const mayData = monthData.filter(month => month.month === 'พฤษภาคม');
        const juneData = monthData.filter(month => month.month === 'มิถุนายน');
        const julyData = monthData.filter(month => month.month === 'กรกฎาคม');
        const augustData = monthData.filter(month => month.month === 'สิงหาคม');
        const septemberData = monthData.filter(month => month.month === 'กันยายยน');
        const octoberData = monthData.filter(month => month.month === 'ตุลาคม');
        const novemberData = monthData.filter(month => month.month === 'พฤศจิกายน');
        const decemberData = monthData.filter(month => month.month === 'ธันวาคม');

        // console.log(februaryData)
        res.render('acc', {
            imgactivity,
            januaryData,
            februaryData,
            marchData,
            aprilData,
            mayData,
            juneData,
            julyData,
            augustData,
            septemberData,
            octoberData,
            novemberData,
            decemberData
        });
        });
    });
};


