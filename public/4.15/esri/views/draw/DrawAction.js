// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Evented ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators".split(" "),function(p,q,h,d,k,e,g,c){var l={mode:"absolute-height",offset:0},m={mode:"on-the-ground",offset:0};return function(f){function b(){var a=null!==f&&f.apply(this,arguments)||this;a._hasZ=null;a.interactiveUndoDisabled=!1;a.history=[];a.redoHistory=[];a.snapToScene=null;a.view=null;a.elevationInfo=
null;a.defaultZ=0;return a}h(b,f);Object.defineProperty(b.prototype,"hasZ",{get:function(){return e.isSome(this._hasZ)?this._hasZ:"3d"===this.view.type},set:function(a){this._hasZ=a;this.notifyChange("hasZ")},enumerable:!0,configurable:!0});b.prototype.canUndo=function(){return 0<this.history.length};b.prototype.canRedo=function(){return 0<this.redoHistory.length};b.prototype.undo=function(){if(this.canUndo()){var a=this.history.pop();a.undo();this.redoHistory.push(a)}};b.prototype.redo=function(){if(this.canRedo()){var a=
this.redoHistory.pop();a.redo();this.history.push(a)}};b.prototype.getCoordsFromScreenPoint=function(a){a=this.screenToMap(a);return e.isSome(a)?a.hasZ?[a.x,a.y,a.z]:[a.x,a.y]:null};b.prototype.getCoordsAndPointFromScreenPoint=function(a){a=this.screenToMap(a);return e.isSome(a)?a.hasZ?{vertex:[a.x,a.y,a.z],mapPoint:a}:{vertex:[a.x,a.y],mapPoint:a}:null};b.prototype.isDuplicateVertex=function(a,b){if(a.length){a=a[a.length-1];var n=a[1];return a[0]===b[0]&&n===b[1]}return!1};b.prototype.getGeometryZValue=
function(){return this.defaultZ};b.prototype.isSnapToSceneEnabled=function(a){return"on-the-ground"!==a.mode};b.prototype.screenToMap=function(a){var b=null;if("3d"===this.view.type)if(this.hasZ)var b=e.unwrapOr(this.elevationInfo,l),c=this.isSnapToSceneEnabled(b)&&e.isSome(this.snapToScene)?this.snapToScene:null,b=e.isSome(c)?c(a,b):this.view.sceneIntersectionHelper.intersectElevationFromScreen(g.createScreenPointArray(a.x,a.y),b,this.getGeometryZValue());else b=e.unwrapOr(this.elevationInfo,m),
b=this.view.sceneIntersectionHelper.intersectElevationFromScreen(g.createScreenPointArray(a.x,a.y),b,0),e.isSome(b)&&(b.z=void 0);else b=this.view.toMap(a),e.isSome(b)&&(b.z=this.hasZ?this.getGeometryZValue():void 0);return b};d([c.property({type:Boolean,nonNullable:!0})],b.prototype,"interactiveUndoDisabled",void 0);d([c.property({readOnly:!0})],b.prototype,"history",void 0);d([c.property({readOnly:!0})],b.prototype,"redoHistory",void 0);d([c.property()],b.prototype,"snapToScene",void 0);d([c.property()],
b.prototype,"view",void 0);d([c.property()],b.prototype,"elevationInfo",void 0);d([c.property({nonNullable:!0})],b.prototype,"defaultZ",void 0);d([c.property({dependsOn:["view"]})],b.prototype,"hasZ",null);return b=d([c.subclass("esri.views.draw.DrawAction")],b)}(c.declared(k.EventedAccessor))});