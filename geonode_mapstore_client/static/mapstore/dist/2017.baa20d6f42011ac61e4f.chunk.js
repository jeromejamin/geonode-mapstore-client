(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2017],{23010:(e,t,r)=>{"use strict";r.d(t,{dV:()=>D,ZP:()=>_});var n=r(24852),o=r.n(n),a=r(67076),i=r(23570),s=r.n(i),c=r(55745),l=r.n(c),u=r(65442),p=r.n(u),f=r(47359),d=r(1979),m=r(18446),y=r.n(m),v=r(24262),b=r(7412),h=r(49977),g=r(49243),O=r(13311),w=r.n(O),j=r(71703),P=r(34990),E=r(66113),S=["rawPos"],C=["PopupSupport","tools"];function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){return e&&0===e.indexOf("geostory-vector")}var D=(0,a.compose)((0,j.connect)((function(e){return{sections:(0,E.NR)(e)}}),{onClickMarker:P.Vx}),(0,a.withHandlers)({onClickMarker:function(e){var t=e.onClickMarker,r=void 0===t?function(){}:t,n=e.sections,a=void 0===n?{}:n;return function(e,t,n){var i=(w()(e,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.queryParams,n=(r=void 0===r?{}:r).request,o=e.layerMetadata,a=(o=void 0===o?{}:o).title;return!n&&a.toLowerCase()===t}))||{}).response,s=(i=void 0===i?{}:i).features,c=M(s=void 0===s?[]:s,1)[0],l=(c=void 0===c?{}:c).contentRefId,u=w()(a,(function(e){var t=e.contents;return w()(t,{id:l})})),p={popups:[]};if(u){var f=w()(u.contents,{id:l})||{},d=f.id,m=f.title,y=void 0===m?"":m;r('sections[{"id":"'.concat(u.id,'"}].contents[{"id":"').concat(d,'"}].carouselToggle'),!0),y&&(p={popups:n.map((function(e){return Z(Z({},e),{},{component:function(){return o().createElement("div",{className:"ms-geostory-carousel-viewer"},y)}})}))})}return p}}})),R=(0,a.mapPropsStream)((function(e){var t=(0,a.createEventHandler)(),r=t.stream,n=t.handler;return r.withLatestFrom(e.map((function(e){return{map:e.map,layers:e.layers,options:e.options}})).distinctUntilChanged((function(e,t){return y()(e,t)}))).switchMap((function(e){var t=M(e,2),r=t[0],n=r.point,o=r.layerInfo,a=t[1],i=a.map,c=a.layers,u=void 0===c?[]:c,f=a.options,m=(f=void 0===f?{}:f).mapOptions,y=(m=void 0===m?{}:m).mapInfoFormat,O=void 0===y?(0,d.GA)():y,w=u.filter((function(e){return(0,v.T4)(e,i.resolution)&&(0,b.y_)(e)}));x(o)&&(w=w.filter((function(e){var t=e.id;return o===t})));var j=["SLD_BODY"],P=["buffer","cql_filter","filter","propertyName"];return 0===w.length?h.Observable.of({requests:[{}],responses:[{response:{features:[]}}],validResponses:[]}):h.Observable.from(w).mergeMap((function(e){var t=(0,b.Fm)(e,{format:O,map:i,point:n,currentLocale:"en-US"}),r=t.url,o=t.request,a=t.metadata,c=r,u=o,f=Z(Z({},(0,b.K7)(e,P,j)),u),d=s()();return(r?(0,g.y)(c,f,e).map((function(e){return e.data.exceptions?{reqId:d,exceptions:e.data.exceptions,queryParams:u,layerMetadata:a}:{data:e.data,reqId:d,queryParams:u,layerMetadata:Z(Z({},a),{},{features:e.features,featuresCrs:e.featuresCrs})}})):h.Observable.of(function(e,t,r){var n={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[t.lng,t.lat]}},o=r&&r.units;switch(o){case"m":o="meters";break;case"deg":o="degrees";break;case"mi":o="miles";break;default:o="meters"}var a=r&&r.resolution||1,i=l()(n,(r.buffer||1)*a,o);return{data:{crs:null,features:(e.features||[]).filter((function(e){try{return"FeatureCollection"===e.type&&e.features&&e.features.length?e.features.reduce((function(e,t){var n=t.properties.useGeodesicLines&&t.properties.geometryGeodesic?Z(Z({},t),{},{geometry:t.properties.geometryGeodesic}):t;return e||p()(i,a&&r.buffer&&o?l()(n,1,"meters"):n)}),!1):p()(i,a&&r.buffer&&o?l()(e,1,"meters"):e)}catch(e){return!1}})),totalFeatures:"unknown",type:"FeatureCollection"},queryParams:t,layerMetadata:r}}(e,o,a))).catch((function(e){return{error:e.data||e.statusText||e.status,reqId:d,queryParams:u,layerMetadata:a}})).startWith({start:!0,reqId:d,request:f})})).scan((function(e,t){var r=e.requests,n=e.responses,a=e.validResponses;if(t.start){var i=t.reqId,s=t.request;return{requests:r.concat({reqId:i,request:s}),responses:n,validResponses:a}}var c=t.data,l=t.queryParams,u=t.layerMetadata,p=(0,b.Te)(O),f=n.concat({response:c,queryParams:l,layerMetadata:u});return{requests:r,validResponses:p.getValidResponses(f),responses:f,layerInfo:o}}),{requests:[],responses:[],validResponses:[],layerInfo:o})})).startWith({requests:[],responses:[]}).combineLatest(e,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Z(Z({},t),{},{mapInfo:e,getFeatureInfoHandler:n})}))}));const _=(0,a.branch)((function(e){var t=e.map,r=(t=void 0===t?{}:t).mapInfoControl,n=void 0!==r&&r;return!e.isDrawEnabled&&n}),(0,a.compose)(R,(0,a.withStateHandlers)({popups:[]},{onClick:function(e,t){var r=t.getFeatureInfoHandler,n=void 0===r?function(){}:r,o=t.map,a=(o=void 0===o?{}:o).mapInfoControl;return function(e,t){var r=e.rawPos,o=void 0===r?[]:r,i=k(e,S);return x(t)||a?(n({point:i,layerInfo:t}),{popups:[{position:{coordinates:o},id:s()()}]}):{popups:[]}}},onPopupClose:function(){return function(){return{popups:[]}}}}),(0,a.withPropsOnChange)(["mapInfo","popups"],(function(e){var t=e.mapInfo,r=e.popups,n=e.options,a=(n=void 0===n?{}:n).mapOptions,i=(a=void 0===a?{}:a).mapInfoFormat,s=void 0===i?(0,d.GA)():i,c=e.onClickMarker,l=void 0===c?function(){}:c,u=t.responses,p=t.requests,m=t.validResponses,y=t.layerInfo;return x(y)?l(m,y,r):{popups:r.map((function(e){return Z(Z({},e),{},{component:function(){return o().createElement(f.Z,{renderEmpty:!0,responses:u,requests:p,validResponses:m,format:s,showEmptyMessageGFI:!0,missingResponses:(p||[]).length-(u||[]).length})}})}))}})),(0,a.withPropsOnChange)(["plugins","onPopupClose","popups"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.plugins,r=e.popups,n=e.onPopupClose,a=t.PopupSupport,i=t.tools,s=void 0===i?{}:i,c=k(t,C);if(!a)return{};var l=function(e){return o().createElement(a,I({},e,{popups:r,onPopupClose:n}))};return{plugins:Z(Z({},c),{},{tools:Z(Z({},s),{},{popup:l})})}}))))},16788:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(24852),o=r.n(n),a=r(45697),i=r.n(a),s=r(1206),c=r.n(s),l=r(96797),u=r.n(l),p=r(67076);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(s,e);var t,r,n,a,i=(n=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(n);if(a){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function s(){return y(this,s),i.apply(this,arguments)}return t=s,(r=[{key:"componentDidMount",value:function(){u()(this._node)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.src!==this.props.src&&u()(this._node)}},{key:"render",value:function(){var e=this,t=this.props,r=t.id,n=t.src,a=t.fit,i=void 0===a?"cover":a,s=t.enableFullscreen,l=void 0===s||s,u=t.fullscreen,p=t.onClick,f=t.description,d=t.showCaption,y=t.caption,v=void 0===y?f:y,b=t.credits,h=t.loaderStyle,g=this.props.loaderComponent,O=this.props.errorComponent;return o().createElement("div",{id:r,className:"ms-media ms-media-image"},n&&"error"!==this.props.status&&o().createElement("img",{ref:function(t){e._node=t},src:n,onLoad:function(){return e.props.onChangeStatus("loaded")},onError:function(){return e.props.onChangeStatus("error")},onClick:l?function(){return p(!0)}:void 0,style:{objectFit:i,fontFamily:"object-fit: ".concat(i),cursor:l?"pointer":"default"}}),n&&!this.props.status&&g&&o().createElement(g,{style:m({},h)}),"error"===this.props.status&&O&&o().createElement(O,null),b&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,b)),d&&v&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,v)),l&&u?o().createElement(c(),{mainSrc:n,onCloseRequest:function(){return p(!1)}}):null)}}])&&v(t.prototype,r),s}(n.Component);O(w,"propTypes",{src:i().string,id:i().string,fit:i().string,description:i().string,showCaption:i().bool,credits:i().string,altText:i().string,enableFullscreen:i().bool,fullscreen:i().bool,onClick:i().func,onChangeStatus:i().func,status:i().string,loaderComponent:i().element,errorComponent:i().element,caption:i().string,loaderStyle:i().object});const j=(0,p.compose)((0,p.withState)("fullscreen","onClick",!1),(0,p.withState)("status","onChangeStatus",""))(w)},37034:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Z});var n=r(24852),o=r.n(n),a=r(67076),i=r(57588),s=r(19180),c=r(91812),l=r(37981),u=r(69705),p=r(57068),f=r(1979),d=r(23010),m=r(61928);const y=(0,a.compose)(u.Z,(0,c.Z)(0),s.Z,d.ZP,f.yM,l.Z,p.e)(m.Z);var v=r(92579),b=r(27693),h=r(99534),g=r(15135),O=r(80628),w=r(82467),j=["id","map","fit","editMap","onMapViewChanges","eventHandlers","expandable","active","setActive","width","height","size","showCaption","caption","mapType","onMapTypeLoaded","layers","children"],P=["layers","mapOptions","description"];function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function S(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var A=(0,g.Z)(w.Z);const Z=(0,a.compose)((0,a.withState)("active","setActive",!1),O.Z)((function(e){var t=e.id,r=e.map,a=void 0===r?{layers:[b.D]}:r,s=e.fit,c=e.editMap,l=void 0!==c&&c,u=e.onMapViewChanges,p=e.eventHandlers,f=e.expandable,d=void 0!==f&&f,m=e.active,g=e.setActive,O=e.width,w=e.height,C=e.size,I=e.showCaption,M=e.caption,Z=e.mapType,q=void 0===Z?"leaflet":Z,x=e.onMapTypeLoaded,D=e.layers,R=e.children,_=T(e,j),F=a.data?a.data:a,N=F.layers,V=void 0===N?[]:N,L=F.mapOptions,z=void 0===L?{}:L,W=F.description,G=T(F,P),H=M||W,U=d?m?{zoomControl:!1,interactive:!0,mapOptions:{scrollWheelZoom:!0,interactions:{mouseWheelZoom:!0,dragPan:!0}}}:{zoomControl:!1,interactive:!1,mapOptions:{scrollWheelZoom:!1,interactions:{mouseWheelZoom:!1,dragPan:!1}}}:{mapOptions:z},B=l?{mapOptions:k(k({},z),{},{interactions:k(k({},z.interactions),{},{mouseWheelZoom:G.zoomControl})})}:U,$=!_.isDrawEnabled&&G.mapInfoControl&&!(d&&!m),Y=o().createElement(o().Fragment,null,o().createElement(y,E({},_,{key:d?"overlay":"block",onMapViewChanges:u,eventHandlers:p,map:k(k({},G),{},{id:"media-".concat(t),resize:O+"-"+w+"_"+C,className:"aaaa",style:{cursor:$?"pointer":"default"}}),layers:D?[].concat(S(V),S(D)):V,tools:$?["popup"]:[],options:(0,v.kn)(B),mapType:q,onMapTypeLoaded:x}),n.Children.map(R,(function(e){return e?(0,n.cloneElement)(e,{mapType:q}):null}))),d&&!l&&o().createElement(A,{className:"ms-expand-media-button",onClick:function(){return g(!m)},tooltipId:m?"geostory.closeFullscreenMap":"geostory.showFullscreenMap",tooltipPosition:"left"},o().createElement(i.Glyphicon,{glyph:m?"1-close":"1-full-screen"})));return o().createElement("div",{className:"ms-media ms-media-map ".concat(z.zoomPosition||""),style:{objectFit:s}},m&&d?o().createElement(h.Z,null,o().createElement("div",{className:"ms-expanded-media-container"},Y)):Y,I&&H&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,H)))}))},52826:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(24852),o=r.n(n),a=r(70390),i=r(32425),s=r(80628),c=r(57588),l=r(92579),u=r(5346);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=(0,s.Z)((function(e){var t=e.src,r=e.width,s=e.height,l=e.resolution,p=e.thumbnail,d=e.controls,y=e.play,v=e.onPlay,b=void 0===v?function(){}:v,h=e.onStart,g=void 0===h?function(){}:h,O=e.fit,w=e.loop,j=e.volume,P=void 0===j?1:j,E=e.muted,S=y,C=m((0,n.useState)(S),2),I=C[0],k=C[1],M=m((0,n.useState)(),2),T=M[0],A=M[1],Z=m((0,n.useState)(y),2),q=Z[0],x=Z[1],D="cover"===O,R=m((0,n.useState)(!1),2),_=R[0],F=R[1];(0,n.useEffect)((function(){!I&&S&&(k(!0),x(!0)),I&&g(I)}),[I,S]);var N,V=(N=r/s,D?N<l?[s*l,s]:[r,r/l]:"contain"===O?N<l?[r,r/l]:[s*l,s]:[r,r/l]),L="contain"===O||D?s:V[1],z=!D&&d,W=!!D||w;return o().createElement("div",{className:"ms-video",style:{position:"relative",width:r,height:L,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},t&&o().createElement(o().Fragment,null,I&&o().createElement(a.ZP,{url:t,width:V[0],height:V[1],playing:S,loop:W,volume:P,muted:E,style:D?{left:"50%",top:"50%",transform:"translate(-50%, -50%)",position:"absolute"}:{},controls:z,pip:!1,fileConfig:{attributes:{controlsList:"nodownload",disablePictureInPicture:!0}},youtubeConfig:{playerVars:{controls:z?2:0,modestbranding:1,rel:0}},onReady:function(){return x(!1)},onError:function(e){A(e),(""+e).includes("NotAllowedError")&&(b(!1),F(!0),x(!1))},onPause:function(){b(!1)},onPlay:function(){b(!0),_&&(A(!1),F(!1))}}),(!I||I&&(q||T))&&o().createElement("div",{className:"ms-video-cover",style:f(f({position:"absolute",width:V[0],height:V[1],display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 1.0)"},!(q||T)&&{cursor:"pointer"}),!S&&p&&{backgroundImage:"url(".concat(p,")"),backgroundSize:D?"cover":"640px auto",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),onClick:function(){_?(F(!1),A(!1)):x(!0),k(!0),b(!0)}},q&&o().createElement(i.Z,{size:70}),T&&!_&&o().createElement("div",{className:"text-center"},o().createElement(c.Glyphicon,{glyph:"alert",style:{fontSize:V[1]/4>100?100:V[1]/4,mixBlendMode:"difference",color:"#ffffff"}}),o().createElement("h3",null,o().createElement(u.Z,{msgId:"geostory.errors.loading.video"}))," "),(!(q||T)&&!S||T&&_)&&o().createElement(c.Glyphicon,{glyph:"play",style:{fontSize:V[1]/4>100?100:V[1]/4,mixBlendMode:"difference",color:"#ffffff"}}))),!z&&!_&&o().createElement("div",{className:"ms-video-mask-cover",style:{position:"absolute",width:V[0],height:V[1]}}))}));const b=function(e){var t=e.id,r=e.src,a=e.resolution,i=void 0===a?16/9:a,s=e.autoplay,c=e.inView,u=e.description,p=e.showCaption,f=e.caption,d=void 0===f?u:f,y=e.thumbnail,b=e.credits,h=e.controls,g=void 0===h||h,O=e.fit,w=e.loop,j=e.muted,P=e.onPlay,E=void 0===P?function(){}:P,S=e.mode,C=e.containerInView,I=(void 0===C||C)&&c,k=m((0,n.useState)(!1),2),M=k[0],T=k[1],A=function(e){T(e),E(e)};return(0,n.useEffect)((function(){S===l.nl.EDIT&&A(!1)}),[S]),(0,n.useEffect)((function(){S===l.nl.VIEW&&I&&(s||"cover"===O)&&A(!0)}),[I,s,O,S]),(0,n.useEffect)((function(){S===l.nl.VIEW&&!I&&M&&A(!1)}),[I,M,S]),o().createElement("div",{id:t,key:"".concat(t,"-").concat(O,"-").concat(S),className:"ms-media ms-media-video"},o().createElement(v,{src:r,play:M&&S===l.nl.VIEW,resolution:i,thumbnail:y,controls:g&&S===l.nl.VIEW,onPlay:A,fit:O,loop:w,muted:j}),b&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,b)),p&&d&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,d)))}},82017:(e,t,r)=>{"use strict";r.d(t,{Ln:()=>m,ZP:()=>v});var n=r(24852),o=r.n(n),a=r(45697),i=r.n(a),s=r(16788),c=r(37034),l=r(52826),u=["debounceTime","mediaViewer","children"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=s.Z,m={image:s.Z,map:c.Z,video:l.Z},y=function(e){var t,r,a=e.debounceTime,i=e.mediaViewer,s=e.children,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u),l="".concat(c.id).concat(c.resourceId?"-".concat(c.resourceId):""),y=(t=(0,n.useState)({}),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=y[0],b=y[1],h=void 0===v[l]||v[l],g=i||m[c.mediaType||c.type]||d;return o().createElement(g,p({sectionType:c.sectionType,debounceTime:a,loading:v,isLoading:h,onLoad:b,loadingId:l},c),s)};y.propTypes={id:i().string,lazy:i().bool,mediaType:i().string,type:i().string,debounceTime:i().number},y.defaultProps={id:"",lazy:!0,mediaType:"",type:""};const v=y},99534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(61365),o=r(69334);const a=(0,n.Z)(o.h_)},27693:(e,t,r)=>{"use strict";r.d(t,{r:()=>n,D:()=>o});var n={GEOSTORY:"geostory",GEOSTORE:"geostore"},o={type:"osm",title:"Open Street Map",name:"mapnik",source:"osm",group:"background",visibility:!0,id:"mapnik__0",loading:!1,loadingError:!1}}}]);