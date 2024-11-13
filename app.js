// เก็บข้อมูลกิจกรรมทั้งหมดใน Array
let activities = [];

// ฟังก์ชันเปิด Popup
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

// ฟังก์ชันปิด Popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function submitData() {
    // รับค่าจากฟอร์ม
    const activityName = document.getElementById("activityName").value;
    const activityType = document.getElementById("activityType").value;
    const objective = document.getElementById("objective").value;
    const location = document.getElementById("location").value;
    const participants = document.getElementById("participants").value;
    const dateTime = document.getElementById("dateTime").value;

    console.log("Input data:", activityName, activityType, objective, location, participants, dateTime); // ตรวจสอบข้อมูลที่รับจากฟอร์ม

    // เพิ่มกิจกรรมลงใน Array
    const newActivity = {
        name: activityName,
        type: activityType,
        objective: objective,
        location: location,
        participants: participants,
        dateTime: dateTime
    };
    activities.push(newActivity);

    console.log("Activities array:", activities); // ตรวจสอบข้อมูลใน Array

    // เคลียร์ฟอร์มหลังบันทึก
    document.getElementById("popupForm").reset();

    // ปิด Popup หลังจากบันทึกข้อมูล
    closePopup();

    // อัพเดตการแสดงผลกิจกรรม
    displayActivities();
}

// ฟังก์ชันแสดงข้อมูลกิจกรรมทั้งหมด
function displayActivities() {
    const activityList = document.getElementById("activityList");
    activityList.innerHTML = ""; // เคลียร์ข้อมูลเดิมก่อน

    activities.forEach((activity, index) => {
        console.log("Displaying activity:", activity); // ตรวจสอบข้อมูลแต่ละรายการที่จะแสดงผล
        const activityItem = document.createElement("div");
        activityItem.classList.add("activity-item");
        activityItem.innerHTML = `
            <h3>${activity.name}</h3>
            <p><strong>ประเภท:</strong> ${activity.type}</p>
            <p><strong>วัตถุประสงค์:</strong> ${activity.objective}</p>
            <p><strong>สถานที่:</strong> ${activity.location}</p>
            <p><strong>จำนวนผู้สมัคร:</strong> ${activity.participants} คน</p>
            <p><strong>วันที่และเวลา:</strong> ${activity.dateTime}</p>
        `;
        activityList.appendChild(activityItem);
    });
}