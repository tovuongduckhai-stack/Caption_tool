// Generate caption demo
document.getElementById("generateBtn").addEventListener("click", function() {
  const content = document.getElementById("contentInput").value;
  const preview = document.getElementById("preview");
  if (content.trim() === "") {
    preview.textContent = "Please enter some text!";
  } else {
    preview.textContent = "✨ " + content + " ✨";
  }
});

// Track clicks for Buy Pro
let proClicks = 0;
document.getElementById("buyBtn").addEventListener("click", function() {
  proClicks++;
  alert("Hệ thống đã ghi nhận, sẽ cập nhật sau!");
  console.log("Pro clicked: " + proClicks);
});

// Track clicks for Buy Ultra
let ultraClicks = 0;
document.getElementById("buyUltraBtn").addEventListener("click", function() {
  ultraClicks++;
  alert("Hệ thống đã ghi nhận, sẽ cập nhật sau!");
  console.log("Ultra clicked: " + ultraClicks);
});
