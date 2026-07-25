# 🍔 Fast Bite — Website Fast Food

**Môn:** Nhập môn Lập trình Web  
**Giảng viên:** —  
**Sinh viên:** —  
**Ngày:** 2026

---

## 📌 Giới thiệu

**Fast Bite** là website tĩnh (static website) dành cho chuỗi cửa hàng thức ăn nhanh, được xây dựng hoàn toàn bằng **HTML5, CSS3 và JavaScript thuần** — không sử dụng framework hay thư viện UI nào. Dự án là bài tập thực hành nhằm áp dụng các kiến thức nền tảng về phát triển web front-end.

> 🖥️ **Cách chạy:** Mở file `index.html` (hoặc `TrangChu.html`) bằng trình duyệt web bất kỳ (Chrome, Edge, Firefox...). Không cần cài đặt server hay dependency nào.

---

## 📂 Cấu trúc thư mục

```
/
├── index.html                      # Redirect → TrangChu.html
├── TrangChu.html                   # Trang chủ
├── GioiThieu.html                  # Giới thiệu
├── ThucDon.html                    # Thực đơn (kèm giỏ hàng)
├── HeThongCuaHang.html             # Hệ thống cửa hàng + bản đồ
├── LienHe.html                     # Liên hệ
├── login.html                      # Đăng nhập / Đăng ký
├── HienThiGioHang.html             # Trang hiển thị giỏ hàng
│
├── header/
│   ├── header.html                 # Component header (tham khảo)
│   └── header.css                  # Style cho header & responsive
│
├── css/
│   ├── TrangChu.css
│   ├── GioiThieu.css
│   ├── ThucDon.css
│   ├── HeThongCuaHang.css
│   ├── LienHe.css
│   ├── login.css
│   └── GioHang.css                 # Style cho trang giỏ hàng
│
├── js/
│   ├── trangchu.js                 # Menu mobile responsive
│   ├── auth.js                     # Xử lý đăng nhập / đăng ký (localStorage)
│   ├── GioHang.js                  # Logic thêm sản phẩm vào giỏ hàng
│   ├── show-cart.js                # Hiển thị giỏ hàng & thanh toán
│   └── hethongcuahang.js           # Lọc cửa hàng theo tỉnh/quận
│
├── images/                         # Ảnh (logo, sản phẩm, mascot, gallery...)
│   ├── logo.png
│   ├── combo.png
│   ├── mascot.png
│   ├── Dora.jpg
│   ├── m_burger.png / m_chicken.png / m_fries.png / m_drink.png
│   ├── background.png
│   ├── restaurant.png
│   └── image (1-3).png / z7922...jpg
│
├── favicon_io/
│   ├── favicon-16x16.png / favicon-32x32.png
│   ├── apple-touch-icon.png
│   └── site.webmanifest
│
└── README.md                       # Bạn đang ở đây
```

---

## 📄 Mô tả chi tiết các trang

### 1. `index.html` — Entry point
- File đầu vào. Dùng thẻ `<meta http-equiv="refresh">` để tự động chuyển hướng sang `TrangChu.html`.

### 2. `TrangChu.html` — Trang chủ 🏠
**Nội dung:**
- **Header:** Logo + thanh điều hướng 5 mục (Trang Chủ, Giới Thiệu, Thực Đơn, Hệ Thống Cửa Hàng, Liên Hệ) + nút Đăng nhập
- **Hero section:** Badge "Ngon - Nhanh - Tiện Lợi", tiêu lớn + highlight cam, mô tả, 2 nút CTA (Xem thực đơn, Tìm cửa hàng), ảnh combo
- **Features Bar:** 5 đặc điểm nổi bật (Thơm Ngon, Nhanh Chóng, Chất Lượng, Tiện Lợi, Hài Lòng) với icon Material Symbols + mô tả
- **Menu section:** Grid sản phẩm nổi bật (Burger, Gà rán, Khoai tây chiên, Nước ngọt) với đánh giá 5 sao, giá, nút thêm "+"
- **Footer:** Đăng ký nhận tin, social icons (Facebook, Instagram, YouTube), links chính sách/sản phẩm, logo, fixed contact buttons

**Kỹ thuật:** CSS Flexbox, Grid, `:hover`, responsive media queries, Material Symbols, Font Awesome CDN

### 3. `GioiThieu.html` — Giới thiệu ℹ️
**Nội dung:**
- **Section 1:** Lịch sử hình thành — câu chuyện từ xe đẩy burger vỉa hè năm 2006 đến chuỗi toàn cầu 2.000+ nhà hàng tại 60 quốc gia
- **Section 2:** Gallery 3 ảnh thực tế
- **Section 3:** Fast Bite Vietnam — hơn 100 cửa hàng tại Việt Nam
- **Section 4:** Các giá trị cốt lõi (Khách hàng là trọng tâm, Tinh thần tập thể, Trung thực, Giá trị vượt trội,...)
- **Section 5:** Tầm nhìn & Sứ mệnh — triết lý Q.F.S (Quality - Fast - Space), con người là trọng tâm, Growth-First, AI-Chef

**Kỹ thuật:** Google Fonts (VT323), Material Symbols, CSS Grid, sections semantic, blur overlay, responsive

### 4. `ThucDon.html` — Thực đơn 🍽️
**Nội dung:**
- **Tab navigation:** 5 danh mục (Ưu Đãi, Gà Giòn, Mỳ Ý, Burger, Đồ Uống)
- **Danh sách món:** Grid sản phẩm với ảnh, tên, mô tả, giá (định dạng VND), nút "Thêm vào giỏ"
- **Giỏ hàng (mini):** Icon giỏ hàng + số lượng sản phẩm, click để sang trang giỏ hàng

**JavaScript:**
- Lọc hiển thị theo danh mục (tab switching) — `classList.add/remove`, `querySelectorAll`
- Định dạng giá tiền sang VND (`toLocaleString`)
- Xử lý thêm sản phẩm vào giỏ hàng (localStorage)
- Mobile menu toggle

### 5. `HeThongCuaHang.html` — Hệ thống cửa hàng 📍
**Nội dung:**
- **Sidebar trái:** Bộ lọc tỉnh/thành (Cần Thơ, TP.HCM, An Giang, Vĩnh Long, Sóc Trăng) + quận/huyện
- **Danh sách cửa hàng:** 11 cửa hàng trên khắp các tỉnh — hiển thị tên, địa chỉ, giờ mở cửa, SĐT, nút "Xem bản đồ"
- **Bản đồ Google Maps:** iframe nhúng, cập nhật theo cửa hàng được chọn (liên kết `target="khung-map"`)

**JavaScript (`hethongcuahang.js`):**
- Lọc động danh sách quận/huyện theo tỉnh được chọn
- Lọc hiển thị cửa hàng theo tỉnh/quận
- Tự động chuyển bản đồ đến cửa hàng đầu tiên trong danh sách

### 6. `LienHe.html` — Liên hệ 📞
**Nội dung:**
- **Bản đồ Google Maps** (iframe — sticky)
- **Thông tin liên hệ:** Địa chỉ, email, điện thoại, thời gian làm việc
- **Form gửi thắc mắc:** Tên, email, SĐT, nội dung — validation `required`

**Kỹ thuật:** Form với nhiều input types (`text`, `email`, `tel`, `textarea`), responsive two-column layout, CSS `:focus`, sticky map

### 7. `login.html` — Đăng nhập / Đăng ký 🔐
**Nội dung:**
- Tab chuyển đổi "Đăng nhập" / "Đăng ký"
- Form: email, mật khẩu, xác nhận mật khẩu (hiện khi đăng ký)
- Link quay về trang chủ

**JavaScript (`auth.js`):**
- Chuyển tab giao diện (ẩn/hiện ô xác nhận mật khẩu, đổi text nút)
- **Đăng ký:** Lưu email + mật khẩu vào `localStorage`
- **Đăng nhập:** So sánh với dữ liệu trong `localStorage`
- Validation cơ bản (kiểm tra mật khẩu xác nhận khớp)

### 8. `HienThiGioHang.html` — Giỏ hàng 🛒
**Nội dung:**
- Header (giống ThucDon) + icon giỏ hàng
- **Bảng giỏ hàng:** STT, mã món, tên món, số lượng, giá tiền, nút Xoá
- **Tổng kết:** Tổng cộng → VAT 10% → Số tiền phải thanh toán
- Nút "Tiếp tục mua sắm" & "Tiến hành thanh toán"

**JavaScript (`show-cart.js`):**
- Đọc dữ liệu giỏ hàng từ `localStorage` và render ra bảng HTML
- Xoá sản phẩm khỏi giỏ hàng (cập nhật localStorage + reload)
- Định dạng tiền tệ VND (`Intl.NumberFormat`)
- Xử lý thanh toán (thông báo + chuyển hướng)

---

## 🛠 Công nghệ & Kỹ năng đã thực hành

| Kỹ năng | Áp dụng tại |
|---------|-------------|
| **HTML5 semantic** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<form>` |
| **CSS Flexbox** | Header, features bar, footer, contact layout, nav-menu, cart-actions |
| **CSS Grid** | Menu grid (TrangChu), giá trị cốt lõi (GioiThieu), section items (ThucDon) |
| **CSS Responsive** | Media queries: 1024px, 768px, 736px, 480px |
| **CSS Pseudo-class** | `:hover`, `:focus`, `:active`, transitions |
| **CSS Positioning** | `position: fixed` (contact-stack), `position: sticky` (map) |
| **JavaScript DOM** | Tab filtering, class toggling, event listeners (trangchu.js, ThucDon) |
| **JavaScript LocalStorage** | Lưu giỏ hàng (`cartItems`), lưu tài khoản người dùng (`userEmail`, `userPass`) |
| **JavaScript Array methods** | `findIndex()`, `forEach()`, `querySelectorAll()`, spread operator |
| **Form & Validation** | Input types, `required` attribute, xác nhận mật khẩu (LienHe, login) |
| **Embedded content** | Google Maps iframe (HeThongCuaHang, LienHe) |
| **External resources** | Font Awesome 6.4.0 CDN, Google Fonts (VT323), Material Symbols |
| **Favicon** | Đa nền tảng (browser, mobile, manifest) |
| **Tổ chức code** | CSS riêng theo từng trang, JS riêng theo chức năng, component header riêng |
| **Responsive navigation** | Hamburger menu (mobile) ↔ thanh ngang (desktop) |

---

## 🎨 Giao diện & UX

- **Header thống nhất:** Logo + 5 mục navigation + nút auth — xuất hiện trên mọi trang
- **Active page:** Highlight màu cam trên nav item tương ứng
- **Footer thống nhất:** Newsletter + social + links + logo + contact buttons
- **Fixed contact buttons:** 3 nút tròn (Phone, Email, Map) luôn hiển thị góc phải dưới màn hình
- **Hamburger menu:** Trên mobile (≤1024px), menu thu gọn thành nút 3 gạch, click để mở
- **Hover effects:** Scale, translate, shadow, color transition trên card, button, icon
- **Tab filter:** Chuyển đổi danh mục món ăn bằng JavaScript (ThucDon)
- **Shopping cart:** Icon giỏ hàng hiển thị số lượng sản phẩm, lưu trạng thái qua các trang
- **Định dạng tiền:** Tự động format giá VND với dấu phân cách hàng nghìn

---

## 🔮 Hướng phát triển

- [ ] Kết nối form liên hệ với email service (Formspree, EmailJS...)
- [ ] Tích hợp API bản đồ tìm kiếm cửa hàng gần nhất
- [ ] Cập nhật số lượng sản phẩm trực tiếp trong giỏ hàng
- [ ] Thêm animation khi chuyển tab (fade/slide)
- [ ] Xác thực tài khoản với backend thật (Firebase, Supabase...)
- [ ] Chuyển sang framework (React, Vue...) để quản lý state tốt hơn
- [ ] PWA — cài đặt như ứng dụng trên điện thoại

---

## 📝 Ghi chú

- Dự án sử dụng **đường dẫn tương đối** cho tất cả tài nguyên (ảnh, CSS, trang liên kết).
- Font Awesome 6.4.0 được tải từ CDN. Cần có kết nối internet để icon hiển thị.
- Google Fonts (VT323) và Material Symbols cũng được tải từ CDN.
- Dữ liệu giỏ hàng và tài khoản người dùng được lưu trong **localStorage** của trình duyệt — sẽ mất khi xoá cache.
- Dự án không có backend — toàn bộ là front-end tĩnh phù hợp cho việc học và demo.
- Header được tách riêng trong thư mục `header/` để tái sử dụng, nhưng hiện tại mỗi trang đều có code header inline.
