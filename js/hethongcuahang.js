// Sự kiện 'DOMContentLoaded' đảm bảo toàn bộ mã HTML đã được trình duyệt tải xong 
// thì mới bắt đầu chạy JavaScript, tránh lỗi không tìm thấy phần tử (null).
document.addEventListener("DOMContentLoaded", function() {
  // Lấy các phần tử html cần thao tác
  const provinceSelect = document.getElementById("province");
  const districtSelect = document.getElementById("district");
  const storeItems = document.getElementsByClassName("store-item");
  const allDistricts = [];
  // TẠO BẢN SAO DANH SÁCH QUẬN/HUYỆN
  //Vì khi đổi tỉnh thì sẽ xóa các quận cũ, nên cần lưu lại để dùng lại sau
  for (let i = 0; i < districtSelect.options.length; i++) {
    allDistricts.push(districtSelect.options[i].cloneNode(true));
  }
// Khi người dùng chọn tỉnh thành
  provinceSelect.addEventListener("change", function() {
    // Lấy value của tỉnh đang chọn
    const selectedProvince = this.value; 
    //Xóa danh sách quận/huyện hiện tại
    districtSelect.options.length = 0; 
    // Duyệt danh sách bản sao của quận/huyện
    allDistricts.forEach(function(option) {
      // Nếu data-province khớp với tỉnh đang chọn thì thêm vào ô select quận/huyện
      if (option.dataset.province === selectedProvince) {
        districtSelect.appendChild(option.cloneNode(true));
      }
    });
    // Sau khi có quận mới thì tự động kính hoạt sự kiện đổi quận
    // đê code chạy tiếp phần lọc cửa hagf bên dưới
    districtSelect.dispatchEvent(new Event("change"));
  });
// Khi quận/huyện thay đổi
  districtSelect.addEventListener("change", function() {
    const selectedProvince = provinceSelect.value;
    const selectedDistrict = this.value;
    let firstVisibleStore = null; 
    
    // Duyệt qua từng thẻ cửa hàng trong HTML
    Array.from(storeItems).forEach(function(item) {
      // Mặc định là ẩn đi
      let shouldShow = false; 
      
      
      if (selectedDistrict !== "") {
      // Nếu có chọn quận/huyện thì kiểm tra xem data-district của cửa hàng có khớp không
        shouldShow = (item.dataset.district === selectedDistrict);
      } else {
        shouldShow = false; 
      }
      // Ẩn hiện thẻ HTML dựa trên kết quả ở trên
      if (shouldShow) {
        item.style.display = "block"; 
      // Nếu đây là cửa hàng đầu tiên thỏa mãn điều kiện, lưu nó lại
      if (!firstVisibleStore) {
          firstVisibleStore = item;
        }
      } else {
        item.style.display = "none";
      }
    });
    // Tự động cập nhật bản đồ Google Maps
    const mapFrame = document.getElementById("khung-map");
    // Nếu tìm thấy có cửa hàng hiển thị ra và có khung Iframe
    if (firstVisibleStore && mapFrame) {
      // Tìm nút xem bản đồ của cửa hàng đầu tiên để lấy href
      const mapLinks = firstVisibleStore.getElementsByClassName("btn-map");
      
      if (mapLinks.length > 0) {
        // Lấy href của nút và gán vào src của iframe
        // Giúp bản đồ tự đổi khi người dùng chọn tỉnh hoặc huyện khác
        mapFrame.src = mapLinks[0].href;
      }
    } 
  });
  // Khi trang web vừa load xong thì chạy giả lập chọn tỉnh
  // để code tự động lọc ra cửa hàng và bản đồ đầu tiên trong danh sách
  provinceSelect.dispatchEvent(new Event("change"));

});
