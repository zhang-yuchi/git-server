// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/arrayUtils ../../../core/mathUtils ../../../core/maybe ../../../core/now ../../../core/libs/gl-matrix-2/vec2 ../../../core/libs/gl-matrix-2/vec2f64 ../../../core/libs/gl-matrix-2/vec4f64 ../../../geometry/support/aaBoundingBox ../support/buffer/glUtil ./PatchGeometryFactory ./TerrainConst ./tileUtils ../webgl-engine/lib/DefaultVertexAttributeLocations ../../webgl/BufferObject ../../webgl/VertexArrayObject".split(" "),function(p,q,w,x,f,m,r,y,n,t,z,A,B,C,D,u,E){Object.defineProperty(q,
"__esModule",{value:!0});p=function(){function b(){this.overlayTexOffset=y.vec2f64.create();this.geometryInfo={indices:null,vertexAttributes:null,boundingBox:t.empty(),numSurfaceIndices:0,numSkirtIndices:0,numWithoutSkirtIndices:0,numVertsPerRow:0,skirtLength:0,uvOffsetAndScale:n.vec4f64.create()};this._textureReferences=[]}b.prototype.init=function(a){this.tile=a;a=this.geometryInfo;a.indices=null;a.vertexAttributes=null;t.empty(a.boundingBox);a.numSurfaceIndices=0;a.numSkirtIndices=0;a.numWithoutSkirtIndices=
0;a.numVertsPerRow=0;this.geometryState={numVertsPerRow:0,samplerData:null,clippingArea:null,wireframe:!1};for(this._vao=null;0<this._textureReferences.length;)this._textureReferences.pop().texture.release();this.opacity=1;if(this.overlays){a=0;for(var b=this.overlays;a<b.length;a++){var c=b[a];c.renderTargetIds.color=null;c.renderTargetIds.highlight=null;c.renderTargetIds.water=null;c.renderTargetIds.occluded=null;r.vec2.set(c.texScale,1,1);r.vec2.set(c.texOffset,0,0)}}else for(this.overlays=[null,
null],a=0;2>a;a++)this.overlays[a]={renderTargetIds:{color:null,highlight:null,water:null,occluded:null},texScale:[1,1],texOffset:[0,0]};this.overlayOpacity=1;this.localOrigin=null};b.prototype.updateGeometry=function(a,b){if(!this._updateGeometryState(b))return!1;this._releaseGeometry();this._createGeometry(a);return!0};b.prototype.releaseGeometry=function(){return this._releaseGeometry()?(this.geometryState={numVertsPerRow:0,samplerData:null,clippingArea:null,wireframe:!1},!0):!1};b.prototype.ensureTexture=
function(a,b){f.isSome(this._texture)&&this._texture.descriptor.width!==a&&this.releaseTexture();this._texture||(this._texture=b(),this.tile.setMemoryDirty());return this._texture};b.prototype.releaseTexture=function(){this._expireTextureReference();f.isSome(this._texture)&&(this._texture.release(),this._texture=null,this.tile.setMemoryDirty())};b.prototype._expireTextureReference=function(){if(0!==this._textureReferences.length)if(0>=this.tile.surface.textureFadeDuration)for(;0<this._textureReferences.length;)this._textureReferences.pop().texture.release();
else{for(;2<this._textureReferences.length;)this._textureReferences.pop().texture.release();var a=this._textureReferences[this._textureReferences.length-1];0===a.age&&(a.age=m())}};b.prototype._updateGeometryState=function(a){var b=this._getElevationInfo(),c=this.tile.level,d=8>c?this.tile.numSubdivisionsAtLevel[c]+1:2;b.samplerData&&(d=this.tile.maxTesselation,d=x.clamp((d>>Math.max(c-b.maxTileLevel,B.ELEVATION_DESIRED_RESOLUTION_LEVEL-(this.tile.vlevel-c)))+1,2,d+1));c=this.tile.clippingArea;if(!this.tile.intersectsClippingArea||
this.tile.isWithinClippingArea)c=null;var e=this.geometryState,g=!1;e.numVertsPerRow!==d&&(e.numVertsPerRow=d,g=!0);b.changed&&(e.samplerData=b.samplerData,g=!0);w.equals(e.clippingArea,c)||(e.clippingArea=c,g=!0);e.wireframe!==a&&(e.wireframe=a,g=!0);return g};b.prototype._createGeometry=function(a){this.tile.createGeometry(this.geometryState,this.localOrigin);var b=this.geometryInfo.vertexAttributes,c=this.geometryInfo.indices,d=a.gl;this._vao=new E(a,D.Default3D,{geometry:z.glLayout(b.layout)},
{geometry:u.createVertex(a,d.STATIC_DRAW,b.buffer)},u.createIndex(a,d.STATIC_DRAW,c))};b.prototype._releaseGeometry=function(){if(!this._vao)return!1;this._vao.dispose();this._vao=null;A.releaseGeometry(this.geometryInfo);return!0};Object.defineProperty(b.prototype,"vao",{get:function(){return this._vao},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"textureReference",{get:function(){if(0===this._textureReferences.length)return null;var a=this._textureReferences[0];0<a.age&&m()-
a.age>this._fadeDuration&&(a.texture.release(),this._textureReferences.shift(),(a=this._textureReferences[0])&&0<a.age&&(a.age=m()));switch(this._textureReferences.length){case 0:return null;case 1:return this._textureReferences[0].texture;default:return this._textureReferences[1].texture}},enumerable:!0,configurable:!0});b.prototype.setTextureReference=function(a,b,c,d){this._expireTextureReference();f.isSome(a)&&this._textureReferences.push(new F(a,b,c,d))};Object.defineProperty(b.prototype,"texOffsetAndScale",
{get:function(){switch(this._textureReferences.length){case 0:return v;case 1:return this._textureReferences[0].offsetAndScale;default:return this._textureReferences[1].offsetAndScale}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"oldTextureReference",{get:function(){return 2>this._textureReferences.length?null:this._textureReferences[0].texture},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"oldTexOffsetAndScale",{get:function(){return 2>this._textureReferences.length?
v:this._textureReferences[0].offsetAndScale},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"textureFadeFactor",{get:function(){if(2>this._textureReferences.length)return 1;var a=m()-this._textureReferences[0].age,b=this._fadeDuration;return a>b?1:a/b},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"_fadeDuration",{get:function(){switch(this._textureReferences.length){case 0:case 1:case 2:return this.tile.surface.textureFadeDuration;default:return.5*this.tile.surface.textureFadeDuration}},
enumerable:!0,configurable:!0});b.prototype._getElevationInfo=function(){for(var a=this.geometryState.samplerData,b=this.tile.layerInfo[0],c=b.length,d=Array(c),e=0,g=0,f=!1,l=0;l<c;l++){var k=b[l];if(k.upsampleInfo){var k=k.upsampleInfo.tile,h=k.layerInfo[0][l].data,h=h&&h.samplerData;a&&a[e]===h||(f=!0);d[e++]=h;g=Math.max(g,k.lij[0])}else k.data&&(h=this.tile.surface.layerViewByIndex(l,0),C.fallsWithinLayer(this.tile,h.layer,!1)&&(h=k.data,a&&a[e]===h.samplerData||(f=!0),d[e++]=h.samplerData,g=
this.tile.lij[0]))}a&&a.length!==e&&(f=!0);0<e?d.length=e:d=null;return{changed:f,samplerData:d,maxTileLevel:g}};Object.defineProperty(b.prototype,"estimatedGeometryMemoryUsage",{get:function(){return this.geometryInfo.indices.byteLength+this.geometryInfo.vertexAttributes.byteLength},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"textureDescriptor",{get:function(){return f.isSome(this._texture)?this._texture.descriptor:null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"test",{get:function(){return{hasTexture:null!=this._texture}},enumerable:!0,configurable:!0});return b}();q.PatchRenderData=p;var F=function(){return function(b,a,f,c){this.texture=b;this.age=0;b.retain();this.offsetAndScale=n.vec4f64.fromValues(a,f,c,c)}}(),v=n.vec4f64.fromValues(0,0,1,1)});