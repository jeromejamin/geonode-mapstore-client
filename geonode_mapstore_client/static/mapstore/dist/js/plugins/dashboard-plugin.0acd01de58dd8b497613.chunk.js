(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7509],{807878:(e,t,r)=>{"use strict";r.d(t,{E6:()=>u,vo:()=>a,l1:()=>c,J9:()=>l,U:()=>s,z8:()=>f,ql:()=>p,O_:()=>y,M$:()=>d,Ug:()=>b,p5:()=>v,Fz:()=>E,WZ:()=>g,bP:()=>m,On:()=>O,d_:()=>h,xM:()=>S,bl:()=>_,Wi:()=>w,PN:()=>T,_M:()=>P,Wm:()=>R,Eg:()=>A,V1:()=>L,cY:()=>j,RD:()=>D,Hl:()=>I,co:()=>F,uY:()=>M,H8:()=>N,je:()=>U,go:()=>C,_8:()=>W,xd:()=>k,o7:()=>Y,Nr:()=>x,Gf:()=>G,nh:()=>H,Rf:()=>Q,Xp:()=>Z,D6:()=>V,Sm:()=>z,Ef:()=>X,jW:()=>B,kQ:()=>J,JG:()=>q,js:()=>$,q$:()=>K,OZ:()=>ee,Nc:()=>te,NV:()=>re,I5:()=>ne,QL:()=>oe,I:()=>ie,ku:()=>ue,EU:()=>ae,IV:()=>ce,HT:()=>le,lg:()=>se,ds:()=>fe,VF:()=>pe,DD:()=>ye,uo:()=>de,Ry:()=>be,ZH:()=>ve,AQ:()=>Ee,yC:()=>ge,F:()=>me,mc:()=>Oe,uM:()=>Se,eJ:()=>_e,uP:()=>we,N5:()=>Te,bn:()=>Pe,Bm:()=>Re,F2:()=>Ae,jR:()=>Le,$J:()=>je,ln:()=>De});var n=r(375875),o=r.n(n);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var u="ADD_FILTER_FIELD",a="REMOVE_FILTER_FIELD",c="UPDATE_FILTER_FIELD",l="UPDATE_EXCEPTION_FIELD",s="ADD_GROUP_FIELD",f="UPDATE_LOGIC_COMBO",p="REMOVE_GROUP_FIELD",y="CHANGE_CASCADING_VALUE",d="EXPAND_ATTRIBUTE_PANEL",b="EXPAND_SPATIAL_PANEL",v="QUERYFORM:EXPAND_CROSS_LAYER",E="QUERYFORM:SET_CROSS_LAYER_PARAMETER",g="QUERYFORM:RESET_CROSS_LAYER_FILTER",m="SELECT_SPATIAL_METHOD",O="SELECT_VIEWPORT_SPATIAL_METHOD",h="UPDATE_GEOMETRY",S="SELECT_SPATIAL_OPERATION",_="CHANGE_SPATIAL_ATTRIBUTE",w="CHANGE_SPATIAL_FILTER_VALUE",T="REMOVE_SPATIAL_SELECT",P="SHOW_SPATIAL_DETAILS",R="QUERY_FORM_SEARCH",A="QUERY_FORM_RESET",L="SHOW_GENERATED_FILTER",j="CHANGE_DWITHIN_VALUE",D="ZONE_SEARCH",I="ZONE_SEARCH_ERROR",F="ZONE_FILTER",M="ZONE_CHANGE",N="ZONES_RESET",U="SIMPLE_FILTER_FIELD_UPDATE",C="ADD_SIMPLE_FILTER_FIELD",W="REMOVE_SIMPLE_FILTER_FIELD",k="REMOVE_ALL_SIMPLE_FILTER_FIELDS",Y="UPDATE_FILTER_FIELD_OPTIONS",x="LOADING_FILTER_FIELD_OPTIONS",G="QUERYFORM:ADD_CROSS_LAYER_FILTER_FIELD",H="QUERYFORM:UPDATE_CROSS_LAYER_FILTER_FIELD",Q="QUERYFORM:REMOVE_CROSS_LAYER_FILTER_FIELD",Z="QUERYFORM:UPDATE_CROSS_LAYER_FILTER_FIELD_OPTIONS",V="SET_AUTOCOMPLETE_MODE",z="TOGGLE_AUTOCOMPLETE_MENU",X="QUERYFORM:LOAD_FILTER";function B(e){return{type:u,groupId:e}}function J(e,t){return{type:s,groupId:e,index:t}}function q(e){return{type:a,rowId:e}}function $(e,t){return{type:z,rowId:e,status:t,layerFilterType:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"filterField"}}function K(e,t,r,n){return{type:c,rowId:e,fieldName:t,fieldValue:r,fieldType:n,fieldOptions:arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}}}function ee(e,t){return{type:l,rowId:e,exceptionMessage:t}}function te(e,t){return{type:f,groupId:e,logic:t}}function re(e){return{type:V,status:e}}function ne(e){return{type:p,groupId:e}}function oe(e){return{type:y,attributes:e}}function ie(e){return{type:d,expand:e}}function ue(e){return{type:b,expand:e}}function ae(e){return{type:v,expand:e}}function ce(e,t){return{type:E,key:e,value:t}}function le(e,t){return{type:m,fieldName:t,method:e}}function se(){return{type:O}}function fe(e){return{type:h,geometry:e}}function pe(e,t){return{type:S,fieldName:t,operation:e}}function ye(e){return{type:_,attribute:e}}function de(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.feature,r=e.srsName,n=e.collectGeometries,o=e.style,i=e.options,u=e.value;return{type:w,value:u,collectGeometries:n,options:i,geometry:t&&t.geometry,feature:t,srsName:r,style:o}}function be(){return{type:T}}function ve(e){return{type:P,show:e}}function Ee(e){return{type:j,distance:e}}function ge(e,t){return{type:R,searchUrl:e,filterObj:t}}function me(e){return{type:X,filter:e}}function Oe(e){return{type:A,skip:e}}function he(e,t){return{type:I,error:e,id:t}}function Se(e,t){return{type:D,active:e,id:t}}function _e(e,t,r){return function(n){return o().post(e,t,{timeout:1e4,headers:{Accept:"application/json","Content-Type":"text/plain"}}).then((function(o){var u=o.data;if("object"!==i(u))try{u=JSON.parse(u)}catch(o){n(he("Search result broken ("+e+":   "+t+"): "+o.message,r))}n(function(e,t){return{type:F,data:e,id:t}}(u,r)),n(Se(!1,r))})).catch((function(e){n(he(e,r))}))}}function we(e,t){return{type:M,id:e,value:t}}function Te(e){return{type:G,rowId:(new Date).getTime(),groupId:e}}function Pe(e,t,r,n){return{type:H,rowId:e,fieldName:t,fieldValue:r,fieldType:n,fieldOptions:arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}}}function Re(e){return{type:Q,rowId:e}}function Ae(){return{type:g}}function Le(e,t){return{type:x,status:e,filterField:t,layerFilterType:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"filterField"}}function je(e,t,r){return{type:Y,filterField:e,options:t,valuesCount:r}}function De(e,t,r){return{type:Z,filterField:e,options:t,valuesCount:r}}},95797:(e,t,r)=>{"use strict";r.d(t,{DR:()=>n,S0:()=>o,u7:()=>i,lj:()=>u,yz:()=>a,lN:()=>c,zW:()=>l,Yx:()=>s,VN:()=>f,Hu:()=>p,VT:()=>y,RD:()=>d,Qq:()=>b,R1:()=>v,_T:()=>E,vO:()=>g,XO:()=>m,jG:()=>O,Xc:()=>h,gT:()=>S,rG:()=>_,t3:()=>w,Fs:()=>T,w_:()=>P,Lm:()=>R,rh:()=>A,rP:()=>L,IO:()=>j}),r(375875);var n="LAYER_SELECTED_FOR_SEARCH",o="FEATURE_TYPE_SELECTED",i="FEATURE_TYPE_LOADED",u="FEATURE_LOADED",a="FEATURE_LOADING",c="FEATURE_TYPE_ERROR",l="FEATURE_ERROR",s="QUERY_CREATE",f="QUERY:UPDATE_QUERY",p="QUERY_RESULT",y="QUERY_ERROR",d="RESET_QUERY",b="QUERY",v="INIT_QUERY_PANEL",E="QUERY:TOGGLE_SYNC_WMS",g="QUERY:TOGGLE_LAYER_FILTER";function m(){return{type:E}}function O(){return{type:g}}function h(){return{type:v}}function S(e,t){return{type:o,url:e,typeName:t}}function _(e,t){return{type:i,typeName:e,featureType:t}}function w(e,t){return{type:c,typeName:e,error:t}}function T(e){return{type:a,isLoading:e}}function P(e,t,r,n,o){return{type:p,searchUrl:t,filterObj:r,result:e,queryOptions:n,reason:o}}function R(e){return{type:y,error:e}}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.updates,r=e.reason,n=e.useLayerFilter;return{type:f,updates:t,reason:r,useLayerFilter:n}}function L(e,t){return{type:s,searchUrl:e,filterObj:t}}function j(e,t,r,n){return{type:b,searchUrl:e,filterObj:t,queryOptions:r,reason:n}}},807691:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>R});var n=r(49977),o=r.n(n),i=r(557579),u=r(555927),a=r(782904),c=r(95797),l=r(197395),s=r(807878),f=r(263516),p=r(367306),y=r(274621),d=r(401757),b=r(324684),v=r(291312),E=r(589919),g=r(275982),m=["data"],O=["status","statusText","data","message"];function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function S(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===h(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const R={openDashboardWidgetEditor:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(i.AE,i.dm).filter((function(){return(0,p.Wy)(r())})).switchMap((function(){return o().Observable.of((0,u.D_)(!0))}))},closeDashboardWidgetEditorOnFinish:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(i.Jm).filter((function(){return(0,p.Wy)(r())})).switchMap((function(){return o().Observable.of((0,u.D_)(!1))}))},initDashboardEditorOnNew:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(i.AE).filter((function(){return(0,p.Wy)(r())})).switchMap((function(e){return o().Observable.of((0,i.bS)(T(T({legend:!1,mapSync:!1,cartesian:!0,yAxis:!0},e),{},{type:void 0}),{step:0}))}))},closeDashboardEditorOnExit:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(g.nk).filter((function(){return(0,p.Wy)(r())})).filter((function(){return(0,p.i$)(r())})).switchMap((function(){return o().Observable.of((0,u.D_)(!1))}))},handleDashboardWidgetsFilterPanel:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(i.lG).filter((function(){return(0,p.Wy)(r())})).switchMap((function(){return o().Observable.of(c.gT.apply(void 0,(n=r(),u=(0,d.JT)(n),t=[u.search&&u.search.url,u.name],function(e){if(Array.isArray(e))return _(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),(0,s.F)((0,d.um)(r())),(0,a.Xg)("queryPanel","enabled",!0)).concat(o().Observable.race(e.ofType(s.Wm).take(1),e.ofType(a.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"queryPanel"===t&&(!r||"enabled"===r)})).take(1)).switchMap((function(e){return(e.filterObj?o().Observable.of((0,i.Rz)("filter",e.filterObj)):o().Observable.empty()).merge(o().Observable.of((0,a.Xg)("widgetBuilder","enabled",!0)))}))).takeUntil(e.ofType(g.nk,i.dm).merge(e.ofType(a.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"widgetBuilder"===t&&0==!r})))).concat(o().Observable.of((0,a.Xg)("queryPanel","enabled",!1)));var t,n,u}))},filterAnonymousUsersForDashboard:function(e,t){return e.ofType(f.c8,f.Nv).filter((function(){return"/dashboard"===(0,b.F)(t.getState())})).switchMap((function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),(0,y.jl)(t.getState())?o().Observable.empty():o().Observable.of((0,u.AN)({status:403}))}))},loadDashboardStream:function(e,t){var r=t.getState,n=void 0===r?function(){}:r;return e.ofType(u.zX).switchMap((function(e){var t=e.id;return(0,v.RX)(t).map((function(e){var t=e.data,r=S(e,m);return(0,u.rR)(r,t)})).let((0,E.hP)((0,u.vM)(!0,"loading"),(0,u.vM)(!1,"loading"),(function(e){var t=window.location.href.match("dashboard-embedded")?"dashboardEmbedded":"dashboard",r=t+".errors.loading.unknownError";return 403===e.status&&(r=t+".errors.loading.pleaseLogin",(0,y.jl)(n())&&(r=t+".errors.loading.dashboardNotAccessible")),404===e.status&&(r=t+".errors.loading.dashboardDoesNotExist"),o().Observable.of((0,l.vU)({title:t+".errors.loading.title",message:r}),(0,u.AN)(T(T({},e),{},{messageId:r})))})))}))},reloadDashboardOnLoginLogout:function(e){return e.ofType(u.zX).switchMap((function(t){var r=t.id;return e.ofType(f.XP,f.Nv).switchMap((function(){return o().Observable.of((0,u.o2)(r)).delay(1e3)})).takeUntil(e.ofType(g.nk))}))},saveDashboard:function(e){return e.ofType(u.aR).exhaustMap((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).resource;return(e.id?(0,v.id)(e):(0,v.SN)(e)).switchMap((function(t){return o().Observable.of((0,u.sA)(t),e.id?(0,u.gE)(!1):(0,u.pB)(!1),e.id?(0,u.o2)(t):(0,g.VF)("/dashboard/".concat(t))).merge(o().Observable.of((0,l.$Z)({id:"DASHBOARD_SAVE_SUCCESS",title:"saveDialog.saveSuccessTitle",message:"saveDialog.saveSuccessMessage"})).delay(e.id?0:1e3))})).let((0,E.hP)((0,u.vM)(!0,"saving"),(0,u.vM)(!1,"saving"))).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.status,r=e.statusText,n=e.data,i=e.message,a=S(e,O);return o().Observable.of((0,u.GD)(t?{status:t,statusText:r,data:n}:i||a),(0,u.vM)(!1,"saving"))}))}))}}},589919:(e,t,r)=>{"use strict";r.d(t,{hP:()=>l});var n=r(984596),o=r.n(n),i=r(49977),u=r.n(i);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.startWith.apply(e,function(e){if(Array.isArray(e))return a(e)}(t=r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())},l=function(e,t,r){return function(n){return(r?c(n,o()(e)).catch(r):c(n,o()(e))).concat(u().Observable.from(o()(t)))}}},10960:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>G});var n=r(675263),o=r.n(n),i=r(124852),u=r.n(i),a=r(580628),c=r(171703),l=r(867076),s=r(22222),f=r(441609),p=r.n(f),y=r(557579),d=r(805346),b=r(691380),v=r(982030);const E=(0,l.branch)((function(e){return e.selectionActive}),(0,l.compose)((0,l.withProps)((function(e){var t=e.className;return{className:"".concat(t," selection-active")}})),(0,l.withHandlers)({getWidgetClass:function(e){var t=e.getWidgetClass,r=void 0===t?function(){}:t,n=e.isWidgetSelectable,o=void 0===n?function(){return!0}:n;return function(e){return r(e)?r(e)+(o(e)?void 0:" disabled"):o(e)?void 0:" disabled"}},onWidgetClick:function(e){var t=e.onWidgetSelected,r=void 0===t?function(){}:t,n=e.isWidgetSelectable,o=void 0===n?function(){return!0}:n;return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return o(e)?r.apply(void 0,[e].concat(n)):null}}})));var g=r(264945);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const _=(0,l.compose)(l.pure,(0,l.defaultProps)({breakpoints:{md:480,xxs:0},cols:{md:6,xxs:1},minLayoutWidth:480}),(0,b.ZY)({overrideWidthProvider:!0}),(0,l.withProps)((function(e){var t=e.width;return{width:t<=e.minLayoutWidth?t-18:t,toolsOptions:{showMaximize:!0}}})),(0,l.withProps)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.maximized,o=e.minLayoutWidth,i=e.cols,u=null!=n&&n.widget?{width:"100%",height:"100%",marginTop:0,bottom:"auto",top:0,left:0,zIndex:99}:{},a=null!=n&&n.widget?{width:t,useDefaultWidthProvider:!1,rowHeight:r-50,breakpoints:{xxs:0},cols:{xxs:1}}:{};return h({className:"on-map",breakpoints:{md:o,xxs:0},cols:i||{md:6,xxs:1},style:h({position:"absolute",zIndex:50},u)},a)})),(0,v.Z)((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).widgets;return 0===(void 0===e?[]:e).length}),(function(e){return{glyph:"dashboard",title:e.loading?u().createElement(d.Z,{msgId:"loading"}):u().createElement(d.Z,{msgId:"dashboard.emptyTitle"})}})),(0,l.defaultProps)({isWidgetSelectable:function(){return!0}}),E)(g.Z);var w=r(875859),T=r(367306),P=r(308316),R=r(38842),A=r(401757),L=r(24412),j=r(807691),D=r(688395);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){W(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,k(n.key),n)}}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function W(e,t,r){return(t=k(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){var t=function(e,t){if("object"!==I(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===I(t)?t:String(t)}var Y=(0,l.compose)((0,c.connect)((0,s.P1)(T.NB,A.hF,A.nA,A.h9,A.xI,(function(e){return(0,A.YI)(e)}),A.ie,T.P0,T.MZ,T.J,P.KV,R.wk,R.fY,A.Jb,(function(e,t,r,n,o,i,u,a,c,l,s,f,y,d){return{resource:e,loading:c,canEdit:l?!l:e&&!!e.canEdit,layouts:r,dependencies:n,selectionActive:o,editingWidget:i,widgets:p()(d)?t:t.filter((function(e){return e.id===d.widget.id})),groups:u,showGroupColor:a,language:f?s:null,env:y,maximized:d}})),{editWidget:y.uT,updateWidgetProperty:y.Ij,exportCSV:y.sD,exportImage:y.Rb,deleteWidget:y.E9,onWidgetSelected:y.Gn,onLayoutChange:y.c_,toggleMaximize:y.Pt}),(0,l.withProps)((function(){return{style:{height:"100%",overflow:"auto"}}})),(0,l.withHandlers)({isWidgetSelectable:function(e){var t=e.editingWidget;return function(e){return("map"===e.widgetType||"table"===e.widgetType&&("map"!==t.widgetType&&e.layer&&t.layer&&e.layer.name===t.layer.name||"map"===t.widgetType)&&!e.mapSync)&&e.id!==t.id}}}))(_),x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(n);if(o){var r=C(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){return this.props.enabled?u().createElement(Y,{width:this.props.width,height:this.props.height,rowHeight:this.props.rowHeight,cols:this.props.cols,minLayoutWidth:this.props.minLayoutWidth}):null}}])&&N(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(u().Component);W(x,"propTypes",{enabled:o().bool,rowHeight:o().number,cols:o().object,minLayoutWidth:o().number}),W(x,"defaultProps",{enabled:!0,minLayoutWidth:480});const G={DashboardPlugin:(0,a.Z)(x),reducers:{dashboard:L.Z,widgets:w.Z},epics:M(M({},j.ZP),D.ZP)}},24412:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(555927),o=r(557579),i=r(761868),u=r(984596),a=r.n(u);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showConnections:!0,services:null,saveServiceLoading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.BJ:return(0,i.t8)("editor.available",t.available,e);case n._y:case o.wb:case o.Jm:case o.yY:return(0,i.t8)("editing",t.editing,e);case n.vk:return(0,i.t8)("showConnections",t.show,e);case n.uI:return(0,i.t8)("showSaveModal",t.show,(0,i.t8)("saveErrors",void 0,e));case n.mg:return(0,i.t8)("showSaveAsModal",t.show,(0,i.t8)("saveErrors",void 0,e));case n.E9:var r;return s(s({},e),{},{originalData:t.data,resource:t.resource,services:null===(r=t.data)||void 0===r?void 0:r.catalogs});case n.R4:return s(s({},e),{},{originalData:void 0,resource:void 0,mode:"view",services:void 0});case n.SW:return(0,i.t8)("saveErrors",a()(t.error),e);case n.$l:return(0,i.t8)("saveErrors",void 0,e);case n.E5:var u;return s(s({},e),{},{services:e.services||t.services,selectedService:(null===(u=t.service)||void 0===u?void 0:u.key)||""});case n.s6:return(0,i.t8)("services",t.services,e);case n.B_:return s(s({},e),{},{mode:t.mode,isNew:t.isNew,saveServiceLoading:!1});case n.TA:return s(s({},e),{},{saveServiceLoading:t.loading});case n.CF:var c=t.services,l=t.service;l.isNew=!1,l.showAdvancedSettings=!1,delete l.old,c[l.key]=l;var f=l.key;return s(s({},e),{},{services:c,selectedService:f,mode:"view"});case n.js:var p,y,d=t.services,b=t.service;(d[b.key]||d[null===(p=b.old)||void 0===p?void 0:p.key])&&(delete d[b.key]||d[null===(y=b.old)||void 0===y?void 0:y.key]);var v=Object.keys(d)[0]||"";return s(s({},e),{},{services:d,mode:"view",selectedService:v});case n.CP:return(0,i.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,i.t8)("loading",t.value,e));default:return e}}},38842:(e,t,r)=>{"use strict";r.d(t,{wk:()=>f,Yf:()=>p,c3:()=>y,fY:()=>d});var n=r(218721),o=r.n(n),i=r(227361),u=r.n(i),a=r(313311),c=r.n(a),l=r(22222),s=r(308316),f=function(e){return o()(e,"localConfig.localizedLayerStyles")},p=function(e){var t=u()(e,"localConfig.plugins.dashboard",[]),r=c()(t,(function(e){return"DashboardEditor"===e.name}))||{};return u()(r,"cfg.catalog.localizedLayerStyles",!1)},y=function(e){return u()(e,"localConfig.localizedLayerStyles.name","mapstore_language")},d=(0,l.P1)(f,y,s.KV,(function(e,t,r){var n=[];return e&&n.push({name:t,value:r}),n}))},580628:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(155553);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}const s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{handleWidth:!0,handleHeight:!0};return function(r){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,c(n).apply(this,arguments))}var s,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,r),s=n,(f=[{key:"render",value:function(){return o().createElement(i.Z,t,o().createElement(e,this.props))}}])&&a(s.prototype,f),n}(n.Component)}}}]);