// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Error ../../../core/promiseUtils ../../../core/promiseUtils ./Zlib".split(" "),function(x,y,n,r,v,m){return function(){function d(a){a&&(this.canvas=a.canvas,this.ctx=a.ctx||a.canvas&&a.canvas.getContext("2d"))}d.getFormat=function(a){if(!a||10>a.byteLength)return"";a=new Uint8Array(a,0,10);var e="";255===a[0]&&216===a[1]?e="jpeg":137===a[0]&&80===a[1]&&78===a[2]&&71===a[3]&&(e="png");return e};d.prototype.decode=function(a,e,w){var b=this;if(!a||10>a.byteLength)throw new n("imagecanvasdecoder: decode",
"required a valid encoded data as input.");var f=d.getFormat(a);if(""===f)throw new n("imagecanvasdecoder: decode","encoded data format is not a supported format (jpeg or png).");var g=e.width,h=e.height,t=e.applyJpegMask;if(t&&(!g||!h))throw new n("imagecanvasdecoder: decode","image width and height are needed to apply jpeg mask directly to canvas");return r.create(function(n,u){var l=null;"jpeg"===f&&t&&(l=d.getMask(a,e));var m=new Blob([new Uint8Array(a)],{type:"image/"+f}),q=URL.createObjectURL(m),
p=new Image,k;p.src=q;p.onload=function(){URL.revokeObjectURL(q);if(r.isAborted(w))u(v.createAbortError());else{g=p.width;h=p.height;if(b.canvas){if(b.canvas.width!==g||b.canvas.height!==h)b.canvas.width=g,b.canvas.height=h;b.ctx.clearRect(0,0,g,h)}else b.canvas=document.createElement("canvas"),b.canvas.width=g,b.canvas.height=h,b.ctx=b.canvas.getContext("2d");b.ctx.drawImage(p,0,0);var a=b.ctx.getImageData(0,0,g,h);k=a.data;var c;if(e.renderOnCanvas){if(l)for(c=0;c<l.length;c++)k[4*c+3]=l[c]?255:
0;b.ctx.putImageData(a,0,0);n(null)}else{var a=g*h,f=new Uint8Array(a),d=new Uint8Array(a),m=new Uint8Array(a);if(l)for(c=0;c<a;c++)f[c]=k[4*c],d[c]=k[4*c+1],m[c]=k[4*c+2];else for(l=new Uint8Array(a),c=0;c<a;c++)f[c]=k[4*c],d[c]=k[4*c+1],m[c]=k[4*c+2],l[c]=k[4*c+3];n({width:g,height:h,pixels:[f,d,m],mask:l,pixelType:"u8"})}}};p.onerror=function(){URL.revokeObjectURL(q);u("cannot load image")}})};d.getMask=function(a,e){var d=null;try{var b=new Uint8Array(a);a=0;var f=b.length-2;for(a=Math.ceil(b.length/
2);a<f&&(255!==b[a]||217!==b[a+1]);a++);a+=2;if(a<b.length-1)for(var g=(new m(b.subarray(a))).getBytes(),d=new Uint8Array(e.width*e.height),b=e=0;b<g.length;b++)for(f=7;0<=f;f--)d[e++]=g[b]>>f&1}catch(h){}return d};return d}()});