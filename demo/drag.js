function Drag() {
    this.obj = null;
    this.disX = 0;
    this.disY = 0;

    this.settings = { //默认参数
        toDown: function() {},
        toUp: function() {}
    };

}
Drag.prototype.init = function(opt) {

    var This = this;

    this.obj = document.getElementById(opt.id);

    extend(this.settings, opt);

    this.obj.onmousedown = function(ev) {
        var ev = ev || window.event;
        This.fnDown(ev);

        This.settings.toDown();

        document.onmousemove = function(ev) {
            var ev = ev || window.event;
            This.fnMove(ev);
        };
        document.onmouseup = function() {
            This.fnUp();

            This.settings.toUp();

        };
        return false;
    };

};

Drag.prototype.fnDown = function(ev) {
    this.disX = ev.clientX - this.obj.offsetLeft;
    this.disY = ev.clientY - this.obj.offsetTop;
    if (this.obj.setCapture) {
        this.obj.setCapture();
    }
};
Drag.prototype.fnMove = function(ev) {
    this.obj.style.left = ev.clientX - this.disX + 'px';
    this.obj.style.top = ev.clientY - this.disY + 'px';
};
Drag.prototype.fnUp = function() {
    document.onmousemove = null;
    document.onmouseup = null;
    //释放全局捕获 releaseCapture();
    if (this.obj.releaseCapture) {
        this.obj.releaseCapture();
    }
};





function extend(obj1, obj2) {
    for (var attr in obj2) {
        obj1[attr] = obj2[attr];
    }
}
