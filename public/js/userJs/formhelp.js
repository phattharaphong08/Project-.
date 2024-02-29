const form = document.getElementById('myForm')
const nameInput = document.getElementById('name')
const phoneNumber = document.getElementById('phoneNumber')
const problemInput = document.getElementById('problem')
const addressInput = document.getElementById('address')
const homeInput = document.getElementById('housenumber')
const patientname = document.getElementById('patientname')
const checkInput = document.getElementById('checkbox')

// function การทำงาน show err
function showerror(input,message) {
    const formControl = input.parentElement;
    formControl.className='form-controls error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}
// function การทำงาน show Success
function showsuccess(input) {
    const formControl = input.parentElement;
    formControl.className='form-controls success';

}




//CheckRequired fields
function checkRequired(inputArr) {
    inputArr.forEach((input) => {
    if (input.value.trim() === '' ) {
        showerror(input, `กรุณากรอก ${getFieldName(input)}`)
      // return true
    } else {
        showsuccess(input)
      // return false
    }
    })
}

// ฟังก์ชันตรวจสอบ input ของชื่อ
function isValidName(input) {
    const value = input.value;
  // เช็คว่ามีตัวเลขหรืออักษรพิเศษอื่นๆหรือไม่
    const pattern = /^[A-Za-zก-๙\s]+$/.test(value);
    if (value === '') {
    showerror(input, `กรุณากรอกชื่อ`);
    // return true
    } else if (pattern) {
    showsuccess(input);
    // return false
    } else {
    showerror(input, `กรุณากรอกชื่อให้ถูกต้อง (อนุญาตเฉพาะตัวอักษร)`);
    // return true
    }
}


// ฟังก์ชันตรวจสอบ input ของ id="phoneNumber"
function validatePhoneNumber(input) {
    const value = input.value;
    const isValid = /^[0-9]{3}-[0-9]{7}$/.test(value);

    if (value === '') {
    showerror(input, `กรุณากรอกเบอร์โทรศัพท์`);
    // return true
    } else if (isValid) {
    showsuccess(input);
    // return false
    } else {
    showerror(input, `กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง 0xx-xxxxxxx`);
    // return true
    }
}

function validateProblem(input) {
    const value = input.value;
    if (value === '') {
    showerror(input, `กรุณาเลือกปัญหา`);
    // return true
    } else {
    showsuccess(input)
    // return false
    }
}

function validateAddres(input) {
    const value = input.value;
    if (value === '') {
    showerror(input, `กรุณาเลือกหมู่บ้าน`);
    // return true
    } else {
    showsuccess(input)
    // return false
    }
}

function validateHouseNumber(input) {
    const value = input.value;
    if (value === '') {
    showerror(input, `กรุณากรอกบ้านเลขที่`);
  // return true
    } else {
    showsuccess(input)
  // return false
    }
}
function validateNamePatient(input) {
    const value = input.value;
    if (value === '') {
    showerror(input, `กรุณากรอกชื่อผู้ป่วย`);
    // return true
    } else {
    showsuccess(input)
    // return false
    }
}

function validateCheck(input) {
    if (!input.checked) {
        showerror(input, `**กรุณากดยืนยันเพื่อให้ทาง อสม. เข้าไปดูแลปัญหาภายในบ้าน`);
    }
}

// ตรวจสอบทุกฟิลด์ที่จำเป็นต้องกรอก
function checkRequired(inputArr) {
    let hasEmptyField = false;

    inputArr.forEach((input) => {
    if (input.value.trim() === '' ) {
      // showerror(input);
        hasEmptyField = true;
    } 
    });

  return !hasEmptyField; // คืนค่า true ถ้าไม่มีฟิลด์ที่ว่างเปล่า
}






form.addEventListener('submit', function(e) { 
    e.preventDefault();

    isValidName(nameInput)
    validatePhoneNumber(phoneNumber)
    validateProblem(problemInput)
    validateAddres(addressInput)
    validateHouseNumber(homeInput)
    validateCheck(checkInput)
    validateNamePatient(patientname)

  // ตรวจสอบข้อมูลอื่น ๆ และแสดง Popup
  // ตรวจสอบทุกฟิลด์ที่จำเป็นต้องกรอก
    const isAllValid = checkRequired([nameInput, phoneNumber, problemInput, addressInput, homeInput, checkInput]);

    if (isAllValid) {
    // ถ้าข้อมูลถูกต้องทั้งหมดให้เปิด popup
    openPopup();
    }
    // ถ้าข้อมูลถูกต้องให้ส่งข้อมูลไปยังเซิร์ฟเวอร์
  // form.submit();
})




// เปิด Popup
function openPopup() {
    document.getElementById('myPopup').style.display = 'block';
}


// เมื่อคลิกที่ปุ่มปิดใน Popup ให้ปิด Popup
function closePopup() {
    document.getElementById('myPopup').style.display = 'none';
  const myForm = document.getElementById('myForm'); // แทน 'myForm' ด้วย ID ของฟอร์มของคุณ
  // myForm.reset();
    location.reload();
}

function submitForm() {
  // ทำการ submit ฟอร์ม
    document.getElementById('myForm').submit();
}


