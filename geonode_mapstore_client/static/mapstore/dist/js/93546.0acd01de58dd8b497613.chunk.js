(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[93546],{393546:(e,t,r)=>{"use strict";r.d(t,{jF:()=>Ye,Fc:()=>Te,EC:()=>Ee,C2:()=>Ue,Cw:()=>qe,rm:()=>Le});var n=r(414293),o=r.n(n),l=r(92742),i=r.n(l),a=r(747037),u=r.n(a),s=r(701469),f=r.n(s),c=r(984596),y=r.n(c),g=r(91175),d=r.n(g),h=r(610928),p=r.n(h),w=r(313311),m=r.n(w),v=r(513218),A=r.n(v),P=r(421915),b=r(443143),C=r(986267),S=r(433506),O=r(281763),x=r.n(O),k=r(831219),F=r(162875),G=r(315565),T=r(898185),M=r(438097),j=r.n(M),q=S.Z.markers.extra,U=q.icons[0],E=q.icons[1],L=q.size[1],Y=S.Z.getGlyphs("fontawesome"),I=function(e,t){var r=e.highlight,n=e.rotation,o=void 0===n?0:n;return r?[new k.default({image:new F.default({anchor:[.5,t],rotation:o,anchorXUnits:"fraction",anchorYUnits:"pixels",src:j(),scale:.5})})]:[]},z=function(e,t){var r,n,o=null==Y?void 0:Y[null==e||null===(r=e.style)||void 0===r?void 0:r.iconGlyph],l="FontAwesome",i=2;return null!=e&&null!==(n=e.style)&&void 0!==n&&n.iconText&&(o=e.style.iconText,l="sans-serif",i=1.6),new G.default({rotation:t,text:o,font:"14px ".concat(l),offsetY:-L*i/3,fill:new T.default({color:"#FFFFFF"})})};const D={extra:{getIcon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o()(e.style&&e.style.rotation)?0:e.style.rotation;return[new k.default({image:new F.default({rotation:t,anchor:[12,12],anchorXUnits:"pixels",anchorYUnits:"pixels",src:E})}),new k.default({image:new F.default({rotation:t,src:U,anchor:[q.size[0]/2,q.size[1]],anchorXUnits:"pixels",anchorYUnits:"pixels",size:q.size,offset:[q.colors.indexOf(e.style.iconColor||"blue")*q.size[0],q.shapes.indexOf(e.style.iconShape||"circle")*q.size[1]]}),text:z(e,t)})].concat(I(e.style,2*(L+15)))}},standard:{getIcon:function(e){var t=e.style,r=e.iconAnchor,n=o()(t&&t.rotation)?0:t.rotation,l=t.iconAnchor||r,i=[new k.default({image:new F.default({anchor:l||[.5,1],anchorXUnits:t.anchorXUnits||(l||0===l?"pixels":"fraction"),anchorYUnits:t.anchorYUnits||(l||0===l?"pixels":"fraction"),size:f()(t.size)?t.size:x()(t.size)?[t.size,t.size]:void 0,rotation:n,anchorOrigin:t.anchorOrigin||"top-left",src:t.iconUrl||t.symbolUrlCustomized||t.symbolUrl})})];t.shadowUrl&&(i=[new k.default({image:new F.default({anchor:[12,41],anchorXUnits:"pixels",anchorYUnits:"pixels",src:t.shadowUrl})}),i[0]]);var a=f()(t.size)?t.size[1]:x()(t.size)?t.size:0;return a=a>32?a+.75*a:L+10,i.concat(I(t,a))}},html:{getIcon:function(){return null}}};var B=r(166287),Q=r(409371),N=r(120767),W=r(752043),Z=r(944538),H=r(882702),J=r(375875),V=r.n(J),X=r(903918),R=r.n(X),K=r(51205),_=r.n(K),$=r(727418),ee=r.n($),te=r(761868);function re(e){return re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(e)}function ne(e){return function(e){if(Array.isArray(e))return oe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return oe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?oe(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){ae(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ae(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==re(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==re(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===re(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ue=[0,153,255,1],se=new Q.default({radius:5,fill:null,stroke:new N.default({color:"red",width:1})}),fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.radius,r=void 0===t?5:t,n=e.fillColor,o=void 0===n?"green":n,l=e.applyToPolygon,i=void 0!==l&&l;return new k.default({image:new Q.default({radius:r,fill:new T.default({color:o})}),geometry:function(e){var t=e.getGeometry(),r=t.getType();if(!i&&"Polygon"===r)return null;var n="Polygon"===r?t.getCoordinates()[0]:t.getCoordinates();return n.length>1?new W.Z(d()(n)):null}})},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.radius,r=void 0===t?5:t,n=e.fillColor,o=void 0===n?"red":n,l=e.applyToPolygon,i=void 0!==l&&l;return new k.default({image:new Q.default({radius:r,fill:new T.default({color:o})}),geometry:function(e){var t=e.getGeometry(),r=t.getType();if(!i&&"Polygon"===r)return null;var n="Polygon"===r?t.getCoordinates()[0]:t.getCoordinates();return new W.Z(n.length>3?n[n.length-("Polygon"===r?2:1)]:p()(n))}})},ye=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),ce(e)]},ge=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new k.default({text:new G.default({offsetY:void 0!==e.offsetY?e.offsetY:-4*Math.sqrt(e.fontSize),textAlign:e.textAlign||"center",textBaseline:e.verticalAlign||"middle",text:t||"",font:e.font,fill:new T.default({color:(0,b.qq)(e.stroke||e.color||"#000000",e.opacity||1)}),stroke:e.labelOutlineColor?new N.default({color:(0,b.qq)(e.labelOutlineColor,e.labelOutlineOpacity||1),width:e.labelOutlineWidth||1}):r?new N.default({color:[255,255,255,1],width:2}):null,rotation:e.rotation?e.rotation*Math.PI/180:0}),image:r?new Q.default({radius:5,fill:null,stroke:new N.default({color:(0,b.qq)(e.color||"#0000FF",e.opacity||1),width:e.weight||1})}):null})},de={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,radius:10},he={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,editing:{fill:1}},pe={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,editing:{fill:1}},we={Marker:{iconColor:"orange",iconShape:"circle",iconGlyph:"comment"},Text:{fontStyle:"normal",fontSize:"14",fontSizeUom:"px",fontFamily:"Arial",fontWeight:"normal",font:"14px Arial",textAlign:"center",color:"#000000",opacity:1},Circle:{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2},Point:de,MultiPoint:de,LineString:he,MultiLineString:he,Polygon:pe,MultiPolygon:pe},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{color:"blue",width:3,lineDash:[6]};return{stroke:new N.default(e.style?e.style.stroke||{color:e.style.color||t.color,lineDash:u()(e.style.dashArray)&&i()(e.style.dashArray).split(" ")||t.lineDash,width:e.style.weight||t.width,lineCap:e.style.lineCap||"round",lineJoin:e.style.lineJoin||"round",lineDashOffset:e.style.dashOffset||0}:ie({},t))}},ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{color:"rgba(0, 0, 255, 0.1)"};return{fill:new T.default(e.style?e.style.fill||{color:(0,b.qq)(e.style.fillColor,e.style.fillOpacity)||t.color}:ie({},t))}},Ae={Point:function(){return[new k.default({image:se})]},LineString:function(e){return[new k.default(ee()({},me(e,{color:"blue",width:3})))]},MultiLineString:function(e){return[new k.default(ee()({},me(e,{color:"blue",width:3})))]},MultiPoint:function(){return[new k.default({image:se})]},MultiPolygon:function(e){return[new k.default(ee()({},me(e),ve(e)))]},Polygon:function(e){return[new k.default(ee()({},me(e),ve(e)))]},GeometryCollection:function(e){return[new k.default(ee()({},me(e),ve(e),{image:new Q.default({radius:10,fill:null,stroke:new N.default({color:"magenta"})})}))]},Circle:function(){return[new k.default({stroke:new N.default({color:"red",width:2}),fill:new T.default({color:"rgba(255,0,0,0.2)"})})]},marker:function(e){return[new k.default({image:new F.default({anchor:[14,41],anchorXUnits:"pixels",anchorYUnits:"pixels",src:_()})}),new k.default({image:new F.default({anchor:[.5,1],anchorXUnits:"fraction",anchorYUnits:"fraction",src:R()}),text:new G.default({text:e.label,scale:1.25,offsetY:8,fill:new T.default({color:"#000000"}),stroke:new N.default({color:"#FFFFFF",width:2})})})]}},Pe=function(e,t){var r=e.getGeometry().getType();return Ae[r](t&&t.style&&t.style[r]&&{style:ie({},t.style[r])}||t||{})};function be(e){if(e.style.iconUrl)return D.standard.getIcon(e);var t=e.style.iconLibrary||"extra";return D[t]?D[t].getIcon(e):null}var Ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{style:we},r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,l=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=t.style[e]||t.style;if("MultiLineString"===e||"LineString"===e){var u=[new k.default({stroke:t.style.useSelectedStyle?new N.default({color:[255,255,255,1],width:a.weight+2}):null}),new k.default(a?{stroke:new N.default(a&&a.stroke?a.stroke:{color:(0,b.qq)(t.style&&a.color||"#0000FF",a.opacity||1),lineDash:t.style.highlight?[10]:[0],width:a.weight||1}),image:r?se:null}:{stroke:new N.default(we[e]&&we[e].stroke?we[e].stroke:{color:(0,b.qq)(t.style&&we[e].color||"#0000FF",we[e].opacity||1),lineDash:t.style.highlight?[10]:[0],width:we[e].weight||1})})],s=t.style.useSelectedStyle?ye({radius:a.weight,applyToPolygon:!0},{radius:a.weight,applyToPolygon:!0}):[];return[].concat(ne(s),u)}if(("MultiPoint"===e||"Point"===e)&&(a.iconUrl||a.iconGlyph))return r?new k.default({image:se}):be({style:ie(ie({},a),{},{highlight:t.style.highlight||t.style.useSelectedStyle})});if("Circle"===e&&i)return[new k.default({stroke:t.style.useSelectedStyle?new N.default({color:[255,255,255,1],width:a.weight+4}):null}),new k.default({stroke:new N.default(a&&a.stroke?a.stroke:{color:t.style.useSelectedStyle?ue:(0,b.qq)(t.style&&a.color||"#0000FF",a.opacity||1),lineDash:t.style.highlight?[10]:[0],width:a.weight||1}),fill:new T.default(a.fill?a.fill:{color:(0,b.qq)(t.style&&a.fillColor||"#0000FF",a.fillOpacity||.2)})}),new k.default({image:t.style.useSelectedStyle?new Q.default({radius:3,fill:new T.default(a.fill?a.fill:{color:ue})}):null,geometry:function(e){var t=e.getGeometry();if("Circle"===t.getType()){var r=t.getCenter();return new W.Z(r)}return null}})];if("Text"===e&&a.font)return[ge(a,n[0],t.style.useSelectedStyle||t.style.highlight)];if("MultiPolygon"===e||"Polygon"===e){var f=[new k.default({stroke:t.style.useSelectedStyle?new N.default({color:[255,255,255,1],width:a.weight+2}):null}),new k.default({stroke:new N.default(a.stroke?a.stroke:{color:t.style.useSelectedStyle?ue:(0,b.qq)(t.style&&a.color||"#0000FF",o()(a.opacity)?1:a.opacity),lineDash:t.style.highlight?[10]:[0],width:a.weight||1}),image:r?se:null,fill:new T.default(a.fill?a.fill:{color:(0,b.qq)(t.style&&a.fillColor||"#0000FF",o()(a.fillOpacity)?1:a.fillOpacity)})})],c=t.style.useSelectedStyle?ye({radius:a.weight,applyToPolygon:!0},{radius:a.weight,applyToPolygon:!0}):[];return[].concat(f,ne(c))}return l};function Se(e){return Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Se(e)}function Oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){Fe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Fe(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==Se(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==Se(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Se(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ge={white:[255,255,255,1],blue:[0,153,255,1],width:3},Te=function(e){if((0,B.isMarkerStyle)(e)){if(e.iconUrl)return D.standard.getIcon({style:e});var t=e.iconLibrary||"extra";if(D[t])return D[t].getIcon({style:e})}return null};(0,B.registerGeometryFunctions)("centerPoint",(function(e){var t=e.getGeometry(),r=e.getProperties().isGeodesic,n=void 0!==r&&r,o=t.getExtent(),l=n?(0,P.qg)(o):t.getCenter&&t.getCenter()||[o[2]-o[0],o[3]-o[1]];return new W.Z(l)}),"Point"),(0,B.registerGeometryFunctions)("lineToArc",(function(e){var t=e.getGeometry().getType();if("LineString"===t||"MultiPoint"===t){var r=e.getGeometry().getCoordinates();return r=(0,C.transformLineToArcs)(r.map((function(e){var t=(0,C.reproject)(e,"EPSG:3857","EPSG:4326");return[t.x,t.y]}))),new Z.Z(r.map((function(e){var t=(0,C.reproject)(e,"EPSG:4326","EPSG:3857");return[t.x,t.y]})))}return e.getGeometry()}),"LineString"),(0,B.registerGeometryFunctions)("startPoint",(function(e){var t=e.getGeometry(),r="Polygon"===t.getType()?t.getCoordinates()[0]:t.getCoordinates();return r.length>1?new W.Z(d()(r)):null}),"Point"),(0,B.registerGeometryFunctions)("endPoint",(function(e){var t=e.getGeometry(),r=t.getType(),n="Polygon"===r?t.getCoordinates()[0]:t.getCoordinates();return new W.Z(n.length>3?n[n.length-("Polygon"===r?2:1)]:p()(n))}),"Point");var Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.geometry?function(t){var r=e.geometry||"centerPoint";return B.geometryFunctions[r].func(t)}:function(e){return e.getGeometry()}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{properties:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!!o()(e.filtering)||e.filtering}(t,e);if(n){var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,B.isStrokeStyle)(e)?new N.default(e.stroke&&A()(e.stroke)?e.stroke:{color:e.highlight?Ge.blue:(0,b.qq)(e.color||e.stroke||"#0000FF",o()(e.opacity)?1:e.opacity),width:o()(e.weight)?1:e.weight,lineDash:u()(e.dashArray)&&i()(e.dashArray).split(" ")||f()(e.dashArray)&&e.dashArray||[0],lineCap:e.lineCap||"round",lineJoin:e.lineJoin||"round",lineDashOffset:e.dashOffset||0}):null}(t),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,B.isFillStyle)(e)?new T.default(e.fill&&A()(e.fill)?e.fill:{color:(0,b.qq)(e.fillColor||"#0000FF",o()(e.fillOpacity)?1:e.fillOpacity)}):null}(t),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return(0,B.isCircleStyle)(e)?new Q.default({stroke:t,fill:r,radius:e.radius||5}):null}(t,l,a);if((0,B.isMarkerStyle)(t))return Te(t).map((function(e){return e.setGeometry(Me(t)),e}));if((0,B.isSymbolStyle)(t))return D.standard.getIcon({style:t}).map((function(e){return e.setGeometry(Me(t)),e}));var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3?arguments[3]:void 0;return(0,B.isTextStyle)(e)?new G.default({fill:r,offsetY:e.offsetY||-4*Math.sqrt(e.fontSize),rotation:e.textRotationDeg?e.textRotationDeg/180*Math.PI:0,textAlign:e.textAlign||"center",text:e.label||n&&n.properties&&n.properties.valueText||"New",font:e.font||"Arial",stroke:e.highlight?new N.default({color:[255,255,255,1],width:2}):t,image:e.highlight?new Q.default({radius:5,fill:null,stroke:new N.default({color:(0,b.qq)(e.color||"#0000FF",e.opacity||1),width:e.weight||1})}):null}):null}(t,l,a,e),y=t.zIndex;return[new k.default({geometry:Me(t),image:s,text:c,stroke:!c&&!s&&l||null,fill:!c&&!s&&a||null,zIndex:y})].concat(e&&e.properties&&e.properties.canEdit&&!e.properties.isCircle?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{radius:3,fillColor:"green",applyToPolygon:!0},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{radius:3,fillColor:"red",applyToPolygon:!0},n=[];return m()(e,(function(e){return"startPoint"===e.geometry&&e.filtering}))||n.push(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.radius,r=void 0===t?5:t,n=e.fillColor,o=void 0===n?"green":n,l=e.applyToPolygon,i=void 0!==l&&l;return new k.default({image:new Q.default({radius:r,fill:new T.default({color:o})}),geometry:function(e){var t=e.getGeometry(),r=t.getType();if(!i&&"Polygon"===r)return null;var n="Polygon"===r?t.getCoordinates()[0]:t.getCoordinates();return n.length>1?new W.Z(d()(n)):null}})}(ke({},t))),m()(e,(function(e){return"endPoint"===e.geometry&&e.filtering}))||n.push(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.radius,r=void 0===t?5:t,n=e.fillColor,o=void 0===n?"red":n,l=e.applyToPolygon,i=void 0!==l&&l;return new k.default({image:new Q.default({radius:r,fill:new T.default({color:o})}),geometry:function(e){var t=e.getGeometry(),r=t.getType();if(!i&&"Polygon"===r)return null;var n="Polygon"===r?t.getCoordinates()[0]:t.getCoordinates();return new W.Z(n.length>3?n[n.length-("Polygon"===r?2:1)]:p()(n))}})}(ke({},r))),n}(r):[])}return new k.default({})},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{properties:{}},t=e.style;if(t){var r=f()(t)?t:y()(t);return r.reduce((function(t,n){return t.concat(je(e,n,r))}),[])}return[]},Ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(e.style&&e.style.url)return V().get(e.style.url).then((function(t){return H.Promise.all([(0,B.getStyleParser)(e.style.format),(0,B.getStyleParser)("openlayers")]).then((function(e){var r,n,o=(n=2,function(e){if(Array.isArray(e))return e}(r=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,i,a=[],u=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=l.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return a}}(r,n)||function(e,t){if(e){if("string"==typeof e)return Oe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Oe(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],i=o[1];return l.readStyle(t.data).then((function(e){return i.writeStyle(e)}))}))}));if(e.style&&"geostyler"===e.style.format)return(0,B.getStyleParser)("openlayers").then((function(t){return t.writeStyle(e.style.styleObj)}));var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(e.styleName&&!e.overrideOLStyle)return function(t){if("marker"===e.styleName)switch(t.getGeometry().getType()){case"Point":case"MultiPoint":return Ae.marker(e)}return Ae[e.styleName](e)};var n,l=e.nativeStyle,i=r,a=0,u=e.style&&e.style.type||(e.features&&e.features[0]&&e.features[0].geometry?e.features[0].geometry.type:void 0);if("FeatureCollection"===u||e.features&&e.features[0]&&"FeatureCollection"===e.features[0].type)return function(r){var o=this||r;n=o.getGeometry()&&o.getGeometry().getType();var l=o&&o.getProperties();l&&l.isCircle&&(n="Circle",a=l.radius),l&&l.isText&&(n="Text",i=[l.valueText]);var u=(0,te.t8)("style.useSelectedStyle",l.canEdit,e);return Ce(n,u,t,i,null,a)};if(e&&e.properties&&e.properties.isText)return n="Text",i=[e.properties.valueText],Ce(n,e,t,i,null,a);if(e&&e.properties&&e.properties.isCircle)return n="Circle",a=e.properties.radius,Ce(n,e,t,i,null,a);if(!l&&e.style){if(l={stroke:new N.default(e.style.stroke?e.style.stroke:{color:(0,b.qq)(e.style&&e.style.color||"#0000FF",o()(e.style.opacity)?1:e.style.opacity),lineDash:e.style.lineDash||(e.style.highlight?[10]:[0]),width:e.style.weight||1}),fill:new T.default(e.style.fill?e.style.fill:{color:(0,b.qq)(e.style&&e.style.fillColor||"#0000FF",o()(e.style.fillOpacity)?1:e.style.fillOpacity)})},"Point"!==u&&"MultiPoint"!==u||(l={image:new Q.default(ee()({},l,{radius:e.style.radius||5}))}),e.style.iconUrl||e.style.iconGlyph){var s=be(e);return function(t){var r=this||t;switch(n=r.getGeometry().getType()){case"Point":case"MultiPoint":return s;default:return Pe(r,e)}}}return l=new k.default(l),"GeometryCollection"===u?l=function(o){var l,i=this||o;n=i.getGeometry().getType();var a=i.get("textGeometriesIndexes")||[],u=i.get("circles")||[],s=i.get("textValues");return"GeometryCollection"===i.getGeometry().getType()?i.getGeometry().getGeometries().reduce((function(o,i,c){if(("Point"===(n=i.getType())||"MultiPoint"===n)&&a.length&&-1!==a.indexOf(c)){var y=Ce("Text",e,t,[s[a.indexOf(c)]]);return y.setGeometry(i),o.concat([y])}if("Polygon"===n&&u.length&&-1!==u.indexOf(c)){var g=Ce("Circle",e,t,[]);return g.setGeometry(i),o.concat([g])}if("Point"===n||"MultiPoint"===n)return l=be({style:ie(ie({},e.style[n]),{},{highlight:e.style.highlight})}),o.concat(l.map((function(e){return e.setGeometry(i),e})));var d=Ce(n,e,t,r);return f()(d)?d.forEach((function(e){return e.setGeometry(i)})):d.setGeometry(i),o.concat([d])}),[]):"Point"===n||"MultiPoint"===n?(l=be({style:ie(ie({},e.style[n]),{},{highlight:e.style.highlight})}),t?new k.default({image:se,geometry:i.getGeometry()}):l.map((function(e){return e.setGeometry(i.getGeometry()),e}))):Ce(n,e,t,r)}:("Circle"===u&&(a=e.features&&e.features.length&&e.features[0].properties&&e.features[0].properties.radius||10),Ce(u,e,t,r,l,a))}return l||Pe}(e,t,r);return e.asPromise?new H.Promise((function(e){e(n)})):n},Ee=be,Le=ye,Ye=we},51205:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAC5ElEQVRYw+2YW4/TMBCF45S0S1luXZCABy5CgLQgwf//S4BYBLTdJLax0fFqmB07nnQfEGqkIydpVH85M+NLjPe++dcPc4Q8Qh4hj5D/AaQJx6H/4TMwB0PeBNwU7EGQAmAtsNfAzoZkgIa0ZgLMa4Aj6CxIAsjhjOCoL5z7Glg1JAOkaicgvQBXuncwJAWjksLtBTWZe04CnYRktUGdilALppZBOgHGZcBzL6OClABvMSVIzyBjazOgrvACf1ydC5mguqAVg6RhdkSWQFj2uxfaq/BrIZOLEWgZdALIDvcMcZLD8ZbLC9de4yR1sYMi4G20S4Q/PWeJYxTOZn5zJXANZHIxAd4JWhPIloTJZhzMQduM89WQ3MUVAE/RnhAXpTycqys3NZALOBbB7kFrgLesQl2h45Fcj8L1tTSohUwuxhy8H/Qg6K7gIs+3kkaigQCOcyEXCHN07wyQazhrmIulvKMQAwMcmLNqyCVyMAI+BuxSMeTk3OPikLY2J1uE+VHQk6ANrhds+tNARqBeaGc72cK550FP4WhXmFmcMGhTwAR1ifOe3EvPqIegFmF+C8gVy0OfAaWQPMR7gF1OQKqGoBjq90HPMP01BUjPOqGFksC4emE48tWQAH0YmvOgF3DST6xieJgHAWxPAHMuNhrImIdvoNOKNWIOcE+UXE0pYAnkX6uhWsgVXDxHdTfCmrEEmMB2zMFimLVOtiiajxiGWrbU52EeCdyOwPEQD8LqyPH9Ti2kgYMf4OhSKB7qYILbBv3CuVTJ11Y80oaseiMWOONc/Y7kJYe0xL2f0BaiFTxknHO5HaMGMublKwxFGzYdWsBF174H/QDknhTHmHHN39iWFnkZx8lPyM8WHfYELmlLKtgWNmFNzQcC1b47gJ4hL19i7o65dhH0Negbca8vONZoP7doIeOC9zXm8RjuL0Gf4d4OYaU5ljo3GYiqzrWQHfJxA6ALhDpVKv9qYeZA8eM3EhfPSCmpuD0AAAAASUVORK5CYII="},438097:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAYAAABqBU3hAAABIUlEQVRIS+3UsYoCMRDG8f8q+EBid5WNnc019la2Vr6Ala1g4SvY+RTXiVdcJQgHV9jJIdhKZCNx2GwyibCNW4bd+X47k6Sg4adoOJ83wNcBsz4CvoGfF4zpEzgCO1mrCmDWpsAC+Af6wD4DMQGWwBUYAF9uLQlww1vli+cMhA1vl7UuEuECqsItNgUhw22tJ4QLGANrwP657LoG4Qt3EV3g4ALMfLZAp2beMYhQuCn/B/SAk9wDQ2CTgYgN/wB+jaTqFKQi1OE+gFnXIpLC6wAaxAqYAfaoVW0hM/NH2+vuAflxTCdCd5Q3PNQBWzgHURseC4gdh+xEMFwD0CKiwrWAWER0eAoghFCFpwJ8CHV4DkAiksJzARYxL2/O+92ufW42SVMYbhcsEwAAAABJRU5ErkJgggAA"}}]);