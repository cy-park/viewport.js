;(function(){

	var vp = {
		w: 0, h: 0, cx: 0, cy: 0, dg:0,
		ow: 0, oh: 0, ocx: 0, ocy: 0, odg:0,
		detect: function(){
			this.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			this.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			this.cx = this.w/2;
			this.cy = this.h/2;
			this.dg = Math.sqrt(Math.pow(this.w, 2) + Math.pow(this.h, 2));
		},
		save: function(){
			this.ow = this.w;
			this.oh = this.h;
			this.ocx = this.cx;
			this.ocy = this.cy;
			this.odg = this.dg;
		}
	};

	if (typeof define === 'function' && define.amd) define(vp); else if (typeof module === 'object' && module.exports) module.exports = vp;
	this.vp = vp;

}).call(this);