// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/lang ../../core/accessorSupport/decorators ./PointCloudFilter".split(" "),function(k,l,f,c,g,b,h){return function(e){function a(a){a=e.call(this,a)||this;a.mode="exclude";a.type="value";a.values=[];return a}f(a,e);d=a;a.prototype.clone=function(){return new d({field:this.field,mode:this.mode,values:g.clone(this.values)})};var d;c([b.property({type:["exclude","include"],json:{write:{enabled:!0,
isRequired:!0}}})],a.prototype,"mode",void 0);c([b.property({type:["value"],json:{type:["pointCloudValueFilter"]}})],a.prototype,"type",void 0);c([b.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"values",void 0);return a=d=c([b.subclass("esri.layers.pointCloudFilters.PointCloudValueFilter")],a)}(b.declared(h))});