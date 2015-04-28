(function(win){
	'use strict'

	win.myDisplay = {
		getDeviceWidth : function(){
			return win.outerWidth + ' px';
		},
		getDeviceHeight : function(){
			return win.outerHeight + ' px';
		},
		getDevicePixelRatio : function(){
			return win.devicePixelRatio;
		},
		printDisplayInfo : function(method, infoContainer){
			var infoContainer = document.getElementById(infoContainer);
			infoContainer.innerHTML = this[method]();
		}
	};

})(window);