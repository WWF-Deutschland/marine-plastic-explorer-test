(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ef09d4344e98a758bac7(e,t,n){n.r(t);let r; const o=n("8af190b70a6bc55c6f1b"); const a=n.n(o); const i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")); const l=n("a28fc3c963a1d4d1a2e5"); const c=n("0d7f0986bcd2f33d8a2a"); const u=n("ab4cb61bcb2dc161defb"); const d=n("ab039aecd4a1d4fedc0e"); const f=n("0b3cb19af78752326f59"); const s=n("eb656803928a435bd3cc"); const p=n("66543f9bb6e90e461320"); const b=n("761b1f7fdd256e4f5426"); const m=n("045dd844c9ae122c636a"); const y=n("6e05b15597c94fea0ef3"); const g=n("422249433a2d25af359d"); const h=n("c8e6563c3537109b383a"); const v=n("d6f259ffb10cc810b5a4"); const j=n("5ca68c6edf7ca33c5f8f"); const w=n("76abbe2db5a955046df2"); const O=n("ab7d7caa0ee3a73c9e57"); const x=n("a7c39d8357e500a5b832"); const L=n("d11a8f0bb6e09a1b2c13"); const _=n("0785de3f40b134973d35"); const C=n("6542cd13fd5dd1bcffd4"); const E=n("a72b40110d9c31c9b5c5"); const S=n("f64ff5b2dfbac1021ef4"); const k=n("d3dfb88bd55587d538d0"); const I="app.components.GroupLayers"; const P=Object(d.defineMessages)({columnLayer:{id:"".concat(I,".columnLayer"),defaultMessage:"Layer"},columnProject:{id:"".concat(I,".columnProject"),defaultMessage:"Project"},columnKey:{id:"".concat(I,".columnKey"),defaultMessage:"Key"},columnInfo:{id:"".concat(I,".columnInfo"),defaultMessage:"Read more"},info:{id:"".concat(I,".info"),defaultMessage:"Info"}});function A(e,t,n,o){r||(r=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||60103);const a=e&&e.defaultProps; const i=arguments.length-3;if(t||i===0||(t={children:void 0}),i===1)t.children=o;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}if(t&&a)for(const u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:r,type:e,key:void 0===n?null:`${n}`,ref:null,props:t,_owner:null}}function M(){return(M=Object.assign||function(e){for(let t=1;t<arguments.length;t++){const n=arguments[t];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const T=f.default.div.withConfig({displayName:"GroupLayers__Styled",componentId:"plf17t-0"})(["display:table;table-layout:fixed;margin-top:12px;margin-bottom:20px;width:100%;"]); const N=f.default.div.withConfig({displayName:"GroupLayers__ListHeader",componentId:"plf17t-1"})(["display:table-header-group;"]); const D=f.default.div.withConfig({displayName:"GroupLayers__ListHeaderRow",componentId:"plf17t-2"})(["display:table-row;"]); const F=f.default.div.withConfig({displayName:"GroupLayers__ListHeaderCell",componentId:"plf17t-3"})(["display:table-cell;font-size:12px;line-height:14px;border-bottom:1px solid ",";vertical-align:middle;color:",";white-space:nowrap;"],function(e){return e.theme.global.colors["light-4"]},function(e){return e.theme.global.colors["dark-4"]}); const G=Object(f.default)(F).withConfig({displayName:"GroupLayers__ListHeaderKey",componentId:"plf17t-4"})(["width:45px;text-align:center;"]); const B=Object(f.default)(F).withConfig({displayName:"GroupLayers__ListHeaderInfo",componentId:"plf17t-5"})(["width:65px;text-align:center;"]); const W=f.default.div.withConfig({displayName:"GroupLayers__ListBody",componentId:"plf17t-6"})(["display:table-row-group;"]); const $=f.default.div.withConfig({displayName:"GroupLayers__ListBodyRow",componentId:"plf17t-7"})(["display:table-row;"]); const H=f.default.div.withConfig({displayName:"GroupLayers__ListBodyCell",componentId:"plf17t-8"})(["display:table-cell;vertical-align:middle;height:54px;padding:6px 0;border-bottom:1px solid ",";"],function(e){return e.theme.global.colors["light-4"]}); const U=Object(f.default)(H).withConfig({displayName:"GroupLayers__ListBodyCellCenter",componentId:"plf17t-9"})(["text-align:center;"]); const z=Object(f.default)(function(e){return a.a.createElement(p.a,M({},e,{plain:!0}))}).withConfig({displayName:"GroupLayers__InfoButton",componentId:"plf17t-10"})(["font-family:'wwfregular';text-transform:uppercase;line-height:16px;background:",";color:",";padding:0 ",";border-radius:50px;height:24px;&:hover{background:",";}"],function(e){return e.theme.global.colors.black},function(e){return e.theme.global.colors.white},function(e){return e.theme.global.edgeSize.small},function(e){return e.theme.global.colors.dark}); const K=f.default.div.withConfig({displayName:"GroupLayers__KeyWrap",componentId:"plf17t-11"})(["display:block;width:24px;height:24px;margin:0 auto;"]); const R=A(x.q,{color:"dark-4"});let q; const J=function(e){const t=e.layersConfig; const n=e.activeLayers; const r=e.onToggleLayer; const o=e.onLayerInfo; const i=e.locale; const l=e.projects;return A(T,{},void 0,A(N,{},void 0,A(D,{},void 0,A(F,{},void 0,A(s.a,{direction:"row",gap:"small",align:"center"},void 0,R,a.a.createElement(d.FormattedMessage,P[l?"columnProject":"columnLayer"]))),A(G,{},void 0,a.a.createElement(d.FormattedMessage,P.columnKey)),A(B,{},void 0,a.a.createElement(d.FormattedMessage,P.columnInfo)))),A(W,{},void 0,t&&t.map(function(e){const t=l?"".concat(v.k.id,"-").concat(e.project_id):e.id; const c=l?e["project_title_".concat(i)]||e["project_title_".concat(_.DEFAULT_LOCALE)]:e.title[i]||e.title[_.DEFAULT_LOCALE];return A($,{},t,A(H,{},void 0,A(k.a,{checked:n.indexOf(t)>-1,onToggle(){return r(t)},label:c})),A(U,{},void 0,A(K,{},void 0,A(S.a,{config:l?v.k:e}))),A(U,{},void 0,A(z,{onClick(){return o(t)},label:a.a.createElement(d.FormattedMessage,P.info)})))})))};function Q(e,t,n,r){q||(q=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||60103);const o=e&&e.defaultProps; const a=arguments.length-3;if(t||a===0||(t={children:void 0}),a===1)t.children=r;else if(a>1){for(var i=new Array(a),l=0;l<a;l++)i[l]=arguments[l+3];t.children=i}if(t&&o)for(const c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:q,type:e,key:void 0===n?null:`${n}`,ref:null,props:t,_owner:null}}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(e)))return;const n=[]; let r=!0; let o=!1; let a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||l.return==null||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if(typeof e==="string")return X(e,t);let n=Object.prototype.toString.call(e).slice(8,-1);n==="Object"&&e.constructor&&(n=e.constructor.name);if(n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Y(){return(Y=Object.assign||function(e){for(let t=1;t<arguments.length;t++){const n=arguments[t];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Z=Object(f.default)(function(e){return a.a.createElement(p.a,Y({plain:!0},e))}).withConfig({displayName:"ButtonDeleteLayers__TabDelete",componentId:"sc-1m79krv-0"})(["position:absolute;bottom:98%;border-radius:9999px;background:",";left:50%;transform:translate(-50%);min-width:21px;height:21px;color:",";text-align:center;font-weight:700;"],function(e){return e.theme.global.colors.white},function(e){return e.theme.global.colors.brandDark}); const ee=Object(f.default)(s.a).withConfig({displayName:"ButtonDeleteLayers__WrapContent",componentId:"sc-1m79krv-1"})(["pointer-events:none;"]); const te=Q(x.j,{color:"brandDark"});let ne; const re=function(e){const t=e.layerCount; const n=e.updateLayers; const r=e.active; const a=V(Object(o.useState)(!1),2); const i=a[0]; const l=a[1];return Q(Z,{tabActive:r,onClick(){return n()},label:Q(ee,{justify:"center",align:"center",fill:!0},void 0,i?te:Q(j.a,{size:"xxsmall",style:{paddingTop:"1px"}},void 0,t)),onMouseEnter(){return l(!0)},onMouseOut(){return l(!1)},onBlur(){return l(!1)}})}; const oe=Object(d.defineMessages)({title:{id:"".concat("app.containers.PanelExplore",".title"),defaultMessage:"Map layers"}});function ae(e){return function(e){if(Array.isArray(e))return ie(e)}(e)||function(e){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if(typeof e==="string")return ie(e,t);let n=Object.prototype.toString.call(e).slice(8,-1);n==="Object"&&e.constructor&&(n=e.constructor.name);if(n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function le(e,t,n,r){ne||(ne=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||60103);const o=e&&e.defaultProps; const a=arguments.length-3;if(t||a===0||(t={children:void 0}),a===1)t.children=r;else if(a>1){for(var i=new Array(a),l=0;l<a;l++)i[l]=arguments[l+3];t.children=i}if(t&&o)for(const c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:ne,type:e,key:void 0===n?null:`${n}`,ref:null,props:t,_owner:null}}function ce(){return(ce=Object.assign||function(e){for(let t=1;t<arguments.length;t++){const n=arguments[t];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const ue=Object(f.default)(function(e){return a.a.createElement(s.a,ce({},e,{elevation:"medium"}))}).withConfig({displayName:"PanelExplore__Styled",componentId:"sc-39h5rt-0"})(["position:absolute;right:0;top:0;bottom:0;width:100%;pointer-events:all;@media (min-width:","){width:","px;}"],function(e){return e.theme.sizes.medium.minpx},function(e){return e.panelWidth||400}); const de=Object(f.default)(function(e){return a.a.createElement(s.a,ce({background:"brand",justify:"between"},e,{elevation:"small",responsive:!1}))}).withConfig({displayName:"PanelExplore__PanelHeader",componentId:"sc-39h5rt-1"})(["position:absolute;right:0;left:0;top:0;width:100%;height:140px;@media (min-width:","){height:150px;}"],function(e){return e.theme.sizes.medium.minpx}); const fe=f.default.div.withConfig({displayName:"PanelExplore__PanelBody",componentId:"sc-39h5rt-2"})(["position:absolute;right:0;left:0;top:150px;width:100%;bottom:0;padding:12px 12px 96px;overflow-y:scroll;"]); const se=Object(f.default)(function(e){return a.a.createElement(s.a,ce({margin:{top:"medium"}},e,{align:"center",responsive:!1}))}).withConfig({displayName:"PanelExplore__TitleWrap",componentId:"sc-39h5rt-3"})([""]); const pe=Object(f.default)(j.a).withConfig({displayName:"PanelExplore__Title",componentId:"sc-39h5rt-4"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;margin-top:3px;"]); const be=Object(f.default)(function(e){return a.a.createElement(s.a,ce({},e,{direction:"row",gap:"xsmall"}))}).withConfig({displayName:"PanelExplore__Tabs",componentId:"sc-39h5rt-5"})([""]); const me=Object(f.default)(function(e){return a.a.createElement(s.a,ce({},e,{margin:{left:"xsmall"}}))}).withConfig({displayName:"PanelExplore__TabLinkWrapper",componentId:"sc-39h5rt-6"})(["position:relative;"]); const ye=Object(f.default)(function(e){return a.a.createElement(p.a,ce({plain:!0},e))}).withConfig({displayName:"PanelExplore__TabLink",componentId:"sc-39h5rt-7"})(["font-family:'wwfregular';text-transform:uppercase;font-weight:normal;line-height:1;padding:0 ",";color:",";opacity:1;border-bottom:4px solid;border-color:",";&:hover{color:",";}"],function(e){return e.theme.global.edgeSize.ms},function(e){const t=e.theme; const n=e.active;return t.global.colors[n?"white":"brandLight"]},function(e){const t=e.theme;return e.active?t.global.colors.white:"transparent"},function(e){return e.theme.global.colors.white}); const ge=Object(f.default)(function(e){return a.a.createElement(j.a,ce({size:"xlarge"},e))}).withConfig({displayName:"PanelExplore__TabLinkAnchor",componentId:"sc-39h5rt-8"})([""]); const he=Object(f.default)(function(e){return a.a.createElement(s.a,ce({flex:{shrink:0}},e))}).withConfig({displayName:"PanelExplore__SectionLayerGroup",componentId:"sc-39h5rt-9"})([""]); const ve=Object(f.default)(function(e){return a.a.createElement(w.a,ce({},e,{level:3}))}).withConfig({displayName:"PanelExplore__TitleGroup",componentId:"sc-39h5rt-10"})(["font-family:'wwfregular';font-weight:normal;margin-bottom:0;letter-spacing:0.1px;font-size:28px;line-height:29px;"]); const je=Object(f.default)(O.a).withConfig({displayName:"PanelExplore__DescriptionGroup",componentId:"sc-39h5rt-11"})(["margin-bottom:8px;"]); const we=le(x.h,{}); const Oe=Object(f.default)(function(e){return a.a.createElement(p.a,ce({icon:we,plain:!0,alignSelf:"end"},e))}).withConfig({displayName:"PanelExplore__ButtonClose",componentId:"sc-39h5rt-12"})(["position:absolute;top:15px;right:15px;padding:10px;border-radius:99999px;background:",";box-shadow:0px 2px 4px rgba(0,0,0,0.1);&:hover{background:",";}"],function(e){return e.theme.global.colors.brandDark},function(e){return e.theme.global.colors.brandDarker}); const xe="PanelExplore"; const Le={tab:0}; const _e=le(x.p,{});const Ce=Object(l.b)({projects(e){return Object(C.c)(e,{key:"projects"})},layersConfig(e){return Object(C.m)(e)},exploreConfig(e){return Object(C.i)(e)},locale(e){return Object(C.n)(e)},uiState(e){return Object(C.w)(e,{key:xe})},activeLayers(e){return Object(C.a)(e)}});let Ee; const Se=Object(i.connect)(Ce,function(e){return{onSetTab(t,n){return e(Object(E.r)(xe,Object.assign({},Le,n,{tab:t})))},onLayerInfo(t){return e(Object(E.n)(t))},onSetLayers(t){return e(Object(E.o)(t))},onToggleLayer(t){return e(Object(E.s)(t))}}}); const ke=Object(u.compose)(Se)(function(e){const t=e.onClose; const n=e.onLayerInfo; const r=e.onToggleLayer; const i=e.onSetTab; const l=e.projects; const c=e.layersConfig; const u=e.exploreConfig; const f=e.locale; const s=e.uiState; const p=e.activeLayers; const m=e.onSetLayers; const y=(s?Object.assign({},Le,s):Le).tab; const j=Object(o.useRef)();Object(o.useEffect)(function(){j.current.scrollTop=0},[s]);const w=u&&u[y];return le(b.a.Consumer,{},void 0,function(e){return le(ue,{background:"white",panelWidth:Object(h.b)(e)},void 0,le("div",{},void 0,le(de,{},void 0,le(Oe,{onClick(){return t()}}),le(se,{},void 0,_e,le(pe,{},void 0,a.a.createElement(d.FormattedMessage,oe.title))),le(be,{},void 0,c&&u&&u.map(function(e,t){let n=[];p.length>0&&(n=v.j===e.id?p.filter(function(e){return Object(g.c)(e,"".concat(v.k.id,"-"))}):p.filter(function(t){const n=c.find(function(e){return e.id===t});return n&&n.category===e.id}));const r=p.filter(function(e){returnn.indexOf(e)===-1});return le(me,{},e.id,n.length>0&&le(re,{updateLayers(){return m(r)},layerCount:n.length,active:y===t}),le(ye,{onClick(){return i(t,s)},active:y===t,disabled:y===t,label:le(ge,{active:y===t},void 0,e.title[f]||e.title[_.DEFAULT_LOCALE])}))}))),a.a.createElement(fe,{ref:j},c&&w&&w.groups&&w.groups.map(function(e){return le(he,{},e.id,le(ve,{},void 0,e.title[f]||e.title[_.DEFAULT_LOCALE]),e.description&&le(je,{},void 0,e.description[f]||e.description[_.DEFAULT_LOCALE]),w.id!==v.j&&le(J,{group:e,layersConfig:c.filter(function(t){return t.category===w.id&&t.group===e.id}),locale:f,activeLayers:p,onLayerInfo:n,onToggleLayer:r}),l&&w&&w.id===v.j&&le(J,{group:w.id,layersConfig:ae(l).sort(function(e,t){const n=e["project_title_".concat(f)]||e["project_title_".concat(_.DEFAULT_LOCALE)]; const r=t["project_title_".concat(f)]||t["project_title_".concat(_.DEFAULT_LOCALE)];return Object(L.deburr)(Object(g.a)(n))>Object(L.deburr)(Object(g.a)(r))?1:-1}),projects:!0,locale:f,activeLayers:p,onLayerInfo:n,onToggleLayer:r}))}),c&&w&&w.id!==v.j&&!w.groups&&le(he,{},void 0,le(J,{group:w,layersConfig:c.filter(function(e){return e.category===w.id}),locale:f,activeLayers:p,onLayerInfo:n,onToggleLayer:r})),l&&w&&w.id===v.j&&!w.groups&&le(he,{},void 0,le(J,{group:w.id,layersConfig:l,projects:!0,locale:f,activeLayers:p,onLayerInfo:n,onToggleLayer:r})))))})}); const Ie=n("f9c0d22799479965d07c"); const Pe=n("02ed36e7ccc5625439c9"); const Ae=Object(d.defineMessages)({showLayerPanel:{id:"".concat("app.containers.PanelExplore",".showLayerPanel"),defaultMessage:"Layers"},showProjects:{id:"".concat("app.containers.PanelExplore",".showProjects"),defaultMessage:"Show WWF-projects"},hideProjects:{id:"".concat("app.containers.PanelExplore",".hideProjects"),defaultMessage:"Hide WWF-projects"},showProjectsShort:{id:"".concat("app.containers.PanelExplore",".showProjectsShort"),defaultMessage:"Show projects"},hideProjectsShort:{id:"".concat("app.containers.PanelExplore",".hideProjectsShort"),defaultMessage:"Hide projects"}});function Me(e,t,n,r){Ee||(Ee=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||60103);const o=e&&e.defaultProps; const a=arguments.length-3;if(t||a===0||(t={children:void 0}),a===1)t.children=r;else if(a>1){for(var i=new Array(a),l=0;l<a;l++)i[l]=arguments[l+3];t.children=i}if(t&&o)for(const c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:Ee,type:e,key:void 0===n?null:`${n}`,ref:null,props:t,_owner:null}}function Te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(e)))return;const n=[]; let r=!0; let o=!1; let a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||l.return==null||l.return()}finally{if(o)throw a}}return n}(e,t)||De(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ne(e){return function(e){if(Array.isArray(e))return Fe(e)}(e)||function(e){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}(e)||De(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function De(e,t){if(e){if(typeof e==="string")return Fe(e,t);let n=Object.prototype.toString.call(e).slice(8,-1);returnn==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fe(e,t):void 0}}function Fe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ge(e,t){if(e==null)return{};let n; let r; const o=function(e,t){if(e==null)return{};let n; let r; const o={}; const a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){const a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Be(){return(Be=Object.assign||function(e){for(let t=1;t<arguments.length;t++){const n=arguments[t];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"ModuleExplore",function(){return Qe});const We=Object(f.default)(function(e){return a.a.createElement(s.a,Be({gap:"small",direction:"row"},e))}).withConfig({displayName:"ModuleExplore__Buttons",componentId:"sc-1nskavd-0"})(["position:absolute;right:12px;top:22px;pointer-events:all;"]); const $e=Object(f.default)(function(e){return a.a.createElement(p.a,Be({plain:!0,reverse:!0},e))}).withConfig({displayName:"ModuleExplore__ShowButton",componentId:"sc-1nskavd-1"})(["font-family:'wwfregular';text-transform:uppercase;line-height:16px;background:",";color:",";border-radius:20px;padding:2px 13px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);&:hover{background:",";}@media (min-width:","){padding:5px 15px 5px 21px;}"],function(e){const t=e.theme; const n=e.projects;return t.global.colors[n?"white":"brand"]},function(e){const t=e.theme; const n=e.projects;return t.global.colors[n?"black":"white"]},function(e){const t=e.theme; const n=e.projects;return t.global.colors[n?"lightHover":"brandDark"]},function(e){return e.theme.sizes.medium.minpx}); const He=f.default.div.withConfig({displayName:"ModuleExplore__ProjectButtonWrap",componentId:"sc-1nskavd-2"})(["position:absolute;right:","px;top:20px;pointer-events:all;"],function(e){return e.asideOffset+20}); const Ue=function(e){const t=e.showAll; const n=e.lids; const r=e.pids; const o=e.onClick; const i=e.small; const l=Ge(e,["showAll","lids","pids","onClick","small"]); let c="";return c=i?t?Ae.showProjectsShort:Ae.hideProjectsShort:t?Ae.showProjects:Ae.hideProjects,a.a.createElement($e,Be({projects:!0,onClick(){o(t?Object(y.uniq)([].concat(Ne(n),Ne(r.map(function(e){return"".concat(v.k.id,"-").concat(e)})))):n.filter(function(e){return!Object(g.c)(e,"".concat(v.k.id,"-"))}))},label:a.a.createElement(d.FormattedMessage,c)},l))}; const ze="ModuleExplore"; const Ke={layersMemo:null}; const Re=Me(x.y,{color:"black"}); const qe=Me(x.y,{color:"black"}); const Je=Me(x.p,{color:"white"});function Qe(e){const t=e.onSetLayers; const n=e.layerIds; const r=e.projects; const i=e.uiState; const l=e.onMemoLayers; const u=e.activeLayers; const f=e.firstLanding; const s=e.onSetLanding; const p=e.intl; const y=(i?Object.assign({},Ke,i):Ke).layersMemo;Object(o.useEffect)(function(){y?t(y):v.g.explore.layers&&!f&&t(v.g.explore.layers),f&&s()},[]),Object(o.useEffect)(function(){l(u,i)},[u]);const j=Te(Object(o.useState)(!0),2); const w=j[0]; const O=j[1]; const x=Te(Object(o.useState)(!1),2); const L=x[0]; const _=x[1]; const C=r?r.map(function(e){return e.project_id}):[]; const E=n.filter(function(e){if(Object(g.c)(e,"".concat(v.k.id,"-"))){const t=e.replace("".concat(v.k.id,"-"),"");return C.indexOf(t)>-1}return!1}).map(function(e){return e.replace("".concat(v.k.id,"-"),"")}); const S=r&&E.length>=r.length;return Me(b.a.Consumer,{},void 0,function(e){return Me("div",{},void 0,Me(c.Helmet,{},void 0,Me("title",{},void 0,"".concat(p.formatMessage(Pe.a.module_explore_metaTitle)))),Me(Ie.a,{},void 0,w&&e!=="small"&&Me(He,{asideOffset:Object(h.b)(e)},void 0,Me(Ue,{showAll:!S,lids:n,pids:C,onClick:t,small:Object(h.d)(e,"small"),icon:Re})),w&&e!=="small"&&Me(ke,{onClose(){return O(!1)}}),L&&e==="small"&&Me(m.a,{full:!0},void 0,Me(ke,{onClose(){return _(!1)}})),(!w&&e!=="small"||!L&&e==="small")&&Me(We,{},void 0,e!=="small"&&Me(Ue,{showAll:!S,lids:n,pids:C,onClick:t,small:Object(h.d)(e,"small"),icon:qe}),Me($e,{onClick(){O(!0),_(!0)},icon:Je,label:a.a.createElement(d.FormattedMessage,Ae.showLayerPanel)}))))})}const Ve=Object(l.b)({layerIds(e){return Object(C.a)(e)},projects(e){return Object(C.c)(e,{key:"projects"})},uiState(e){return Object(C.w)(e,{key:ze})},activeLayers(e){return Object(C.a)(e)},firstLanding(e){return Object(C.j)(e)}});const Xe=Object(i.connect)(Ve,function(e){return{onSetLanding(){return e(Object(E.m)())},onSetLayers(t){return e(Object(E.o)(t))},onMemoLayers(t,n){return e(Object(E.r)(ze,Object.assign({},Ke,n,{layersMemo:t})))}}});t.default=Object(u.compose)(Xe)(Object(d.injectIntl)(Qe))}}]);