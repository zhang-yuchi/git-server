// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/accessorSupport/decorators ./gamepad/GamepadSettings".split(" "),function(h,k,f,c,g,b,d){return function(e){function a(a){a=e.call(this,a)||this;a.browserTouchPanEnabled=!0;a.gamepad=new d;a.momentumEnabled=!0;a.mouseWheelZoomEnabled=!0;return a}f(a,e);c([b.property({type:Boolean})],a.prototype,"browserTouchPanEnabled",void 0);c([b.property({type:d,nonNullable:!0})],
a.prototype,"gamepad",void 0);c([b.property({type:Boolean})],a.prototype,"momentumEnabled",void 0);c([b.property({type:Boolean})],a.prototype,"mouseWheelZoomEnabled",void 0);return a=c([b.subclass("esri.views.navigation.Navigation")],a)}(b.declared(g))});