// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators".split(" "),function(d,b,g,e,h,f,c){Object.defineProperty(b,"__esModule",{value:!0});d=function(d){function a(a){return d.call(this,a)||this}g(a,d);b=a;a.prototype.clone=function(){return new b({customLayerParameters:f.clone(this.customLayerParameters),customParameters:f.clone(this.customParameters),layerIdentifier:this.layerIdentifier,
tileMatrixSet:this.tileMatrixSet,url:this.url})};var b;e([c.property({json:{type:Object,write:!0}})],a.prototype,"customLayerParameters",void 0);e([c.property({json:{type:Object,write:!0}})],a.prototype,"customParameters",void 0);e([c.property({type:String,json:{write:!0}})],a.prototype,"layerIdentifier",void 0);e([c.property({type:String,json:{write:!0}})],a.prototype,"tileMatrixSet",void 0);e([c.property({type:String,json:{write:!0}})],a.prototype,"url",void 0);return a=b=e([c.subclass("esri.layer.support.WMTSLayerInfo")],
a)}(c.declared(h.JSONSupport));b.WMTSLayerInfo=d;b.default=d});