(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{"/0+H":function(e,s,t){"use strict";s.__esModule=!0,s.isInAmpMode=i,s.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=t("FdF9"))&&n.__esModule?n:{default:n},a=t("lwAK");function i(){var{ampFirst:e=!1,hybrid:s=!1,hasQuery:t=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||s&&t}},0:function(e,s,t){t("74v/"),e.exports=t("nOHt")},"09TT":function(e,s,t){},"74v/":function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("cha2")}])},"8Kt/":function(e,s,t){"use strict";s.__esModule=!0,s.defaultHead=l,s.default=void 0;var n=r(t("FdF9")),o=r(t("Xuae")),a=t("lwAK"),i=t("FYa8"),c=t("/0+H");function r(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=[n.default.createElement("meta",{charSet:"utf-8"})];return e||s.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),s}function d(e,s){return"string"===typeof s||"number"===typeof s?e:s.type===n.default.Fragment?e.concat(n.default.Children.toArray(s.props.children).reduce((e,s)=>"string"===typeof s||"number"===typeof s?e:e.concat(s),[])):e.concat(s)}var p=["name","httpEquiv","charSet","itemProp"];function m(e,s){return e.reduce((e,s)=>{var t=n.default.Children.toArray(s.props.children);return e.concat(t)},[]).reduce(d,[]).reverse().concat(l(s.inAmpMode)).filter(function(){var e=new Set,s=new Set,t=new Set,n={};return o=>{var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":s.has(o.type)?a=!1:s.add(o.type);break;case"meta":for(var c=0,r=p.length;c<r;c++){var l=p[c];if(o.props.hasOwnProperty(l))if("charSet"===l)t.has(l)?a=!1:t.add(l);else{var d=o.props[l],m=n[l]||new Set;m.has(d)?a=!1:(m.add(d),n[l]=m)}}}return a}}()).reverse().map((e,s)=>{var t=e.key||s;return n.default.cloneElement(e,{key:t})})}var g=(0,o.default)();function f(e){var{children:s}=e;return(n.default.createElement(a.AmpStateContext.Consumer,null,e=>n.default.createElement(i.HeadManagerContext.Consumer,null,t=>n.default.createElement(g,{reduceComponentsToState:m,handleStateChange:t,inAmpMode:(0,c.isInAmpMode)(e)},s))))}f.rewind=g.rewind;var b=f;s.default=b},Xuae:function(e,s,t){"use strict";s.__esModule=!0,s.default=void 0;var n=t("FdF9");s.default=()=>{var e,s=new Set;function t(t){e=t.props.reduceComponentsToState([...s],t.props),t.props.handleStateChange&&t.props.handleStateChange(e)}return class extends n.Component{static rewind(){var t=e;return e=void 0,s.clear(),t}constructor(e){super(e)}componentDidMount(){s.add(this),t(this)}componentDidUpdate(){t(this)}componentWillUnmount(){s.delete(this),t(this)}render(){return null}}}},c95Q:function(e,s,t){},cha2:function(e,s,t){"use strict";t.r(s);t("iJnL"),t("c95Q"),t("09TT");var n=t("FdF9"),o=t("ccnO"),a=t("MX0m"),i=t.n(a),c=n.default.createElement,r=()=>{var e=Object(o.b)();return c(n.default.Fragment,null,c(i.a,{id:"2800364421",dynamic:[e.colors.bg1,e.colors.textColor,e.fontFamilies["sans-serif"]]},["html,body,#__next{background:".concat(e.colors.bg1,";color:").concat(e.colors.textColor,";font-family:").concat(e.fontFamilies["sans-serif"],";height:100%;margin:0;width:100%;}"),"*{color:inherit;font-family:inherit;}","*:active,*:focus{outline:none !important;}"]))},l=t("8Kt/"),d=t.n(l),p=t("WRhx"),m=()=>{var[e,s]=Object(p.a)({x:window.pageXOffset,y:window.pageYOffset});return Object(n.useEffect)(()=>{var e=()=>{s({x:window.pageXOffset,y:window.pageYOffset})};return window.addEventListener("scroll",e,{capture:!1,passive:!0}),()=>{window.removeEventListener("scroll",e)}},[]),e},g=n.default.createElement,f=()=>{var e=Object(o.b)(),{y:s}=m();return g("nav",{className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])+" fixed"},g("div",{className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])+" wrapper container"},g("div",{className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])+" inner"},g("div",{className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])+" title"},g("p",{className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])},"Notion",g("span",{className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])},"API"))),g("div",{className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])+" links"},g("a",{className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])},"Features"),g("a",{className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])},"Capabilities"),g("a",{className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])},"Pricing"),g("a",{className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])},"More"," ",g("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])},g("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd",className:i.a.dynamic([["1117542115",[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]]])})))))),g(i.a,{id:"1117542115",dynamic:[s>0?e.colors.bg2:"transparent",s>0?e.shadow:"none",e.spacings[8],e.spacings[4],e.fontSizes["2xl"],e.fontWeights.bold,e.spacings[4],e.colors.primary,e.colors.tertiaryTextColor,e.fontSizes.base,"0 "+e.spacings[4],e.fontSizes.lg]},["nav.__jsx-style-dynamic-selector{background:".concat(s>0?e.colors.bg2:"transparent",";box-shadow:").concat(s>0?e.shadow:"none",";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:0;-webkit-transition:all 300ms;transition:all 300ms;width:100%;z-index:99;}"),".wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:auto;padding:".concat(e.spacings[8],";width:100%;}"),".inner.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:".concat(e.spacings[4],";-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;width:100%;}"),".title.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:".concat(e.fontSizes["2xl"],";font-weight:").concat(e.fontWeights.bold,";height:").concat(e.spacings[4],";left:0;position:absolute;}"),".title.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:".concat(e.colors.primary,";}"),".links.__jsx-style-dynamic-selector{color:".concat(e.colors.tertiaryTextColor,";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:").concat(e.fontSizes.base,";}"),".links.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:".concat("0 "+e.spacings[4],";}"),".links.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{height:".concat(e.fontSizes.lg,";}")]))},b=t("WIXP"),y=t("Bpuu"),x=n.default.createElement,u=()=>{var e=Object(o.b)();return x("div",{id:"waitlist",className:i.a.dynamic([["4106532800",[e.colors.bg2,e.spacings[16]+" 0",e.colors.bg1,e.spacings[12],e.breakpoints.md,e.breakpoints.md,e.spacings[8],e.colors.accent,e.fontSizes["4xl"],e.fontWeights.bold,e.colors.secondaryTextColor,e.fontSizes.xl,e.fontWeights.medium,e.spacings[4],e.breakpoints.md,e.spacings[4],e.breakpoints.sm,e.spacings[4],e.breakpoints.sm]]])},x(b.a,null,x("div",{className:i.a.dynamic([["4106532800",[e.colors.bg2,e.spacings[16]+" 0",e.colors.bg1,e.spacings[12],e.breakpoints.md,e.breakpoints.md,e.spacings[8],e.colors.accent,e.fontSizes["4xl"],e.fontWeights.bold,e.colors.secondaryTextColor,e.fontSizes.xl,e.fontWeights.medium,e.spacings[4],e.breakpoints.md,e.spacings[4],e.breakpoints.sm,e.spacings[4],e.breakpoints.sm]]])+" card"},x("div",{className:i.a.dynamic([["4106532800",[e.colors.bg2,e.spacings[16]+" 0",e.colors.bg1,e.spacings[12],e.breakpoints.md,e.breakpoints.md,e.spacings[8],e.colors.accent,e.fontSizes["4xl"],e.fontWeights.bold,e.colors.secondaryTextColor,e.fontSizes.xl,e.fontWeights.medium,e.spacings[4],e.breakpoints.md,e.spacings[4],e.breakpoints.sm,e.spacings[4],e.breakpoints.sm]]])+" tagline"},x("h2",{className:i.a.dynamic([["4106532800",[e.colors.bg2,e.spacings[16]+" 0",e.colors.bg1,e.spacings[12],e.breakpoints.md,e.breakpoints.md,e.spacings[8],e.colors.accent,e.fontSizes["4xl"],e.fontWeights.bold,e.colors.secondaryTextColor,e.fontSizes.xl,e.fontWeights.medium,e.spacings[4],e.breakpoints.md,e.spacings[4],e.breakpoints.sm,e.spacings[4],e.breakpoints.sm]]])},"Ready to get started?"),x("h3",{className:i.a.dynamic([["4106532800",[e.colors.bg2,e.spacings[16]+" 0",e.colors.bg1,e.spacings[12],e.breakpoints.md,e.breakpoints.md,e.spacings[8],e.colors.accent,e.fontSizes["4xl"],e.fontWeights.bold,e.colors.secondaryTextColor,e.fontSizes.xl,e.fontWeights.medium,e.spacings[4],e.breakpoints.md,e.spacings[4],e.breakpoints.sm,e.spacings[4],e.breakpoints.sm]]])},"Find us on Github or visit our developer blog.")),x("div",{className:i.a.dynamic([["4106532800",[e.colors.bg2,e.spacings[16]+" 0",e.colors.bg1,e.spacings[12],e.breakpoints.md,e.breakpoints.md,e.spacings[8],e.colors.accent,e.fontSizes["4xl"],e.fontWeights.bold,e.colors.secondaryTextColor,e.fontSizes.xl,e.fontWeights.medium,e.spacings[4],e.breakpoints.md,e.spacings[4],e.breakpoints.sm,e.spacings[4],e.breakpoints.sm]]])+" form"},x(y.a,{primary:!0},"View on Github"),x(y.a,null,"Developer Blog")))),x(i.a,{id:"4106532800",dynamic:[e.colors.bg2,e.spacings[16]+" 0",e.colors.bg1,e.spacings[12],e.breakpoints.md,e.breakpoints.md,e.spacings[8],e.colors.accent,e.fontSizes["4xl"],e.fontWeights.bold,e.colors.secondaryTextColor,e.fontSizes.xl,e.fontWeights.medium,e.spacings[4],e.breakpoints.md,e.spacings[4],e.breakpoints.sm,e.spacings[4],e.breakpoints.sm]},["#waitlist.__jsx-style-dynamic-selector{background:".concat(e.colors.bg2,";padding:").concat(e.spacings[16]+" 0",";}"),"#waitlist.__jsx-style-dynamic-selector .card.__jsx-style-dynamic-selector{background:".concat(e.colors.bg1,";border-radius:0.375rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:").concat(e.spacings[12],";}"),"@media screen and (max-width:".concat(e.breakpoints.md,"){#waitlist.__jsx-style-dynamic-selector .card.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"),".tagline.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}","@media screen and (max-width:".concat(e.breakpoints.md,"){.tagline.__jsx-style-dynamic-selector{margin-bottom:").concat(e.spacings[8],";}}"),".tagline.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:".concat(e.colors.accent,";font-size:").concat(e.fontSizes["4xl"],";font-weight:").concat(e.fontWeights.bold,";}"),".tagline.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{color:".concat(e.colors.secondaryTextColor,";font-size:").concat(e.fontSizes.xl,";font-weight:").concat(e.fontWeights.medium,";margin-top:").concat(e.spacings[4],";opacity:0.8;}"),".form.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","@media screen and (max-width:".concat(e.breakpoints.md,"){.form.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"),".form.__jsx-style-dynamic-selector button:first-of-type{margin-bottom:".concat(e.spacings[4],";}"),"@media screen and (min-width:".concat(e.breakpoints.sm,"){.form.__jsx-style-dynamic-selector button:first-of-type{margin-bottom:0;margin-right:").concat(e.spacings[4],";}}"),"@media screen and (max-width:".concat(e.breakpoints.sm,"){.form.__jsx-style-dynamic-selector button{width:100%;}}")]))},h=n.default.createElement;s.default=e=>{var{Component:s,pageProps:t}=e;return h(o.a,null,h(d.a,null,h("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),h("title",null,"NotionAPI")),h(r,null),h(f,null),h(s,t),h(u,null))}},iJnL:function(e,s,t){},lwAK:function(e,s,t){"use strict";var n;s.__esModule=!0,s.AmpStateContext=void 0;var o=((n=t("FdF9"))&&n.__esModule?n:{default:n}).default.createContext({});s.AmpStateContext=o}},[[0,0,1,2,3,4]]]);