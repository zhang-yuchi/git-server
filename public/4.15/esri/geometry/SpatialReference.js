// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ./support/spatialReferenceUtils".split(" "),function(c,m,n,h,d,k,l,e,g){c=function(c){function a(b){b=c.call(this,b)||this;b.latestWkid=null;b.wkid=null;b.wkt=null;b.imageCoordinateSystem=null;return b}h(a,c);f=a;a.fromJSON=function(b){if(!b)return null;if(b.wkid){if(102100===b.wkid)return f.WebMercator;if(4326===
b.wkid)return f.WGS84}var a=new f;a.read(b);return a};a.prototype.normalizeCtorArgs=function(b){var a;return b&&"object"===typeof b?b:(a={},a["string"===typeof b?"wkt":"wkid"]=b,a)};Object.defineProperty(a.prototype,"isWGS84",{get:function(){return g.isWGS84(this)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isWebMercator",{get:function(){return g.isWebMercator(this)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isGeographic",{get:function(){return g.isGeographic(this)},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isWrappable",{get:function(){return g.isWrappable(this)},enumerable:!0,configurable:!0});a.prototype.writeWkt=function(b,a){this.wkid||(a.wkt=b)};a.prototype.clone=function(){if(this===f.WGS84)return f.WGS84;if(this===f.WebMercator)return f.WebMercator;var b=new f;null!=this.wkid?(b.wkid=this.wkid,null!=this.latestWkid&&(b.latestWkid=this.latestWkid),null!=this.vcsWkid&&(b.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(b.latestVcsWkid=
this.latestVcsWkid)):null!=this.wkt&&(b.wkt=this.wkt);this.imageCoordinateSystem&&(b.imageCoordinateSystem=l.clone(this.imageCoordinateSystem));return b};a.prototype.equals=function(b){if(null==b)return!1;if(this.imageCoordinateSystem||b.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==b.imageCoordinateSystem)return!1;var a=b.imageCoordinateSystem,c=a.id,a=a.referenceServiceName,e=b.imageCoordinateSystem.geodataXform,d=this.imageCoordinateSystem;return null==c||e?JSON.stringify(d)===
JSON.stringify(b.imageCoordinateSystem):a?d.id===c&&d.referenceServiceName===a:d.id===c}return g.equals(this,b)};a.prototype.toJSON=function(a){return this.write(null,a)};var f;a.GCS_NAD_1927=null;a.WGS84=null;a.WebMercator=null;d([e.property({dependsOn:["wkid"],readOnly:!0})],a.prototype,"isWGS84",null);d([e.property({dependsOn:["wkid"],readOnly:!0})],a.prototype,"isWebMercator",null);d([e.property({dependsOn:["wkid","wkt"],readOnly:!0})],a.prototype,"isGeographic",null);d([e.property({dependsOn:["wkid"],
readOnly:!0})],a.prototype,"isWrappable",null);d([e.property({type:Number,json:{write:!0}})],a.prototype,"latestWkid",void 0);d([e.property({type:Number,json:{write:!0,origins:{"web-scene":{write:{overridePolicy:function(){return{isRequired:null===this.wkt?!0:!1}}}}}}})],a.prototype,"wkid",void 0);d([e.property({type:String,json:{origins:{"web-scene":{write:{overridePolicy:function(){return{isRequired:null===this.wkid?!0:!1}}}}}}})],a.prototype,"wkt",void 0);d([e.writer("wkt"),e.writer("web-scene",
"wkt")],a.prototype,"writeWkt",null);d([e.property({type:Number,json:{write:!0}})],a.prototype,"vcsWkid",void 0);d([e.property({type:Number,json:{write:!0}})],a.prototype,"latestVcsWkid",void 0);d([e.property()],a.prototype,"imageCoordinateSystem",void 0);return a=f=d([e.subclass("esri.geometry.SpatialReference")],a)}(e.declared(k.JSONSupport));c.prototype.toJSON.isDefaultToJSON=!0;c.GCS_NAD_1927=new c({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'});
c.WGS84=new c(g.WGS84);c.WebMercator=new c(g.WebMercator);Object.freeze&&(Object.freeze(c.GCS_NAD_1927),Object.freeze(c.WGS84),Object.freeze(c.WebMercator));return c});