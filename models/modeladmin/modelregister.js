const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

const adminRegisterSchema = new mongoose.Schema({

  fileAdmin: String,
  nameAdmin: String,
  rankAdmin: String,
  emailAdmin: String,
  facebookAdmin: String,
  lineAdmin: String,
  telAdmin: String,
  usernameAdmin: String,
  passwordAdmin: String
});

adminRegisterSchema.pre('save', async function (next) {
  try {
    const user = this;

    // Check if the passwordAdmin field is not empty or undefined
    if (!user.passwordAdmin) {
      return next(new Error('Password is required.'));
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(user.passwordAdmin, salt);

    // Set the hashed password back to the user object
    user.passwordAdmin = hashedPassword;
    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const User = mongoose.model('User', adminRegisterSchema);

module.exports = User;

// //ออก function สำหรับบันทึกข้อมูล
// module.exports.saveForm = function(model,data) {
//   model.save(data)
// }

