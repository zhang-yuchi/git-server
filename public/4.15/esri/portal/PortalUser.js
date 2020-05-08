// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Error ../core/JSONSupport ../core/promiseUtils ../core/accessorSupport/decorators ./PortalFolder ./PortalGroup".split(" "),function(m,r,n,c,h,p,f,d,q,k){return function(l){function b(){var a=l.call(this)||this;a.access=null;a.created=null;a.culture=null;a.description=null;a.email=null;a.fullName=null;a.modified=null;a.orgId=null;a.portal=null;a.preferredView=null;a.privileges=null;a.region=null;
a.role=null;a.roleId=null;a.sourceJSON=null;a.units=null;a.username=null;a.userType=null;return a}n(b,l);g=b;Object.defineProperty(b.prototype,"thumbnailUrl",{get:function(){var a=this.url,b=this.thumbnail;return a&&b?this.portal._normalizeUrl(a+"/info/"+b+"?f\x3djson"):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"userContentUrl",{get:function(){var a=this.get("portal.restUrl");return a?a+"/content/users/"+this.username:null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"url",{get:function(){var a=this.get("portal.restUrl");return a?a+"/community/users/"+this.username:null},enumerable:!0,configurable:!0});b.prototype.addItem=function(a){var b=this,d=a&&a.item,c=a&&a.data;a=a&&a.folder;var e={method:"post"};d&&(e.query=d.createPostQuery(),null!=c&&("string"===typeof c?e.query.text=c:"object"===typeof c&&(e.query.text=JSON.stringify(c))));c=this.userContentUrl;a&&(c+="/"+("string"===typeof a?a:a.id));return this.portal._request(c+"/addItem",e).then(function(a){d.id=
a.id;d.portal=b.portal;return d.loaded?d.reload():d.load()})};b.prototype.deleteItem=function(a){var b=this.userContentUrl;a.ownerFolder&&(b+="/"+a.ownerFolder);return this.portal._request(b+("/items/"+a.id+"/delete"),{method:"post"}).then(function(){a.id=null;a.portal=null})};b.prototype.deleteItems=function(a){var b=this.userContentUrl+"/deleteItems",c=a.map(function(a){return a.id});return c.length?(c={method:"post",query:{items:c.join(",")}},this.portal._request(b,c).then(function(){a.forEach(function(a){a.id=
null;a.portal=null})})):f.resolve(void 0)};b.prototype.fetchFolders=function(){var a=this;return this.portal._request(this.userContentUrl,{query:{num:1}}).then(function(b){return b&&b.folders?b.folders.map(function(b){b=q.fromJSON(b);b.portal=a.portal;return b}):[]})};b.prototype.fetchGroups=function(){var a=this;return this.portal._request(this.url).then(function(b){return b&&b.groups?b.groups.map(function(b){b=k.fromJSON(b);b.portal=a.portal;return b}):[]})};b.prototype.fetchItems=function(a){var b=
this;a||(a={});var c=this.userContentUrl;a.folder&&(c+="/"+a.folder.id);var d;return f.create(function(a){return m(["./PortalItem"],a)}).then(function(e){d=e;return b.portal._request(c,{query:{folders:!1,num:a.num||10,start:a.start||1,sortField:a.sortField||"created",sortOrder:a.sortOrder||"asc"}})}).then(function(a){var c;return a&&a.items?(c=a.items.map(function(a){a=d.fromJSON(a);a.portal=b.portal;return a}),f.all(c.map(function(a){return a.load()})).catch(function(a){return a}).then(function(){return{items:c,
nextStart:a.nextStart,total:a.total}})):{items:[],nextStart:-1,total:0}})};b.prototype.fetchTags=function(){return this.portal._request(this.url+"/tags").then(function(a){return a.tags})};b.prototype.getThumbnailUrl=function(a){var b=this.thumbnailUrl;b&&a&&(b+="\x26w\x3d"+a);return b};b.prototype.queryFavorites=function(a){return this.favGroupId?(this._favGroup||(this._favGroup=new k({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(a)):f.reject(new h("internal:unknown","Unknown internal error",
{internalError:"Unknown favGroupId"}))};b.prototype.toJSON=function(){throw new h("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented");};b.fromJSON=function(a){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");var b=new g;b.sourceJSON=a;b.read(a);return b};var g;c([d.property()],b.prototype,"access",void 0);c([d.property({type:Date})],b.prototype,"created",void 0);c([d.property()],b.prototype,"culture",void 0);c([d.property()],b.prototype,"description",
void 0);c([d.property()],b.prototype,"email",void 0);c([d.property()],b.prototype,"favGroupId",void 0);c([d.property()],b.prototype,"fullName",void 0);c([d.property({type:Date})],b.prototype,"modified",void 0);c([d.property()],b.prototype,"orgId",void 0);c([d.property()],b.prototype,"portal",void 0);c([d.property()],b.prototype,"preferredView",void 0);c([d.property()],b.prototype,"privileges",void 0);c([d.property()],b.prototype,"region",void 0);c([d.property()],b.prototype,"role",void 0);c([d.property()],
b.prototype,"roleId",void 0);c([d.property()],b.prototype,"sourceJSON",void 0);c([d.property()],b.prototype,"thumbnail",void 0);c([d.property({dependsOn:["url","thumbnail","portal.credential.token"],readOnly:!0})],b.prototype,"thumbnailUrl",null);c([d.property()],b.prototype,"units",void 0);c([d.property({dependsOn:["portal.restUrl"],readOnly:!0})],b.prototype,"userContentUrl",null);c([d.property({dependsOn:["portal.restUrl"],readOnly:!0})],b.prototype,"url",null);c([d.property()],b.prototype,"username",
void 0);c([d.property()],b.prototype,"userType",void 0);return b=g=c([d.subclass("esri.portal.PortalUser")],b)}(d.declared(p.JSONSupport))});