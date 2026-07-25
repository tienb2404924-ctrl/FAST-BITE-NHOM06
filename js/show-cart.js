
function hienthigiohang() { // được gọi từ HienThiGioHang.html
    const cartIcon = document.querySelector(".shopping-cart");
    if (cartIcon) {
        cartIcon.style.visibility = "hidden";
    }
 
    const rawCart = localStorage.getItem('cartItems');
    const customerCart = rawCart ? JSON.parse(rawCart) : [];
 
    if (customerCart.length === 0) {
        alert('Giỏ hàng của bạn đang trống. Quay về Thực Đơn để chọn món nhé.');
        location.href = "ThucDon.html"; 
    } else {
        const tblHead = document.getElementsByTagName('thead')[0];
        const tblBody = document.getElementsByTagName('tbody')[0];
        const tblFoot = document.getElementsByTagName('tfoot')[0];
 
        let headColumns = '';
        let bodyRows = '';
        let footColumns = '';
 
        headColumns += '<tr><th>STT</th><th>MÃ MÓN ĂN</th><th>TÊN MÓN ĂN</th>' +
            '<th>SỐ LƯỢNG</th><th>GIÁ TIỀN</th><th>XÓA</th></tr>';
        tblHead.innerHTML = headColumns;
 
        let vat = 0, total = 0, amountPaid = 0, no = 0;
 
        if (customerCart.length === 0) { 
            bodyRows += '<tr><td colspan="6">No items found</td></tr>'; 
        } else {
            customerCart.forEach(sanpham => {
                total += Number(sanpham.quantity) * Number(sanpham.price);
 
                bodyRows += '<tr><td>' + ++no + '</td><td>' + sanpham.id + '</td><td>' + sanpham.name +
                    '</td><td>' + sanpham.quantity + '</td><td>' +
                    formatCurrency(sanpham.price) + 
                    '</td><td><a href="#" class="delete-link" onclick="deleteCartItem(this)">XÓA</a></td></tr>';
            });
        }
        tblBody.innerHTML = bodyRows;
 
        vat = Math.floor(total * 0.1);
        amountPaid = Math.floor(1.1 * total);
 
        footColumns += '<tr><td colspan="4">TỔNG CỘNG:</td><td>' + formatCurrency(total) + '</td><td rowspan="3"></td></tr>';
        footColumns += '<tr><td colspan="4">VAT (10%):</td><td>' + formatCurrency(vat) + '</td></tr>';
        footColumns += '<tr><td colspan="4">SỐ TIỀN PHẢI THANH TOÁN:</td><td>' + formatCurrency(amountPaid) + '</td></tr>';
        tblFoot.innerHTML = footColumns;
    }
}
 
function deleteCartItem(elmt) {
    let updatedDeleteCart = [];
    let customerCart = JSON.parse(localStorage.getItem('cartItems'));
    customerCart.forEach(sanpham => {
        if (sanpham.id != elmt.parentElement.parentElement.children[1].textContent) {
            updatedDeleteCart.push(sanpham);
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(updatedDeleteCart));
    location.reload(); // reload the current page
}
 
const formatPercentage = (value, locale = "en-US") => {
    return new Intl.NumberFormat(locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
    }).format(value);
}
 
const formatCurrency = (amount, locale = "vi-VN") => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}

document.addEventListener('DOMContentLoaded', () => {
    hienthigiohang(); 
 
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            alert('Thanh toán thành công, chúc quý khách ăn ngon miệng :33');
        });
    }
});