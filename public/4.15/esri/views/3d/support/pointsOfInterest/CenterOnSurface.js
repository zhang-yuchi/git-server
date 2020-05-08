// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/mathUtils ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/Point ../debugFlags ../earthUtils ../PropertiesPool ./PointOfInterest".split(" "),function(g,h,n,f,l,d,e,k,p,q,m,r,t){Object.defineProperty(h,"__esModule",{value:!0});var u=Array;g=function(g){function a(b){b=g.call(this,
b)||this;b.propertiesPool=new r.default({location:p,renderLocation:u},b);b.currentSurfaceAltitude=0;b.latestSurfaceAltitude=0;b.distance=0;b.renderLocation=k.vec3f64.create();b.updating=!1;return b}n(a,g);a.prototype.initialize=function(){var b=this;this._frameWorker=this.scheduler.registerTask(this.task,function(){return b._measureSurfaceAltitude()},function(){return b.updating});this._measureSurfaceAltitude()};a.prototype.destroy=function(){this._frameWorker&&(this._frameWorker.remove(),this._frameWorker=
null);this.propertiesPool.destroy();this.propertiesPool=null};Object.defineProperty(a.prototype,"location",{get:function(){var b=this.propertiesPool.get("location");this.renderCoordsHelper.fromRenderCoords(this.renderLocation,b,this.state.spatialReference);return b},enumerable:!0,configurable:!0});a.prototype.updateRenderLocation=function(){this._set("updating",!0);this._updateRenderLocation()};a.prototype.update=function(){this._measureSurfaceAltitude();this._updateRenderLocation()};Object.defineProperty(a.prototype,
"estimatedSurfaceAltitude",{get:function(){return this.latestSurfaceAltitude},enumerable:!0,configurable:!0});a.prototype._measureSurfaceAltitude=function(){this.latestSurfaceAltitude=this.estimateSurfaceAltitudeAtCenter();this._updateRenderLocation();this._set("updating",!1)};a.prototype._updateRenderLocation=function(){var b=v,c=this.calculateSurfaceIntersection(this.currentSurfaceAltitude,b),a=this.currentSurfaceAltitude!==this.latestSurfaceAltitude;!c&&a&&(c=this.calculateSurfaceIntersection(this.latestSurfaceAltitude,
b))&&(this.currentSurfaceAltitude=this.latestSurfaceAltitude);a=w;c&&this.latestSurfaceAltitudeChangesDistanceSignificantly(b,a)&&(e.vec3.copy(b,a),this.currentSurfaceAltitude=this.latestSurfaceAltitude);c?(c=e.vec3.distance(this.state.camera.eye,b),c!==this._get("distance")&&this._set("distance",c)):(c=this.state.camera,e.vec3.scale(b,c.viewForward,this._get("distance")),e.vec3.add(b,b,c.eye));e.vec3.exactEquals(this._get("renderLocation"),b)||this._set("renderLocation",e.vec3.copy(this.propertiesPool.get("renderLocation"),
b))};a.prototype.calculateSurfaceIntersection=function(b,a){var c=this.state.camera;if(!this.renderCoordsHelper.intersectManifold(c.ray,b,a))return!1;if(this.state.isGlobal){b=m.earthRadius+b;var d=e.vec3.squaredLength(c.eye),f=d<b*b,g=e.vec3.distance(c.eye,a);f&&g>m.earthRadius/4&&(e.vec3.scale(a,c.viewForward,b-Math.sqrt(d)),e.vec3.add(a,a,c.eye))}else if(c=this.surface.ready&&this.surface.extent)a[0]=l.clamp(a[0],c[0],c[2]),a[1]=l.clamp(a[1],c[1],c[3]);return!0};a.prototype.latestSurfaceAltitudeChangesDistanceSignificantly=
function(b,a){if(this.latestSurfaceAltitude===this.currentSurfaceAltitude||null==b)return!1;if(this.calculateSurfaceIntersection(this.latestSurfaceAltitude,a)){var c=this.state.camera.eye;b=e.vec3.distance(c,b);a=e.vec3.distance(c,a);if(q.TESTS_DISABLE_UPDATE_THRESHOLDS||Math.abs(a-b)/b>x)return!0}return!1};f([d.property({constructOnly:!0})],a.prototype,"scheduler",void 0);f([d.property({constructOnly:!0})],a.prototype,"task",void 0);f([d.property({readOnly:!0})],a.prototype,"distance",void 0);f([d.property({constructOnly:!0})],
a.prototype,"estimateSurfaceAltitudeAtCenter",void 0);f([d.property({readOnly:!0,dependsOn:["renderLocation"]})],a.prototype,"location",null);f([d.property({readOnly:!0})],a.prototype,"renderLocation",void 0);f([d.property({readOnly:!0})],a.prototype,"updating",void 0);return a=f([d.subclass("esri.views.3d.support.CenterOnSurface")],a)}(d.declared(t.PointOfInterest));h.CenterOnSurface=g;var x=.05,v=k.vec3f64.create(),w=k.vec3f64.create();h.default=g});