// เรียกใช้งาน mongoose

const mongoose = require('mongoose');

// เชื่อมไปยัง mongoDB

const dbUrl = 'mongodb://127.0.0.1:27017/projectDB';
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to MongoDB!');

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

let image1Schema = mongoose.Schema({
  imageput1: String
});

// สร้าง model

// let imageadmin = mongoose.model('activityimg', (image1Schema,image2Schema));
let Image1Model = mongoose.model('activityimg', image1Schema);



// module.exports = imageadmin;
module.exports = Image1Model;

// ออก function สำหรับบันทึกข้อมูล

module.exports.saveForm = function(model,data) {
  model.save(data)
}
