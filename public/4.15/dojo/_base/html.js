//>>built
define("./kernel ../dom ../dom-style ../dom-attr ../dom-prop ../dom-class ../dom-construct ../dom-geometry".split(" "),function(a,l,d,f,m,h,k,b){a.byId=l.byId;a.isDescendant=l.isDescendant;a.setSelectable=l.setSelectable;a.getAttr=f.get;a.setAttr=f.set;a.hasAttr=f.has;a.removeAttr=f.remove;a.getNodeProp=f.getNodeProp;a.attr=function(a,b,c){return 2==arguments.length?f["string"==typeof b?"get":"set"](a,b):f.set(a,b,c)};a.hasClass=h.contains;a.addClass=h.add;a.removeClass=h.remove;a.toggleClass=h.toggle;
a.replaceClass=h.replace;a._toDom=a.toDom=k.toDom;a.place=k.place;a.create=k.create;a.empty=function(a){k.empty(a)};a._destroyElement=a.destroy=function(a){k.destroy(a)};a._getPadExtents=a.getPadExtents=b.getPadExtents;a._getBorderExtents=a.getBorderExtents=b.getBorderExtents;a._getPadBorderExtents=a.getPadBorderExtents=b.getPadBorderExtents;a._getMarginExtents=a.getMarginExtents=b.getMarginExtents;a._getMarginSize=a.getMarginSize=b.getMarginSize;a._getMarginBox=a.getMarginBox=b.getMarginBox;a.setMarginBox=
b.setMarginBox;a._getContentBox=a.getContentBox=b.getContentBox;a.setContentSize=b.setContentSize;a._isBodyLtr=a.isBodyLtr=b.isBodyLtr;a._docScroll=a.docScroll=b.docScroll;a._getIeDocumentElementOffset=a.getIeDocumentElementOffset=b.getIeDocumentElementOffset;a._fixIeBiDiScrollLeft=a.fixIeBiDiScrollLeft=b.fixIeBiDiScrollLeft;a.position=b.position;a.marginBox=function(a,g){return g?b.setMarginBox(a,g):b.getMarginBox(a)};a.contentBox=function(a,g){return g?b.setContentSize(a,g):b.getContentBox(a)};
a.coords=function(e,g){a.deprecated("dojo.coords()","Use dojo.position() or dojo.marginBox().");e=l.byId(e);var c=d.getComputedStyle(e),c=b.getMarginBox(e,c);e=b.position(e,g);c.x=e.x;c.y=e.y;return c};a.getProp=m.get;a.setProp=m.set;a.prop=function(a,b,c){return 2==arguments.length?m["string"==typeof b?"get":"set"](a,b):m.set(a,b,c)};a.getStyle=d.get;a.setStyle=d.set;a.getComputedStyle=d.getComputedStyle;a.__toPixelValue=a.toPixelValue=d.toPixelValue;a.style=function(a,b,c){switch(arguments.length){case 1:return d.get(a);
case 2:return d["string"==typeof b?"get":"set"](a,b)}return d.set(a,b,c)};return a});