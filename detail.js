// check
function check() {
    var ch = document.getElementById('qty');
    if (ch.value == '0'){
        alert('Vui lòng chọn số lượng ít nhất 1 sản phẩm!');
    }else{
        alert('Đã thêm vào giỏ hàng!');
    }
}

