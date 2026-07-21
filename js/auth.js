//đổi tab
function switchTab(type) {
  const loginForm = document.getElementById("login-form");
  const loginTab = document.getElementById("tL");
  const signupTab = document.getElementById("tS");
  const confirmInput = document.getElementById("confirm");
  const submitBtn = document.getElementById("btn");
  if (type === "signup") {
    // Chuyển sang giao diện Đăng ký
    signupTab.classList.add("active");
    loginTab.classList.remove("active");

    confirmInput.style.display = "block"; // Hiện ô xác nhận
    submitBtn.textContent = "Đăng ký"; // Đổi chữ trên nút
  } else {
    // Chuyển sang giao diện Đăng nhập
    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    confirmInput.style.display = "none"; // Ẩn ô xác nhận
    submitBtn.textContent = "Đăng nhập"; // Đổi chữ trên nút
  }
}
const form = document.getElementById("login-form");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault(); // Ngăn form tải lại trang

  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const confirmPass = document.getElementById("confirm").value;
  const btnText = document.getElementById("btn").textContent;

  if (btnText === "Đăng ký") {
    // Kiểm tra xem mật khẩu có khớp không
    if (pass !== confirmPass) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    // Lưu vào localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);
    alert("Đăng ký thành công");
    switchTab("login"); // Chuyển sang tab đăng nhập sau khi đăng ký thành công
  } else if (btnText === "Đăng nhập") {
    // Logic Đăng nhập (so sánh với dữ liệu đã lưu)
    const storedEmail = localStorage.getItem("userEmail");
    const storedPass = localStorage.getItem("userPass");
    if (email === storedEmail && pass === storedPass) {
      alert("Đăng nhập thành công!");
      window.location.href = "TrangChu.html";
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  }
}
