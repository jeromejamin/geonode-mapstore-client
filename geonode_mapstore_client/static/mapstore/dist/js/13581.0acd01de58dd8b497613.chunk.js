(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[13581,45992],{45992:(t,r,e)=>{"use strict";e.d(r,{h:()=>s,Z:()=>p});var n=e(535937),o=e.n(n),i=e(836882),u=e(737275);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?c(Object(e),!0).forEach((function(r){f(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function f(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==a(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var s=function(t,r){var e,n,a,c,f=i.Z;if("custom"===t)e=r;else if(a=(c=t.split("."))[0],n=c[1],!(e=f[a]))throw new Error("No such provider ("+a+")");var s={url:e.url,options:e.options||{}};if(n&&"variants"in e){if(!(n in e.variants))throw new Error("No such variant of "+(a||e.url)+" ("+n+")");var p,y=e.variants[n];p="string"==typeof y?{variant:y}:y.options,s={url:y.url||s.url,options:l(l({},s.options||{}),p)}}else"function"==typeof s.url&&(s.url=s.url(c.splice(1,c.length-1).join(".")));var b="file:"===window.location.protocol||s.options.forceHTTP;0===s.url.indexOf("//")&&b&&(s.url="http:"+s.url),s.options.retina&&(r.detectRetina&&u.ZP.getBrowserProperties().retina?r.detectRetina=!1:s.options.retina=""),s.options.attribution&&(s.options.attribution=function t(r){return-1===r.indexOf("{attribution.")?r:r.replace(/\{attribution.(\w*)\}/,(function(r,e){return t(f[e].options.attribution)}))}(s.options.attribution));var m=l(l({},s.options),o()(r,(function(t){return void 0!==t})));return[s.url,m]};const p={getLayerConfig:s}},218056:(t,r,e)=>{"use strict";e.d(r,{XK:()=>i,Um:()=>u,ut:()=>a});var n=e(701469),o=e.n(n);function i(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/(\{(.*?)\})/g,(function(){var r=arguments[0],e=arguments[2]?arguments[2]:arguments[1];if(["x","y","z"].includes(e))return arguments[0];var n=t[e];if(void 0===n)throw new Error("No value provided for variable "+r);return"function"==typeof n&&(n=n(t)),n}))}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.url||"",e=t.subdomains||"";return e&&("string"==typeof e&&(e=e.split("")),o()(e))?e.map((function(e){return i(r.replace("{s}",e),t)})):["a","b","c"].map((function(e){return i(r.replace("{s}",e),t)}))}var a=function(t){return(t.url.match(/(\{s\})/)?u(t):[i(t.url,t)])[0]}},423923:(t,r,e)=>{"use strict";e.d(r,{A4:()=>c,u3:()=>l});var n=e(623560),o=e.n(n);function i(t,r,e){var n=void 0!==e?t.toFixed(e):""+t,o=n.indexOf(".");return(o=-1===o?n.length:o)>r?n:new Array(1+r-o).join("0")+n}var u={standard:function(t){return function(r){return"EPSG:4326"===r?(e="x"===t?"EW":"NS",function(t){var r,n=(360*(r=(t+180)%360)<0?r+360:r)-180,o=Math.abs(3600*n),u=Math.floor(o/3600),a=Math.floor((o-3600*u)/60),c=o-3600*u-60*a;return(c=Math.ceil(c))>=60&&(c=0,a+=1),a>=60&&(a=0,u+=1),u+"° "+i(a,2)+"′ "+i(c,2,0)+"″"+(0===n?"":" "+e.charAt(n<0?1:0))}):function(t){return String(Math.round(t))};var e}}};function a(t,r,e){return o()(e)?e(t,r):u[e||"standard"](r)(t)}function c(t,r){return a(t,"x",r)}function l(t,r){return a(t,"y",r)}},984023:(t,r,e)=>{"use strict";e.d(r,{bL:()=>M,ZS:()=>L,uI:()=>k,XA:()=>I});var n=e(490173),o=e(986267),i=e(849232),u=e(423923),a=e(8400),c=e.n(a),l=e(875472),f=e.n(l),s=e(552259);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||h(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?b(Object(e),!0).forEach((function(r){v(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function v(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==p(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function d(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(a.push(n.value),a.length!==r);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||h(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,r){if(t){if("string"==typeof t)return g(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?g(t,r):void 0}}function g(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function x(t,r,e){var n=d(t,2),o=n[0],i=n[1],u=d(r,2),a=u[0],c=u[1],l=d(e,2),f=l[0],s=l[1],p=f-a,y=s-c,b=a,m=c;if(0!==p||0!==y){var v=((o-a)*p+(i-c)*y)/(p*p+y*y);v>1?(b=f,m=s):v>0&&(b+=p*v,m+=y*v)}return function(t,r,e,n){return Math.pow(e-t,2)+Math.pow(n-r,2)}(o,i,b,m)}var w=1e4;function j(t,r,e){var n=r(t);return{fraction:t,point:n,reprojected:e(n)}}function O(t,r,e,o){var i=(0,n.default)(r,e).forward,u=function(t,r,e){var n=t.map(r);return{fractions:t,line:n,reprojectedLine:n.map(e)}}([0,1],t,i),a=u.fractions,c=u.line,l=u.reprojectedLine,f=[];f=function(t,r){return t.push(r[0]),t.push(r[1]),t}(f,l[0]);for(var s=0;s<w&&a.length>0;){var p=a.shift(),y=a.shift(),b=c.shift(),m=c.shift(),v=l.shift(),d=l.shift(),h=j((p+y)/2,t,i),g=h.fraction,O=h.point,S=h.reprojected;x(S,v,d)<o?(f.push(d[0]),f.push(d[1])):(a.unshift(p,g,g,y),c.unshift(b,O,O,m),l.unshift(v,S,S,d)),s++}return f}function S(t,r,e){return Math.min(Math.max(t,r),e)}var P={degrees:[90,45,30,20,10,5,2,1,.5,.2,.1,.05,.01,.005,.002,.001],m:[1e7,5e6,2e6,1e6,5e5,2e5,1e5,5e4,2e4,1e4,5e3,2e3,1e3,500,200,100]};function M(t){var r,e=n.default.defs(t);return P[null!==(r=null==e?void 0:e.units)&&void 0!==r?r:"m"]}function L(t,r,e,n,o){var i=d(r,2),u=i[0],a=i[1],c=Math.pow(e*n,2);return t.reduce((function(t,r){var e=r/2,n=o([u-e,a-e]),i=o([u+e,a+e]);return Math.pow(i[0]-n[0],2)+Math.pow(i[1]-n[1],2)>c?r:t}),-1)}function E(t,r,e,n,o){return t.map((function(t,i){var u=function(t,r,e){var n=Math.max(r[1],t[1]),o=Math.min(r[3],t[t.length-1]),i=S(r[1]+Math.abs(r[1]-r[3])*e,n,o);return[t[0],i]}(t,r,n);return{geom:u,text:e(t[0],m(m({},o),{},{index:i,extent:r}))}}))}function A(t,r,e,n,o){return t.map((function(t,i){var u=function(t,r,e){var n=Math.max(r[0],t[0]),o=Math.min(r[2],t[t.length-2]);return[S(r[0]+Math.abs(r[0]-r[2])*e,n,o),t[1]]}(t,r,n);return{geom:u,text:e(t[1],m(m({},o),{},{index:i,extent:r}))}}))}function F(t,r,e,n){return y(Array(function(t,r,e){return Math.round((r-t)/e)+1}(e,n,Math.abs(r))-1).keys()).map((function(o){return S(t+(o+1)*r,e,n)}))}function T(t,r){return(0,i.Z)({type:"Feature",geometry:{type:"LineString",coordinates:[[t[0],t[1]],[t[2],t[3]]]}},(0,o.bboxToFeatureGeometry)(r))}function D(t,r){return t.slice(0,r)}function _(t){var r=d(t,4),e=r[0],n=r[1],o=r[2],i=r[3];return[[e,n],[o,n],[o,i],[e,i],[e,n]]}function k(t,r,e,i,u,a,c,l,s,p,b,m,v,h){var g=arguments.length>14&&void 0!==arguments[14]?arguments[14]:{};if(-1===t)return{xLines:[],yLines:[],xLabels:[],yLabels:[],frame:null};var x=d((0,(0,n.default)(r,e).forward)(a),2),w=x[0],j=x[1],P=d((0,o.reprojectBbox)([Math.max(i[0],u[0]),Math.max(i[1],u[1]),Math.min(i[2],u[2]),Math.min(i[3],u[3])],r,e||"EPSG:4326"),4),M=P[0],L=P[1],k=P[2],G=P[3],I=d((0,o.reprojectBbox)(u,r,e||"EPSG:4326"),4),C=I[0],R=I[1],Z=I[2],z=I[3],N=S(Math.floor(w/t)*t,C,Z),B=f()(F(N,-t,C,N)),U=f()(F(N,t,N,Z)),X=S(Math.floor(j/t)*t,R,z),H=f()(F(X,-t,R,X)),K=f()(F(X,t,X,z)),W=D([].concat(y(B),[N],y(U)).map((function(t){return function(t,r,e,n,o,i){return function(t,r,e,n,o,i){return O((function(n){return[t,r+(e-r)*n]}),n,o,i)}(t,r,e,o,i,n)}(t,L,G,c,e||"EPSG:4326",r)})).filter((function(t){return T(t,i)})),l),$=D([].concat(y(H),[X],y(K)).map((function(t){return function(t,r,e,n,o,i){return function(t,r,e,n,o,i){return O((function(n){return[r+(e-r)*n,t]}),n,o,i)}(t,r,e,o,i,n)}(t,M,k,c,e||"EPSG:4326",r)})).filter((function(t){return T(t,i)})),l),q=h?function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,e=d(t,4),n=e[0],o=e[1],i=e[2],u=e[3],a=Math.max(i-n,u-o)*r/2,c=[n+a,o+a,i-a,u-a];return{exterior:_([n-a,o-a,i+a,u+a]),interior:_(c)}}(i,h):null;return{xLines:W,yLines:$,xLabels:s?E(W,i,p,m,g):[],yLabels:s?A($,i,b,v,g):[],frame:q}}function G(t){return[(t[2]+t[0])/2,(t[3]+t[1])/2]}function I(t){var r=t.mapProjection,e=t.gridProjection,i=t.extent,a=t.center,l=void 0===a?null:a,f=t.zoom,p=t.withLabels,b=void 0!==p&&p,v=t.xLabelFormatter,d=t.yLabelFormatter,h=t.xLabelPosition,g=void 0===h?0:h,x=t.yLabelPosition,w=void 0===x?1:x,j=t.maxLines,O=void 0===j?100:j,S=t.intervals,P=t.targetSize,E=void 0===P?100:P,A=t.resolutions,F=t.xLabelStyle,T=t.yLabelStyle,D=t.pixelRatio,_=void 0===D?devicePixelRatio:D,I=t.frameSize,C=void 0===I?0:I,R=(null!=A?A:(0,s.getResolutions)(r))[f],Z=(0,n.default)(r,e).forward,z=(0,n.default)(e,r).forward,N=Z(G((0,o.getExtentForProjection)(e).extent)),B=L(null!=S?S:M(e),N,E,R,z),U=R*R/(4*_*_),X=k(B,r,e,i,(0,o.getExtentForProjection)(r).extent,null!=l?l:G(i),U,O,b,(0,u.A4)(e,v),(0,u.u3)(e,d),g,w,C,{center:l,resolution:R,interval:B}),H=[].concat(y(X.xLines),y(X.yLines)).map((function(t){return{type:"Feature",properties:{ms_style:"lines"},geometry:{type:"LineString",coordinates:c()(t,2)}}})),K=y(X.xLabels).map((function(t){return{type:"Feature",properties:{ms_style:F?m(m({},F),{},{label:t.text}):"xlabels",valueText:t.text},geometry:{type:"Point",coordinates:t.geom}}})),W=y(X.yLabels).map((function(t){return{type:"Feature",properties:{ms_style:T?m(m({},T),{},{label:t.text}):"ylabels",valueText:t.text},geometry:{type:"Point",coordinates:t.geom}}})),$=X.frame?[X.frame].map((function(t){return{type:"Feature",properties:{ms_style:"frame"},geometry:{type:"Polygon",coordinates:[t.exterior,t.interior]}}})):[];return{type:"FeatureCollection",features:[].concat(y(H),y($),y(K),y(W))}}}}]);