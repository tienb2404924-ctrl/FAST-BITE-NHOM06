document.addEventListener("DOMContentLoaded", function() {
  const btnOpenModal = document.getElementById("btn-show-contact-form");
  const modal = document.getElementById("contact-modal");
  const btnCloseModal = document.getElementById("btn-close-modal"); 
  const contactForm = document.getElementById("contact-form");

  if (btnOpenModal && modal && btnCloseModal) {
    btnOpenModal.addEventListener("click", function(event) {
      event.preventDefault(); 
      modal.classList.add("show");
    });

    btnCloseModal.addEventListener("click", function() {
      modal.classList.remove("show");
    });

    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });

    if (contactForm) {
      contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        alert("Cảm ơn bạn! Thông tin của bạn đã được gửi thành công. Fast Bite sẽ liên hệ lại sớm nhất có thể.");
        contactForm.reset();
        modal.classList.remove("show");
      });
    }
  }

  const newsletterForm = document.getElementById("newsletter");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(event) {
      event.preventDefault(); 
      alert("Đăng ký nhận tin thành công! Cảm ơn bạn đã quan tâm đến Fast Bite.");
      newsletterForm.reset(); 
    });
  }
  
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function() {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  }
});