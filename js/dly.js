function zzn() {
    var bu = document.getElementsByTagName('button')[0];
    if (getCookie('btai')) {
        console.log(1);
        document.getElementsByTagName('input')[0].value = getCookie('name');
        document.getElementsByTagName('input')[1].value = getCookie('pwd');
        document.getElementsByTagName('input')[2] = getCookie('btai');
    }
    bu.onclick = function () {
        var in_1 = document.getElementsByTagName('input')[0];
        var in_2 = document.getElementsByTagName('input')[1];
        var in_3 = document.getElementsByTagName('input')[2].checked;
        if (in_1.value == getCookie('name') && in_2.value == getCookie('pwd')) {
            alert('登录成功');
            setCookie('soot', true);
            window.location.href = 'index.html';
            if (in_3) {
                console.log(1);
                setCookie('name', in_1.value);
                setCookie('pwd', in_2.value);
                setCookie('btai', in_3);
            } else {
                removeCookie('name');
                removeCookie('pwd');
                removeCookie('btai');
            }
        }
        else {
            alert('输入有误');
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
}
zzn();