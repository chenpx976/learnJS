// 事件处理工具，跨浏览器兼容性

var EventUtil = {
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        };
    },
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        };
    }


    // 这两个方法首先都会检测传入的元素是否存在DOM2级方法。
    // 如果存在DOM2级方法，则使用该方法：
    // 传入事件类型、事件处理函数、false(表示冒泡)
    // 如果存在IE的方法，则使用第二种：
    // 事件类型必须加上"on"前缀。
    // 最后一种使用DOM0方法【基本不会执行】。
    // 传入的handler如果是匿名函数的话，无法被移除。


    testHandler: function() {
        try {
            var btn = document.getElementById("myBtn");
            var handler = function() {
                alert('msg');
            }
            EventUtil.addHandler(btn, "click", handler);

            EventUtil.addHandler(btn, "click", handler);
        }
        catch (err){
        	//
        }
    }
}
