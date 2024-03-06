// admin-thong-tin

function toggleForm() {
    let infoForm = document.getElementById("infoForm");
    if (infoForm.style.display === 'none' || infoForm.style.display === '') {
        // Nếu form đang ẩn, hiển thị form
        infoForm.style.display = 'block';
    } else {
        // Ngược lại, ẩn form
        infoForm.style.display = 'none';
    }
}

function cancelEdit() {
    let infoForm = document.getElementById("infoForm");
    infoForm.style.display = 'none';


}

function saveChanges() {
    // Xử lý logic khi lưu thay đổi
    // Ví dụ: Kiểm tra dữ liệu và gửi đến server
    alert("Thay đổi đã được lưu!");
}

// show zoom image in chi tiết sản phẩm page
function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

// Tăng giảm số lượng giỏ hàng
function decreaseQuantity() {
    const quantityInput = document.getElementById('quantityInput');
    let currentValue = parseInt(quantityInput.value, 10);
    if (!isNaN(currentValue) && currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantityInput');
    let currentValue = parseInt(quantityInput.value, 10);
    if (!isNaN(currentValue)) {
        quantityInput.value = currentValue + 1;
    }
}

function validateQuantity() {
    const quantityInput = document.getElementById('quantityInput');
    let currentValue = parseInt(quantityInput.value, 10);
    if (isNaN(currentValue) || currentValue < 1) {
        quantityInput.value = 1;
    }
}