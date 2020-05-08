// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper @dojo/framework/shim/array ../../../core/maybe ../../../layers/support/fieldUtils".split(" "),function(y,d,v,w,x,k,e){Object.defineProperty(d,"__esModule",{value:!0});d.getRequiredFields=function(a,b){void 0===b&&(b=a.popupTemplate);return w(this,void 0,void 0,function(){var d,p,f,l,g,m,c,q,r,t,u,n;return v(this,function(h){switch(h.label){case 0:return k.isSome(b)?[4,b.getRequiredFields(a.fields)]:
[2,[]];case 1:d=h.sent();p=b.lastEditInfoEnabled;f=a.objectIdField;l=a.typeIdField;g=a.globalIdField;m=a.relationships;if(x.includes(d,"*"))return[2,["*"]];q=e.fixFields;r=[a.fields];u=(t=d).concat;return(n=p)?[4,e.getFeatureEditFields(a)]:[3,3];case 2:n=h.sent(),h.label=3;case 3:return c=q.apply(void 0,r.concat([u.apply(t,[n||null])])),l&&c.push(l),c&&f&&e.hasField(a.fields,f)&&-1===c.indexOf(f)&&c.push(f),c&&g&&e.hasField(a.fields,g)&&-1===c.indexOf(g)&&c.push(g),m&&m.forEach(function(b){b=b.keyField;
c&&b&&e.hasField(a.fields,b)&&-1===c.indexOf(b)&&c.push(b)}),[2,c]}})})};d.getFetchPopupTemplate=function(a,b){return a.popupTemplate?a.popupTemplate:k.isSome(b)&&b.defaultPopupTemplateEnabled&&k.isSome(a.defaultPopupTemplate)?a.defaultPopupTemplate:null}});