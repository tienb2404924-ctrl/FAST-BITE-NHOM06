// Sự kiện DOMContentLoaded để tải html trước khi chạy js
// đảm bảo js không tìm thấy thẻ HTML(trả về null)
document.addEventListener("DOMContentLoaded", function() {

// Xử lý popup liên hệ
  const btnOpenModal = document.getElementById("btn-show-contact-form");  // Nút mở popup 
  const modal = document.getElementById("contact-modal"); // Khung popup bao trùm màn hình
  const btnCloseModal = document.getElementById("btn-close-modal");  // Nút x (Đóng popup)
  const contactForm = document.getElementById("contact-form"); // Form để gõ thông tin
// Kiểm tra xem các thẻ trên có tồn tại trong HTML không
  if (btnOpenModal && modal && btnCloseModal) {
    btnOpenModal.addEventListener("click", function(event) {
      // Tránh việc tag a làm mỗi khi click vào lại nhảy lên đầu trag
      event.preventDefault(); 
      // thêm class "show" để CSS hiển thị popup
      modal.classList.add("show");
    });
// Khi click vào nút đóng(dấu X)
    btnCloseModal.addEventListener("click", function() {
      // Xóa class "show" để ẩn popup đi
      modal.classList.remove("show");
    });
// Đóng popup khi bấm bên ngoài cửa sổ popup
    window.addEventListener("click", function(event) {
      // Nếu có event click bên ngoài thì sẽ xóa class "show" làm popup ẩn đi
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
// Khi người dùng bấm nút gửi thông tin
    if (contactForm) {
      contactForm.addEventListener("submit", function(event) {
        // Ngăn hiện tượng reload trang
        event.preventDefault(); 
        // Hiện thông báo
        alert("Cảm ơn bạn! Thông tin của bạn đã được gửi thành công. Fast Bite sẽ liên hệ lại sớm nhất có thể.");
        // Xóa thông tin người dùng đã nhập
        contactForm.reset();
        // Đóng popup lại
        modal.classList.remove("show");
      });
    }
  }
// Form đăng ký nhận tin
  const newsletterForm = document.getElementById("newsletter");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(event) {
    // Ngăn tải lại trang khi bấm đăng ký
      event.preventDefault(); 
    // Hiện thông báo như ở trên
      alert("Đăng ký nhận tin thành công! Cảm ơn bạn đã quan tâm đến Fast Bite.");
    //Xóa thông tin email mà người dùng vừa nhập
      newsletterForm.reset(); 
    });
  }
  // Kiểm tra số điện thoại, ép người dùng chỉ được nhập số vào ô này
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    // Người dùng gõ 1 phím thì sự kiện input sẽ chạy
    phoneInput.addEventListener("input", function() {
      // Tìm tát cả các kí tự không phải là 0 đến 9 và thay thế bằng chuỗi rỗng
      // bằng cách dùng biểu thức chính quy regex: /[^0-9]/g
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  }
});