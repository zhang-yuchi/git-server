// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/assignHelper ../../../core/tsSupport/restHelper ../../../core/Error ../../../core/maybe ../../../geometry/support/scaleUtils ../statistics/spatialStatistics ../support/utils ../../visualVariables/SizeVariable".split(" "),function(z,A,l,f,m,n,h,r,t,u,p,v){function w(a){return f(this,void 0,void 0,function(){var c,d,g,q,b,e,f;return l(this,function(k){switch(k.label){case 0:c=
a.view;if(!(a&&c&&a.layer))throw new h("outline:missing-parameters","'view' and 'layer' parameters are required");d=[0,2,3,1];g=a.layer;q=n(a,["layer"]);b=p.createLayerAdapter(g,d);e=m({layerAdapter:b},q);if(!b)throw new h("outline:invalid-parameters","'layer' must be one of these types: "+p.getLayerTypeLabels(d).join(", "));return[4,c.when()];case 1:return k.sent(),f=r.isSome(e.signal)?{signal:e.signal}:null,[4,b.load(f)];case 2:k.sent();if("polygon"!==b.geometryType)throw new h("outline:not-supported",
"outline is not supported for geometryType: "+b.geometryType);return[2,e]}})})}function x(a,c){var d=a.avgSize,g=t.getScaleForResolution(1,c.spatialReference);a=y.map(function(a){return{size:a.width,value:Math.round(d/a.size*g)}});a.sort(function(a,b){return a.value-b.value});return{visualVariables:[new v({target:"outline",valueExpression:"$view.scale",stops:a})],opacity:.25}}var y=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];return function(a){return f(this,void 0,
void 0,function(){var c,d,g,f,b;return l(this,function(e){switch(e.label){case 0:return[4,w(a)];case 1:return c=e.sent(),d=c.layerAdapter,g=n(c,["layerAdapter"]),[4,d.getSampleFeatures(m({sampleSize:-1,returnGeometry:!0},g))];case 2:return f=e.sent(),[4,u({features:f,geometryType:d.geometryType})];case 3:b=e.sent();if(!("avgSize"in b&&b.avgSize))throw new h("outline:insufficient-info","average polygon size is invalid");return[2,x(b,g.view)]}})})}});