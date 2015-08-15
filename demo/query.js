function bindEvent (obj, events. fn) {
	if (obj.addEventListener) {
		obj.addEventListener(events, function (ev) {
			if (fn() == false) {
				ev.preventDefault();
				ev.cancelBubble = true;
			};
		},false);
	} else{
		obj.attachEvent('on' + events, function () {
			if (fn() == false) {
				window.event.cancelBubble = true;
				return false;
			};
		})
	};
}
function getByClass (oParent, sClass) {
	var arr = [];
	var elems = oParent.getElementsByTagName('*');

	for (var i = 0; i < elems.length; i++) {
		if (elems[i].className == sClass) {
			arr.push(elems[i]);
		};
	};
	return arr;
}


function toArray (elems) {
	var arr = [];
	for (var i = 0; i < elems.length; i++) {
		arr.push(elems[i]);
	};
	return arr;
}
function getStyle (obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else{
		return getComputerStyle(obj, false)[attr];
	};
}
function Vquery (vArg) {
	this.elements = [];

	switch (typeof vArg) {
		case 'function':
			bindEvent(window, 'load', vArg);
			break;
	}
}
