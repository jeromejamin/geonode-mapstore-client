(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[10441],{53001:(e,t,r)=>{"use strict";r.d(t,{xT:()=>n,H_:()=>o,Wv:()=>a,gC:()=>i,dG:()=>c,oQ:()=>u,Q2:()=>l,R3:()=>s,Zr:()=>f,Op:()=>p,l$:()=>m,uL:()=>d,zg:()=>A,M3:()=>v,st:()=>E,US:()=>O,$c:()=>R,pW:()=>y,$D:()=>C,ke:()=>T,vw:()=>g,r5:()=>S,X1:()=>h,V3:()=>G,p2:()=>L});var n="BACKGROUND_SELECTOR:ADD_BACKGROUND",o="BACKGROUND_SELECTOR:REMOVE_BACKGROUND",a="BACKGROUND_SELECTOR:SET_CURRENT_BACKGROUND_LAYER",i="BACKGROUND_SELECTOR:BACKGROUND_ADDED",c="BACKGROUND_SELECTOR:BACKGROUND_EDITED",u="BACKGROUND_SELECTOR:ADD_BACKGROUND_PROPERTIES",l="BACKGROUND_SELECTOR:SET_BACKGROUND_MODAL_PARAMS",s="BACKGROUND_SELECTOR:UPDATE_BACKGROUND_THUMBNAIL",f="BACKGROUND_SELECTOR:BACKGROUNDS_CLEAR",p="BACKGROUND_SELECTOR:CREATE_BACKGROUNDS_LIST",m="BACKGROUND_SELECTOR:CLEAR_MODAL_PARAMETERS",d="BACKGROUND_SELECTOR:CONFIRM_DELETE_BACKGROUND_MODAL",A="BACKGROUND_SELECTOR:ALLOW_BACKGROUNDS_DELETION";function v(e){return{type:p,backgrounds:e}}function E(e){return{type:n,source:e}}function O(e){return{type:u,modalParams:e}}function R(e){return{type:l,modalParams:e}}function y(e){return{type:i,layerId:e}}function C(e){return{type:c,layerId:e}}function T(e){return{type:a,layerId:e}}function g(e){return{type:A,allow:e}}function S(e,t){return{type:s,thumbnailData:e,id:t}}function h(e){return{type:o,backgroundId:e}}function G(){return{type:m}}function L(e){return{type:d,show:e,layerTitle:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,layerId:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}},931273:(e,t,r)=>{"use strict";r.d(t,{WX:()=>u,r7:()=>l,V3:()=>s,HR:()=>f,xi:()=>p,ur:()=>m,vK:()=>d,nm:()=>A,QF:()=>v,zZ:()=>O,uN:()=>R,Bz:()=>y,im:()=>C,CO:()=>T,$X:()=>g,Mt:()=>S,Oq:()=>h,YO:()=>G,PR:()=>L,wI:()=>_,bv:()=>w,mh:()=>D,$Y:()=>b,eA:()=>P,UT:()=>N,cS:()=>I,l3:()=>x,Kz:()=>U,vg:()=>M,xM:()=>B,do:()=>K,lb:()=>k,yu:()=>V,tt:()=>W,nX:()=>j,BG:()=>F,Rc:()=>H,K4:()=>q,Dw:()=>X,dL:()=>$,In:()=>Z,r1:()=>Y,XW:()=>z,L8:()=>Q,i3:()=>J,XM:()=>ee,X7:()=>te,M3:()=>re,N3:()=>ne,SU:()=>oe,wo:()=>ae,ye:()=>ie,m:()=>ce,wl:()=>ue,bu:()=>le,A4:()=>se,vG:()=>fe,ky:()=>pe,Wf:()=>me,Ts:()=>de,IT:()=>Ae,XS:()=>ve,tx:()=>Ee,We:()=>Oe,nx:()=>Re,E9:()=>ye,zX:()=>Ce});var n=r(659551),o=r(501157),a=r(603475),i=r(932354),c=r(197395),u=(n.ZP,o.ZP,a.Z,i.Z,"CATALOG:ADD_LAYERS_FROM_CATALOGS"),l="CATALOG:ADD_LAYER_AND_DESCRIBE",s="CATALOG:TEXT_SEARCH",f="CATALOG:RECORD_LIST_LOADED",p="CATALOG:RESET_CATALOG",m="CATALOG:CATALOG_CLOSE",d="CATALOG:RECORD_LIST_LOAD_ERROR",A="CATALOG:CHANGE_CATALOG_FORMAT",v="CATALOG:ADD_LAYER_ERROR",E="CATALOG:DESCRIBE_ERROR",O="CATALOG:CHANGE_SELECTED_SERVICE",R="CATALOG:CHANGE_CATALOG_MODE",y="CATALOG:CHANGE_METADATA_TEMPLATE",C="CATALOG:CHANGE_TITLE",T="CATALOG:CHANGE_TEXT",g="CATALOG:CHANGE_TYPE",S="CATALOG:CHANGE_SERVICE_PROPERTY",h="CATALOG:CHANGE_SERVICE_FORMAT",G="CATALOG:FOCUS_SERVICES_LIST",L="CATALOG:CHANGE_URL",_="CATALOG:ADD_CATALOG_SERVICE",w="CATALOG:DELETE_CATALOG_SERVICE",D="CATALOG:ADD_SERVICE",b="CATALOG:DELETE_SERVICE",P="CATALOG:SAVING_SERVICE",N="CATALOG:GET_METADATA_RECORD_BY_ID",I="CATALOG:SET_LOADING",x="CATALOG:TOGGLE_TEMPLATE",U="CATALOG:TOGGLE_THUMBNAIL",M="CATALOG:TOGGLE_ADVANCED_SETTINGS",B="CATALOG:FORMAT_OPTIONS_FETCH",K="CATALOG:FORMAT_OPTIONS_LOADING",k="CATALOG:SET_FORMAT_OPTIONS",V="CATALOG:NEW_SERVICE_STATUS";function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.format,r=e.url,n=e.startPosition,o=e.maxRecords,a=e.text,i=e.options;return{type:s,format:t,url:r,startPosition:n,maxRecords:o,text:a,options:void 0===i?{}:i}}function j(e,t){return{type:f,searchOptions:e,result:t}}function F(e){return{type:A,format:e}}function H(e){return{type:P,status:e}}function q(){return{type:I,loading:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}function X(e){return{type:O,service:e}}function $(e){return{type:G,status:e}}function Z(e,t){return{type:R,mode:e,isNew:t}}function Y(e){return{type:C,title:e}}function z(e){return{type:T,text:e}}function Q(e,t){return{type:S,property:e,value:t}}function J(e){return{type:h,format:e}}function ee(e){return{type:g,newType:e}}function te(e){return{type:L,url:e}}function re(){return{type:D}}function ne(e){return{type:_,service:e}}function oe(e){return{type:w,service:e}}function ae(){return{type:b}}function ie(){return{type:p}}function ce(e){return{type:d,error:e}}function ue(){return{type:m}}function le(e,t){return{type:E,layer:e,error:t}}var se=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).zoomToLayer;return{type:l,layer:e,zoomToLayer:void 0!==t&&t}};function fe(e){return{type:v,error:e}}function pe(e){return{type:N,metadataOptions:e}}var me=function(e){return{type:y,metadataTemplate:e}},de=function(){return{type:M}},Ae=function(){return{type:x}},ve=function(){return{type:U}},Ee=function(e){return{type:B,url:e}},Oe=function(e){return{type:K,loading:e}},Re=function(e,t){return{type:k,formats:e,url:t}};function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,c.vU)({title:"catalog.notification.errorTitle",message:"catalog.notification.errorSearchingRecords",values:{records:e}})}var Ce=function(e){return{type:V,status:e}}},659551:(e,t,r)=>{"use strict";r.d(t,{_b:()=>N,kv:()=>B,ZP:()=>V});var n=r(472500),o=r.n(n),a=r(227361),i=r.n(a),c=r(91175),u=r.n(c),l=r(610928),s=r.n(l),f=r(941106),p=r.n(f),m=r(414293),d=r.n(m),A=r(984596),v=r.n(A),E=r(441609),O=r.n(E),R=r(727418),y=r.n(R),C=r(375875),T=r.n(C),g=r(737275),S=r(986267),h=r(501157);function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==G(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===G(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=function(e){var t=o().parse(e,!0);return o().format(y()({},t,{search:null},{query:y()({service:"CSW",version:"2.0.2"},t.query,{request:void 0})}))},N='<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gmi="http://www.isotc211.org/2005/gmi" xmlns:ows="http://www.opengis.net/ows" service="CSW" version="2.0.2" resultType="results" startPosition="${startPosition}" maxRecords="${maxRecords}"> <csw:Query typeNames="csw:Record"> <csw:ElementSetName>full</csw:ElementSetName> <csw:Constraint version="1.1.0"> <ogc:Filter> ${filterXml} </ogc:Filter> </csw:Constraint> </csw:Query> </csw:GetRecords>',I=function(e,t,r){if(!t.name)return null;switch(e){case"wms":var n=0!==t.value.indexOf("http")?(r&&r.catalogURL||"")+"/"+t.value:t.value;return{type:t.protocol||t.scheme,url:n,SRS:[],params:{name:t.name}};case"arcgis":return{type:"arcgis",url:t.value,SRS:[],params:{name:t.name}};default:return null}},x=[/^OGC:WMS-(.*)-http-get-map/g,/^OGC:WMS/g],U=/serviceType\/ogc\/wms/g,M=x.concat(U),B=function(e,t){var r,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=(null==e?void 0:e.URI)&&v()(e.URI);if(a){var i=u()(a.map((function(e){if(e.protocol){if(x.some((function(t){return e.protocol.match(t)})))return e;if(e.protocol.match(U))return function(e){var t=new Map(Array.from(new URLSearchParams(e.value)).map((function(e){var t=D(e,2),r=t[0],n=t[1];return[r.toLowerCase(),n]}))),r=t.get("layers"),n=t.get("version");return!!r&&_(_({},e),{},{protocol:"OGC:WMS",name:r,value:"".concat(e.value.match(/[^\?]+[\?]+/g),"SERVICE=WMS").concat(n&&"&VERSION=".concat(n))})}(e)}return!1})).filter((function(e){return e})));if(i)return I("wms",i,t)}if(null!=e&&null!==(r=e.references)&&void 0!==r&&r.length){var c=v()(e.references),l=u()(c.filter((function(e){return e.scheme&&x.some((function(t){return e.scheme.match(t)}))})));if(l){var s=o().parse(l.value,!0),f=s.query&&s.query.layers||e.alternative;return I("wms",_(_({},l),{},{name:f}),t)}if(n){var p=u()(c.filter((function(e){return e.scheme&&"WWW:DOWNLOAD-REST_MAP"===e.scheme})));if(p)return I("arcgis",_(_({},p),{},{name:e.alternative}),t)}}return null},K={},k={parseUrl:P,getRecordById:function(e){return new Promise((function(t){Promise.all([r.e(99942),r.e(66372)]).then(function(){t(T().get(e).then((function(e){if(e){var t=r(566372).unmarshaller.unmarshalString(e.data);if(t&&t.name&&"GetRecordByIdResponse"===t.name.localPart&&t.value&&t.value.abstractRecord){var n=t.value.abstractRecord[0].value.dcElement;if(n){for(var o={references:[]},a=0;a<n.length;a++){var i=n[a],c=i.name.localPart,u={};u="references"===c&&i.value?{value:i.value.content&&(0,g.$F)(i.value.content[0])||i.value.content||i.value,scheme:i.value.scheme}:i.value.content&&i.value.content[0]||i.value.content||i.value,o[c]&&Array.isArray(o[c])?o[c].push(u):o[c]?o[c]=[o[c],u]:o[c]=u}return{dc:o}}}else if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"};return null}return null})))}.bind(null,r)).catch(r.oe)}))},getRecords:function(e,t,n,o,a){return new Promise((function(c){Promise.all([r.e(99942),r.e(1269)]).then(function(){var l=r(566372),f=l.CSW,m=l.marshaller,A=l.unmarshaller,E=m.marshalString({name:"csw:GetRecords",value:f.getRecords(t,n,"string"!=typeof o&&o)});o&&"string"!=typeof o||(E=function(e,t,r){var n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).filter,o=(null==n?void 0:n.staticFilter)||"<ogc:Or>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>http://purl.org/dc/dcmitype/Dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n       </ogc:Or>",a="<ogc:And>\n        ".concat(p()((null==n?void 0:n.dynamicFilter)||"<ogc:PropertyIsLike wildCard='%' singleChar='_' escapeChar='\\'><ogc:PropertyName>csw:AnyText</ogc:PropertyName> <ogc:Literal>%${searchText}%</ogc:Literal> </ogc:PropertyIsLike> ")({searchText:r}),"\n        ").concat(o,"\n    </ogc:And>");return p()(N)({filterXml:r?a:o,startPosition:e,maxRecords:t})}(t,n,o,a)),c(T().post(P(e),E,{headers:{"Content-Type":"application/xml"}}).then((function(e){if(e){var t=A.unmarshalString(e.data);if(t&&t.name&&"GetRecordsResponse"===t.name.localPart&&t.value&&t.value.searchResults){var r,n=t.value,o=n.searchResults.abstractRecord||n.searchResults.any,c={numberOfRecordsMatched:n.searchResults.numberOfRecordsMatched,numberOfRecordsReturned:n.searchResults.numberOfRecordsReturned,nextRecord:n.searchResults.nextRecord},l=[];if(o)for(var f=0;f<o.length;f++){var p=o[f].value,m={dateStamp:p.dateStamp&&p.dateStamp.date,fileIdentifier:p.fileIdentifier&&p.fileIdentifier.characterString&&p.fileIdentifier.characterString.value,identificationInfo:p.abstractMDIdentification&&p.abstractMDIdentification.value};if(p.boundingBox){var E,R=void 0;if((E=Array.isArray(p.boundingBox)?u()(p.boundingBox):p.boundingBox)&&E.value){var y,C,T,G,L=null!==(y=null===(C=E.value)||void 0===C?void 0:C.crs)&&void 0!==y?y:"",w=null===(T=L.match(/[\w-]*:[\w-]*:[\w-]*:[\w-]*:[\w-]*:[^:]*:(([\w-]+\s[\w-]+)|[\w-]*)/))||void 0===T?void 0:T[0],b=(0,S.makeNumericEPSG)(null===(G=L.match(/EPSG:[0-9]+/))||void 0===G?void 0:G[0]),P=E.value.lowerCorner,N=E.value.upperCorner,I=b||(0,S.extractCrsFromURN)(w)||s()(L.split(":"));"EPSG:4326"===(I?"EPSG:"===I.slice(0,5)?(0,S.makeNumericEPSG)(I):(0,S.makeNumericEPSG)("EPSG:".concat(I)):"EPSG:4326")&&"CRS84"!==I&&"OGC:CRS84"!==I&&(P=[P[1],P[0]],N=[N[1],N[0]]),R=(0,S.makeBboxFromOWS)(P,N)}m.boundingBox={extent:R,crs:"EPSG:4326"}}var x=p.dcElement;if(x){for(var U={references:[]},k=0;k<x.length;k++){var V=x[k],W=V.name.localPart,j={};j="references"===W&&V.value?{value:V.value.content&&(0,g.$F)(V.value.content[0])||V.value.content||V.value,scheme:V.value.scheme}:V.value.content&&V.value.content[0]||V.value.content||V.value,U[W]&&Array.isArray(U[W])?U[W].push(j):U[W]?U[W]=[U[W],j]:U[W]=j}var F=v()(U.references.length>0?U.references:U.URI);r=r?r.concat(F):F,m.dc=U}l.push(m)}return c.records=l,function(e,t,r){if(!i()(r,"options.service.autoSetVisibilityLimits",!1))return t;var n=((null==e?void 0:e.find((function(e){return M.some((function(t){var r,n;return(null==e||null===(r=e.scheme)||void 0===r?void 0:r.match(t))||(null==e||null===(n=e.protocol)||void 0===n?void 0:n.match(t))}))})))||{}).value,o=D(n&&n.split("?")||[],1)[0];if(!o)return _({},t);var a=K[o],c=!O()(a);return Promise.resolve(c?a:h.ZP.getCapabilities(o+"?version=").then((function(e){return i()(e,"capability.layer.layer",[])})).catch((function(){return[]}))).then((function(e){var r;return c||(K[o]=e),_(_({},t),{},{records:null==t||null===(r=t.records)||void 0===r?void 0:r.map((function(t){var r=i()(B(null==t?void 0:t.dc,null,!1),"params.name",""),n=e.find((function(e){return e.name===r}))||{},o=n.minScaleDenominator,a=n.maxScaleDenominator;return _(_({},t),(!d()(o)||!d()(a))&&{capabilities:{MaxScaleDenominator:a,MinScaleDenominator:o}})}))})}))}(r,c,a)}if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"}}return null})))}.bind(null,r)).catch(r.oe)}))},textSearch:function(e,t,r,n,o){return new Promise((function(a){a(k.getRecords(e,t,r,n,o))}))},workspaceSearch:function(e,t,n,o,a){return new Promise((function(i){Promise.all([r.e(99942),r.e(1269)]).then(function(){var c=r(484454).Filter,u=a||"%",l=o&&"%"+o+"%"||"%",s=c.propertyIsLike("dc:identifier",u+":"+l),f=c.filter(s);i(k.getRecords(e,t,n,f))}.bind(null,r)).catch(r.oe)}))},reset:function(){}};const V=k},603475:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(375875),o=r.n(n),a=r(737275),i=r(472500),c=r.n(i),u=r(727418),l=r.n(u),s=r(505055),f=r.n(s),p=r(984596),m=r.n(p),d=r(986267),A=r(707294),v={},E=function(e){var t=c().parse(e,!0);return c().format(l()({},t,{search:null},{query:l()({SERVICE:"WMTS",VERSION:"1.0.0",REQUEST:"GetCapabilities"},t.query)}))},O=function(e,t,r,n,o){for(var a=e.Capabilities.Contents,i=(0,A.G6)(e),c=(0,A.s5)(e),u=a.TileMatrixSet&&m()(a.TileMatrixSet)||[],s=[],f=u.length,p=0;p<f;p++)s.push((0,d.getEPSGCode)(u[p]["ows:SupportedCRS"]));var v=a.Layer,E=m()(v).filter((function(e){return!n||-1!==e["ows:Identifier"].toLowerCase().indexOf(n.toLowerCase())||e["ows:Title"]&&-1!==e["ows:Title"].toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:E.length,numberOfRecordsReturned:Math.min(r,E.length),nextRecord:t+Math.min(r,E.length)+1,records:E.filter((function(e,n){return n>=t-1&&n<t-1+r})).map((function(e){return l()({},e,{SRS:s,TileMatrixSet:u,queryable:!!(0,A.b4)(i,"GetFeatureInfo","KVP"),requestEncoding:c,style:(0,A.EN)(e),format:(0,A.JY)(e),GetTileURL:(0,A.b4)(i,"GetTile",c),capabilitiesURL:o})}))}},R={parseUrl:E,getRecords:function(e,t,r,n){var i=v[e];return i&&(new Date).getTime()<i.timestamp+1e3*((0,a.u8)("cacheExpire")||60)?new Promise((function(o){o(O(i.data,t,r,n,e))})):o().get(E(e)).then((function(o){var a;return f().parseString(o.data,{explicitArray:!1},(function(e,t){a=t})),v[e]={timestamp:(new Date).getTime(),data:a},O(a,t,r,n,e)}))},getCapabilities:function(e){var t=v[e];return t&&(new Date).getTime()<t.timestamp+1e3*((0,a.u8)("cacheExpire")||60)?new Promise((function(e){e(t.data)})):o().get(E(e)).then((function(t){var r;return f().parseString(t.data,{explicitArray:!1},(function(e,t){r=t})),v[e]={timestamp:(new Date).getTime(),data:r},r}))},textSearch:function(e,t,r,n){return R.getRecords(e,t,r,n)},reset:function(){Object.keys(v).forEach((function(e){delete v[e]}))}};const y=R},932354:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(227361),o=r.n(n),a=r(737275),i=function(e,t,r,n){var i=o()(a.ZP.getDefaults(),"initialState.defaultState.catalog.default.staticServices.default_map_backgrounds.backgrounds").filter((function(e){return!n||e.title.indexOf(n)>-1})),c=i.filter((function(e,n){return n>=t-1&&n<r+t-1}));return new Promise((function(e){return e({numberOfRecordsMatched:i.length,numberOfRecordsReturned:c.length,records:c,service:{Name:"Background Provider"}})}))};const c={getRecords:i,reset:function(){},textSearch:function(e,t,r,n){return i(0,t,r,n)}}}}]);