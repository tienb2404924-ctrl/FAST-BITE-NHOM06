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
├── HeThongCuaHang.html             # Hệ thống cửa hàng + bản đồ + popup liên hệ
├── LienHe.html                     # Liên hệ
├── login.html                      # Đăng nhập / Đăng ký
├── HienThiGioHang.html             # Trang hiển thị giỏ hàng + thanh toán
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
│   └── GioHang.css
│
├── js/
│   ├── trangchu.js                 # Menu mobile responsive (hamburger toggle)
│   ├── auth.js                     # Xử lý đăng nhập / đăng ký (localStorage)
│   ├── GioHang.js                  # Logic thêm sản phẩm vào giỏ hàng + định dạng giá
│   ├── show-cart.js                # Hiển thị giỏ hàng, tính VAT, thanh toán
│   ├── hethongcuahang.js           # Lọc cửa hàng theo tỉnh/quận + đồng bộ bản đồ
│   └── footer.js                   # Popup liên hệ (modal), form đăng ký tin, validation SĐT
│
├── images/                         # Ảnh (logo, sản phẩm, mascot, gallery, background...)
│   ├── logo.png                    # Logo Fast Bite
│   ├── combo.png                   # Ảnh combo hero section (TrangChu)
│   ├── mascot.png                  # Linh vật (GioiThieu sec1)
│   ├── background.png              # Nền main (ThucDon)
│   ├── restaurant.png              # Ảnh nhà hàng (GioiThieu sec5)
│   ├── group.png                   # Nền sec4 giá trị cốt lõi (GioiThieu)
│   ├── image (1-3).png             # Gallery ảnh thực tế (GioiThieu sec2)
│   ├── m_burger.png / m_chicken.png / m_fries.png / m_drink.png   # Menu nổi bật (TrangChu)
│   ├── (Các ảnh sản phẩm riêng cho từng món trong ThucDon)
│   │   Ngoi1minhtrongdem.png, Ythich.png, Doiduday.png, etc.
│   └── (favicon_io/ chứa favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, site.webmanifest)
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
- **Features Bar:** 5 đặc điểm nổi bật (Thơm Ngon, Nhanh Chóng, Chất Lượng, Tiện Lợi, Hài Lòng) với icon Material Symbols + mô tả — mỗi mục có màu sắc riêng (cam, vàng, đen, xám, xanh)
- **Menu section:** Grid sản phẩm nổi bật (Burger, Gà rán, Khoai tây chiên, Nước ngọt) với đánh giá 5 sao, giá, nút thêm "+"
- **Footer:** Đăng ký nhận tin, social icons (Facebook, Instagram, YouTube), links chính sách/sản phẩm, logo, fixed contact buttons (Phone, Email, Map)

**Kỹ thuật:** CSS Flexbox, Grid, `:hover` transitions, responsive media queries, Material Symbols, Font Awesome CDN

### 3. `GioiThieu.html` — Giới thiệu ℹ️
**Nội dung:**
- **Section 1:** Lịch sử hình thành — câu chuyện từ xe đẩy burger vỉa hè năm 2006 tại Boston (vốn 500 USD) đến chuỗi toàn cầu 2.000+ nhà hàng tại 60 quốc gia
- **Section 2:** Gallery 3 ảnh thực tế về không gian cửa hàng
- **Section 3:** Fast Bite Vietnam — hơn 100 cửa hàng tại Việt Nam, triết lý gắn kết gia đình Việt qua bữa ăn ngon
- **Section 4:** Các giá trị cốt lõi (Khách hàng là trọng tâm, Tinh thần tập thể, Trung thực, Giá trị vượt trội,...) — trình bày dạng lưới 3 cột với Material Symbols
- **Section 5:** Tầm nhìn & Sứ mệnh — triết lý **Q.F.S** (Quality - Fast - Space), con người là trọng tâm (Growth-First), AI-Chef dự đoán xu hướng

**Kỹ thuật:** Google Fonts (VT323), Material Symbols lấy nét động (variable font), CSS Grid 3 cột, blur overlay nền, sections semantic, responsive

### 4. `ThucDon.html` — Thực đơn 🍽️
**Nội dung:**
- **Tab navigation:** 5 danh mục (Ưu Đãi, Gà Giòn, Mỳ Ý, Burger, Đồ Uống) — chuyển tab bằng JavaScript, không reload trang
- **Danh sách món:** Grid sản phẩm với ảnh riêng từng món (không còn ảnh mặc định), tên, mô tả, giá (định dạng VND tự động), nút "Thêm vào giỏ" — tổng cộng 19 sản phẩm: 5 Ưu Đãi combo, 4 Gà Giòn, 4 Mỳ Ý, 3 Burger, 3 Đồ Uống
- **Tab navigation (sticky):** Thanh nav dán trên cùng khi cuộn (`position: sticky; top: 30px`) với hiệu ứng Neumorphism
- **Background parallax:** `background-attachment: fixed` với ảnh nền
- **Giỏ hàng (mini):** Icon giỏ hàng + hiển thị số lượng sản phẩm theo thời gian thực, click để sang trang giỏ hàng

**JavaScript (inline trong ThucDon.html + `GioHang.js`):**
- Lọc hiển thị theo danh mục (tab switching) với `classList.add/remove`, `querySelectorAll`, `preventDefault`
- Thêm sản phẩm vào giỏ hàng: kiểm tra tồn tại (dùng `Array.findIndex()`), cập nhật số lượng hoặc thêm mới, lưu `localStorage`
- Định dạng giá tiền VND tự động qua `toLocaleString('de-DE')` với currency VND
- Hover effect: click vào ảnh sản phẩm sẽ ẩn tên (dùng `mouseover/mouseout` + `nextElementSibling`)
- Đồng bộ số lượng giỏ hàng hiển thị trên icon
- Mobile menu toggle (hamburger ↔ ×)

### 5. `HeThongCuaHang.html` — Hệ thống cửa hàng 📍
**Nội dung:**
- **Sidebar trái:** Bộ lọc tỉnh/thành (Cần Thơ, TP.HCM, An Giang, Vĩnh Long, Sóc Trăng) + quận/huyện động
- **Danh sách cửa hàng:** 13 cửa hàng trên khắp các tỉnh — hiển thị tên, địa chỉ, giờ mở cửa (9h30-22h), SĐT (1900-...), nút "Xem bản đồ" với Google Maps link
- **Bản đồ Google Maps:** iframe nhúng bên phải, tự động cập nhật khi chọn tỉnh/quận hoặc click nút "Xem bản đồ" (dùng thuộc tính `target="khung-map"`)
- **Contact modal:** Popup form liên hệ (hover, tên, email, SĐT, nội dung) khi click nút envelope trong contact-stack
- **Footer:** Social links thật (Facebook, Instagram, YouTube) + form đăng ký nhận tin + contact-stack với tooltip

**JavaScript (`hethongcuahang.js` + `footer.js`):**
- Lọc động danh sách quận/huyện theo tỉnh được chọn (dùng `cloneNode` + `data-province`)
- Lọc hiển thị cửa hàng theo tỉnh/quận (`style.display = "block/none"`)
- Tự động chuyển bản đồ đến cửa hàng đầu tiên trong danh sách (dispatchEvent change + lấy href của btn-map)
- Popup modal: thêm/xoá class `show`, đóng khi click overlay
- Validation SĐT: chỉ cho phép nhập số (dùng regex `/\D/g`)

### 6. `LienHe.html` — Liên hệ 📞
**Nội dung:**
- **Bản đồ Google Maps** (iframe — sticky, chiếm cột trái)
- **Thông tin liên hệ:** Địa chỉ (144b 3/2, Ninh Kiều, Cần Thơ), email (fastbite@fastfood.vn), điện thoại (1900 55 88 50), thời gian làm việc (T2-T6: 9h-16h30)
- **Form gửi thắc mắc:** Tên, email & SĐT (cùng hàng), nội dung — validation `required`

**Kỹ thuật:** Form với nhiều input types (`text`, `email`, `tel`, `textarea`), responsive two-column layout, CSS `:focus`, sticky map (cố định khi cuộn)

### 7. `login.html` — Đăng nhập / Đăng ký 🔐
**Nội dung:**
- Tab chuyển đổi "Đăng nhập" / "Đăng ký" — JavaScript switch tab
- Form: email, mật khẩu, xác nhận mật khẩu (chỉ hiện khi đăng ký)
- Link quay về trang chủ

**JavaScript (`auth.js`):**
- Chuyển tab giao diện: ẩn/hiện ô xác nhận mật khẩu, đổi text nút submit (dùng `style.display`)
- **Đăng ký:** Kiểm tra mật khẩu xác nhận khớp → lưu `userEmail` + `userPass` vào `localStorage` → chuyển sang tab đăng nhập
- **Đăng nhập:** So sánh email & mật khẩu với `localStorage` → alert thành công/thất bại → redirect về TrangChu

### 8. `HienThiGioHang.html` — Giỏ hàng 🛒
**Nội dung:**
- Header (giống ThucDon) + icon giỏ hàng (ẩn để trùng lặp)
- **Bảng giỏ hàng:** STT, mã món, tên món, số lượng, giá tiền (format VND), nút Xoá từng món
- **Tổng kết:** Tổng cộng → **VAT 10%** → Số tiền phải thanh toán — tất cả định dạng VND tự động
- **Nút hành động:** "← Tiếp tục mua sắm" (về ThucDon) & "Tiến hành thanh toán" (alert + giữ nguyên giỏ)

**JavaScript (`show-cart.js` + `GioHang.js`):**
- Đọc dữ liệu giỏ hàng từ `localStorage.getItem('cartItems')` và render ra bảng HTML động (`thead`, `tbody`, `tfoot`)
- Xoá sản phẩm khỏi giỏ: so sánh `sanpham.id` với mã món trong hàng, cập nhật localStorage + reload
- Định dạng tiền tệ VND chuyên nghiệp: `Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })`
- Tính VAT 10% (làm tròn xuống `Math.floor`)
- Xử lý thanh toán: alert thông báo thành công
- Kiểm tra giỏ hàng rỗng: alert + redirect về ThucDon

---

## 🛠 Công nghệ & Kỹ năng đã thực hành

| Kỹ năng | Áp dụng tại |
|---------|-------------|
| **HTML5 semantic** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<form>` |
| **CSS Flexbox** | Header, features bar, footer, contact layout, nav-menu, cart-actions |
| **CSS Grid** | Menu grid (TrangChu), giá trị cốt lõi (GioiThieu), section items (ThucDon) |
| **CSS Responsive** | Media queries: 1024px, 768px, 736px, 480px — hamburger menu, layout co giãn |
| **CSS Pseudo-class & Animation** | `:hover`, `:focus`, `:active`, transitions (scale, shadow, color), `@keyframes` (slideDown, fadeIn, slideUp) |
| **CSS Positioning** | `position: fixed` (contact-stack floating buttons, modal overlay), `position: sticky` (tab nav ThucDon, map LienHe) |
| **CSS Modal/Overlay** | Popup liên hệ với backdrop fixed, class `show` toggle, đóng khi click bên ngoài, animation slideDown |
| **CSS Neumorphism** | ThucDon tab nav với `box-shadow` inset/outset tạo hiệu ứng nổi/chìm |
| **CSS Toast Notification** | Component toast 3 dạng (success/info/error) trong TrangChu.css |
| **JavaScript DOM** | Tab filtering, class toggling, event listeners (`addEventListener`), `querySelectorAll`, `closest()` |
| **JavaScript LocalStorage** | Lưu giỏ hàng (`cartItems` — array of objects), lưu tài khoản người dùng (`userEmail`, `userPass`) |
| **JavaScript Array Methods** | `findIndex()`, `forEach()`, `push()`, spread operator, `cloneNode()` |
| **JavaScript Intl API** | `Intl.NumberFormat` định dạng tiền tệ VND chuyên nghiệp (show-cart.js) |
| **JavaScript Event Delegation** | `preventDefault()`, `dispatchEvent()`, click bên ngoài modal để đóng |
| **Form & Validation** | Input types (`email`, `tel`, `text`, `textarea`), `required` attribute, xác nhận mật khẩu (login), regex lọc số điện thoại (`footer.js`) |
| **Embedded content** | Google Maps iframe với `target="khung-map"` để đồng bộ (HeThongCuaHang, LienHe) |
| **External resources** | Font Awesome 6.4.0 CDN, Google Fonts (VT323), Material Symbols (static & variable font) |
| **Favicon** | Đa nền tảng: favicon-16x16, favicon-32x32, apple-touch-icon, site.webmanifest |
| **Tổ chức code** | CSS riêng theo từng trang, JS riêng theo chức năng, component header riêng trong `header/` |
| **Responsive navigation** | Hamburger menu (mobile, ≤1024px) ↔ thanh ngang (desktop) với icon chuyển đổi bars ↔ × |
| **Tooltip UX** | Contact-stack buttons có tooltip hiển thị mô tả (HeThongCuaHang) |

---

## 🎨 Giao diện & UX

- **Header thống nhất:** Logo + 5 mục navigation + nút auth — xuất hiện trên mọi trang
- **Active page:** Highlight màu cam (`class="active"`) trên nav item tương ứng
- **Footer thống nhất:** Newsletter form + social icons + links + logo + fixed contact buttons
- **Fixed contact buttons:** 3 nút tròn (Phone, Email, Map) luôn hiển thị góc phải dưới màn hình, có tooltip khi hover
- **Hamburger menu:** Trên mobile (≤1024px), menu thu gọn thành nút 3 gạch, click để mở với animation icon (bars ↔ ×)
- **Hover effects:** Scale, translate, shadow, color transition trên card, button, icon — tạo cảm giác tương tác mượt mà
- **Tab filter:** Chuyển đổi danh mục món ăn bằng JavaScript (ThucDon) — giữ nguyên vị trí cuộn (preventDefault)
- **Shopping cart:** Icon giỏ hàng hiển thị số lượng sản phẩm, lưu trạng thái qua các trang (localStorage), tự động reload sau khi thêm
- **Định dạng tiền:** Tự động format giá VND với dấu phân cách hàng nghìn (`toLocaleString` + `Intl.NumberFormat`)
- **Contact modal:** Popup form liên hệ với overlay mờ, đóng bằng nút × hoặc click bên ngoài
- **Đồng bộ bản đồ:** Google Maps tự động cập nhật khi chọn tỉnh/quận hoặc click "Xem bản đồ"
- **VAT tính toán:** Giỏ hàng tự động tính VAT 10% trên tổng tiền và hiển thị số tiền phải thanh toán
- **Validation SĐT:** Ô số điện thoại chỉ chấp nhận ký tự số (dùng regex filter real-time)

---

## 🔮 Hướng phát triển

- [ ] Kết nối form liên hệ với email service (Formspree, EmailJS...)
- [ ] Tích hợp API bản đồ tìm kiếm cửa hàng gần nhất (Google Maps API thay vì iframe)
- [ ] Cập nhật số lượng sản phẩm trực tiếp trong giỏ hàng (tăng/giảm)
- [ ] Thêm animation khi chuyển tab (fade/slide)
- [ ] Xác thực tài khoản với backend thật (Firebase, Supabase...)
- [ ] Chuyển sang framework (React, Vue...) để quản lý state tốt hơn
- [ ] PWA — cài đặt như ứng dụng trên điện thoại (service worker + manifest)
- [ ] Ảnh sản phẩm riêng cho từng món thay vì dùng chung 1 ảnh (Dora.jpg)
- [ ] Xử lý thanh toán thật (chuyển hướng đến cổng thanh toán hoặc ghi nhận đơn hàng)

---

## 📝 Ghi chú

- Dự án sử dụng **đường dẫn tương đối** cho tất cả tài nguyên (ảnh, CSS, trang liên kết).
- Font Awesome 6.4.0 được tải từ CDN. Cần có kết nối internet để icon hiển thị.
- Google Fonts (VT323) và Material Symbols (static & variable font) cũng được tải từ CDN.
- Dữ liệu giỏ hàng và tài khoản người dùng được lưu trong **localStorage** của trình duyệt — sẽ mất khi xoá cache.
- Dự án không có backend — toàn bộ là front-end tĩnh phù hợp cho việc học và demo.
- Header được tách riêng trong thư mục `header/` để tái sử dụng, nhưng hiện tại mỗi trang đều có code header inline.
