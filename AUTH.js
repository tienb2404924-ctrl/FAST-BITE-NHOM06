// localStorage-based authentication
// Users stored as JSON array under "fastbite_users"
// Current session stored under "fastbite_current_user"

let mode = "login";

function $(id) {
  return document.getElementById(id);
}

function switchTab(t) {
  mode = t;
  const tL = $("tL");
  const tS = $("tS");
  const confirm = $("confirm");
  const btn = $("btn");
  if (tL) tL.className = t === "login" ? "active" : "";
  if (tS) tS.className = t === "signup" ? "active" : "";
  if (confirm) {
    confirm.style.display = t === "signup" ? "block" : "none";
    confirm.required = t === "signup";
  }
  if (btn) btn.textContent = t === "login" ? "Đăng nhập" : "Đăng ký";
  const msg = $("msg");
  if (msg) msg.className = "msg";
}

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem("fastbite_users")) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem("fastbite_users", JSON.stringify(users));
}

async function signUp(email, password) {
  const users = getUsers();
  if (users.find((u) => u.email === email)) {
    return { data: null, error: { message: "Email đã được đăng ký!" } };
  }
  users.push({ email, password });
  saveUsers(users);
  return { data: { user: { email } }, error: null };
}

async function signIn(email, password) {
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return {
      data: null,
      error: { message: "Email hoặc mật khẩu không đúng!" },
    };
  }
  const sessionData = { user: { email: user.email } };
  localStorage.setItem("fastbite_current_user", JSON.stringify(sessionData));
  return { data: { session: sessionData }, error: null };
}

async function signOut() {
  localStorage.removeItem("fastbite_current_user");
  return { error: null };
}

async function getSession() {
  try {
    const raw = localStorage.getItem("fastbite_current_user");
    const data = raw ? JSON.parse(raw) : null;
    return {
      data: data ? { session: data } : { session: null },
      error: null,
    };
  } catch {
    return { data: { session: null }, error: null };
  }
}

async function handleSubmit(e) {
  e.preventDefault();
  const email = $("email")?.value.trim();
  const pass = $("pass")?.value;
  const btn = $("btn");
  const msg = $("msg");

  if (!email || !pass) return;

  if (mode === "signup") {
    const confirmVal = $("confirm")?.value;
    if (pass !== confirmVal) {
      if (msg) {
        msg.className = "msg error";
        msg.textContent = "Mật khẩu không khớp!";
      }
      return;
    }
  }

  if (btn) {
    btn.disabled = true;
    btn.textContent = "Đang xử lý...";
  }
  if (msg) msg.className = "msg";

  const { data, error } =
    mode === "login" ? await signIn(email, pass) : await signUp(email, pass);

  if (btn) {
    btn.disabled = false;
    btn.textContent = mode === "login" ? "Đăng nhập" : "Đăng ký";
  }

  if (error) {
    if (msg) {
      msg.className = "msg error";
      msg.textContent = error.message;
    }
  } else {
    if (msg) msg.className = "msg success";
    if (mode === "login") {
      if (msg) msg.textContent = "Thành công!";
      localStorage.setItem(
        "fastbite_toast",
        JSON.stringify({ message: "Đăng nhập thành công!", type: "success" })
      );
      setTimeout(() => (location.href = "TrangChu.html"), 800);
    } else {
      if (msg) msg.textContent = "Đã đăng ký! Vui lòng đăng nhập.";
      setTimeout(() => switchTab("login"), 2000);
    }
  }
}
