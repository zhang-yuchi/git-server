// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/string"],function(p,c,f){Object.defineProperty(c,"__esModule",{value:!0});var g=/__begin__/ig,h=/__end__/ig,d=/^__begin__/i,e=/__end__$/i;c.convertTemplatedStringToArcade=function(a){a?(a=f.replace(a,function(a){return'__begin__$feature["'+a+'"]__end__'}),a=d.test(a)?a.replace(d,""):'"'+a,a=e.test(a)?a.replace(e,""):a+'"',a=a.replace(g,'" + ').replace(h,' + "')):a='""';return a};var k=/^\s*\{([^}]+)\}\s*$/i;c.getSingleFieldTemplatedString=function(a){return(a=
a.match(k))&&a[1].trim()||null};var l=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,n=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;c.getSingleFieldArcadeExpression=function(a){if(!a)return null;var b=l.exec(a)||m.exec(a);return b?b[1]||b[3]:(b=n.exec(a))?b[2]:null}});