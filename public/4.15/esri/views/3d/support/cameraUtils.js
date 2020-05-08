// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../Camera ../../../core/Logger ../../../core/mathUtils ../../../core/promiseUtils ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/Point ../../../geometry/SpatialReference ../../../geometry/support/scaleUtils ../camera/intersectionUtils ./cameraUtilsPlanar ./cameraUtilsSpherical ./earthUtils ./ElevationProvider ./mathUtils ./projectionUtils ../../support/spatialReferenceSupport".split(" "),
function(ga,g,ha,H,I,E,S,y,T,p,q,r,v,U,V,J,K,B,L,M,k,W){function t(a){return"global"===a.viewingMode?K:J}function N(a,b,c){var d=a.state.camera,e=d.fovX,d=d.width/2/d.pixelRatio;"global"===a.viewingMode&&null!=c&&(b*=Math.cos(y.deg2rad(c)));b/=a.renderCoordsHelper.unitInMeters;return d/(96*39.37/b)/Math.tan(e/2)}function O(a,b,c){var d=a.state.camera;b=96*39.37/(d.width/2/d.pixelRatio/(b*Math.tan(d.fovX/2)));"global"===a.viewingMode&&(b/=Math.cos(y.deg2rad(c)));return b*=a.renderCoordsHelper.unitInMeters}
function P(a,b,c,d,e,f){if(w(f)){var l=F(f.signal);z(a,d.heading,d.tilt,b,c,e,l);l.resolver.promise.then(function(b){return f.resolver.resolve(A(a,b,d.fov))},function(a){return f.resolver.reject(a)})}else return b=z(a,d.heading,d.tilt,b,c,e),A(a,b,d.fov,f)}function Q(a,b,c,d,e){return t(a).directionToHeadingTilt(b,c,d,e)}function X(a,b){return!!(a.basemapTerrain&&a.renderCoordsHelper.fromRenderCoords(b,u,a.spatialReference)&&L.getElevationAtPoint(a.elevationProvider,u)>u.z-1)}function Y(a,b,c){return I(this,
void 0,void 0,function(){var d;return H(this,function(e){switch(e.label){case 0:return a.renderCoordsHelper.fromRenderCoords(b,u,a.spatialReference)?[4,a.elevationProvider.queryElevation(u.x,u.y,u.z,u.spatialReference,c)]:[2,!1];case 1:return d=e.sent(),[2,d>u.z-1]}})})}function Z(a,b,c){return I(this,void 0,void 0,function(){var d,e;return H(this,function(f){switch(f.label){case 0:d=q.vec3f64.create();if(b)return[3,1];p.vec3.copy(d,a.state.camera.center);return[3,5];case 1:if(!(b instanceof r))return[3,
4];k.pointToVector(b,d,a.renderSpatialReference);return null!=b.z||null==a.basemapTerrain?[3,3]:[4,a.elevationProvider.queryElevation(b.x,b.y,b.z,b.spatialReference,c)];case 2:return e=f.sent(),null!=e&&a.renderCoordsHelper.setAltitude(e,d),[2,d];case 3:return[3,5];case 4:p.vec3.copy(d,b),f.label=5;case 5:return[2,d]}})})}function aa(a,b){var c=q.vec3f64.create();b&&b instanceof r?(k.pointToVector(b,c,a.renderSpatialReference),null==b.z&&null!=a.basemapTerrain&&(b=L.getElevationAtPoint(a.elevationProvider,
b),null!=b&&a.renderCoordsHelper.setAltitude(b,c))):b?p.vec3.copy(c,b):p.vec3.copy(c,a.state.camera.center);return c}function z(a,b,c,d,e,f,l){var n=d&&d instanceof r?d:null;if(w(l))Z(a,d,l.signal).then(function(d){G(a,b,c,n,d,e,f,l)},function(a){return l.resolver.reject(a)});else return d=aa(a,d),G(a,b,c,n,d,e,f,l)}function G(a,b,c,d,e,f,l,n){d||(d=k.vectorToPoint(e,a.renderSpatialReference,a.spatialReference||v.WGS84));f=Math.max(f,a.state.constraints.minimumPoiDistance);var h=ba(a,b,c,e,f,l),g=
t(a).eyeForCenterWithHeadingTilt,m=g(e,f,h.heading,h.tilt);if(1===l&&"global"===a.viewingMode&&0<c){var p=function(){var h=f,g=f,m=a.state.constraints.tilt(g),g=t(a).eyeTiltToLookAtTilt(c,e,g),g=Math.min(g,.5*Math.PI),m=m.min*(1-C)+g*C,h=t(a).lookAtTiltToEyeTilt(m,e,h);l=1>c-h?0:1;return G(a,b,h,d,e,f,l,n)},h=a.map.ground.navigationConstraint;if(!h||"stay-above"===h.type){if(X(a,m.eye))return p();if(w(n)){Y(a,m.eye,n.signal).then(function(a){if(a)return p();n.resolver.resolve({eye:m.eye,up:m.up,center:q.vec3f64.clone(e),
heading:m.heading,tilt:m.tilt})});return}}}h=!n||w(n)?{center:q.vec3f64.create(),eye:q.vec3f64.create(),up:q.vec3f64.create(),tilt:0,heading:0}:n;h.eye=m.eye;h.up=m.up;h.center=q.vec3f64.clone(e);h.heading=m.heading;h.tilt=m.tilt;w(n)&&n.resolver.resolve(h);return h}function ba(a,b,c,d,e,f){var l=0;if(f=1===f)if(l=a.pointsOfInterest.centerOnSurfaceFrequent.distance,8<Math.log(e/l)/Math.LN2)f=!0;else{var g=a.renderSpatialReference,h=a.spatialReference||v.WGS84;f=k.vectorToPoint(d,g,h);g=k.vectorToPoint(a.pointsOfInterest.centerOnSurfaceFrequent.renderLocation,
g,h);l*=Math.tan(.5*a.state.camera.fov);f=5<g.distance(f)/l}f?(b=0,f=a.state.constraints.tilt(e),f.max=Math.min(f.max,.5*Math.PI),f=f.min*(1-C)+f.max*C,c=t(a).eyeTiltToLookAtTilt(c,d,e),l=Math.min(c,f)):l=t(a).eyeTiltToLookAtTilt(c,d,e);c=l=a.state.constraints.clampTilt(e,l);c=t(a).lookAtTiltToEyeTilt(c,d,e);return{heading:b,tilt:c}}function A(a,b,c,d){a=k.vectorToPoint(b.eye,a.renderSpatialReference,a.spatialReference||v.WGS84);return a?d?(d.position=a,d.heading=b.heading,d.tilt=b.tilt,d.fov=c,d):
new E(a,b.heading,b.tilt,c):null}function F(a){return{resolver:T.createResolver(),signal:a}}function w(a){return a&&"resolver"in a}Object.defineProperty(g,"__esModule",{value:!0});var R=S.getLogger("esri.views.3d.support.cameraUtils"),x=q.vec3f64.create(),D=q.vec3f64.create(),ca=q.vec3f64.create(),da={heading:0,tilt:0},u=new r,ea=new M.Cyclical(-2.0037508342788905E7,2.0037508342788905E7),fa=new M.Cyclical(-180,180);g.headingTiltToDirectionUp=function(a,b,c,d,e){return t(a).headingTiltToDirectionUp(b,
c,d,e)};g.externalToInternal=function(a,b){var c=a.renderSpatialReference,d=t(a).headingTiltToDirectionUp,e=q.vec3f64.create();if(!k.pointToVector(b.position,e,c))return null;c=d(e,b.heading,b.tilt);p.vec3.scale(c.direction,c.direction,a.state.camera.distance);p.vec3.add(c.direction,c.direction,e);a=V.cameraOnContentAlongViewDirection(a,e,c.direction,c.up);a.fov=y.deg2rad(b.fov);return a};g.internalToExternal=function(a,b,c){var d=a.renderSpatialReference,e=p.vec3.copy(ca,b.viewForward),e=Q(a,b.eye,
e,b.up,da);a=a.spatialReference||v.WGS84;k.vectorToVector(b.eye,d,x,a)||(a=v.WGS84,k.vectorToVector(b.eye,d,x,a));if(!c)return new E(new r(x,a),e.heading,e.tilt,y.rad2deg(b.fov));c.position.x=x[0];c.position.y=x[1];c.position.z=x[2];c.position.spatialReference=a;c.heading=e.heading;c.tilt=e.tilt;c.fov=y.rad2deg(b.fov);return c};g.scaleToDistance=N;g.distanceToScale=O;g.fromCenterScale=function(a,b,c,d,e,f){c=N(a,c,b.latitude);return P(a,b,c,d,e,f)};g.fromCenterDistance=P;g.directionToHeadingTilt=
Q;g.getObserverForPointAtDistance=z;g.fromExtent=function(a,b,c,d,e,f){var g,n=0;null!=b.zmax&&null!=b.zmin&&(g=(b.zmax+b.zmin)/2,n=b.zmax-b.zmin);var h,k;if("global"===a.viewingMode){if(!W.isSpatialReferenceSupported(b.spatialReference,"global"))return w(f)&&f.resolver.reject(),null;var m=new r(b.xmin,b.ymin,b.spatialReference),p=new r(b.xmax,b.ymax,b.spatialReference),q=b.spatialReference.isGeographic?fa:ea;b=new r(q.center(m.x,p.x),(p.y+m.y)/2,b.spatialReference);null!=g&&(b.z=g);k=B.getGreatCircleSpanAt(b,
m,p);h=k.lon;k=k.lat;q.diff(m.x,p.x)>q.range/2&&(h+=B.halfEarthCircumference);h=Math.min(h,B.halfEarthCircumference);k=Math.min(k,B.halfEarthCircumference)}else m=a.spatialReference||v.WGS84,h=b.xmax-b.xmin,k=b.ymax-b.ymin,b=new r({x:b.xmin+.5*h,y:b.ymin+.5*k,z:g,spatialReference:m});g=a.state.camera;n=Math.max(1/Math.tan(g.fovX/2)*h*.5,1/Math.tan(g.fovY/2)*k*.5,1/Math.tan(g.fov/2)*n*.5)/1;if(w(f))h=F(f.signal),z(a,c,d,b,n,e,h),h.resolver.promise.then(function(b){return f.resolver.resolve(A(a,b,a.camera.fov))},
function(a){return f.resolver.reject(a)});else return c=z(a,c,d,b,n,e),A(a,c,a.camera.fov,f)};g.toExtent=function(a,b,c){var d=a.renderSpatialReference,e=p.vec3.dist(b.eye,c);c=k.vectorToPoint(c,d,a.spatialReference||v.WGS84);d=2*e*Math.tan(b.fovX/2)*1;b=2*e*Math.tan(b.fovY/2)*1;return"global"===a.viewingMode?K.toExtent(a,c,d,b):J.toExtent(a,c,d,b)};var C=.7;g.observerToCamera=A;g.scaleToZoom=function(a,b){if(a=a.basemapTerrain&&a.basemapTerrain.tilingScheme)return a.levelAtScale(b);R.error("#scaleToZoom()",
"Cannot compute zoom from scale without a tiling scheme")};g.zoomToScale=function(a,b){if(a=a.basemapTerrain&&a.basemapTerrain.tilingScheme)return a.scaleAtLevel(b);R.error("#zoomToScale()","Cannot compute scale from zoom without a tiling scheme")};g.scaleToResolution=function(a,b){return a.spatialReference?U.getResolutionForScale(b,a.spatialReference):void 0};g.computeScale=function(a,b,c){var d=a.renderSpatialReference;b||(b=a.state.camera);var e;e=v.WGS84;b instanceof E?(e=b.position.latitude,
k.pointToVector(b.position,x,d),k.pointToVector(c,D,d),b=p.vec3.distance(x,D)):(k.vectorToVector(b.center,d,D,e),e=D[1],b=b.distance);return O(a,b,e)};g.createAsyncContext=F;g.isAsyncContext=w});