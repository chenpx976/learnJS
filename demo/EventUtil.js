// 事件处理工具，跨浏览器兼容性

var EventUtil = {
    // 这两个方法首先都会检测传入的元素是否存在DOM2级方法。
    // 如果存在DOM2级方法，则使用该方法：
    // 传入事件类型、事件处理函数、false(表示冒泡)
    // 如果存在IE的方法，则使用第二种：
    // 事件类型必须加上"on"前缀。
    // 最后一种使用DOM0方法【基本不会执行】。
    // 传入的handler如果是匿名函数的话，无法被移除。
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    //取得event对象
    getEvent: function(event) {
        return event ? event : window.event;
    },
    // 只有在事件处理程序期间，event对象才会存在；
    // 一旦事件处理程序执行完成之后，event对象就会被销毁。
    // 返回事件的目标
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    // 阻止事件的默认行为
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 立即停止事件在DOM层次中的传播
    // 取消进一步的事件捕获或冒泡
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};
