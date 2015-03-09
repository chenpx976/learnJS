// 普通青年
$(function() {
    var ali = $('.tabTitle ul li');
    var aDiv = $('.tabContent div');
    var timeId = null;

    ali.mouseover(function() {

        var _this = $(this);
        //setTimeout();的作用是延迟某一段代码的执行
        timeId = setTimeout(function() {

            //$(this)方法属于哪个元素，$(this)就是指哪个元素
            _this.addClass('current').siblings().removeClass('current');


            //如果想用一组元素控制另一组元素的显示或者隐藏，需要用到索引
            var index = _this.index();

            aDiv.eq(index).show().siblings().hide();


        }, 300);


    }).mouseout(function() {
        //clearTimeout的作用是清除定时器
        clearTimeout(timeId);
    });
});
// 文艺青年
(function() {

    fnTab($('.tabNav1'), $('.tabCon1'), 'click');
    fnTab($('.tabNav2'), $('.tabCon2'), 'click');
    fnTab($('.tabNav3'), $('.tabCon3'), 'mouseover');
    fnTab($('.tabNav4'), $('.tabCon4'), 'mouseover');

    function fnTab(oNav, aCon, sEvent) {
        var aElem = oNav.children();
        aCon.hide().eq(0).show();

        aElem.each(function(index) {

            $(this).on(sEvent, function() {
                aElem.removeClass('active').addClass('gradient');
                $(this).removeClass('gradient').addClass('active');
                aElem.find('a').attr('class', 'triangle_down_gray');
                $(this).find('a').attr('class', 'triangle_down_red');

                aCon.hide().eq(index).show();
            });

        });
    }
})();
// 有对象的青年

window.onload = function() {

    var t1 = new Tab('div1');

    t1.init();
    t1.autoplay();

    var t2 = new Tab('div2');
    t2.init();
}

function Tab(id) {
    this.oParent = document.getElementById(id);
    this.aInput = this.oParent.getElementsByTagName('input');
    this.aDiv = this.oParent.getElementsByTagName('div');
    this.iNow = 0;
}

Tab.prototype.init = function() {
    var This = this;
    for (var i = 0; i < this.aInput.length; i++) {
        this.aInput[i].onclick = function() {
            This.change(this);
        }
        this.aInput[i].index = i;
    }
}

Tab.prototype.change = function(obj) {
    for (var i = 0; i < this.aInput.length; i++) {
        this.aInput[i].className = '';
        this.aDiv[i].style.display = 'none';
    }

    obj.className = 'active';
    this.aDiv[obj.index].style.display = 'block';
    this.iNow = obj.index;
}

Tab.prototype.autoplay = function() {
    var This = this;
    clearInterval(This.timer);
    This.timer = setInterval(function() {
        This.iNow++;
        if (This.iNow == This.aInput.length) {
            This.iNow = 0;
        }

        for (var i = 0; i < This.aInput.length; i++) {
            This.aInput[i].className = '';
            This.aDiv[i].style.display = 'none';
        }

        This.aInput[This.iNow].className = 'active';
        This.aDiv[This.iNow].style.display = 'block';

    }, 3000);
}
