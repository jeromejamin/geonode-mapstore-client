(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8225],{68143:(t,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>x});var e=o(24852),r=o.n(e),i=o(67076),c=o(22222),u=o(71703),s=o(45697),a=o.n(s),l=o(22843),d=o(1757),p=o(67306),f=o(96311),b=o(57579),h=o(55927);const y=(0,i.compose)((0,u.connect)((function(){return{}}),{backFromWizard:function(){return(0,b.Rz)("layer",void 0)}}),(0,i.withProps)((function(t){var n=t.backFromWizard;return{exitButton:{onClick:void 0===n?function(){}:n,glyph:"arrow-left",tooltipId:"widgets.builder.wizard.backToLayerSelection"}}})));var m=o(75480),g=o(12736),v=o(7691),w=o(24412),C=o(80717);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function S(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function k(t,n){return(k=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _(t,n){if(n&&("object"===E(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var D=(0,i.compose)((0,u.connect)(f.Nb,{toggleConnection:b.w2,triggerShowConnections:h.G9}),(0,u.connect)(f.Tw),(0,i.withProps)((function(t){var n=t.availableDependencies;return{availableDependencies:(void 0===n?[]:n).filter((function(t){return"map"!==t}))}})),y)(g.Z),M=(0,i.compose)((0,u.connect)((0,c.P1)(p.P0,d.HU,p.DZ,d.ie,(function(t,n,o){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{showConnections:t,hasConnections:e.length>0,hasWidgets:n,canEdit:o}})),{onShowConnections:h.G9,onAddWidget:b.A4}),(0,i.withProps)((function(t){var n=t.onAddWidget,o=void 0===n?function(){}:n,e=t.hasWidgets,r=t.canEdit,i=t.hasConnections,c=t.showConnections,u=t.onShowConnections,s=void 0===u?function(){}:u;return{buttons:[{glyph:"plus",tooltipId:"dashboard.editor.addACardToTheDashboard",bsStyle:"primary",visible:r,id:"ms-add-card-dashboard",onClick:function(){return o()}},{glyph:c?"bulb-on":"bulb-off",tooltipId:c?"dashboard.editor.hideConnections":"dashboard.editor.showConnections",bsStyle:c?"success":"primary",visible:!!e&&!!i||!r,onClick:function(){return s(!c)}}]}})))(C.Z),z=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&k(t,n)}(u,t);var n,o,e,i,c=(e=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=j(e);if(i){var o=j(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return _(this,t)});function u(){return P(this,u),c.apply(this,arguments)}return n=u,(o=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var t=this,n=this.props.pluginCfg.selectedService||"",o=this.props.pluginCfg.services||{};return this.props.editing?r().createElement("div",{className:"dashboard-editor de-builder"},r().createElement(D,{disableEmptyMap:this.props.disableEmptyMap,defaultSelectedService:n,defaultServices:o,enabled:this.props.editing,onClose:function(){return t.props.setEditing(!1)},catalog:this.props.catalog})):r().createElement("div",{className:"ms-vertical-toolbar dashboard-editor de-toolbar",id:this.props.id},r().createElement(M,{transitionProps:!1,btnGroupProps:{vertical:!0},btnDefaultProps:{tooltipPosition:"right",className:"square-button-md",bsStyle:"primary"}}),this.props.loading?r().createElement(m.Z,{style:{position:"fixed",bottom:0}}):null)}}])&&S(n.prototype,o),u}(r().Component);O(z,"propTypes",{id:a().string,editing:a().bool,loading:a().bool,limitDockHeight:a().bool,fluid:a().bool,zIndex:a().number,dockSize:a().number,position:a().string,onMount:a().func,onUnmount:a().func,setEditing:a().func,dimMode:a().string,src:a().string,style:a().object,pluginCfg:a().object,catalog:a().object,disableEmptyMap:a().bool}),O(z,"defaultProps",{id:"dashboard-editor",editing:!1,dockSize:500,loading:!0,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:function(){},onUnmount:function(){},setEditing:function(){}});var T=(0,u.connect)((0,c.P1)(p.i$,p.MZ,(function(t,n){return{editing:t,loading:n}})),{setEditing:h.D_,onMount:function(){return(0,h.Nl)(!0)},onUnmount:function(){return(0,h.Nl)(!1)}})(z);const x=(0,l.rx)("DashboardEditor",{component:T,reducers:{dashboard:w.Z},epics:v.ZP})}}]);