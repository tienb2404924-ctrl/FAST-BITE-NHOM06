
      // Check auth state on page load & show user name / logout
      async function checkAuth() {
        const { data } = await getSession();
        const loginBtn = document.getElementById("loginBtn");
        const registerBtn = document.getElementById("registerBtn");
        const userMenu = document.getElementById("userMenu");
        const userName = document.getElementById("userName");

        if (data?.session?.user) {
          loginBtn.style.display = "none";
          registerBtn.style.display = "none";
          userMenu.style.display = "inline-flex";
          userName.textContent = data.session.user.email;
        } else {
          loginBtn.style.display = "inline-flex";
          registerBtn.style.display = "inline-flex";
          userMenu.style.display = "none";
        }
      }

      async function handleLogout() {
        localStorage.setItem(
          "fastbite_toast",
          JSON.stringify({ message: "Đã đăng xuất!", type: "info" })
        );
        await signOut();
        window.location.reload();
      }

      // Modal controls
      function openRegisterModal() {
        document.getElementById("registerModal").style.display = "flex";
        document.body.style.overflow = "hidden";
      }

      function closeRegisterModal() {
        document.getElementById("registerModal").style.display = "none";
        document.body.style.overflow = "";
      }

      // Handle registration with auto-login
      async function handleRegister(e) {
        e.preventDefault();
        const email = document.getElementById("regEmail").value.trim();
        const pass = document.getElementById("regPass").value;
        const confirm = document.getElementById("regConfirm").value;
        const btn = document.getElementById("regBtn");
        const msg = document.getElementById("regMsg");

        if (pass !== confirm) {
          msg.className = "msg error";
          msg.textContent = "Mật khẩu không khớp!";
          return;
        }

        btn.disabled = true;
        btn.textContent = "Đang xử lý...";
        msg.className = "msg";

        // Sign up then auto-login
        const { error: signUpError } = await signUp(email, pass);

        if (signUpError) {
          btn.disabled = false;
          btn.textContent = "Đăng ký";
          msg.className = "msg error";
          msg.textContent = signUpError.message;
          return;
        }

        const { error: signInError } = await signIn(email, pass);

        btn.disabled = false;
        btn.textContent = "Đăng ký";

        if (signInError) {
          msg.className = "msg error";
          msg.textContent = signInError.message;
        } else {
          msg.className = "msg success";
          msg.textContent = "Đăng ký thành công! Đang chuyển hướng...";
          localStorage.setItem(
            "fastbite_toast",
            JSON.stringify({ message: "Đăng ký thành công!", type: "success" })
          );
          setTimeout(() => {
            closeRegisterModal();
            window.location.reload();
          }, 1000);
        }
      }

      // Toast notification
      function showToast(message, type) {
        const toast = document.getElementById("toast");
        const icon = document.getElementById("toastIcon");
        const msgEl = document.getElementById("toastMessage");

        toast.className = "toast toast-" + type;
        msgEl.textContent = message;

        const icons = {
          success: "✓",
          info: "ℹ",
          error: "✕",
        };
        icon.textContent = icons[type] || icons.info;

        toast.style.display = "flex";
        // Trigger reflow for animation
        void toast.offsetWidth;
        toast.classList.add("toast-visible");

        setTimeout(hideToast, 3500);
      }

      function hideToast() {
        const toast = document.getElementById("toast");
        toast.classList.remove("toast-visible");
        setTimeout(() => {
          toast.style.display = "none";
        }, 300);
      }

      // On page load: check auth + set up modal overlay + show pending toast
      document.addEventListener("DOMContentLoaded", function () {
        checkAuth();
        const modal = document.getElementById("registerModal");
        if (modal) {
          modal.addEventListener("click", function (e) {
            if (e.target === modal) closeRegisterModal();
          });
        }
        // Show pending toast from localStorage (set before page reload/nav)
        try {
          const raw = localStorage.getItem("fastbite_toast");
          if (raw) {
            const toast = JSON.parse(raw);
            localStorage.removeItem("fastbite_toast");
            setTimeout(() => showToast(toast.message, toast.type), 300);
          }
        } catch {}
      });
      const login=document.getElementById('login');
      login.addEventListener('click',closeRegisterModal);
      const registerForm= document.getElementById('registerForm');
      registerForm.addEventListener('submit',handleRegister);
     const modal_close = document.getElementById('modal_close');
     modal_close.addEventListener('click',closeRegisterModal);
     const toast_close=document.getElementById('toast_close');
     toast_close.addEventListener('click',hideToast);
     const btn_logout=document.getElementById('btn_logout');
     btn_logout.addEventListener('click',handleLogout);
// menu khi thu nhỏ kích thước màn hình

  document.addEventListener('DOMContentLoaded', ()=> {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    }
  });
