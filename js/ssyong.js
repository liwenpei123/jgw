function oui() {
    var xx = document.getElementsByClassName('cxxo')[0];
    console.log(xx);
    xx.onclick = function () {
        var iim = document.getElementById('qhttp');
        xx.innerHTML = '<img src="../img/loading-icon.gif">正在加载中';
        var zyy;
        zyy = setTimeout(function () {
            var saac = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
            saac.open('get', 'http://localhost:3000/useing/master');
            saac.send();
            saac.onreadystatechange = function () {
                if (saac.readyState == 4) {
                    if (saac.status == 200) {
                        var nop = saac.responseText;
                        nop = JSON.parse(nop);
                        ccv(nop);
                    }
                }
            }
            function ccv(w) {
                console.log(w);
                var cou_ = document.getElementsByClassName('wiuu')[0];
                for (var item of w) {
                    // 创建li
                    console.log(item);
                    var liis = document.createElement('li');
                    // 创建一个a
                    var aa_ = document.createElement('a');
                    // 创建一个标识
                    var bbbtiv_1 = document.createElement('div');
                    bbbtiv_1.innerHTML = item.info_ty;
                    bbbtiv_1.setAttribute('class', 'sff');
                    aa_.appendChild(bbbtiv_1);
                    // 创建一个图片
                    var immabg = document.createElement('img');
                    immabg.src = item.img;
                    aa_.appendChild(immabg);
                    // 创建一个名字
                    var pp_x = document.createElement('p');
                    pp_x.innerHTML = item.text;
                    aa_.appendChild(pp_x);
                    console.log(pp_x);
                    // 创建一个div来定位 
                    var zzoot = document.createElement('div');
                    // 把类名引入
                    zzoot.setAttribute('class', 'zzot');
                    // 创建小div
                    var xx_1 = document.createElement('div');
                    var xx_2 = document.createElement('div');
                    xx_1.innerHTML = item.totalnum;
                    xx_2.innerHTML = item.num + '台';
                    xx_1.setAttribute('class', 'zz');
                    xx_2.setAttribute('class', 'zz');
                    // 把小div引入
                    zzoot.appendChild(xx_1);
                    zzoot.appendChild(xx_2);
                    aa_.appendChild(zzoot);
                    // 创建个p
                    var pp_1 = document.createElement('p');
                    // 给p设置一个类名
                    pp_1.setAttribute('class', 'apo');
                    // 创建一个span
                    var sppa_1 = document.createElement('span');
                    var ttei = document.createTextNode('申请');
                    sppa_1.innerHTML = item.apply;
                    //把span插入到p标签
                    pp_1.appendChild(sppa_1);
                    pp_1.appendChild(ttei);
                    // pp_1.appendChild(sppa_1 + '申请');
                    // 把p插入到li
                    aa_.appendChild(pp_1);

                    var ccp = document.createElement('p');
                    ccp.setAttribute('class', 'nooi');
                    ccp.innerHTML = '报告数量：8';
                    aa_.appendChild(ccp);
                    // 把li插入到ul里面
                    liis.appendChild(aa_);
                    cou_.appendChild(liis);

                }
            }
            xx.innerHTML = '<img src="../img/more.png">点击加载页面';
        }, 2000)
    }
}
oui();