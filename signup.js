function login(){
    var vUser = document.getElementById('user');
    var vPass = document.getElementById('pass');
    console.log(vUser.value);
    console.log(vPass.value);
    if(vUser.value == 'admin' && vPass.value == '123'){
        window.location='index.html';
    }else{
        alert('Đăng nhập thất bại!');
        vUser.focus();
        vUser.style.border = '1px solid red';
        vPass.style.border = '1px solid red';
    }
}
