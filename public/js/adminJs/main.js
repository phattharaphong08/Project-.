// เรียกใช้ฟังก์ชันเพื่อตรวจสอบสถานะการ login
function checkLoginStatus() {
    // ในตัวอย่างนี้เราจะใช้ตัวแปร isLoggedIn เป็นตัวอย่าง
    const isLoggedIn = true; // สมมติว่าผู้ใช้ login แล้ว

    // ตรวจสอบสถานะการ login
    if (isLoggedIn) {
        // ถ้า login แล้ว แสดงข้อความ "ออนไลน์"
        document.getElementById('status-message').textContent = 'ออนไลน์';
    } else {
        // ถ้ายังไม่ login แสดงข้อความ "ออฟไลน์"
        document.getElementById('status-message').textContent = 'ออฟไลน์';
    }
}

// เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บ
window.onload = checkLoginStatus;