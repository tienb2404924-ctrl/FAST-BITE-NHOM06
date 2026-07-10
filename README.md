# 🍔 Fast Bite — Website Fast Food

**Môn:** Nhập môn Lập trình Web  
**Giảng viên:** —  
**Sinh viên:** —  
**Ngày:** 2026

---

## 📌 Giới thiệu

**Fast Bite** là một website tĩnh (static website) dành cho chuỗi cửa hàng thức ăn nhanh, được xây dựng hoàn toàn bằng HTML5, CSS3 và JavaScript thuần — không sử dụng framework hay thư viện UI nào. Dự án là bài tập thực hành nhằm áp dụng các kiến thức nền tảng về phát triển web front-end.

> 🖥️ **Cách chạy:** Mở file `index.html` (hoặc `TrangChu.html`) bằng trình duyệt web bất kỳ (Chrome, Edge, Firefox...). Không cần cài đặt server hay dependency nào.

---

## 📂 Cấu trúc thư mục

```
/
├── index.html                    # Redirect → TrangChu.html
├── TrangChu.html                 # Trang chủ
├── GioiThieu.html                # Giới thiệu
├── ThucDon.html                  # Thực đơn
├── HeThongCuaHang.html           # Hệ thống cửa hàng
├── LienHe.html                   # Liên hệ
├── login.html                    # Đăng nhập / Đăng ký (giao diện tĩnh)
├── ThanhDieuHuong.html           # Component thanh điều hướng (tham khảo)
│
├── AUTH.js                       # [Đã xoá] Hệ thống auth — giữ lại giao diện tĩnh
│
├── css/
│   ├── TrangChu.css
│   ├── GioiThieu.css
│   ├── ThucDon.css
│   ├── HeThongCuaHang.css
│   ├── LienHe.css
│   └── login.css
│
├── LienHe.css                    # (Bản sao ở thư mục gốc)
├── ThanhDieuHuong.css
│
├── images/
│   ├── logo.png                  # Logo Fast Bite
│   ├── combo.png                 # Hero image
│   ├── mascot.png                # Mascot
│   ├── Dora.jpg                  # Ảnh sản phẩm mẫu (placeholder)
│   ├── m_burger.png              # Burger
│   ├── m_chicken.png             # Gà rán
│   ├── m_fries.png               # Khoai tây chiên
│   ├── m_drink.png               # Nước ngọt
│   ├── background.png            # Background menu page
│   ├── restaurant.png            # Ảnh nhà hàng
│   ├── image (1-3).png           # Gallery
│   └── z7922...jpg               # Ảnh khác
│
├── favicon_io/
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   └── site.webmanifest
│
├── js/                           # (Thư mục trống — dành cho mở rộng sau)
│
└── README.md                     # Bạn đang ở đây
```

---

## 📄 Mô tả các trang

### 1. `index.html`
- File entry point. Sử dụng thẻ `<meta http-equiv="refresh">` để tự động chuyển hướng sang `TrangChu.html`.

### 2. `TrangChu.html` — Trang chủ
**Nội dung:**
- **Header:** Logo + thanh điều hướng + nút Đăng nhập/Đăng ký
- **Hero section:** Badge "Ngon - Nhanh - Tiện Lợi", tiêu đề, mô tả, nút CTA (Xem thực đơn, Tìm cửa hàng), ảnh combo
- **Features bar:** 5 đặc điểm (Thơm Ngon, Nhanh Chóng, Chất Lượng, Tiện Lợi, Hài Lòng) với icon + mô tả
- **Menu section:** Grid 4 sản phẩm nổi bật (Burger, Gà rán, Khoai tây chiên, Nước ngọt) với giá và nút thêm
- **Footer:** Newsletter form, social icons (FB, IG, YT), links chính sách/sản phẩm, logo, fixed contact buttons

**Kỹ thuật:** CSS Flexbox, Grid layout, pseudo-class `:hover`, responsive (media queries 768px & 480px)

### 3. `GioiThieu.html` — Giới thiệu
**Nội dung:**
- **Lịch sử hình thành:** Câu chuyện thương hiệu từ xe đẩy burger vỉa hè năm 2006 đến chuỗi toàn cầu
- **Gallery:** 3 ảnh thực tế
- **Fast Bite Vietnam:** Thông tin về sự phát triển tại Việt Nam
- **Các giá trị cốt lõi:** Grid icons với Material Symbols (Person, Group, Thumb Up, Analytics...)
- **Tầm nhìn & Sứ mệnh:** Triết lý vận hành Q.F.S (Quality - Fast - Space), con người là trọng tâm

**Kỹ thuật:** Google Fonts (VT323), Material Symbols, CSS Grid, sections semantic, `::after` decoration

### 4. `ThucDon.html` — Thực đơn
**Nội dung:**
- **Tab navigation:** 5 danh mục (Ưu Đãi, Gà Giòn, Mỳ Ý, Burger, Đồ Uống)
- **Danh sách món:** Mỗi danh mục chứa article card với ảnh, tên, mô tả, giá
- **JavaScript:** Lọc hiển thị theo danh mục (tab switching), class `active` + `show`

**Kỹ thuật:** **Vanilla JavaScript DOM Manipulation** — `querySelectorAll`, `addEventListener`, `classList.add/remove`, `preventDefault()`. CSS `display: none` ↔ `display: grid` toggle với `!important`

### 5. `HeThongCuaHang.html` — Hệ thống cửa hàng
**Nội dung:**
- **Sidebar bên trái:** Bộ lọc tỉnh/thành + quận/huyện + danh sách cửa hàng (tên, địa chỉ, giờ mở cửa, SĐT, nút "Xem bản đồ")
- **Bản đồ Google Maps:** iframe nhúng, liên kết với `target="khung-map"`

**Kỹ thuật:** iframe Google Maps embed, `<select>` form elements, HTML anchor `target` attribute

### 6. `LienHe.html` — Liên hệ
**Nội dung:**
- **Bản đồ Google Maps** (iframe)
- **Thông tin liên hệ:** Địa chỉ, email, điện thoại, thời gian làm việc
- **Form gửi thắc mắc:** Tên, email, SĐT, nội dung — có validation `required`

**Kỹ thuật:** Form với các input type khác nhau (`text`, `email`, `tel`, `textarea`), responsive two-column layout, sticky map, CSS `:focus`

### 7. `login.html` — Đăng nhập / Đăng ký (giao diện tĩnh)
**Nội dung:**
- Tab "Đăng nhập" / "Đăng ký" (chỉ giao diện, không xử lý)
- Form nhập email, mật khẩu, xác nhận mật khẩu
- Link quay về trang chủ

**Ghi chú:** Đây là giao diện tĩnh — chức năng auth (localStorage) đã được gỡ bỏ.

### 8. `ThanhDieuHuong.html` — Tham khảo Navigation
- Một component thanh điều hướng riêng biệt, dùng để test/làm mẫu trước khi tích hợp vào các trang chính.

---

## 🛠 Công nghệ & Kỹ năng đã thực hành

| Kỹ năng | Áp dụng tại |
|---------|-------------|
| **HTML5 semantic** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<form>` |
| **CSS Flexbox** | Header, features bar, footer, contact layout, nav-menu |
| **CSS Grid** | Menu grid (TrangChu), giá trị cốt lõi (GioiThieu), section items (ThucDon) |
| **CSS Responsive** | Media queries `@media (max-width: 768px)` và `(max-width: 480px)` |
| **CSS Pseudo-class** | `:hover`, `:focus`, `:active` transitions |
| **CSS Positioning** | `position: fixed` (contact-stack), `position: sticky` (map) |
| **JavaScript DOM** | Tab filtering, class toggling, event listeners (ThucDon) |
| **Form & Validation** | Input types, `required` attribute, form layout (LienHe, login) |
| **Embedded content** | Google Maps iframe (HeThongCuaHang, LienHe) |
| **External resources** | Font Awesome 6.4.0 CDN, Google Fonts, Material Symbols |
| **Favicon** | Đa nền tảng (browser, mobile, manifest) |
| **File structure** | Tổ chức CSS riêng theo từng trang, assets trong thư mục chuyên biệt |

---

## 📐 Giao diện & UX

- **Header thống nhất:** Logo + 5 mục navigation + nút auth — xuất hiện trên mọi trang
- **Active page:** Highlight màu cam trên nav item tương ứng
- **Footer thống nhất:** Newsletter + social + links + logo + contact buttons
- **Fixed contact buttons:** 3 nút tròn (Phone, Email, Map) luôn hiển thị góc phải dưới màn hình
- **Hover effects:** Scale, translate, shadow, color transition trên card, button, icon
- **Responsive:** Layout chuyển từ desktop (horizontal) sang mobile (vertical) tại 768px và 480px
- **Tab filter:** Chuyển đổi danh mục món ăn mượt mà với JavaScript (ThucDon)

---

## 🔮 Hướng phát triển

- [ ] Triển khai auth thật với backend (hoặc Firebase/Supabase)
- [ ] Kết nối form liên hệ với email service (Formspree, EmailJS...)
- [ ] Thêm giỏ hàng + thanh toán
- [ ] Tích hợp API bản đồ tìm kiếm cửa hàng gần nhất
- [ ] Chuyển sang framework (React, Vue...) để quản lý state tốt hơn
- [ ] Thêm animation khi chuyển tab (fade/slide)

---

## 📝 Ghi chú

- Dự án sử dụng **đường dẫn tương đối** cho tất cả tài nguyên (ảnh, CSS, trang liên kết).
- Font Awesome 6.4.0 được tải từ CDN. Cần có kết nối internet để icon hiển thị.
- Dự án không có backend — toàn bộ là front-end tĩnh phù hợp cho việc học và demo.
