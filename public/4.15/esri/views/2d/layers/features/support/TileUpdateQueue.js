// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/Accessor ../../../../../core/promiseUtils ../../../../../core/scheduling ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/vec2 ../../../tiling".split(" "),function(d,m,q,e,r,t,u,v,w,c,n,p){Object.defineProperty(m,"__esModule",{value:!0});
var l=[0,0];d=function(d){function b(a){a=d.call(this,a)||this;a._queue=new Map;a._isPaused=!1;a._scheduledNextHandle=null;a._timestamp=Date.now();a.tileInfoView=null;a._next=a._next.bind(a);a._finalize=a._finalize.bind(a);return a}q(b,d);Object.defineProperty(b.prototype,"length",{get:function(){return this._queue.size},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updating",{get:function(){return 0<this._queue.size||null!=this._onGoingTile},enumerable:!0,configurable:!0});b.prototype.abort=
function(a){this._onGoingTile&&this._onGoingTile.tileId===a&&(this._onGoingTile.abortController.abort(),this._onGoingTile=null);this._queue.delete(a);this._scheduleNext();this.notifyChange("updating")};b.prototype.clear=function(){this._queue.clear();this._onGoingTile&&(this._onGoingTile.abortController.abort(),this._onGoingTile=null);this._cancelNext();this.notifyChange("updating")};b.prototype.has=function(a){return this._queue.has(a)};b.prototype.isOngoing=function(a){return this._onGoingTile&&
this._onGoingTile.tileId===a};b.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())};b.prototype.push=function(a,b){if(!this._queue.has(a)){var k=v.createAbortController();this._queue.set(a,{tileId:a,key:p.TileKey.pool.acquire(a),timestamp:b||this._timestamp,abortController:k});this._scheduleNext();this.notifyChange("updating")}};b.prototype.refresh=function(){this._timestamp=Date.now();this.reset()};b.prototype.reset=function(){var a=this._onGoingTile;a&&this.push(a.tileId,
this._timestamp);this.notifyChange("updating")};b.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext());this.notifyChange("updating")};b.prototype._finalize=function(){this._onGoingTile=null;this.notifyChange("updating");this._scheduleNext()};b.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)};b.prototype._scheduleNext=function(){this._isPaused||this._scheduledNextHandle||0===this._queue.size||
null!=this._onGoingTile||(this._scheduledNextHandle=w.schedule(this._next))};b.prototype._next=function(){return t(this,void 0,void 0,function(){var a,b,k,c,f;return r(this,function(g){switch(g.label){case 0:if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingTile)return this._scheduledNextHandle=null,[2];this._scheduledNextHandle=null;a=this._peek();b=a.abortController.signal;k=a.tileId;c=a.key;p.TileKey.pool.release(c);this._queue.delete(k);this._onGoingTile=a;f=this.process(k,
this._timestamp,{signal:b});this.notifyChange("updating");if(!f||"function"!==typeof f.then)return[3,4];g.label=1;case 1:return g.trys.push([1,3,,4]),[4,f];case 2:return g.sent(),[3,4];case 3:return g.sent(),[3,4];case 4:return this._finalize(),[2]}})})};b.prototype._peek=function(){var a=this;if(!this.state)throw Error("state not set");var b=this.tileInfoView,c=this.state.center,e=Number.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY,g=null;this._queue.forEach(function(d){b.getTileCoords(l,d.key);
var h=a._timestamp-d.timestamp;isNaN(h)?(h=n.vec2.distance(l,c),h<f&&(f=h,g=d)):h===e?(h=n.vec2.distance(l,c),h<f&&(f=h,g=d)):h>e&&(e=h,f=Number.POSITIVE_INFINITY,g=d)});return g};e([c.property({readOnly:!0})],b.prototype,"length",null);e([c.property({constructOnly:!0})],b.prototype,"process",void 0);e([c.property()],b.prototype,"state",void 0);e([c.property({constructOnly:!0})],b.prototype,"tileInfoView",void 0);e([c.property({readOnly:!0})],b.prototype,"updating",null);return b=e([c.subclass("esri.views.2d.layers.features.support.TileUpdateQueue")],
b)}(c.declared(u));m.default=d});