const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const currentMonthHeader = document.getElementById('current-month');
const calendarBody = document.getElementById('calendar-body');

// รายการเดือนของปี
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// ปุ่มเดือนก่อนหน้า
prevMonthButton.addEventListener('click', () => {
    showPreviousMonth();
});

// ปุ่มเดือนถัดไป
nextMonthButton.addEventListener('click', () => {
    showNextMonth();
});

// ฟังก์ชันแสดงเดือนก่อนหน้า
function showPreviousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentYear--;
        currentMonth = 11; // เมื่อเดือนก่อนหน้าคือธันวาคม
    }
    generateCalendar(currentYear, currentMonth);
}

// ฟังก์ชันแสดงเดือนถัดไป
function showNextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentYear++;
        currentMonth = 0; // เมื่อเดือนถัดไปคือมกราคม
    }
    generateCalendar(currentYear, currentMonth);
}

// ฟังก์ชันสร้างปฏิทินสำหรับเดือนและปีที่กำหนด
function generateCalendar(year, month) {
    // เขียนโค้ดสร้างปฏิทินเหมือนที่ก่อนหน้า
    // ...
}

// กำหนดเดือนและปีปัจจุบัน
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

// แสดงปฏิทินเริ่มต้น
generateCalendar(currentYear, currentMonth);
// Function to generate the calendar for a specific month and year
function generateCalendar(year, month) {
    // Clear the existing calendar
    calendarBody.innerHTML = '';

    // Get the first day of the month
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Display the current month and year
    currentMonthHeader.textContent = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(firstDay);

    // Create the calendar table
    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDay.getDay()) || date > daysInMonth) {
                const cell = document.createElement('td');
                row.appendChild(cell);
            } else {
                const cell = document.createElement('td');
                cell.textContent = date;
                if (year === new Date().getFullYear() && month === new Date().getMonth() && date === new Date().getDate()) {
                    cell.classList.add('today');
                }
                row.appendChild(cell);
                date++;
            }
        }
        calendarBody.appendChild(row);
    }
}

// Initial calendar
const today = new Date();
generateCalendar(today.getFullYear(), today.getMonth());

// Event listeners for changing months
prevMonthButton.addEventListener