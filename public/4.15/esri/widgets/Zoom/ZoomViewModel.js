// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/promiseUtils ../../core/accessorSupport/decorators ./ZoomConditions2D ./ZoomConditions3D".split(" "),function(m,n,g,d,h,e,c,k,l){return function(f){function b(a){a=f.call(this,a)||this;a.canZoomIn=!1;a.canZoomOut=!1;a.zoomIn=a.zoomIn.bind(a);a.zoomOut=a.zoomOut.bind(a);return a}g(b,f);b.prototype.destroy=function(){this.view=null};Object.defineProperty(b.prototype,"state",
{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"view",{set:function(a){a?"2d"===a.type?this._zoomConditions=new k({view:a}):"3d"===a.type&&(this._zoomConditions=new l({view:a})):this._zoomConditions=null;this._set("view",a)},enumerable:!0,configurable:!0});b.prototype.zoomIn=function(){if(this.canZoomIn){var a=this.view;"2d"===a.type?a.mapViewNavigation.zoomIn():e.ignoreAbortErrors(a.goTo({zoomFactor:2}))}};b.prototype.zoomOut=
function(){if(this.canZoomOut){var a=this.view;"2d"===a.type?a.mapViewNavigation.zoomOut():e.ignoreAbortErrors(a.goTo({zoomFactor:.5}))}};d([c.property()],b.prototype,"_zoomConditions",void 0);d([c.property({aliasOf:"_zoomConditions.canZoomIn",readOnly:!0})],b.prototype,"canZoomIn",void 0);d([c.property({aliasOf:"_zoomConditions.canZoomOut",readOnly:!0})],b.prototype,"canZoomOut",void 0);d([c.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);d([c.property()],b.prototype,
"view",null);d([c.property()],b.prototype,"zoomIn",null);d([c.property()],b.prototype,"zoomOut",null);return b=d([c.subclass("esri.widgets.Zoom.ZoomViewModel")],b)}(c.declared(h))});