// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","./programUtils"],function(d,e,f){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function b(a){this._programCacheByTemplate=new Map;this._rctx=a}b.prototype.dispose=function(){this._programCacheByTemplate.forEach(function(a){a.programs.forEach(function(a){a.dispose()})});this._programCacheByTemplate=null};b.prototype.getProgram=function(a,c){var b=this;this._programCacheByTemplate.has(a)||this.addProgramTemplate(a,function(c){return f.createProgram(b._rctx,
a,c)});return this.getProgramTemplateInstance(a,c)};b.prototype.addProgramTemplate=function(a,c){this._programCacheByTemplate.set(a,{constructor:c,programs:new Map})};b.prototype.getProgramTemplateInstance=function(a,c){if(a=this._programCacheByTemplate.get(a)){var b=c?JSON.stringify(c):"default";a.programs.has(b)||(c=a.constructor(c),a.programs.set(b,c));return a.programs.get(b)}return null};return b}();e.ProgramCache=d});