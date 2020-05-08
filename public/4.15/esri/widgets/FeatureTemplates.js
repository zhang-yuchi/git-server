// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper @dojo/framework/shim/IntersectionObserver dojo/i18n!./FeatureTemplates/nls/FeatureTemplates ../core/deprecate ../core/HandleOwner ../core/Logger ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./FeatureTemplates/FeatureTemplatesViewModel ./FeatureTemplates/ItemList ./support/widget".split(" "),function(z,A,f,m,d,n,g,p,q,r,t,c,u,v,w,e){function x(c){return c.items?
c.uid:c.layer.id}var y=r.getLogger("esri.widgets.FeatureTemplates"),l={filter:!0};return function(k){function b(a){a=k.call(this,a)||this;a._iconIntersectionObserver=new n.default(function(a,b){a.forEach(function(a){if(a.isIntersecting){var c=a.target;if(!c["data-has-icon"]){c["data-has-icon"]=!0;var h=c["data-item"];h.fetchThumbnail().then(function(){h.thumbnail&&c.appendChild(h.thumbnail)})}b.unobserve(c)}})});a.filterFunction=null;a.filterText="";a.groupBy=null;a.label=g.widgetLabel;a.layers=null;
a.viewModel=new v;a.visibleElements=f({},l);a.renderItemIcon=a.renderItemIcon.bind(a);a._afterItemCreateOrUpdate=a._afterItemCreateOrUpdate.bind(a);a._afterItemRemoved=a._afterItemRemoved.bind(a);return a}m(b,k);b.prototype.postInitialize=function(){var a=this,b=function(b){b=b.label;return!a.filterText||-1<b.toLowerCase().indexOf(a.filterText.toLowerCase())};this.own(t.init(this,"viewModel",function(c,d){c&&!c.filterFunction&&(a.filterFunction=b);d&&d!==c&&d.filterFunction===b&&(d.filterFunction=
null)}))};b.prototype.destroy=function(){this._iconIntersectionObserver&&(this._iconIntersectionObserver.disconnect(),this._iconIntersectionObserver=null)};Object.defineProperty(b.prototype,"filterEnabled",{set:function(a){p.deprecatedProperty(y,"filterEnabled",{replacement:"visibleElements.filter",version:"4.15"});this.visibleElements=f({},this.visibleElements,{filter:a})},enumerable:!0,configurable:!0});b.prototype.castVisibleElements=function(a){return f({},l,a)};b.prototype.render=function(){var a=
this,b=this.filterText,c=this.viewModel,d=c.items,c=c.state,f=this.visibleElements.filter;return e.tsx("div",{class:this.classes("esri-feature-templates","esri-widget"),"aria-label":g.widgetLabel},"loading"===c?this.renderLoader():"ready"===c?w.ItemList({id:this.id,identify:x,filterText:b,items:d,messages:{filterPlaceholder:g.filterPlaceholder,noItems:g.noItems,noMatches:g.noMatches},filterEnabled:f,onItemSelect:function(b){a.viewModel.select(b)},onFilterChange:function(b){a.filterText=b;a.viewModel.refresh()},
renderIcon:this.renderItemIcon}):null)};b.prototype.renderItemIcon=function(a){return e.tsx("span",{key:"icon",class:"esri-feature-templates__list-item-icon",afterCreate:this._afterItemCreateOrUpdate,afterUpdate:this._afterItemCreateOrUpdate,afterRemoved:this._afterItemRemoved,"data-item":a.item,"data-has-icon":!1})};b.prototype.renderLoader=function(){return e.tsx("div",{class:"esri-feature-templates__loader",key:"loader"})};b.prototype._afterItemCreateOrUpdate=function(a){this._iconIntersectionObserver.observe(a)};
b.prototype._afterItemRemoved=function(a){this._iconIntersectionObserver.unobserve(a)};d([c.property(),e.renderable()],b.prototype,"filterEnabled",null);d([c.aliasOf("viewModel.filterFunction")],b.prototype,"filterFunction",void 0);d([c.property(),e.renderable()],b.prototype,"filterText",void 0);d([c.aliasOf("viewModel.groupBy")],b.prototype,"groupBy",void 0);d([c.property()],b.prototype,"label",void 0);d([c.aliasOf("viewModel.layers")],b.prototype,"layers",void 0);d([c.property(),e.renderable(["viewModel.items",
"viewModel.state"]),e.vmEvent("select")],b.prototype,"viewModel",void 0);d([c.property(),e.renderable()],b.prototype,"visibleElements",void 0);d([c.cast("visibleElements")],b.prototype,"castVisibleElements",null);return b=d([c.subclass("esri.widgets.FeatureTemplates")],b)}(c.declared(q.HandleOwnerMixin(u)))});