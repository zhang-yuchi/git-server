// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../request ../../core/maybe ../../core/urlUtils ../../geometry/support/jsonUtils ../../geometry/support/normalizeUtils ./pbfQueryUtils ./PBFWorker ./urlUtils ./zscale @dojo/framework/shim/Promise".split(" "),function(z,d,k,m,n,p,q,r,t,u,v,w,x,y){function l(a,b){var c=a.geometry;a=a.toJSON();c&&(a.geometry=JSON.stringify(c),a.geometryType=t.getJsonType(c),a.inSR=c.spatialReference.wkid||
JSON.stringify(c.spatialReference));a.groupByFieldsForStatistics&&(a.groupByFieldsForStatistics=a.groupByFieldsForStatistics.join(","));a.objectIds&&(a.objectIds=a.objectIds.join(","));a.orderByFields&&(a.orderByFields=a.orderByFields.join(","));!a.outFields||b&&(b.returnCountOnly||b.returnExtentOnly||b.returnIdsOnly)?delete a.outFields:-1!==a.outFields.indexOf("*")?a.outFields="*":a.outFields=a.outFields.join(",");a.outSR?a.outSR=a.outSR.wkid||JSON.stringify(a.outSR):c&&(a.returnGeometry||a.returnCentroid)&&
(a.outSR=a.inSR);a.returnGeometry&&delete a.returnGeometry;a.outStatistics&&(a.outStatistics=JSON.stringify(a.outStatistics));a.pixelSize&&(a.pixelSize=JSON.stringify(a.pixelSize));a.quantizationParameters&&(a.quantizationParameters=JSON.stringify(a.quantizationParameters));a.source&&(a.layer=JSON.stringify({source:a.source}),delete a.source);if(a.timeExtent){c=a.timeExtent;b=c.start;c=c.end;if(null!=b||null!=c)a.time=b===c?b:(null==b?"null":b)+","+(null==c?"null":c);delete a.timeExtent}return a}
function g(a,b,c,f,e){void 0===f&&(f={});var d="string"===typeof a?r.urlToObject(a):a;a=b.geometry?[b.geometry]:[];f.responseType="pbf"===c?"array-buffer":"json";return u.normalizeCentralMeridian(a,null,f).then(function(a){a=a&&a[0];q.isSome(a)&&(b=b.clone(),b.geometry=a);a=x.mapParameters(k({},d.query,{f:c},e,l(b,e)));return p(d.path+"/query",k({},f,{query:a}))})}Object.defineProperty(d,"__esModule",{value:!0});d.queryToQueryStringParameters=l;d.executeQuery=function(a,b,c,f){return n(this,void 0,
void 0,function(){var e;return m(this,function(d){switch(d.label){case 0:return[4,g(a,b,"json",f)];case 1:return e=d.sent(),y.applyFeatureSetZUnitScaling(b,c,e.data),[2,e]}})})};d.executeQueryPBF=function(a,b,c,d){var e;c.useWorker?(null==h&&(h=new w.PBFWorker),e=h):e=null;var f=e;return g(a,b,"pbf",d).then(function(a){var b=function(b){a.data=b;return a};return c.useWorker?f.parseFeatureQuery(a.data,c).then(function(a){return b(a)}):b(v.parsePBFFeatureQuery(a.data,c))})};d.executeQueryForIds=function(a,
b,c){return g(a,b,"json",c,{returnIdsOnly:!0})};d.executeQueryForCount=function(a,b,c){return g(a,b,"json",c,{returnIdsOnly:!0,returnCountOnly:!0})};d.executeQueryForExtent=function(a,b,c){return g(a,b,"json",c,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(a){var b=a.data;if(b.hasOwnProperty("extent"))return a;if(b.features)throw Error("Layer does not support extent calculation.");if(b.hasOwnProperty("count"))throw Error("Layer does not support extent calculation.");return a})};var h});