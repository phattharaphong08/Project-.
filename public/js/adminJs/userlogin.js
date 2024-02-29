// // หากคำว่า "admin" อยู่ใน password ให้แสดงปุ่ม "เพิ่มสมาชิก"
// const password = "รหัสผ่านของคุณ"; // คำว่า "admin" อาจจะอยู่ในรหัสผ่านนี้
// const addMemberButton = document.getElementById("addMemberButton");

// if (password.includes("admin")) {
//   addMemberButton.classList.add("show-button"); // เพิ่มคลาส show-button เพื่อแสดงปุ่ม
// }
// ตรวจสอบรหัสผ่าน
// const password = req.body.password; // สมมติว่าคุณมีรหัสผ่านใน req.body

function loginuser () {
  if (showAddMemberButton === true) {
    const popup = document.getElementById('addMemberButton');
    popup.style.display = 'block';
  } else {
    const popup = document.getElementById('addMemberButton');
    popup.style.display = 'none';
  }
}

