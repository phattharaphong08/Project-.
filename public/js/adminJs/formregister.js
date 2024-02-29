const form = document.getElementById('myForm')
const imageInput = document.getElementById('file-uploads')
const nameInput = document.getElementById('nameAdmin')
const rankInput = document.getElementById('rankAdmin')
const emailInput = document.getElementById('emailAdmin')
const facebookInput = document.getElementById('facebookAdmin')
const lineInput = document.getElementById('lineAdmin')
const telInput = document.getElementById('telAdmin')
const userInput = document.getElementById('usernameAdmin')
const passInput = document.getElementById('passwordAdmin')




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

//อัพโหลดไฟล์รูป
function uploadFile(input) {
    const value = input.value;
    if (value === '') {
        showerror(input, `กรุณาอัพโหลดไฟล์รูปของ Admin` )
    } else {
        showsuccess(input)
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
function validateRank(input) {
    const value = input.value;
    if (value === '') {
        showerror(input, `กรุณากรอกตำเเหน่ง`);
    } else {
        showsuccess(input)
    }
}
function validateemail(input) {
    const value = input.value;
    if (value === '') {
        showerror(input, `กรุณากรอก E-mail`);
    } else {
        showsuccess(input)
    }
}
function validatefacebook(input) {
    const value = input.value;
    if (value === '') {
        showerror(input, `กรุณากรอก Facebook`);
    } else {
        showsuccess(input)
    }
}
function validateline(input) {
    const value = input.value;
    if (value === '') {
        showerror(input, `กรุณากรอก line`);
    } else {
        showsuccess(input)
    }
}

function validateuser(input) {
    const value = input.value;
    if (value === '') {
        showerror(input, `กรุณากรอก Username`);
    } else {
        showsuccess(input)
    }
}
function validatepass(input) {
    const value = input.value;
    if (value === '') {
        showerror(input, `กรุณากรอก Password`);
    } else {
        showsuccess(input)
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
    validateRank(rankInput)
    validateemail(emailInput)
    validatefacebook(facebookInput)
    validateline(lineInput)
    validatePhoneNumber(telInput)
    validateuser(userInput)
    validatepass(passInput)
    uploadFile(imageInput)


    const isAllValid = checkRequired([nameInput, rankInput, emailInput, facebookInput, lineInput, telInput, userInput, passInput, imageInput]);
    // ตรวจสอบข้อมูลอื่น ๆ และแสดง Popup
    // ตรวจสอบทุกฟิลด์ที่จำเป็นต้องกรอก
    // const isAllValid = checkRequired([nameInput, phoneNumber, problemInput, addressInput, imageInput]);
    if (isAllValid) {
        // ถ้าข้อมูลถูกต้องทั้งหมดให้เปิด popup
        form.submit();
    }
    // if (isAllValid) {
    //   // ถ้าข้อมูลถูกต้องทั้งหมดให้เปิด popup
    //     openPopup();
    // }
      // ถ้าข้อมูลถูกต้องให้ส่งข้อมูลไปยังเซิร์ฟเวอร์
    // form.submit();
})