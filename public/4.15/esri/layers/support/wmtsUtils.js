// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/Error ../../geometry/Extent ../../geometry/Point ../../geometry/SpatialReference ../../geometry/support/WKIDUnitConversion ./TileInfo".split(" "),function(J,r,A,B,v,C,t,D){function m(b,a){return(b=a.getElementsByTagName(b))&&0<b.length?b[0]:null}function p(b,a){return Array.prototype.slice.call(a.getElementsByTagName(b)).map(function(b){return b.textContent})}function l(b,a){b.split("\x3e").forEach(function(b){a&&(a=m(b,a))});return a&&a.textContent}function q(b,
a,e,d){var h;Array.prototype.slice.call(d.childNodes).some(function(c){if(-1<c.nodeName.indexOf(b)){var d=m(a,c),d=d&&d.textContent;if(d===e||e.split(":")&&e.split(":")[1]===d)return h=c,!0}return!1});return h}function w(b,a){var e=[],d=b.layerMap.get(a);if(d){var h=Array.prototype.slice.call(d.getElementsByTagName("ResourceURL")),d=d.getElementsByTagName("Dimension"),c,f,g,k;d.length&&(c=l("Identifier",d[0]),f=p("Default",d[0])||p("Value",d[0]));1<d.length&&(g=l("Identifier",d[1]),k=p("Default",
d[1])||p("Value",d[1]));b.dimensionMap.set(a,{dimensions:f,dimensions2:k});h.forEach(function(b){var a=b.getAttribute("template");if("tile"===b.getAttribute("resourceType")){if(c&&f.length)if(-1<a.indexOf("{"+c+"}"))a=a.replace("{"+c+"}","{dimensionValue}");else{var d=a.toLowerCase().indexOf("{"+c.toLowerCase()+"}");-1<d&&(a=a.substring(0,d)+"{dimensionValue}"+a.substring(d+c.length+2))}g&&k.length&&(-1<a.indexOf("{"+g+"}")?a=a.replace("{"+g+"}","{dimensionValue2}"):(d=a.toLowerCase().indexOf("{"+
g.toLowerCase()+"}"),-1<d&&(a=a.substring(0,d)+"{dimensionValue2}"+a.substring(d+g.length+2))));e.push({template:a,format:b.getAttribute("format"),resourceType:"tile"})}});return e}}function E(b,a){return Array.prototype.slice.call(b.getElementsByTagName("Style")).map(function(b){var d=m("LegendURL",b),e=m("Keywords",b),e=e&&p("Keyword",e),d=d&&d.getAttribute("xlink:href");a&&(d=d&&d.replace(/^http:/i,"https:"));return{abstract:l("Abstract",b),id:l("Identifier",b),isDefault:"true"===b.getAttribute("isDefault"),
keywords:e,legendUrl:d,title:l("Title",b)}})}function F(b,a){return p("TileMatrixSet",b).map(function(e){return G(e,b,a)})}function G(b,a,e){a=q("TileMatrixSetLink","TileMatrixSet",b,a);a=p("TileMatrix",a);var d=q("TileMatrixSet","Identifier",b,e);e=H(d);var h=e.spatialReference,c=h.wkid,f=m("TileMatrix",d),f=[parseInt(l("TileWidth",f),10),parseInt(l("TileHeight",f),10)],g=[];a.length?a.forEach(function(a,e){a=q("TileMatrix","Identifier",a,d);g.push(x(a,c,e,b))}):Array.prototype.slice.call(d.getElementsByTagName("TileMatrix")).forEach(function(a,
d){g.push(x(a,c,d,b))});a=I(d,e,f,g[0]);return{id:b,fullExtent:a.toJSON(),tileInfo:(new D({dpi:96,spatialReference:h,size:f,origin:e,lods:g})).toJSON()}}function H(b){var a=l("SupportedCRS",b);a&&(a=a.toLowerCase());var e=parseInt(a.split(":").pop(),10);if(900913===e||3857===e)e=102100;var d=!1;if(-1<a.indexOf("crs84")||-1<a.indexOf("crs:84"))e=4326,d=!0;else if(-1<a.indexOf("crs83")||-1<a.indexOf("crs:83"))e=4269,d=!0;else if(-1<a.indexOf("crs27")||-1<a.indexOf("crs:27"))e=4267,d=!0;var h=new C({wkid:e});
b=m("TileMatrix",b);var c=l("TopLeftCorner",b).split(" ");b=c[0].split("E").map(function(a){return Number(a)});var c=c[1].split("E").map(function(a){return Number(a)}),f=b[0],g=c[0],k;1<b.length&&(f=b[0]*Math.pow(10,b[1]));1<c.length&&(g=c[0]*Math.pow(10,c[1]));var n=d&&4326===e&&90===f&&-180===g;y.some(function(b,c){var l=Number(a.split(":").pop());if(l>=b[0]&&l<=b[1]||4326===e&&(!d||n))return k=new v(g,f,h),!0;c===y.length-1&&(k=new v(f,g,h));return!1});return k}function I(b,a,e,d){var h=m("BoundingBox",
b),c,f;h&&(c=l("LowerCorner",h).split(" "),f=l("UpperCorner",h).split(" "));c&&1<c.length&&f&&1<f.length?(b=parseFloat(c[0]),e=parseFloat(c[1]),c=parseFloat(f[0]),f=parseFloat(f[1])):(b=m("TileMatrix",b),c=parseFloat(l("MatrixWidth",b)),h=parseFloat(l("MatrixHeight",b)),b=a.x,f=a.y,c=b+c*e[0]*d.resolution,e=f-h*e[1]*d.resolution);return new B(b,e,c,f,a.spatialReference)}function x(b,a,e,d){var h=l("Identifier",b);b=l("ScaleDenominator",b).split("E").map(function(a){return Number(a)});b=1<b.length?
b[0]*Math.pow(10,b[1]):b[0];a=z(a,b,d);return{level:e,levelValue:h,scale:1.058267716535433*b,resolution:a}}function z(b,a,e){b=t.hasOwnProperty(String(b))?t.values[t[b]]:"default028mm"===e?6370997*Math.PI/180:6378137*Math.PI/180;return 7*a/25E3/b}Object.defineProperty(r,"__esModule",{value:!0});var y=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,
4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,
2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,
5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];r.parseCapabilities=function(b,a){b=b.replace(/ows:/gi,"");var e=(new DOMParser).parseFromString(b,"text/xml").documentElement,d=new Map;b=new Map;var h=m("Contents",e);if(!h)throw new A("wmtslayer:wmts-capabilities-xml-is-not-valid");
var c=m("OperationsMetadata",e),c=(c=(c=c&&c.querySelector("[name\x3d'GetTile']"))&&c.getElementsByTagName("Get"))&&Array.prototype.slice.call(c),f=a&&a.url&&-1<a.url.indexOf("https"),g=a.serviceMode,k,n=a&&a.url,u;c&&c.length&&c.some(function(a){var b=m("Constraint",a);if(!b||q("AllowedValues","Value",g,b))return n=a.attributes[0].nodeValue,!0;if(!b||q("AllowedValues","Value","RESTful",b)||q("AllowedValues","Value","REST",b))u=a.attributes[0].nodeValue;else if(!b||q("AllowedValues","Value","KVP",
b))k=a.attributes[0].nodeValue;return!1});n||(u?(n=u,g="RESTful"):k?(n=k,g="KVP"):n=(a=m("ServiceMetadataURL",e))&&a.getAttribute("xlink:href"));a=n.indexOf("1.0.0/");-1===a&&"RESTful"===g?n+="/":-1<a&&(n=n.substring(0,a));"KVP"===g&&(n+=-1<a?"":"?");f&&(n=n.replace(/^http:/i,"https:"));e=l("ServiceIdentification\x3eAccessConstraints",e);a=Array.prototype.slice.call(h.getElementsByTagName("Layer")).map(function(a){var b=l("Identifier",a);d.set(b,a);var c=l("Abstract",a),e=p("Format",a),g,k=m("WGS84BoundingBox",
a);g=k?l("LowerCorner",k).split(" "):["-180","-90"];k=k?l("UpperCorner",k).split(" "):["180","90"];g={xmin:parseFloat(g[0]),ymin:parseFloat(g[1]),xmax:parseFloat(k[0]),ymax:parseFloat(k[1]),spatialReference:{wkid:4326}};var k=E(a,f),n=l("Title",a);a=F(a,h);return{id:b,fullExtent:g,description:c,formats:e,styles:k,title:n,tileMatrixSets:a}});return{copyright:e,layers:a,tileUrl:n,serviceMode:g,layerMap:d,dimensionMap:b}};r.parseResourceInfo=function(b){b.layers.forEach(function(a){a.tileMatrixSets.forEach(function(a){var b=
a.tileInfo;96!==b.dpi&&(b.lods.forEach(function(d){d.scale=96*d.scale/b.dpi;d.resolution=z(b.spatialReference.wkid,90.71428571428571*d.scale/96,a.id)}),b.dpi=96)})});return b};r.getTileUrlFromResourceUrls=function(b,a,e,d,h,c,f,g){var k=b.dimensionMap;b=w(b,a);var l=k.get(a).dimensions&&k.get(a).dimensions[0];a=k.get(a).dimensions2&&k.get(a).dimensions2[0];k="";if(b&&0<b.length){var m=null;b.some(function(a){return a.format===d?(m=a,!0):!1});m||(m=b[f%b.length]);k=m.template.replace(/\{Style\}/gi,
h).replace(/\{TileMatrixSet\}/gi,e).replace(/\{TileMatrix\}/gi,c).replace(/\{TileRow\}/gi,""+f).replace(/\{TileCol\}/gi,""+g).replace(/\{dimensionValue\}/gi,l).replace(/\{dimensionValue2\}/gi,a)}return k};r.getTileUrlTemplateFromResourceUrls=function(b,a,e,d){var h=b.dimensionMap;b=w(b,a);var c="";if(b&&0<b.length){var f=h.get(a).dimensions&&h.get(a).dimensions[0];a=h.get(a).dimensions2&&h.get(a).dimensions2[0];c=b[0].template;c.indexOf(".xxx")===c.length-4&&(c=c.slice(0,c.length-4));c=c.replace(/\{Style\}/gi,
d);c=c.replace(/\{TileMatrixSet\}/gi,e);c=c.replace(/\{TileMatrix\}/gi,"{level}");c=c.replace(/\{TileRow\}/gi,"{row}");c=c.replace(/\{TileCol\}/gi,"{col}");c=c.replace(/\{dimensionValue\}/gi,f);c=c.replace(/\{dimensionValue2\}/gi,a)}return c}});