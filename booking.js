document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const travelers = document.getElementById("travelers").value;
  const joinLand = document.getElementById("joinLand").checked;

  if (travelers === "" || isNaN(travelers) || travelers < 1 || travelers > 15) {
    alert("กรุณาระบุจำนวนผู้ร่วมเดินทางเป็นตัวเลขระหว่าง 1 ถึง 15");
    return;
  }

  if (joinLand) {
    const confirmJoinLand = confirm("ต้องการซื้อบัตรโดยสารเครื่องบินเองใช่หรือไม่?");
    if (confirmJoinLand) {
      alert("คุณเลือกซื้อบัตรโดยสารเครื่องบินเอง");
    }
  }

  alert("ลงทะเบียนสำเร็จ!"); 
});
