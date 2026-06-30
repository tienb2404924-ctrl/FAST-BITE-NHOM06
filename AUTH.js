const SUPABASE_URL = "https://znspbaqbqrdwxnarzzdo.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3BiYXFicXJkd3huYXJ6emRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzNjU2NDEsImV4cCI6MjA5Nzk0MTY0MX0.Wjwr-8LkuVD3KcUrCIcRWfeAZ8DQk-LQFyPqk_Eqvf4";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let mode = "login";
const $ = (id) => document.getElementById(id);

function switchTab(t) {
  mode = t;
  $("tL").className = t === "login" ? "active" : "";
  $("tS").className = t === "signup" ? "active" : "";
  $("confirm").style.display = t === "signup" ? "block" : "none";
  $("confirm").required = t === "signup";
  $("btn").textContent = t === "login" ? "Đăng nhập" : "Đăng ký";
  $("msg").className = "msg";
}

async function handleSubmit(e) {
  e.preventDefault();
  const email = $("email").value.trim(),
    pass = $("pass").value,
    btn = $("btn"),
    msg = $("msg");

  if (mode === "signup" && pass !== $("confirm").value) {
    return (
      (msg.className = "msg error"),
      (msg.textContent = "Mật khẩu không khớp!")
    );
  }

  btn.disabled = true;
  btn.textContent = "Đang xử lý...";
  msg.className = "msg";

  const { data, error } =
    mode === "login" ? await signIn(email, pass) : await signUp(email, pass);

  btn.disabled = false;
  btn.textContent = mode === "login" ? "Đăng nhập" : "Đăng ký";

  if (error) {
    msg.className = "msg error";
    msg.textContent = error.message;
  } else {
    msg.className = "msg success";
    if (mode === "login") {
      msg.textContent = "Thành công!";
      setTimeout(() => (location.href = "TrangChu.html"), 800);
    } else {
      msg.textContent = "Đã đăng ký! Kiểm tra email.";
      setTimeout(() => switchTab("login"), 2000);
    }
  }
}

// --- các hàm hỗ trợ làm từ function của supabase (cho ngắn, dễ nhìn code, xử lí exception)---

async function signUp(email, password) {
  const { data, error } = await supabaseClient.auth.signUp({ email, password });
  return { data, error };
}

async function signIn(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

async function signOut() {
  const { error } = await supabaseClient.auth.signOut();
  return { error };
}

async function getSession() {
  const { data, error } = await supabaseClient.auth.getSession();
  return { data, error };
}
