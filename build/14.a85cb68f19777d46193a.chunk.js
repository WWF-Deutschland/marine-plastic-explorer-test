(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{ea6b6d2a76346abcbd96:function(e,t,n){"use strict";n.r(t);var r,o=n("8af190b70a6bc55c6f1b"),a=n.n(o),i=n("0d7f0986bcd2f33d8a2a"),c=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),l=n("ab4cb61bcb2dc161defb"),f=n("a28fc3c963a1d4d1a2e5"),u=n("0b3cb19af78752326f59"),d=n("ab039aecd4a1d4fedc0e"),s=n("6542cd13fd5dd1bcffd4"),p=n("a72b40110d9c31c9b5c5"),b=n("eb656803928a435bd3cc"),m=n("66543f9bb6e90e461320"),h=n("5ca68c6edf7ca33c5f8f"),g=n("761b1f7fdd256e4f5426"),y=n("7a0805d5a888ddc3ee44"),v=n.n(y),w=n("a7c39d8357e500a5b832"),O=n("422249433a2d25af359d"),j=n("0785de3f40b134973d35"),C=n("d6f259ffb10cc810b5a4"),x=n("455f30c6322408a2ff3e"),_=n("c8e6563c3537109b383a"),S="app.containers.PanelChapter",k=Object(d.defineMessages)({next:{id:"".concat(S,".next"),defaultMessage:"Next"},exploreAll:{id:"".concat(S,".exploreAll"),defaultMessage:"Explore all layers"}});function E(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}if(t&&a)for(var f in a)void 0===t[f]&&(t[f]=a[f]);else t||(t=a||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var N=Object(u.default)(function(e){return a.a.createElement(b.a,I({},e,{direction:"row",gap:"hair"}))}).withConfig({displayName:"PanelChapter__Styled",componentId:"t1wy89-0"})(["position:absolute;left:0;bottom:35px;height:200px;pointer-events:all;z-index:4000;@media (min-width:","){bottom:40px;}"],function(e){return e.theme.sizes.medium.minpx}),A=Object(u.default)(function(e){return a.a.createElement(b.a,I({},e,{fill:"vertical",align:"center",elevation:"small",flex:{shrink:0},responsive:!1,background:"black"}))}).withConfig({displayName:"PanelChapter__ToggleWrap",componentId:"t1wy89-1"})(["width:40px;"]),z=Object(u.default)(function(e){return a.a.createElement(m.a,I({},e,{plain:!0,fill:!0}))}).withConfig({displayName:"PanelChapter__ButtonToggle",componentId:"t1wy89-2"})(["background:",";padding:",";&:hover{background:",";}"],function(e){return e.theme.global.colors.black},function(e){return e.theme.global.edgeSize.small},function(e){return e.theme.global.colors.dark}),M=Object(u.default)(function(e){return a.a.createElement(b.a,I({},e,{direction:"row",gap:"hair",fill:"horizontal"}))}).withConfig({displayName:"PanelChapter__ContentWrap",componentId:"t1wy89-3"})(["position:relative;"]),F=Object(u.default)(function(e){return a.a.createElement(b.a,I({},e,{background:"black",pad:{horizontal:"small",top:"small"},fill:"horizontal",elevation:"small",responsive:!1,flex:!1}))}).withConfig({displayName:"PanelChapter__Content",componentId:"t1wy89-4"})(["max-width:350px;overflow:hidden;@media (min-width:","){width:300px;}"],function(e){return e.theme.sizes.medium.minpx}),T=Object(u.default)(h.a).withConfig({displayName:"PanelChapter__Title",componentId:"t1wy89-5"})(["font-size:24px;line-height:27px;margin:0;margin-bottom:5px;font-family:'wwfregular';font-weight:normal;text-transform:uppercase;"]),D=Object(u.default)(function(e){return a.a.createElement(b.a,I({},e,{direction:"row",gap:"small"}))}).withConfig({displayName:"PanelChapter__ButtonWrap",componentId:"t1wy89-6"})(["position:absolute;bottom:0;right:",";transform:translateY(50%);"],function(e){return e.theme.global.edgeSize.small}),B=Object(u.default)(function(e){return a.a.createElement(m.a,I({},e,{reverse:!0,plain:!0}))}).withConfig({displayName:"PanelChapter__ButtonNext",componentId:"t1wy89-7"})(["background:",";color:",";border-radius:20px;padding:5px 20px;height:35px;font-family:'wwfregular';text-transform:uppercase;font-size:20px;&:hover{background:",";}"],function(e){return e.theme.global.colors.brand},function(e){return e.theme.global.colors.white},function(e){return e.theme.global.colors.brandDark}),U=Object(u.default)(function(e){return a.a.createElement(B,e)}).withConfig({displayName:"PanelChapter__ButtonPrevious",componentId:"t1wy89-8"})(["padding:5px 15px;"]),W=Object(u.default)(h.a).withConfig({displayName:"PanelChapter__Description",componentId:"t1wy89-9"})([""]),$=Object(u.default)(function(e){return a.a.createElement(b.a,I({},e,{direction:"row",gap:"small",flex:!1}))}).withConfig({displayName:"PanelChapter__LayersFocusWrap",componentId:"t1wy89-10"})(["width:100%;"]),J=Object(u.default)(function(e){return a.a.createElement(b.a,e)}).withConfig({displayName:"PanelChapter__LayerFocus",componentId:"t1wy89-11"})([""]),q=Object(u.default)(function(e){return a.a.createElement(b.a,I({},e,{direction:"row",align:"center"}))}).withConfig({displayName:"PanelChapter__LayerTitleWrap",componentId:"t1wy89-12"})([""]),H=Object(u.default)(h.a).withConfig({displayName:"PanelChapter__LayerTitle",componentId:"t1wy89-13"})(["font-size:14px;font-weight:600;"]),Y=Object(u.default)(function(e){return a.a.createElement(m.a,I({plain:!0},e))}).withConfig({displayName:"PanelChapter__LayerButtonInfo",componentId:"t1wy89-14"})(["padding:",";margin-left:",";border-radius:9999px;&:hover{background:",";}"],function(e){return e.theme.global.edgeSize.xxsmall},function(e){return e.stretch?"auto":0},function(e){return e.theme.global.colors["dark-1"]}),G=2,K="PanelChapter",Q={open:!0},R="xlarge",V="large",X=E(w.k,{}),Z=E(w.n,{}),ee=E(w.r,{}),te=E(w.b,{color:"white"}),ne=E(w.d,{color:"white"});var re=Object(f.b)({exploreConfig:function(e){return Object(s.i)(e)},locale:function(e){return Object(s.n)(e)},uiState:function(e){return Object(s.v)(e,{key:K})}});var oe,ae=Object(c.connect)(re,function(e){return{onSetOpen:function(t,n){return e(Object(p.r)(K,Object.assign({},Q,n,{open:t})))},onLayerInfo:function(t){return e(Object(p.n)(t))},onSetLayers:function(t){return e(Object(p.o)(t))},navModule:function(t){return C.g[t]&&e(Object(p.c)(C.g[t].path))}}}),ie=Object(l.compose)(ae)(function(e){var t=e.onPrevious,n=e.onNext,r=e.onSetLayers,i=e.locale,c=e.chapter,l=e.isFirst,f=e.isLast,u=e.uiState,s=e.onSetOpen,p=e.onLayerInfo,m=e.layersConfig,h=e.navModule,y=(u?Object.assign({},Q,u):Q).open,w=L(Object(o.useState)(0),2),C=w[0],S=w[1];Object(o.useEffect)(function(){c&&r(c.layers||[])},[c]);var P=c&&c.layersFocus&&m&&m.filter(function(e){return c.layersFocus.slice(0,2).indexOf(e.id)>-1});return E(g.a.Consumer,{},void 0,function(e){return E(N,{},void 0,E(A,{},void 0,E(z,{icon:E(b.a,{fill:!0,justify:"start"},void 0,y?X:Z),onClick:function(){return s(!y)}})),y&&E(M,{},void 0,(Object(_.e)(e,R)||0===C)&&E(F,{},void 0,c&&i&&E(T,{},void 0,c.title[i]||c.title[j.DEFAULT_LOCALE]),P&&P.length>0&&E($,{fill:!0},void 0,P.map(function(e){return E(J,{fill:1===P.length&&"horizontal",basis:P.length>1?"".concat(1/P.length):"1"},e.id,E(q,{fill:1===P.length&&"horizontal"},void 0,i&&E(H,{},void 0,e["title-short"]&&(e["title-short"][i]||e["title-short"][j.DEFAULT_LOCALE]),!e["title-short"]&&(e.title[i]||e.title[j.DEFAULT_LOCALE])),E(Y,{onClick:function(){return p(e["content-id"]||e.id)},icon:ee,stretch:1===P.length})),E(x.a,{config:e,simple:!0,dark:!0}))}))),(Object(_.e)(e,R)||1===C)&&E(F,{},void 0,c&&i&&E(W,{className:"mpx-wrap-markdown-intro"},void 0,E(v.a,{options:{html:!0},source:Object(O.a)(c.description[i]||c.description[j.DEFAULT_LOCALE],{para:!0})}))),E(D,{},void 0,(!l||Object(_.d)(e,V)&&C>0)&&E(U,{icon:te,onClick:function(){Object(_.d)(e,V)?(C>0&&S(C-1),0===C&&(l||S(G-1),p(),t())):(p(),t())}}),!f&&E(B,{icon:ne,label:E(b.a,{margin:{top:"-4px"}},void 0,a.a.createElement(d.FormattedMessage,k.next)),onClick:function(){Object(_.d)(e,V)?(C<G-1&&S(C+1),C===G-1&&(f||S(0),p(),n())):(p(),n())}}),f&&E(B,{label:E(b.a,{margin:{top:"-4px"}},void 0,a.a.createElement(d.FormattedMessage,k.exploreAll)),onClick:function(){h("explore")}}))))})}),ce=n("f9c0d22799479965d07c"),le=n("02ed36e7ccc5625439c9");function fe(e,t,n,r){oe||(oe="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});return{$$typeof:oe,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,"ModuleStories",function(){return de});var ue=u.default.div.withConfig({displayName:"ModuleStories__Styled",componentId:"sc-132en5s-0"})([""]);function de(e){var t=e.layersConfig,n=e.storiesConfig,r=e.onPrevious,a=e.onNext,c=e.story,l=e.chapter,f=e.onSetStory,u=e.onSetChapter,d=e.onSetLanding,s=e.firstLanding,p=e.intl;if(Object(o.useEffect)(function(){s&&d()},[]),Object(o.useEffect)(function(){c||f(0),l||u(0)}),!n)return null;var b=1===n.length?n[0]:n[c],m=b.chapters&&b.chapters.length>0&&b.chapters[l];return fe(ue,{},void 0,fe(i.Helmet,{},void 0,fe("title",{},void 0,"".concat(p.formatMessage(le.a.module_stories_metaTitle)))),fe(ce.a,{},void 0,t&&b.chapters&&l<b.chapters.length&&fe(ie,{onPrevious:function(){return r(l)},onNext:function(){a(l,b.chapters.length)},chapter:m,isFirst:0===l,isLast:l===b.chapters.length-1,layersConfig:t.filter(function(e){return m&&m.layers&&m.layers.indexOf(e.id)>-1})})))}var se=Object(f.b)({layersConfig:function(e){return Object(s.m)(e)},storiesConfig:function(e){return Object(s.t)(e)},story:function(e){return Object(s.u)(e)},chapter:function(e){return Object(s.b)(e)},firstLanding:function(e){return Object(s.j)(e)}});var pe=Object(c.connect)(se,function(e){return{onNext:function(t,n){return e(Object(p.f)(Math.min(t+1,n)))},onPrevious:function(t){return e(Object(p.f)(Math.max(t-1,0)))},onSetChapter:function(t){return e(Object(p.f)(t))},onSetStory:function(t){return e(Object(p.q)(t))},onSetLanding:function(){return e(Object(p.m)())}}});t.default=Object(l.compose)(pe)(Object(d.injectIntl)(de))}}]);