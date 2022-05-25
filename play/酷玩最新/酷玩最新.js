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
                    str = JSON.parse(str)
                    wwc(str);
                }else{
                    console.log('请求失败');
                }
            }
        }
        function wwc(z){
            var ol_ = document.getElementsByClassName('po')[0];
            for(var item of z){
                console.log(item);
                for(var zzth of item){
                    console.log(zzth);
                     // 创建大div
                 var div_ = document.createElement('div');
                 div_.setAttribute('class','lk1');
                
                // 创建图片
                var img_ = document.createElement('img');
                img_.src=zzth.img;
                console.log(img_);
                div_.appendChild(img_);
               
                // 创建小div
                var di_ = document.createElement('div');
                di_.setAttribute('class','lp')
                
                // 创建h4
                var h4_ = document.createElement('h4');
                h4_.innerHTML= zzth.description;
                console.log(h4_);
                di_.appendChild(h4_);
                // 创建op
                var op_ = document.createElement('p');
                op_.setAttribute('class','op');
                op_.innerHTML = zzth.text;
                di_.appendChild(op_);
                // 创建pp
                var pp_ = document.createElement('p');
                pp_.setAttribute('class','pp');
                pp_.innerHTML = zzth.price;
                di_.appendChild(pp_);
                // 创建ul
                var ul_ = document.createElement('ul');
                ul_.setAttribute('class','ul');
                
                // 创建li
                var li_ = document.createElement('li');
                li_.setAttribute('class','ss');
                li_.innerHTML = zzth.like;
                ul_.appendChild(li_);
                // li分支
                var lii_= document.createElement('li');
                lii_.setAttribute('class','ee');
                lii_.innerHTML = zzth.words;
                ul_.appendChild(lii_);
                di_.appendChild(ul_);
                div_.appendChild(di_);
                ol_.appendChild(div_);

                }
                
                
            }
        }
    }
}
sc();
