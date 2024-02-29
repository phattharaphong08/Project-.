// เรียกใช้งาน mongoose

const mongoose = require('mongoose');

// เชื่อมไปยัง mongoDB

const dbUrl = 'mongodb://127.0.0.1:27017/projectDB';
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  // console.log('Connected to MongoDB!');

  // ตรวจสอบว่ามีฐานข้อมูล 'projectDB' 
  const dbExists = await mongoose.connection.db.admin().listDatabases();
  if (!dbExists.databases.some(db => db.name === 'projectDB')) {
    // ทำการสร้าง 'projectDB' เเละ collection 'sampleCollection'
    await mongoose.connection.db.createCollection('sampleCollection');
    console.log('Created "projectDB" database.');
  }
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// ออกเเบบ Schema

let eventAdmin = mongoose.Schema({

  day: String,
  month: String,
  year: String,
  eventname: String,
  eventdiscription: String
});

// // สร้าง Model สำหรับเก็บข้อมูลเหตุการณ์
// const Event = mongoose.model('Event', eventSchema);

// // เพิ่มข้อมูลเหตุการณ์ให้กับคอลเลกชัน Events
// const addEvent = async (eventData) => {
//   try {
//     const event = new Event(eventData);
//     await event.save();
//     console.log('บันทึกข้อมูลเหตุการณ์เรียบร้อยแล้ว');
//   } catch (error) {
//     console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูลเหตุการณ์', error);
//   }
// };

// สร้าง model

let eventsadmin = mongoose.model('evets', eventAdmin);

module.exports = eventsadmin;

// ออก function สำหรับบันทึกข้อมูล

module.exports.saveForm = function(model,data) {
  model.save(data)
}
