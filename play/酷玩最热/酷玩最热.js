// 刷新
function sc(){
    var cg_ = document.getElementById('cg');

    cg_.onclick = function () {
        cg_.innerHTML = '<img src="../../css/img/loading-icon.gif">  正在加载中'

        var ajax_ = new XMLHttpRequest () || new ActiveXObject ('Microsoft.XMLHTTP');

        ajax_.open('get','http://localhost:3000/play/new');
       
        ajax_.send();
        
        ajax_.onreadystatechange = function (){
            if(ajax_.readyState == 4){
                if (ajax_.status == 200){
                    var str = ajax_.responseText;
                    console.log(str);
                    str = JSON.parse(str)
                    console.log(str);
                }else{
                    console.log('请求失败');
                }
            }
        }
        function wwc(z){
            console.log(z);
            var lk1_ = document.getElementsByClassName('lk1')[0];
            console.log(lk1_);
            for(var item of z){
                var img_ = document.createElement('img');

                var div_ = document.createElement('div');
            }
        }
    }
}
sc();
