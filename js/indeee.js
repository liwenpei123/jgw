function oin() {
    var ddaio_ = document.getElementById('ddaio');
    console.log(ddaio_);
    var zzt = document.getElementsByClassName('register')[0];
    console.log(zzt);
    var ddzt_ = zzt.firstElementChild;
    console.log(ddzt_);
    var nameyhh = getCookie('name');
    var geeco = getCookie('soot');
    if (geeco) {
        zzt.removeChild(ddzt_);
        zzt.innerHTML = '用户名：' + nameyhh;
    }

}

function setCookie(key, val, time) {
    //获取时间
    var date = new Date();
    //获取时间为天
    date.setDate(date.getDate() + time);
    //添加Cookie方法 键 = 值 expires = 时间
    document.cookie = `${key}=${val};expires=${date}`;

}
//获取Cookie--getCookie
function getCookie(key) {
    //分割 ;
    var arr = document.cookie.split("; ")
    //遍历
    for (var item of arr) {
        var arrarr = item.split("=");
        //第0项为传入的值的话返回第1项
        if (arrarr[0] == key) {
            return arrarr[1];
        }
    }
}
//删除Cookie--removeCookie\
function removeCookie(key) {
    this.setCookie(key, '', -1);
}
//清空cookie--clearCookie
function clearCookie() {
    var arr = document.cookie.split("; ")
    console.log(arr)
    for (var item of arr) {
        var arrarr = item.split("=");
        this.removeCookie(arrarr[0], '', -1)
    }
}

oin();