// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Accessor ../core/Collection ../core/watchUtils ../core/accessorSupport/decorators".split(" "),function(d,e,g,c,h,f,k,b){Object.defineProperty(e,"__esModule",{value:!0});d=function(d){function a(a){a=d.call(this,a)||this;a.view=null;a.baseLayerViews=new f;a.referenceLayerViews=new f;a._loadingHandle=k.init(a,"view.map.basemap",function(a){a&&a.load().catch(function(){})});return a}g(a,d);a.prototype.destroy=
function(){this._set("view",null);this._loadingHandle&&(this._loadingHandle.remove(),this._loadingHandle=null)};Object.defineProperty(a.prototype,"suspended",{get:function(){return this.view?this.view.suspended:!0},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"updating",{get:function(){return this.view&&this.view.suspended?!1:!(!(this.view&&this.view.map&&this.view.map.basemap)||this.view.map.basemap.loaded)},enumerable:!0,configurable:!0});c([b.property({constructOnly:!0})],
a.prototype,"view",void 0);c([b.property({readOnly:!0})],a.prototype,"baseLayerViews",void 0);c([b.property({readOnly:!0})],a.prototype,"referenceLayerViews",void 0);c([b.property({readOnly:!0,dependsOn:["view.suspended"]})],a.prototype,"suspended",null);c([b.property({type:Boolean,readOnly:!0,dependsOn:["view.suspended","view.map.basemap.loaded"]})],a.prototype,"updating",null);return a=c([b.subclass("esri.views.BasemapView")],a)}(b.declared(h));e.BasemapView=d});