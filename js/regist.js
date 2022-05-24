
window.addEventListener("load",function(){
    // 1.手机号正则表达式部分
    var tel = document.querySelectorAll("input")[0];
    var telval = /^1[3456789]\d{9}$/;
    var yanzhengma =this.document.getElementsByClassName("huoqu")[0];
    var pwd = this.document.getElementById("pwd");
    var pwd2 = this.document.getElementById("pwd2");
    var regist = this.document.getElementById("regist");
    var name = this.document.getElementById("name");
    tel.onmouseout = function(){
        if(telval.test(tel.value)){
            tel.className = "green";
           
        }else{
            tel.className = 'red';
        }
    }
    //2.验证码部分
    yanzhengma.onclick =function(){
        if(telval.test(tel.value)){
            alert("6688");
        }else{
            alert("请输入正确的手机号");
        }
    }
    regist.onclick= function(){
        if(telval.test(tel.value) && pwd.value==pwd2.value){
            alert("注册成功");
            setCookie("tel",tel.value,20);
            setCookie("name",name.value,20);
            setCookie("pwd",pwd.value,20);
        }else{
            alert("格式不正确，请从新输入")
            // tel.value = '';
            // pwd.value = '';
            // pwd2.value = '';

        }
    }
    
})



//添加Cookie--setCookie
//键ket 值val 时间time
function setCookie(key, val, time){
    //获取时间
    var date = new Date();
    //获取时间为天
    date.setDate(date.getDate()+time);
    //添加Cookie方法 键 = 值 expires = 时间
    document.cookie =`${key}=${val};expires=${date}`;

}
//获取Cookie--getCookie
function getCookie(key) {
    //分割 ;
    var arr = document.cookie.split("; ")
    //遍历
    for (var item of arr){
        var arrarr = item.split("=");
        //第0项为传入的值的话返回第1项
        if(arrarr[0]==key){
            return arrarr[1];
        }
    }
}
//删除Cookie--removeCookie\
function removeCookie(key) {
    this.setCookie(key,'',-1);
}
//清空cookie--clearCookie
function clearCookie() {
    var arr = document.cookie.split("; ")
    console.log(arr)
    for (var item of arr){
        var arrarr = item.split("=");
        this.removeCookie(arrarr[0],'',-1)
    }
}

