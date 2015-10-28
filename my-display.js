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
    },
    identifyMissingSystemFonts : function(container){
      var fontFacedElements = this.getFontFacedElements(container);
      for (var i = 0; i < fontFacedElements.length; i++)
        if(!this.hasSameFontFamily(fontFacedElements[i].style.fontFamily, win.getComputedStyle(fontFacedElements[i]).fontFamily))
          fontFacedElements[i].style.color = "#F00";
    },
    getFontFacedElements : function(container){
      return document.getElementsByTagName('li', container);
    },
    hasSameFontFamily : function(fontFacedToBeComparedWith, currentFontFacedElement){
      fontFacedToBeComparedWith = this.getFirstFontFamilyDefined(fontFacedToBeComparedWith);
      currentFontFacedElement = this.getFirstFontFamilyDefined(currentFontFacedElement);
      return fontFacedToBeComparedWith === currentFontFacedElement;
    },
    getFirstFontFamilyDefined : function(fontFamilies){
      if(this.hasMoreThenOneFontFamilyDefined(fontFamilies))
        return fontFamilies.split(',')[0];
    },
    hasMoreThenOneFontFamilyDefined : function(fontFamilies){
      return fontFamilies.indexOf(',') > -1;
    }
  };

})(window);
