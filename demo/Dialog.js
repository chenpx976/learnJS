function Dialog(){

	this.oLogin = null;

	this.settings = {   //默认参数
		w : 300,
		h : 300,
		dir : 'center',
		title : '',
		mark : false
	};

}

Dialog.prototype.json = {};

Dialog.prototype.init = function( opt ){

	extend( this.settings , opt );


	if( this.json[opt.iNow] == undefined ){
		this.json[opt.iNow] = true;
	}


	if(this.json[opt.iNow]){
		this.create();
		this.fnClose();

		if(this.settings.mark){
			this.createMark();
		}

		this.json[opt.iNow] = false;

	}

};

Dialog.prototype.create = function(){

	this.oLogin = document.createElement('div');
	this.oLogin.className = 'login';
	this.oLogin.innerHTML = '<div class="title"><span>'+ this.settings.title +'</span><span class="close">X</span></div><div class="content"></div>';

	document.body.appendChild( this.oLogin );

	this.setData();
};

Dialog.prototype.setData = function(){

	this.oLogin.style.width = this.settings.w + 'px';
	this.oLogin.style.height = this.settings.h + 'px';

	if( this.settings.dir == 'center' ){
		this.oLogin.style.left =  (viewWidth() - this.oLogin.offsetWidth)/2 + 'px';
		this.oLogin.style.top =  (viewHeight() - this.oLogin.offsetHeight)/2 + 'px';
	}
	else if( this.settings.dir == 'right' ){
		this.oLogin.style.left =  (viewWidth() - this.oLogin.offsetWidth) + 'px';
		this.oLogin.style.top =  (viewHeight() - this.oLogin.offsetHeight) + 'px';
	}

};

Dialog.prototype.fnClose = function(){

	var oClose = this.oLogin.getElementsByTagName('span')[1];
	var This = this;

	oClose.onclick = function(){

		document.body.removeChild( This.oLogin );

		if(This.settings.mark){
			document.body.removeChild( This.oMark );
		}

		This.json[This.settings.iNow] = true;

	};

};

Dialog.prototype.createMark = function(){

	var oMark = document.createElement('div');
	oMark.id = 'mark';

	document.body.appendChild( oMark );

	this.oMark = oMark;

	oMark.style.width = viewWidth() + 'px';
	oMark.style.height = viewHeight() + 'px';

};

function extend(obj1,obj2){
	for(var attr in obj2){
		obj1[attr] = obj2[attr];
	}
}

function viewWidth(){
	return document.documentElement.clientWidth;
}
function viewHeight(){
	return document.documentElement.clientHeight;
}
