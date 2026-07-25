/* Hàm kiểm tra item mới thêm vào đã tồn tại trong giỏ hàng (cartItemArr) chưa. Nếu có, trả về chỉ số
   của nó trong mảng cartItemArr, ngược lại trả về -1, nên sử dụng hàm Array.findIndex() */
function isExistedInCart(sanpham, cartItemArr) {
    // Sử dụng Array.findIndex() kiểm tra xem sanpham.id đã có trong cartItemArr chưa
    return cartItemArr.findIndex(item => item.id === sanpham.id);
}

let updatedCartItems = []; //chứa các mặt hàng của giỏ hàng: Array of Objects

//Hàm nghiệp vụ: Xử lý và thêm sản phẩm được chọn vào giỏ hàng
const orderSelectedProduct = (evt) => { // function with Event Objects
    const linkClicked = evt.target;

    // Lấy thẻ article chứa sản phẩm để lấy thông tin
    const article = linkClicked.closest('.sanpham');
    if (!article) return;

    const title = article.querySelector('.title-sanpham').textContent.trim();
    const info = article.querySelector('.info-sanpham').textContent.trim();
    const costText = article.querySelector('.cost-sanpham').dataset.rawPrice || article.querySelector('.cost-sanpham').textContent;

    alert("Thông tin sản phẩm: " + title);

    if (typeof Storage !== 'undefined') {
        let newItem = { //sản phẩm vừa được click chọn mua
            id: title,
            name: title,
            info: info,
            price: Number(costText.replace(/[^0-9]/g, '')),
            quantity: 1
        };

        if (JSON.parse(localStorage.getItem('cartItems')) === null) {
            //giỏ hàng chưa tồn tại --> tạo mới cartItems
            updatedCartItems.push(newItem);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            location.reload();
        } else { //localStorage đã tồn tại
            const updatedCartItems = JSON.parse(localStorage.getItem('cartItems'));

            if ((index = isExistedInCart(newItem, updatedCartItems)) >= 0) {
                //trh 1: nếu newItem.id đã tồn tại trong giỏ thì cập nhật số lượng lên 1
                updatedCartItems[index].quantity++;
            } else { //trh 2: newItem chưa tồn tại trong giỏ thì thêm mới vào giỏ
                updatedCartItems.push(newItem);
            }

            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            location.reload();
        }
    } else {
        alert('Local storage is not working on your browser.');
    }
}

function addEventToAllCartButtons() { // được gọi từ setup() trong chính file GioHang.js
    // Gắn sự kiện click cho tất cả nút "Thêm vào giỏ" (class .btn-add-cart trong ThucDon.html)
    const add2CartList = document.getElementsByClassName('btn-add-cart'); //productList
    //1. Sử dụng HTMLCollection
    //Cách 1.a
    for (let item = 0; item < add2CartList.length; item++) {
        add2CartList[item].addEventListener('click', orderSelectedProduct, false); //orderSelectedProduct
    }
    /*Cách 1.b: Array.prototype.forEach.call(add2CartList, (item) =>
                   item.addEventListener('click', orderSelectedProduct, false)) */

    /* 2. Sử dụng Array...*/
}

function setPrices() { // được gọi từ setup() - định dạng lại giá tiền hiển thị sang dạng tiền tệ VND
    const prices = document.querySelectorAll('.cost-sanpham');
    prices.forEach(sanpham => {
        const rawValue = Number(sanpham.innerText.replace(/[^0-9]/g, ''));
        sanpham.dataset.rawPrice = rawValue; // Lưu giá gốc dạng số, dùng lại khi tính tổng tiền ở trang giỏ hàng
        sanpham.innerText = rawValue.toLocaleString('de-DE', { style: 'currency', currency: 'VND' });
    }, false);
}

const setHover = () => {
    // The spread operator (...) to expand the collection into a new array
    const imgList = [...document.getElementsByClassName('img-sanpham')]; // Cập nhật đúng class ảnh trong HTML
    imgList.forEach(sanpham => {
        sanpham.addEventListener('mouseover', () => {
            if (sanpham.nextElementSibling) {
                sanpham.nextElementSibling.style.display = 'none';
            }
        });
        sanpham.addEventListener('mouseout', () => {
            if (sanpham.nextElementSibling) {
                sanpham.nextElementSibling.style.display = 'block';
            }
        });
    });
}

function redirect2ShowCartPage() {
    if (localStorage.cartItems != undefined) {
        const numberOrderedItems = document
            .querySelector('.shopping-cart .no-ordered-items');
        let numberOfItems = 0;
        let customerCart = JSON.parse(localStorage.getItem('cartItems'));
        customerCart.forEach(sanpham => {
            numberOfItems += sanpham.quantity;
        });
        if (numberOrderedItems) {
            numberOrderedItems.innerHTML = numberOfItems;
        }
    }

    const shoppingCart = document.querySelector('.shopping-cart');
    if (shoppingCart) {
        shoppingCart.addEventListener("click", function () {
            location.href = "HienThiGioHang.html";
        });
    }
}

function setup() {
    setPrices();
    addEventToAllCartButtons();
    setHover();
    redirect2ShowCartPage();
}

window.addEventListener('load', setup, false);