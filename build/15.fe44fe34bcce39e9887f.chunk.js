(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ea6b6d2a76346abcbd96:function(e,t,n){"use strict";n.r(t);var r,o=n("8af190b70a6bc55c6f1b"),a=n.n(o),i=n("0d7f0986bcd2f33d8a2a"),l=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("ab4cb61bcb2dc161defb"),f=n("a28fc3c963a1d4d1a2e5"),u=n("0b3cb19af78752326f59"),d=n("ab039aecd4a1d4fedc0e"),s=n("6542cd13fd5dd1bcffd4"),p=n("a72b40110d9c31c9b5c5"),m=n("eb656803928a435bd3cc"),b=n("66543f9bb6e90e461320"),h=n("5ca68c6edf7ca33c5f8f"),g=n("761b1f7fdd256e4f5426"),y=n("7a0805d5a888ddc3ee44"),v=n.n(y),w=n("a7c39d8357e500a5b832"),x=n("422249433a2d25af359d"),O=n("0785de3f40b134973d35"),j=n("d6f259ffb10cc810b5a4"),C=n("1b0ed09bed43ca221d1b"),_=n("455f30c6322408a2ff3e"),S=n("c8e6563c3537109b383a"),L="app.containers.PanelChapter",E=Object(d.defineMessages)({next:{id:"".concat(L,".next"),defaultMessage:"Next"},exploreAll:{id:"".concat(L,".exploreAll"),defaultMessage:"Explore all layers"}});function k(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}if(t&&a)for(var f in a)void 0===t[f]&&(t[f]=a[f]);else t||(t=a||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var N=Object(u.default)(function(e){return a.a.createElement(m.a,I({},e,{direction:"row",gap:"hair"}))}).withConfig({displayName:"PanelChapter__Styled",componentId:"t1wy89-0"})(["position:absolute;left:0;bottom:35px;height:200px;pointer-events:all;z-index:2500;@media (min-width:","){bottom:40px;}"],function(e){return e.theme.sizes.medium.minpx}),A=Object(u.default)(function(e){return a.a.createElement(m.a,I({},e,{fill:"vertical",align:"center",elevation:"small",flex:{shrink:0},responsive:!1,background:"black"}))}).withConfig({displayName:"PanelChapter__ToggleWrap",componentId:"t1wy89-1"})(["width:40px;position:relative;z-index:3;"]),M=Object(u.default)(function(e){return a.a.createElement(b.a,I({},e,{plain:!0,fill:!0}))}).withConfig({displayName:"PanelChapter__ButtonToggle",componentId:"t1wy89-2"})(["background:",";padding:",";&:hover{background:",";}"],function(e){return e.theme.global.colors.black},function(e){return e.theme.global.edgeSize.small},function(e){return e.theme.global.colors.dark}),F=Object(u.default)(function(e){return a.a.createElement(m.a,I({},e,{direction:"row",gap:"hair",fill:"horizontal"}))}).withConfig({displayName:"PanelChapter__ContentWrap",componentId:"t1wy89-3"})(["position:relative;z-index:2;"]),T=Object(u.default)(function(e){return a.a.createElement(m.a,I({},e,{background:"black",pad:{horizontal:"small",top:"small"},fill:"horizontal",elevation:"small",responsive:!1,flex:!1}))}).withConfig({displayName:"PanelChapter__Content",componentId:"t1wy89-4"})(["max-width:350px;overflow:hidden;@media (min-width:","){width:300px;}"],function(e){return e.theme.sizes.medium.minpx}),D=Object(u.default)(h.a).withConfig({displayName:"PanelChapter__Title",componentId:"t1wy89-5"})(["font-size:22px;line-height:23px;margin:0;margin-bottom:5px;font-family:'wwfregular';font-weight:normal;text-transform:uppercase;@media (min-width:","){font-size:26px;line-height:27px;}"],function(e){return e.theme.sizes.xlarge.minpx}),W=Object(u.default)(function(e){return a.a.createElement(m.a,I({},e,{direction:"row",gap:"small"}))}).withConfig({displayName:"PanelChapter__ButtonWrap",componentId:"t1wy89-6"})(["position:absolute;bottom:0;right:",";transform:translateY(50%);"],function(e){return e.theme.global.edgeSize.small}),B=Object(u.default)(function(e){return a.a.createElement(b.a,I({},e,{reverse:!0,plain:!0}))}).withConfig({displayName:"PanelChapter__ButtonNext",componentId:"t1wy89-7"})(["background:",";color:",";border-radius:20px;padding:2px 12px;height:25px;&:hover{background:",";}@media (min-width:","){font-size:20px;height:35px;padding:5px 20px;}"],function(e){return e.theme.global.colors.brand},function(e){return e.theme.global.colors.white},function(e){return e.theme.global.colors.brandDark},function(e){return e.theme.sizes.medium.minpx}),U=Object(u.default)(function(e){return a.a.createElement(B,e)}).withConfig({displayName:"PanelChapter__ButtonPrevious",componentId:"t1wy89-8"})(["padding:2px 12px;@media (min-width:","){padding:5px 15px;}"],function(e){return e.theme.sizes.medium.minpx}),$=Object(u.default)(function(e){return a.a.createElement(m.a,e)}).withConfig({displayName:"PanelChapter__LabelWrap",componentId:"t1wy89-9"})(["font-family:'wwfregular';text-transform:uppercase;font-size:16px;line-height:1;"]),J=Object(u.default)(h.a).withConfig({displayName:"PanelChapter__Description",componentId:"t1wy89-10"})(["font-size:13px;@media (min-width:","){font-size:15px;}"],function(e){return e.theme.sizes.medium.minpx}),H=Object(u.default)(function(e){return a.a.createElement(m.a,I({},e,{direction:"row",gap:"xsmall",flex:!1,fill:!0}))}).withConfig({displayName:"PanelChapter__LayersFocusWrap",componentId:"t1wy89-11"})([""]),Y=Object(u.default)(function(e){return a.a.createElement(m.a,e)}).withConfig({displayName:"PanelChapter__LayerFocus",componentId:"t1wy89-12"})([""]),q=Object(u.default)(function(e){return a.a.createElement(m.a,I({direction:"row",align:"center",margin:{bottom:"xsmall"}},e))}).withConfig({displayName:"PanelChapter__LayerTitleWrap",componentId:"t1wy89-13"})([""]),G=Object(u.default)(h.a).withConfig({displayName:"PanelChapter__LayerTitle",componentId:"t1wy89-14"})(["font-size:13px;line-height:16px;font-weight:600;"]),K=Object(u.default)(function(e){return a.a.createElement(b.a,I({plain:!0},e))}).withConfig({displayName:"PanelChapter__LayerButtonInfo",componentId:"t1wy89-15"})(["padding:",";border-radius:9999px;margin-left:",";&:hover{background:",";}"],function(e){return e.theme.global.edgeSize.xxsmall},function(e){return e.stretch?"auto":0},function(e){return e.theme.global.colors["dark-1"]}),Q=2,R="PanelChapter",V={open:!0},X="xlarge",Z="large",ee=k(w.k,{}),te=k(w.n,{}),ne=k(w.r,{}),re=k(w.b,{color:"white"}),oe=k(w.c,{color:"white"});var ae=Object(f.b)({exploreConfig:function(e){return Object(s.i)(e)},locale:function(e){return Object(s.o)(e)},uiState:function(e){return Object(s.x)(e,{key:R})},jsonLayers:function(e){return Object(C.f)(e)}});var ie,le=Object(l.connect)(ae,function(e){return{onSetOpen:function(t,n){return e(Object(p.s)(R,Object.assign({},V,n,{open:t})))},onLayerInfo:function(t){return e(Object(p.n)(t))},onSetLayers:function(t){return e(Object(p.o)(t))},navModule:function(t){return j.h[t]&&e(Object(p.c)(j.h[t].path))}}}),ce=Object(c.compose)(le)(function(e){var t=e.onPrevious,n=e.onNext,r=e.onSetLayers,i=e.locale,l=e.chapter,c=e.isFirst,f=e.isLast,u=e.uiState,s=e.onSetOpen,p=e.onLayerInfo,b=e.layersConfig,h=e.navModule,y=e.jsonLayers,w=(u?Object.assign({},V,u):V).open,j=P(Object(o.useState)(0),2),C=j[0],L=j[1];Object(o.useEffect)(function(){l&&b&&r(l.layers||[])},[l,b]);var z=l&&l.layersFocus&&b&&b.filter(function(e){return l.layersFocus.slice(0,2).indexOf(e.id)>-1});return k(g.a.Consumer,{},void 0,function(e){return k(N,{},void 0,k(A,{},void 0,k(M,{icon:k(m.a,{fill:!0,justify:"start"},void 0,w?ee:te),onClick:function(){return s(!w)}})),w&&k(F,{},void 0,(Object(S.e)(e,X)||0===C)&&k(T,{},void 0,l&&i&&k(D,{},void 0,l.title[i]||l.title[O.DEFAULT_LOCALE]),z&&z.length>0&&k(H,{basis:z.length>1?"1/2":"auto"},void 0,z.map(function(e){return k(Y,{fill:"horizontal"},e.id,k(q,{fill:"horizontal"},void 0,i&&k(G,{},void 0,e["title-short"]&&(e["title-short"][i]||e["title-short"][O.DEFAULT_LOCALE]),!e["title-short"]&&(e.title[i]||e.title[O.DEFAULT_LOCALE])),k(K,{onClick:function(){return p(e["content-id"]||e.id)},icon:ne,stretch:!0})),k(_.a,{config:e,simple:!0,dark:!0,layerData:e&&y[e.id]?y[e.id].data:null}))}))),(Object(S.e)(e,X)||1===C)&&k(T,{},void 0,l&&i&&k(J,{className:"mpx-wrap-markdown-description"},void 0,k(v.a,{options:{html:!0},source:Object(x.b)(l.description[i]||l.description[O.DEFAULT_LOCALE],{para:!0})}))),k(W,{},void 0,(!c||Object(S.d)(e,Z)&&C>0)&&k(U,{icon:re,onClick:function(){Object(S.d)(e,Z)?(C>0&&L(C-1),0===C&&(c||L(Q-1),p(),t())):(p(),t())}}),(!f||Object(S.d)(e,Z)&&0===C)&&k(B,{icon:oe,label:k($,{margin:{top:"small"===e?"-3px":"-4px"}},void 0,a.a.createElement(d.FormattedMessage,E.next)),gap:"small"===e?"xsmall":"small",onClick:function(){Object(S.d)(e,Z)?(C<Q-1&&L(C+1),C===Q-1&&(f||L(0),p(),n())):(p(),n())}}),f&&(!Object(S.d)(e,Z)||C>0)&&k(B,{label:k($,{margin:{top:"-4px"}},void 0,a.a.createElement(d.FormattedMessage,E.exploreAll)),onClick:function(){h("explore")}}))))})}),fe=n("f9c0d22799479965d07c"),ue=n("02ed36e7ccc5625439c9");function de(e,t,n,r){ie||(ie="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var i=new Array(a),l=0;l<a;l++)i[l]=arguments[l+3];t.children=i}if(t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:ie,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,"ModuleStories",function(){return pe});var se=u.default.div.withConfig({displayName:"ModuleStories__Styled",componentId:"sc-132en5s-0"})([""]);function pe(e){var t=e.layersConfig,n=e.storiesConfig,r=e.onPrevious,a=e.onNext,l=e.story,c=e.chapter,f=e.onSetStory,u=e.onSetChapter,d=e.onSetLanding,s=e.firstLanding,p=e.intl;if(Object(o.useEffect)(function(){s&&d()},[]),Object(o.useEffect)(function(){l||f(0),c||u(0)}),!n)return null;var m=1===n.length?n[0]:n[l],b=m.chapters&&m.chapters.length>0&&m.chapters[c];return de(se,{},void 0,de(i.Helmet,{},void 0,de("title",{},void 0,"".concat(p.formatMessage(ue.a.module_stories_metaTitle)))),de(fe.a,{},void 0,t&&m.chapters&&c<m.chapters.length&&de(ce,{onPrevious:function(){return r(c)},onNext:function(){a(c,m.chapters.length)},chapter:b,isFirst:0===c,isLast:c===m.chapters.length-1,layersConfig:t.filter(function(e){return b&&b.layers&&b.layers.indexOf(e.id)>-1})})))}var me=Object(f.b)({layersConfig:function(e){return Object(s.n)(e)},storiesConfig:function(e){return Object(s.v)(e)},story:function(e){return Object(s.w)(e)},chapter:function(e){return Object(s.b)(e)},firstLanding:function(e){return Object(s.j)(e)}});var be=Object(l.connect)(me,function(e){return{onNext:function(t,n){return e(Object(p.f)(Math.min(t+1,n)))},onPrevious:function(t){return e(Object(p.f)(Math.max(t-1,0)))},onSetChapter:function(t){return e(Object(p.f)(t))},onSetStory:function(t){return e(Object(p.r)(t))},onSetLanding:function(){return e(Object(p.m)())}}});t.default=Object(c.compose)(be)(Object(d.injectIntl)(pe))}}]);