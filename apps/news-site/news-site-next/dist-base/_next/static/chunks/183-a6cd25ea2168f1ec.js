(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{7956:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return i}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}}let o=globalThis.AsyncLocalStorage;function i(){return o?new o:new n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9917:function(e,t,r){"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return n}}),r(3885),r(2363),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},117:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return p},useSearchParams:function(){return m},usePathname:function(){return h},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return l.useServerInsertedHTML},useRouter:function(){return v},useParams:function(){return g},useSelectedLayoutSegments:function(){return y},useSelectedLayoutSegment:function(){return b},redirect:function(){return s.redirect},permanentRedirect:function(){return s.permanentRedirect},RedirectType:function(){return s.RedirectType},notFound:function(){return c.notFound}});let n=r(2363),o=r(2123),i=r(9588),a=r(9917),u=r(1628),l=r(9756),s=r(5298),c=r(1333),d=Symbol("internal for urlsearchparams readonly");function f(){return Error("ReadonlyURLSearchParams cannot be modified")}class p{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw f()}delete(){throw f()}set(){throw f()}sort(){throw f()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function m(){(0,a.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(i.SearchParamsContext),t=(0,n.useMemo)(()=>e?new p(e):null,[e]);return t}function h(){return(0,a.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(i.PathnameContext)}function v(){(0,a.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function g(){(0,a.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext),t=(0,n.useContext)(i.PathParamsContext);return e?function e(t,r){void 0===r&&(r={});let n=t[1];for(let t of Object.values(n)){let n=t[0],o=Array.isArray(n),i=o?n[1]:n;if(!i||i.startsWith("__PAGE__"))continue;let a=o&&("c"===n[2]||"oc"===n[2]);a?r[n[0]]=n[1].split("/"):o&&(r[n[0]]=n[1]),r=e(t,r)}return r}(e.tree):t}function y(e){void 0===e&&(e="children"),(0,a.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function e(t,r,n,o){let i;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)i=t[1][r];else{var a;let e=t[1];i=null!=(a=e.children)?a:Object.values(e)[0]}if(!i)return o;let l=i[0],s=(0,u.getSegmentValue)(l);return!s||s.startsWith("__PAGE__")?o:(o.push(s),e(i,r,!1,o))}(t,e)}function b(e){void 0===e&&(e="children"),(0,a.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=y(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1333:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return n},isNotFoundError:function(){return o}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return(null==e?void 0:e.digest)===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5298:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return u},redirect:function(){return l},permanentRedirect:function(){return s},isRedirectError:function(){return c},getURLFromRedirectError:function(){return d},getRedirectTypeFromError:function(){return f}});let i=r(6187),a="NEXT_REDIRECT";function u(e,t,r){void 0===r&&(r=!1);let n=Error(a);n.digest=a+";"+t+";"+e+";"+r;let o=i.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function l(e,t){throw void 0===t&&(t="replace"),u(e,t,!1)}function s(e,t){throw void 0===t&&(t="replace"),u(e,t,!0)}function c(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,r,n,o]=e.digest.split(";",4);return t===a&&("replace"===r||"push"===r)&&"string"==typeof n&&("true"===o||"false"===o)}function d(e){return c(e)?e.digest.split(";",3)[2]:null}function f(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=n||(n={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6187:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let n=r(7956),o=(0,n.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1628:function(e,t){"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4981:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(3885),o=r(4819),i=o._(r(2363)),a=n._(r(1850)),u=n._(r(4388)),l=r(3150),s=r(6091),c=r(9281);r(1525);let d=r(9793),f=n._(r(2877)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/news-site-next/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,n,o,i){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function h(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let v=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:a,width:u,decoding:l,className:s,style:c,fetchPriority:d,placeholder:f,loading:p,unoptimized:v,fill:g,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:S,setShowAltText:C,onLoad:w,onError:x,...E}=e;return i.default.createElement("img",{...E,...h(d),loading:p,width:u,height:a,decoding:l,"data-nimg":g?"fill":"1",className:s,style:c,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,f,y,b,S,v))},[r,f,y,b,S,x,v,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,y,b,S,v)},onError:e=>{C(!0),"empty"!==f&&S(!0),x&&x(e)}})});function g(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):i.default.createElement(u.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let y=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(d.RouterContext),n=(0,i.useContext)(c.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:u}=e,m=(0,i.useRef)(a);(0,i.useEffect)(()=>{m.current=a},[a]);let h=(0,i.useRef)(u);(0,i.useEffect)(()=>{h.current=u},[u]);let[y,b]=(0,i.useState)(!1),[S,C]=(0,i.useState)(!1),{props:w,meta:x}=(0,l.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:y,showAltText:S});return i.default.createElement(i.default.Fragment,null,i.default.createElement(v,{...w,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:C,ref:t}),x.priority?i.default.createElement(g,{isAppRouter:!r,imgAttributes:w}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3150:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(1525);let n=r(3222),o=r(6091);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,l,s,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:h,quality:v,width:g,height:y,fill:b=!1,style:S,onLoad:C,onLoadingComplete:w,placeholder:x="empty",blurDataURL:E,fetchPriority:_,layout:O,objectFit:P,objectPosition:j,lazyBoundary:R,lazyRoot:U,...L}=e,{imgConf:M,showAltText:I,blurComplete:k,defaultLoader:A}=t,T=M||o.imageConfigDefault;if("allSizes"in T)u=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);u={...T,allSizes:e,deviceSizes:t}}let N=L.loader||A;delete L.loader,delete L.srcSet;let z="__next_img_default"in N;if(z){if("custom"===u.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(S={...S,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!d&&(d=t)}let F="",D=a(g),B=a(y);if("object"==typeof(r=c)&&(i(r)||void 0!==r.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,s=e.blurHeight,E=E||e.blurDataURL,F=e.src,!b){if(D||B){if(D&&!B){let t=D/e.width;B=Math.round(e.height*t)}else if(!D&&B){let t=B/e.height;D=Math.round(e.width*t)}}else D=e.width,B=e.height}}let J=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:F)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,J=!1),u.unoptimized&&(f=!0),z&&c.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(f=!0),p&&(_="high");let H=a(v),W=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:j}:{},I?{}:{color:"transparent"},S),V=k||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:D,heightInt:B,blurWidth:l,blurHeight:s,blurDataURL:E||"",objectFit:W.objectFit})+'")':'url("'+x+'")',G=V?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},K=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),c=l.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:l.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:i,width:l[c]})}}({config:u,src:c,unoptimized:f,width:D,quality:H,sizes:d,loader:N}),Z={...L,loading:J?"lazy":m,fetchPriority:_,width:D,height:B,decoding:"async",className:h,style:{...W,...G},sizes:K.sizes,srcSet:K.srcSet,src:K.src},Q={unoptimized:f,priority:p,placeholder:x,fill:b};return{props:Z,meta:Q}}},3222:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,u=n?40*n:t,l=o?40*o:r,s=u&&l?"viewBox='0 0 "+u+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},4866:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},unstable_getImgProps:function(){return l}});let n=r(3885),o=r(3150),i=r(1525),a=r(4981),u=n._(r(2877)),l=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/news-site-next/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=a.Image},2877:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},9756:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return i},useServerInsertedHTML:function(){return a}});let n=r(4819),o=n._(r(2363)),i=o.default.createContext(null);function a(e){let t=(0,o.useContext)(i);t&&t(e)}},2906:function(e,t,r){e.exports=r(4388)},4513:function(e,t,r){e.exports=r(4866)},27:function(e,t,r){e.exports=r(117)},765:function(e,t,r){e.exports=r(8419)},2355:function(e,t,r){e.exports=r(4884)},717:function(e,t,r){"use strict";r.d(t,{OL:function(){return x},UT:function(){return b},rU:function(){return w}});var n,o,i,a,u,l,s=r(2363),c=r(1850),d=r(9224),f=r(6498);/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}let h=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],v=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];try{window.__reactRouterVersion="6"}catch(e){}let g=s.createContext({isTransitioning:!1}),y=(i||(i=r.t(s,2))).startTransition;function b(e){let{basename:t,children:r,future:n,window:o}=e,i=s.useRef();null==i.current&&(i.current=(0,f.q_)({window:o,v5Compat:!0}));let a=i.current,[u,l]=s.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},p=s.useCallback(e=>{c&&y?y(()=>l(e)):l(e)},[l,c]);return s.useLayoutEffect(()=>a.listen(p),[a,p]),s.createElement(d.F0,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:a,future:n})}(a||(a=r.t(c,2))).flushSync,(i||(i=r.t(s,2))).useId;let S="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,C=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w=s.forwardRef(function(e,t){let r,{onClick:n,relative:o,reloadDocument:i,replace:a,state:u,target:l,to:c,preventScrollReset:v,unstable_viewTransition:g}=e,y=m(e,h),{basename:b}=s.useContext(d.Us),w=!1;if("string"==typeof c&&C.test(c)&&(r=c,S))try{let e=new URL(window.location.href),t=new URL(c.startsWith("//")?e.protocol+c:c),r=(0,f.Zn)(t.pathname,b);t.origin===e.origin&&null!=r?c=r+t.search+t.hash:w=!0}catch(e){}let x=(0,d.oQ)(c,{relative:o}),E=function(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:u}=void 0===t?{}:t,l=(0,d.s0)(),c=(0,d.TH)(),p=(0,d.WU)(e,{relative:a});return s.useCallback(t=>{0!==t.button||r&&"_self"!==r||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),l(e,{replace:void 0!==n?n:(0,f.Ep)(c)===(0,f.Ep)(p),state:o,preventScrollReset:i,relative:a,unstable_viewTransition:u}))},[c,l,p,n,o,r,e,i,a,u])}(c,{replace:a,state:u,target:l,preventScrollReset:v,relative:o,unstable_viewTransition:g});return s.createElement("a",p({},y,{href:r||x,onClick:w||i?n:function(e){n&&n(e),e.defaultPrevented||E(e)},ref:t,target:l}))}),x=s.forwardRef(function(e,t){let r,{"aria-current":n="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:c,unstable_viewTransition:h,children:y}=e,b=m(e,v),S=(0,d.WU)(c,{relative:b.relative}),C=(0,d.TH)(),x=s.useContext(d.FR),{navigator:E,basename:_}=s.useContext(d.Us),O=null!=x&&function(e,t){var r;let n;void 0===t&&(t={});let o=s.useContext(g);null!=o||(0,f.J0)(!1);let{basename:i}=(r=u.useViewTransitionState,(n=s.useContext(d.w3))||(0,f.J0)(!1),n),a=(0,d.WU)(e,{relative:t.relative});if(!o.isTransitioning)return!1;let l=(0,f.Zn)(o.currentLocation.pathname,i)||o.currentLocation.pathname,c=(0,f.Zn)(o.nextLocation.pathname,i)||o.nextLocation.pathname;return null!=(0,f.LX)(a.pathname,c)||null!=(0,f.LX)(a.pathname,l)}(S)&&!0===h,P=E.encodeLocation?E.encodeLocation(S).pathname:S.pathname,j=C.pathname,R=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;o||(j=j.toLowerCase(),R=R?R.toLowerCase():null,P=P.toLowerCase()),R&&_&&(R=(0,f.Zn)(R,_)||R);let U="/"!==P&&P.endsWith("/")?P.length-1:P.length,L=j===P||!a&&j.startsWith(P)&&"/"===j.charAt(U),M=null!=R&&(R===P||!a&&R.startsWith(P)&&"/"===R.charAt(P.length)),I={isActive:L,isPending:M,isTransitioning:O},k=L?n:void 0;r="function"==typeof i?i(I):[i,L?"active":null,M?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let A="function"==typeof l?l(I):l;return s.createElement(w,p({},b,{"aria-current":k,className:r,ref:t,style:A,to:c,unstable_viewTransition:h}),"function"==typeof y?y(I):y)});(n=u||(u={})).UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState",(o=l||(l={})).UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"},5105:function(e,t,r){"use strict";r.d(t,{fO:function(){return m}});var n=r(2363),o=r(717),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a="",u=null,l=null,s=null;function c(){a="",null!==u&&u.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function d(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function f(){var e=null;if("#"===a)e=document.body;else{var t=a.replace("#","");null===(e=document.getElementById(t))&&"#top"===a&&(e=document.body)}if(null!==e){s(e);var r=e.getAttribute("tabindex");return null!==r||d(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==r||d(e)||(e.blur(),e.removeAttribute("tabindex")),c(),!0}return!1}function p(e){return n.forwardRef(function(t,r){var d="";"string"==typeof t.to&&t.to.includes("#")?d="#"+t.to.split("#").slice(1).join("#"):"object"==typeof t.to&&"string"==typeof t.to.hash&&(d=t.to.hash);var p={};e===o.OL&&(p.isActive=function(e,t){return e&&e.isExact&&t.hash===d});var m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}(t,["scroll","smooth","timeout","elementId"]);return n.createElement(e,i({},p,m,{onClick:function(e){if(c(),a=t.elementId?"#"+t.elementId:d,t.onClick&&t.onClick(e),""!==a&&!e.defaultPrevented&&0===e.button&&(!t.target||"_self"===t.target)&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var r;s=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},r=t.timeout,window.setTimeout(function(){!1===f()&&(null===u&&(u=new MutationObserver(f)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout(function(){c()},r||1e4))},0)}},ref:r}),t.children)})}var m=p(o.rU);p(o.OL)},9224:function(e,t,r){"use strict";r.d(t,{AW:function(){return R},F0:function(){return U},FR:function(){return d},TH:function(){return y},Us:function(){return f},WU:function(){return C},Z5:function(){return L},oQ:function(){return v},s0:function(){return S},w3:function(){return c}});var n,o,i,a,u=r(2363),l=r(6498);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let c=u.createContext(null),d=u.createContext(null),f=u.createContext(null),p=u.createContext(null),m=u.createContext({outlet:null,matches:[],isDataRoute:!1}),h=u.createContext(null);function v(e,t){let{relative:r}=void 0===t?{}:t;g()||(0,l.J0)(!1);let{basename:n,navigator:o}=u.useContext(f),{hash:i,pathname:a,search:s}=C(e,{relative:r}),c=a;return"/"!==n&&(c="/"===a?n:(0,l.RQ)([n,a])),o.createHref({pathname:c,search:s,hash:i})}function g(){return null!=u.useContext(p)}function y(){return g()||(0,l.J0)(!1),u.useContext(p).location}function b(e){u.useContext(f).static||u.useLayoutEffect(e)}function S(){let{isDataRoute:e}=u.useContext(m);return e?function(){let e;let{router:t}=(_.UseNavigateStable,(e=u.useContext(c))||(0,l.J0)(!1),e),r=P(O.UseNavigateStable),n=u.useRef(!1);return b(()=>{n.current=!0}),u.useCallback(function(e,o){void 0===o&&(o={}),n.current&&("number"==typeof e?t.navigate(e):t.navigate(e,s({fromRouteId:r},o)))},[t,r])}():function(){g()||(0,l.J0)(!1);let e=u.useContext(c),{basename:t,future:r,navigator:n}=u.useContext(f),{matches:o}=u.useContext(m),{pathname:i}=y(),a=JSON.stringify((0,l.cm)(o,r.v7_relativeSplatPath)),s=u.useRef(!1);return b(()=>{s.current=!0}),u.useCallback(function(r,o){if(void 0===o&&(o={}),!s.current)return;if("number"==typeof r){n.go(r);return}let u=(0,l.pC)(r,JSON.parse(a),i,"path"===o.relative);null==e&&"/"!==t&&(u.pathname="/"===u.pathname?t:(0,l.RQ)([t,u.pathname])),(o.replace?n.replace:n.push)(u,o.state,o)},[t,n,a,i,e])}()}function C(e,t){let{relative:r}=void 0===t?{}:t,{future:n}=u.useContext(f),{matches:o}=u.useContext(m),{pathname:i}=y(),a=JSON.stringify((0,l.cm)(o,n.v7_relativeSplatPath));return u.useMemo(()=>(0,l.pC)(e,JSON.parse(a),i,"path"===r),[e,a,i,r])}let w=u.createElement(function(){var e;let t,r,n;let o=(r=u.useContext(h),O.UseRouteError,(t=u.useContext(d))||(0,l.J0)(!1),n=P(O.UseRouteError),void 0!==r?r:null==(e=t.errors)?void 0:e[n]),i=(0,l.WK)(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),a=o instanceof Error?o.stack:null;return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},i),a?u.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},a):null,null)},null);class x extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?u.createElement(m.Provider,{value:this.props.routeContext},u.createElement(h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E(e){let{routeContext:t,match:r,children:n}=e,o=u.useContext(c);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),u.createElement(m.Provider,{value:t},n)}var _=((n=_||{}).UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n),O=((o=O||{}).UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o);function P(e){let t;let r=((t=u.useContext(m))||(0,l.J0)(!1),t),n=r.matches[r.matches.length-1];return n.route.id||(0,l.J0)(!1),n.route.id}let j={};function R(e){(0,l.J0)(!1)}function U(e){let{basename:t="/",children:r=null,location:n,navigationType:o=l.aU.Pop,navigator:i,static:a=!1,future:c}=e;g()&&(0,l.J0)(!1);let d=t.replace(/^\/*/,"/"),m=u.useMemo(()=>({basename:d,navigator:i,static:a,future:s({v7_relativeSplatPath:!1},c)}),[d,c,i,a]);"string"==typeof n&&(n=(0,l.cP)(n));let{pathname:h="/",search:v="",hash:y="",state:b=null,key:S="default"}=n,C=u.useMemo(()=>{let e=(0,l.Zn)(h,d);return null==e?null:{location:{pathname:e,search:v,hash:y,state:b,key:S},navigationType:o}},[d,h,v,y,b,S,o]);return null==C?null:u.createElement(f.Provider,{value:m},u.createElement(p.Provider,{children:r,value:C}))}function L(e){let{children:t,location:r}=e;return function(e,t,r,n){let o;g()||(0,l.J0)(!1);let{navigator:i}=u.useContext(f),{matches:a}=u.useContext(m),c=a[a.length-1],d=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let v=y();if(t){var b;let e="string"==typeof t?(0,l.cP)(t):t;"/"===h||(null==(b=e.pathname)?void 0:b.startsWith(h))||(0,l.J0)(!1),o=e}else o=v;let S=o.pathname||"/",C=S;if("/"!==h){let e=h.replace(/^\//,"").split("/");C="/"+S.replace(/^\//,"").split("/").slice(e.length).join("/")}let _=(0,l.fp)(e,{pathname:C}),O=function(e,t,r,n){var o,i;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===n&&(n=null),null==e){if(null==(i=r)||!i.errors)return null;e=r.matches}let a=e,s=null==(o=r)?void 0:o.errors;if(null!=s){let e=a.findIndex(e=>e.route.id&&(null==s?void 0:s[e.route.id]));e>=0||(0,l.J0)(!1),a=a.slice(0,Math.min(a.length,e+1))}let c=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(d=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||o){c=!0,a=d>=0?a.slice(0,d+1):[a[0]];break}}}return a.reduceRight((e,n,o)=>{var i;let l;let f=!1,p=null,m=null;r&&(l=s&&n.route.id?s[n.route.id]:void 0,p=n.route.errorElement||w,c&&(d<0&&0===o?(j[i="route-fallback"]||(j[i]=!0),f=!0,m=null):d===o&&(f=!0,m=n.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,o+1)),v=()=>{let t;return t=l?p:f?m:n.route.Component?u.createElement(n.route.Component,null):n.route.element?n.route.element:e,u.createElement(E,{match:n,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===o)?u.createElement(x,{location:r.location,revalidation:r.revalidation,component:p,error:l,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}(_&&_.map(e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:(0,l.RQ)([h,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?h:(0,l.RQ)([h,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,void 0,void 0);return t&&O?u.createElement(p.Provider,{value:{location:s({pathname:"/",search:"",hash:"",state:null,key:"default"},o),navigationType:l.aU.Pop}},O):O}(function e(t,r){void 0===r&&(r=[]);let n=[];return u.Children.forEach(t,(t,o)=>{if(!u.isValidElement(t))return;let i=[...r,o];if(t.type===u.Fragment){n.push.apply(n,e(t.props.children,i));return}t.type!==R&&(0,l.J0)(!1),t.props.index&&t.props.children&&(0,l.J0)(!1);let a={id:t.props.id||i.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(a.children=e(t.props.children,i)),n.push(a)}),n}(t),r)}(a||(a=r.t(u,2))).startTransition;var M=((i=M||{})[i.pending=0]="pending",i[i.success=1]="success",i[i.error=2]="error",i);new Promise(()=>{})},9429:function(e,t,r){"use strict";let n;r.d(t,{Z:function(){return l}});let o="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var i={randomUUID:o};let a=new Uint8Array(16),u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));var l=function(e,t,r){if(i.randomUUID&&!t&&!e)return i.randomUUID();e=e||{};let o=e.random||(e.rng||function(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)})();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=o[e];return t}return function(e,t=0){return u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]}(o)}},8667:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}(r)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()}}]);
//# sourceMappingURL=183-a6cd25ea2168f1ec.js.map