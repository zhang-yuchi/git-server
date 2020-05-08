// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/awaiterHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper dojox/gfx/canvas ../kernel ../request ../core/jsonMap ../core/lang ../core/promiseUtils ../core/screenUtils ../core/SetUtils ../core/urlUtils ../core/accessorSupport/decorators ../geometry/Polygon ../renderers/visualVariables/support/visualVariableUtils ./Geoprocessor ./Task ./support/fileFormat ./support/layoutTemplate ./support/printTaskUtils ./support/PrintTemplate ./support/Query".split(" "),
function(aa,ba,L,r,M,y,v,E,w,N,C,F,O,G,P,x,u,Q,R,S,T,U,V,n,W,X){function D(n){return n&&(n.path||"image/svg+xml"===n.contentType)}var J={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},K=new C.default({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),Y=new C.default({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),Z=new X({returnGeometry:!0});return function(C){function e(a){a=C.call(this,a)||this;a._ssExtent=null;a._legendLayers=[];
a._legendLayerNameMap={};a._gpServerUrl=null;a._cimVersion=null;a._is11xService=!1;a._gpMetadata=null;a.updateDelay=1E3;return a}M(e,C);Object.defineProperty(e.prototype,"_geoprocessor",{get:function(){return new S({url:this.url})},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"mode",{get:function(){return this._gpMetadata&&this._gpMetadata.executionType?Y.fromJSON(this._gpMetadata.executionType):"sync"},enumerable:!0,configurable:!0});e.prototype.execute=function(a,c){var d=this,
b=this.url,g=b.lastIndexOf("/GPServer/");0<g&&(b=b.slice(0,g+9));return O.resolve().then(function(){if(d._gpServerUrl===b)return{data:d._gpMetadata};d._gpServerUrl=b;return N(b,{query:{f:"json"}})}).then(function(b){d._gpMetadata=b.data;d._cimVersion=d._gpMetadata.cimVersion;d._is11xService=!!d._cimVersion;return d._getGpPrintParams(a)}).then(function(a){var b=function(a){return"sync"===d.mode?a.results&&a.results[0]&&a.results[0].value:d._geoprocessor.getResultData(a.jobId,"Output_File",c).then(function(a){return a.value})};
return"async"===d.mode?d._geoprocessor.submitJob(a,c).then(function(a){return d._geoprocessor.waitForJobCompletion(a.jobId,{interval:d.updateDelay}).then(b)}):d._geoprocessor.execute(a,c).then(b)})};e.prototype._createOperationalLayers=function(a,c){return r(this,void 0,void 0,function(){var d,b,g,m,q,t,p,f,h;return v(this,function(l){switch(l.label){case 0:d=[],b={layerView:null,printTemplate:c,view:a},g=0,c.preserveScale&&(g=c.outScale||a.scale),m=n.getVisibleLayerViews(a,g),q=0,t=m,l.label=1;case 1:if(!(q<
t.length))return[3,27];p=t[q];f=p.layer;if(!f.loaded||n.isGroupLayer(f))return[3,26];h=void 0;b.layerView=p;if(!n.isBingMapsLayer(f))return[3,2];h=this._createBingMapsLayerJSON(f);return[3,25];case 2:return n.isCSVLayer(f)?[4,this._createCSVLayerJSON(f,b)]:[3,4];case 3:return h=l.sent(),[3,25];case 4:return n.isFeatureLayer(f)?[4,this._createFeatureLayerJSON(f,b)]:[3,6];case 5:return h=l.sent(),[3,25];case 6:return n.isGraphicsLayer(f)?[4,this._createGraphicsLayerJSON(f,b)]:[3,8];case 7:return h=
l.sent(),[3,25];case 8:if(!n.isImageryLayer(f))return[3,9];h=this._createImageryLayerJSON(f);return[3,25];case 9:return n.isKMLLayer(f)?[4,this._createKMLLayerJSON(f,b)]:[3,11];case 10:return h=l.sent(),[3,25];case 11:if(!n.isMapImageLayer(f))return[3,12];h=this._createMapImageLayerJSON(f,b);return[3,25];case 12:return n.isMapNotesLayer(f)?[4,this._createMapNotesLayerJSON(b)]:[3,14];case 13:return h=l.sent(),[3,25];case 14:if(!n.isOpenStreetMapLayer(f))return[3,15];h=this._createOpenStreetMapLayerJSON();
return[3,25];case 15:return n.isStreamLayer(f)?[4,this._createStreamLayerJSON(f,b)]:[3,17];case 16:return h=l.sent(),[3,25];case 17:if(!n.isTileLayer(f))return[3,18];h=this._createTileLayerJSON(f);return[3,25];case 18:return n.isVectorTileLayer(f)?[4,this._createVectorTileLayerJSON(f,b)]:[3,20];case 19:return h=l.sent(),[3,25];case 20:if(!n.isWebTileLayer(f))return[3,21];h=this._createWebTileLayerJSON(f);return[3,25];case 21:if(!n.isWMSLayer(f))return[3,22];h=this._createWMSLayerJSON(f);return[3,
25];case 22:if(!n.isWMTSLayer(f))return[3,23];h=this._createWMTSLayerJSON(f);return[3,25];case 23:return[4,this._createScreenshotJSON(f,b)];case 24:h=l.sent(),l.label=25;case 25:h&&(Array.isArray(h)?d.push.apply(d,h):(h.id=f.id,h.title=this._legendLayerNameMap[f.id]||f.title,h.opacity=f.opacity,h.minScale=f.minScale||0,h.maxScale=f.maxScale||0,d.push(h))),l.label=26;case 26:return q++,[3,1];case 27:return g&&d.forEach(function(a){a.minScale=0;a.maxScale=0}),a.graphics&&a.graphics.length?[4,this._createFeatureCollectionJSON(null,
a.graphics,c)]:[3,29];case 28:(h=l.sent())&&d.push(h),l.label=29;case 29:return[2,d]}})})};e.prototype._createBingMapsLayerJSON=function(a){return{culture:a.culture,key:a.key,type:"BingMaps"+("aerial"===a.style?"Aerial":"hybrid"===a.style?"Hybrid":"Road")}};e.prototype._createCSVLayerJSON=function(a,c){var d=c.layerView,b=c.printTemplate;return r(this,void 0,void 0,function(){var c,m;return v(this,function(g){switch(g.label){case 0:this._legendLayers&&this._legendLayers.push({id:a.id});if(!this._is11xService)return[3,
1];c={type:"CSV"};a.write(c,{origin:"web-map"});delete c.popupInfo;delete c.layerType;c.showLabels=b.showLabels&&a.labelsVisible;return[3,3];case 1:return[4,this._getGraphics(d)];case 2:return m=g.sent(),[2,this._createFeatureCollectionJSON(a,m,b)];case 3:return[2,c]}})})};e.prototype._createFeatureCollectionJSON=function(a,c,d){return r(this,void 0,void 0,function(){var b,g,m,q,t,p,f,h,l,e,H,r,w,k,x,A,B,u,y=this;return v(this,function(z){switch(z.label){case 0:b=a;g=n.createPolygonLayer();m=n.createPolylineLayer();
q=n.createPointLayer();t=n.createMultipointLayer();p=n.createPointLayer();p.layerDefinition.name="textLayer";delete p.layerDefinition.drawingInfo;b&&("esri.layers.FeatureLayer"===b.declaredClass||"esri.layers.StreamLayer"===b.declaredClass?g.layerDefinition.name=m.layerDefinition.name=q.layerDefinition.name=t.layerDefinition.name=this._legendLayerNameMap[b.id]||b.get("arcgisProps.title")||b.title:"esri.layers.GraphicsLayer"===b.declaredClass&&(c=b.graphics.items));b&&b.renderer?(f=b.renderer.toJSON(),
g.layerDefinition.drawingInfo.renderer=f,m.layerDefinition.drawingInfo.renderer=f,q.layerDefinition.drawingInfo.renderer=f,t.layerDefinition.drawingInfo.renderer=f):(delete g.layerDefinition.drawingInfo,delete m.layerDefinition.drawingInfo,delete q.layerDefinition.drawingInfo,delete t.layerDefinition.drawingInfo);l=b&&b.fields;e=b&&b.renderer;if(!l||!e||"function"!==typeof e.collectRequiredFields)return[3,2];H=new Set;return[4,e.collectRequiredFields(H,l)];case 1:z.sent(),h=P.valuesOfSet(H),z.label=
2;case 2:l&&(r=l.map(function(a){return a.toJSON()}),g.layerDefinition.fields=r,m.layerDefinition.fields=r,q.layerDefinition.fields=r,t.layerDefinition.fields=r),w=c&&c.length,x=function(a){var f,e,l,z,I;return v(this,function(r){switch(r.label){case 0:f=c[a]||c.getItemAt(a);if(!1===f.visible||!f.geometry)return[2,"continue"];k=f.toJSON();k.hasOwnProperty("popupTemplate")&&delete k.popupTemplate;k.geometry&&k.geometry.z&&delete k.geometry.z;if(k.symbol&&k.symbol.outline&&"esriCLS"===k.symbol.outline.type&&
!A._is11xService)return[2,"continue"];!A._is11xService&&k.symbol&&k.symbol.outline&&k.symbol.outline.color&&k.symbol.outline.color[3]&&(k.symbol.outline.color[3]=255);e=b&&b.renderer&&("valueExpression"in b.renderer&&b.renderer.valueExpression||"hasVisualVariables"in b.renderer&&b.renderer.hasVisualVariables());if(k.symbol||!b||!b.renderer||!e||A._is11xService)return[3,2];l=b.renderer;return[4,l.getSymbolAsync(f)];case 1:z=r.sent();if(!z)return[2,"continue"];k.symbol=z.toJSON();"hasVisualVariables"in
l&&l.hasVisualVariables()&&n.applyVisualVariables(k.symbol,{renderer:l,graphic:f,symbol:z});r.label=2;case 2:return k.symbol&&(k.symbol.angle||delete k.symbol.angle,D(k.symbol)?k.symbol=A._convertSvgToPictureMarkerSymbolJson(k.symbol):k.symbol.text&&delete k.attributes),d&&d.forceFeatureAttributes||!h||!h.length||(I={},h.forEach(function(a){k.attributes&&k.attributes.hasOwnProperty(a)&&(I[a]=k.attributes[a])}),k.attributes=I),"polygon"===f.geometry.type?g.featureSet.features.push(k):"polyline"===
f.geometry.type?m.featureSet.features.push(k):"point"===f.geometry.type?k.symbol&&k.symbol.text?p.featureSet.features.push(k):q.featureSet.features.push(k):"multipoint"===f.geometry.type?t.featureSet.features.push(k):"extent"===f.geometry.type&&(k.geometry=Q.fromExtent(f.geometry).toJSON(),g.featureSet.features.push(k)),[2]}})},A=this,B=0,z.label=3;case 3:return B<w?[5,x(B)]:[3,6];case 4:z.sent(),z.label=5;case 5:return B++,[3,3];case 6:return u=[g,m,t,q,p].filter(function(a){return 0<a.featureSet.features.length}),
u.forEach(function(a){var b=a.featureSet.features.every(function(a){return a.symbol});!b||d&&d.forceFeatureAttributes||a.featureSet.features.forEach(function(a){delete a.attributes});b&&delete a.layerDefinition.drawingInfo;a.layerDefinition.drawingInfo&&a.layerDefinition.drawingInfo.renderer&&y._convertSvgRenderer(a.layerDefinition.drawingInfo.renderer)}),[2,u.length?{featureCollection:{layers:u}}:null]}})})};e.prototype._createFeatureLayerJSON=function(a,c){return r(this,void 0,void 0,function(){var d,
b,g,m,e,t,p,f,h,l;return v(this,function(q){switch(q.label){case 0:this._legendLayers&&this._legendLayers.push({id:a.id});b=a.renderer;if(a.featureReduction||b&&"dot-density"===b.type)return[2,this._createScreenshotJSON(a,c)];g=c.layerView;m=c.printTemplate;e=c.view;t=b&&("valueExpression"in b&&b.valueExpression||"hasVisualVariables"in b&&b.hasVisualVariables());p=a.source&&"feature-layer"!==a.source.type;if(!this._is11xService&&t||a.featureReduction||p||!b||"field"in b&&!(null==b.field||"string"===
typeof b.field&&a.getField(b.field)))return[3,1];d={};this._setURLandToken(d,a);a.write(d,{origin:"web-map"});delete d.layerType;delete d.popupInfo;delete d.visibility;d.showLabels=m.showLabels&&a.labelsVisible;d.layerDefinition&&d.layerDefinition.drawingInfo&&d.layerDefinition.drawingInfo.renderer&&(this._convertSvgRenderer(d.layerDefinition.drawingInfo.renderer),"visualVariables"in b&&b.visualVariables&&b.visualVariables[0]&&(f=b.visualVariables[0],"size"===f.type&&f.maxSize&&"number"!==typeof f.maxSize&&
f.minSize&&"number"!==typeof f.minSize&&(h=R.getSizeRangeAtScale(f,e.scale),d.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=h.minSize,d.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=h.maxSize)));return[3,4];case 1:return[4,this._getGraphics(g)];case 2:return l=q.sent(),[4,this._createFeatureCollectionJSON(a,l,m)];case 3:d=q.sent(),q.label=4;case 4:return[2,d]}})})};e.prototype._createGraphicsLayerJSON=function(a,c){var d=c.printTemplate;return r(this,void 0,void 0,
function(){return v(this,function(b){return[2,this._createFeatureCollectionJSON(a,null,d)]})})};e.prototype._createImageryLayerJSON=function(a){this._legendLayers&&this._legendLayers.push({id:a.id});var c={bandIds:a.bandIds,compressionQuality:a.compressionQuality,format:a.format,interpolation:a.interpolation};if(a.mosaicRule||a.definitionExpression)c.mosaicRule=a.exportImageServiceParameters.mosaicRule.toJSON();if(a.renderingRule||a.renderer)if(this._is11xService)a.renderingRule&&(c.renderingRule=
a.renderingRule.toJSON()),a.renderer&&(c.layerDefinition=c.layerDefinition||{},c.layerDefinition.drawingInfo=c.layerDefinition.drawingInfo||{},c.layerDefinition.drawingInfo.renderer=a.renderer.toJSON());else{var d=a.exportImageServiceParameters.combineRendererWithRenderingRule();d&&(c.renderingRule=d.toJSON())}this._setURLandToken(c,a);return c};e.prototype._createKMLLayerJSON=function(a,c){return r(this,void 0,void 0,function(){var d,b,g,m,e,t,p;return v(this,function(f){switch(f.label){case 0:d=
c.printTemplate;if(this._is11xService)return b={type:"kml"},a.write(b,{origin:"web-map"}),delete b.layerType,b.url=x.normalize(a.url),[2,b];g=[];m=c.layerView;m.allVisibleMapImages.forEach(function(b,c){c={id:a.id+"_image"+c,type:"image",title:a.id,minScale:a.minScale||0,maxScale:a.maxScale||0,opacity:a.opacity,extent:b.extent};"data:image/png;base64,"===b.href.substr(0,22)?c.imageData=b.href.substr(22):c.url=b.href;g.push(c)});e=m.allVisiblePoints.items.concat(m.allVisiblePolylines.items,m.allVisiblePolygons.items);
p=[{id:a.id}];return[4,this._createFeatureCollectionJSON(null,e,d)];case 1:return t=L.apply(void 0,p.concat([f.sent()])),g.push(t),[2,g]}})})};e.prototype._createMapImageLayerJSON=function(a,c){var d,b={id:a.id,subLayerIds:[]},g=[],m=c.view.scale,e=function(a){var c=0===m,d=0===a.minScale||m<=a.minScale,h=0===a.maxScale||m>=a.maxScale;a.visible&&(c||d&&h)&&(a.sublayers?a.sublayers.forEach(e):(c=a.write({}),d=a.toExportImageJSON(),c.layerDefinition={drawingInfo:d.drawingInfo,definitionExpression:d.definitionExpression,
source:d.source},g.unshift(c),b.subLayerIds.push(a.id)))};a.sublayers&&a.sublayers.forEach(e);g.length&&(g=g.map(function(a){return{id:a.id,name:a.name,layerDefinition:a.layerDefinition}}),d={layers:g,visibleLayers:b.subLayerIds},this._setURLandToken(d,a),this._legendLayers.push(b));return d};e.prototype._createMapNotesLayerJSON=function(a){var c=a.layerView,d=a.printTemplate;return r(this,void 0,void 0,function(){var a,g,m,e,t;return v(this,function(b){switch(b.label){case 0:a=[],g=0,m=c.graphicsViews,
b.label=1;case 1:if(!(g<m.length))return[3,4];e=m[g];return[4,this._createFeatureCollectionJSON(e,e.graphics,d)];case 2:(t=b.sent())&&a.push.apply(a,t.featureCollection.layers),b.label=3;case 3:return g++,[3,1];case 4:return[2,{featureCollection:{layers:a}}]}})})};e.prototype._createOpenStreetMapLayerJSON=function(){return{type:"OpenStreetMap"}};e.prototype._createScreenshotJSON=function(a,c){var d=c.printTemplate,b=c.view;return r(this,void 0,void 0,function(){var c,e,q,t,p,f,h,l,n,r;return v(this,
function(g){switch(g.label){case 0:return c={type:"image"},e={format:"png",ignoreBackground:!0,layers:[a],rotation:0},q=this._ssExtent||b.extent.clone(),t=96,f=p=!0,d.exportOptions&&(h=d.exportOptions,0<h.dpi&&(t=h.dpi),0<h.width&&(p=h.width%2===b.width%2),0<h.height&&(f=h.height%2===b.height%2)),"map-only"!==d.layout||!d.preserveScale||d.outScale&&d.outScale!==b.scale||96!==t||p&&f||(e.area={x:0,y:0,width:b.width,height:b.height},p||--e.area.width,f||--e.area.height,this._ssExtent||(l=b.toMap(G.createScreenPoint(e.area.width,
e.area.height)),q.ymin=l.y,q.xmax=l.x,this._ssExtent=q)),c.extent=q.clone()._normalize(!0).toJSON(),[4,b.takeScreenshot(e)];case 1:return n=g.sent(),r=x.dataComponents(n.dataUrl),c.imageData=r.data,[2,c]}})})};e.prototype._createStreamLayerJSON=function(a,c){var d=c.layerView,b=c.printTemplate;return r(this,void 0,void 0,function(){var c;return v(this,function(g){switch(g.label){case 0:return this._legendLayers&&this._legendLayers.push({id:a.id}),[4,this._getGraphics(d)];case 1:return c=g.sent(),
[2,this._createFeatureCollectionJSON(a,c,b)]}})})};e.prototype._createTileLayerJSON=function(a){var c={};this._setURLandToken(c,a);return c};e.prototype._createVectorTileLayerJSON=function(a,c){return r(this,void 0,void 0,function(){var d,b,g;return v(this,function(e){return this._is11xService&&a.serviceUrl&&a.styleUrl&&(d=w.id&&w.id.findCredential(a.styleUrl),b=w.id&&w.id.findCredential(a.serviceUrl),!d&&!b||"2.1.0"!==this._cimVersion)?(g={type:"VectorTileLayer"},g.styleUrl=x.normalize(a.styleUrl),
d&&(g.token=d.token),b&&b.token!==g.token&&(g.additionalTokens=[{url:a.serviceUrl,token:b.token}]),[2,g]):[2,this._createScreenshotJSON(a,c)]})})};e.prototype._createWebTileLayerJSON=function(a){var c={type:"WebTiledLayer",urlTemplate:a.urlTemplate.replace(/\${/g,"{"),credits:a.copyright};a.subDomains&&0<a.subDomains.length&&(c.subDomains=a.subDomains);return c};e.prototype._createWMSLayerJSON=function(a){var c,d=[],b=function(a){a.visible&&(a.sublayers?a.sublayers.forEach(b):a.name&&d.unshift(a.name))};
a.sublayers&&a.sublayers.forEach(b);d.length&&(c={type:"wms",customLayerParameters:a.customLayerParameters,customParameters:a.customParameters,transparentBackground:a.imageTransparency,visibleLayers:d,url:x.normalize(a.url),version:a.version});return c};e.prototype._createWMTSLayerJSON=function(a){var c=a.activeLayer;return{type:"wmts",customLayerParameters:a.customLayerParameters,customParameters:a.customParameters,format:c.imageFormat,layer:c.id,style:c.styleId,tileMatrixSet:c.tileMatrixSetId,url:x.normalize(a.url)}};
e.prototype._setURLandToken=function(a,c){c.url&&(a.url=x.normalize(c.url),c=w.id&&w.id.findCredential(c.url))&&(a.token=c.token)};e.prototype._convertSvgToPictureMarkerSymbolJson=function(a){this._canvasParent?(this._canvasSurface.clear(),this._canvasSurface.setDimensions(1024,1024)):(this._canvasParent=document.createElement("div"),this._canvasSurface=E.createSurface(this._canvasParent,1024,1024));var c;c="image/svg+xml"===a.contentType?this._canvasSurface.createObject(E.Image,{src:"data:image/svg+xml;base64,"+
a.imageData,width:G.pt2px(a.width),height:G.pt2px(a.height),x:0,y:0}):this._canvasSurface.createObject(E.Path,a.path).setFill(a.color).setStroke(a.outline);"pendingRender"in this._canvasSurface&&this._canvasSurface._render(!0);var d=this._canvasSurface.rawNode.getContext("2d");c=c.getBoundingBox();var b=Math.ceil(c.width+c.x),g=Math.ceil(c.height+c.y),e=d.getImageData(c.x,c.y,b,g);d.canvas.width=b;d.canvas.height=g;d.putImageData(e,0,0);return{type:"esriPMS",imageData:d.canvas.toDataURL("image/png").substr(22),
angle:a.angle,contentType:"image/png",height:a.size?a.size:g-c.y,width:a.size?a.size:b-c.x,xoffset:a.xoffset,yoffset:a.yoffset}};e.prototype._convertSvgRenderer=function(a){var c=this,d=a.type;if("simple"===d&&D(a.symbol))a.symbol=this._convertSvgToPictureMarkerSymbolJson(a.symbol);else if("unique-value"===d||"class-breaks"===d)D(a.defaultSymbol)&&(a.defaultSymbol=this._convertSvgToPictureMarkerSymbolJson(a.defaultSymbol)),(a=a["unique-value"===d?"uniqueValueInfos":"classBreakInfos"])&&a.forEach(function(a){D(a.symbol)&&
(a.symbol=c._convertSvgToPictureMarkerSymbolJson(a.symbol))})};e.prototype._getGraphics=function(a){return a.queryFeatures(Z).then(function(a){return a.features})};e.prototype._getPrintDefinition=function(a,c){return r(this,void 0,void 0,function(){var d,b,e,m,q;return v(this,function(g){switch(g.label){case 0:return d=a.view,b=d.spatialReference,m={},[4,this._createOperationalLayers(d,c)];case 1:return e=(m.operationalLayers=g.sent(),m),q=this._ssExtent||a.extent||d.extent,b&&b.isWrappable&&(q=q.clone()._normalize(!0),
b=q.spatialReference),e.mapOptions={extent:q&&q.toJSON(),spatialReference:b&&b.toJSON(),showAttribution:c.attributionVisible},this._ssExtent=null,d.rotation&&(e.mapOptions.rotation=-d.rotation),c.preserveScale&&(e.mapOptions.scale=c.outScale||d.scale),[2,e]}})})};e.prototype._getGpPrintParams=function(a){return r(this,void 0,void 0,function(){var c,d,b,e,m,q,n,p,f,h,l,r,u,w,x,k,y,A,B,C=this;return v(this,function(g){switch(g.label){case 0:c=a.template||new W;null==c.showLabels&&(c.showLabels=!0);
d=c.exportOptions;e=V.toJSON(c.layout);d&&(m=d.dpi,b={dpi:m},"map_only"===e.toLowerCase()||""===e)&&(q=d.width,n=d.height,b.outputSize=[q,n]);if(p=c.layoutOptions){l=h=void 0;if("Miles"===p.scalebarUnit||"Kilometers"===p.scalebarUnit)h="Kilometers",l="Miles";else if("Meters"===p.scalebarUnit||"Feet"===p.scalebarUnit)h="Meters",l="Feet";f={titleText:p.titleText,authorText:p.authorText,copyrightText:p.copyrightText,customTextElements:p.customTextElements,scaleBarOptions:{metricUnit:K.toJSON(h),metricLabel:J[h],
nonMetricUnit:K.toJSON(l),nonMetricLabel:J[l]}}}r=null;p&&p.legendLayers&&(r=p.legendLayers.map(function(a){C._legendLayerNameMap[a.layerId]=a.title;var b={id:a.layerId};a.subLayerIds&&(b.subLayerIds=a.subLayerIds);return b}));return[4,this._getPrintDefinition(a,c)];case 1:return u=g.sent(),u.operationalLayers&&(x=/[\u4E00-\u9FFF\u0E00-\u0E7F\u0900-\u097F\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF]/,k=/[\u0600-\u06FF]/,y=function(a){var b=a.text,c=(a=a.font)&&a.family&&a.family.toLowerCase();b&&a&&("arial"===
c||"arial unicode ms"===c)&&(a.family=x.test(b)?"Arial Unicode MS":"Arial","normal"!==a.style&&k.test(b)&&(a.family="Arial Unicode MS"))},u.operationalLayers.forEach(function(a){a.featureCollection&&a.featureCollection.layers&&a.featureCollection.layers.forEach(function(a){a.layerDefinition&&a.layerDefinition.drawingInfo&&a.layerDefinition.drawingInfo.renderer&&a.layerDefinition.drawingInfo.renderer.symbol&&(w=a.layerDefinition.drawingInfo.renderer,"esriTS"===w.symbol.type&&y(w.symbol));a.featureSet&&
a.featureSet.features&&a.featureSet.features.forEach(function(a){a.symbol&&"esriTS"===a.symbol.type&&y(a.symbol)})})})),a.outSpatialReference&&(u.mapOptions.spatialReference=a.outSpatialReference.toJSON()),F.mixin(u,{exportOptions:b,layoutOptions:f}),F.mixin(u.layoutOptions,{legendOptions:{operationalLayers:null!=r?r:this._legendLayers.slice()}}),this._legendLayers.length=0,A=JSON.stringify(u),B={Web_Map_as_JSON:A,Format:U.toJSON(c.format),Layout_Template:e},a.extraParameters&&F.mixin(B,a.extraParameters),
[2,B]}})})};y([u.property({dependsOn:["url"]})],e.prototype,"_geoprocessor",null);y([u.property()],e.prototype,"_gpMetadata",void 0);y([u.property({dependsOn:["_gpMetadata"],readOnly:!0})],e.prototype,"mode",null);y([u.property()],e.prototype,"updateDelay",void 0);return e=y([u.subclass("esri.tasks.PrintTask")],e)}(u.declared(T))});