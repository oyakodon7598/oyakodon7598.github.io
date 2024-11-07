let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // ซ่อนทุกภาพ
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }  // รีเซ็ตกลับไปที่ภาพแรก

    slides[slideIndex - 1].style.opacity = 1;  // แสดงภาพที่ตรงกับ slideIndex

    setTimeout(showSlides, 5000);  // เปลี่ยนภาพทุกๆ 3 วินาที
}

// เรียกใช้งานฟังก์ชันเริ่มต้น
showSlides();

function showDropdown() {
    document.querySelector('.dropdown-content').style.display = 'block';
}

function hideDropdown() {
    document.querySelector('.dropdown-content').style.display = 'none';
}