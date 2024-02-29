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
let assistSchema = mongoose.Schema({
    IDscript: Number,
    Date: String,
    name: String,
    phonNumber: Number,
    problem: String,
    discriotion1: String,
    address: String,
    housenumber: String,
    moo: Number,
    subdistrict: String,
    district: String,
    province: String,
    description: String,
    statuss: Number,
    descriptionstatuss: String,
    checkbox: String
});



// สร้าง model
let assistform = mongoose.model('Formassist_DB', assistSchema);


module.exports = assistform;

//ออก function สำหรับบันทึกข้อมูล
module.exports.saveForm = function(model,data) {
    model.save(data)
}
