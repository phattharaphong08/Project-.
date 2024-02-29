// หาความสูงสูงสุดของปี
const maxYear = new Date().getFullYear() + 10; // สามารถปรับปีตามที่คุณต้องการ

// สร้างตัวเลือกปี
const yearDropdown = document.getElementById('yearDropdown');
for (let year = maxYear; year >= 1900; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.text = year;
    yearDropdown.appendChild(option);
}

// สร้างตัวเลือกวันที่
const dayDropdown = document.getElementById('dayDropdown');
for (let day = 1; day <= 31; day++) {
    const option = document.createElement('option');
    option.value = day;
    option.text = day;
    dayDropdown.appendChild(option);
}