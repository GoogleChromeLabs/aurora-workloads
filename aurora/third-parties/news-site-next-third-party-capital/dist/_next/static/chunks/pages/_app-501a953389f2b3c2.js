(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6686:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(9980),a=r(2363);t.default=function({html:e,height:t=null,width:r=null,children:o,dataNtpc:i=""}){return(0,a.useEffect)(()=>{i&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${i}`}})},[i]),(0,n.jsxs)(n.Fragment,{children:[o,e?(0,n.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=r?`${r}px`:"auto"},"data-ntpc":i,dangerouslySetInnerHTML:{__html:e}}):null]})}},4245:function(e,t,r){"use strict";let n;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let o=r(9980),i=r(2363),l=a(r(2355));t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:r="dataLayer"}=e;return void 0===n&&(n=r),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`
          window['${r}'] = window['${r}'] || [];
          function gtag(){window['${r}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`}}),(0,o.jsx)(l.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`})]})},t.sendGAEvent=function(...e){if(void 0===n){console.warn("@next/third-parties: GA has not been initialized");return}window[n]?window[n].push(arguments):console.warn(`@next/third-parties: GA dataLayer ${n} does not exist`)}},8821:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=r(9980),o=r(3462),i=n(r(6686));t.default=function(e){let{apiKey:t,...r}=e,n={...r,key:t},{html:l}=(0,o.GoogleMapsEmbed)(n);return(0,a.jsx)(i.default,{height:n.height||null,width:n.width||null,html:l,dataNtpc:"GoogleMapsEmbed"})}},3902:function(e,t,r){"use strict";let n;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let o=r(9980),i=r(2363),l=a(r(2355));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:r="dataLayer",auth:a,preview:u,dataLayer:s}=e;void 0===n&&(n=r);let d="dataLayer"!==r?`&l=${r}`:"",c=a?`&gtm_auth=${a}`:"",f=u?`&gtm_preview=${u}&gtm_cookies_win=x`:"";return(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${s?`w[l].push(${JSON.stringify(s)})`:""}
      })(window,'${r}');`}}),(0,o.jsx)(l.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${d}${c}${f}`})]})},t.sendGTMEvent=e=>{if(void 0===n){console.warn("@next/third-parties: GTM has not been initialized");return}window[n]?window[n].push(e):console.warn(`@next/third-parties: GTM dataLayer ${n} does not exist`)}},7150:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var a=r(8821);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return n(a).default}});var o=r(9633);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return n(o).default}});var i=r(3902);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return i.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return i.sendGTMEvent}});var l=r(4245);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return l.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return l.sendGAEvent}})},9633:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=r(9980),o=n(r(2355)),i=r(3462),l=n(r(6686)),u={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:r,stylesheets:n}=(0,i.YouTubeEmbed)(e);return(0,a.jsx)(l.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==r?void 0:r.map(e=>(0,a.jsx)(o.default,{src:e.url,strategy:u[e.strategy],stylesheets:n},e.url))})}},4878:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2380)}])},2380:function(e,t,r){"use strict";r.r(t);var n=r(9980);r(9195),r(6517),r(7336),r(2785),r(6454);var a=r(2363),o=r(7150);t.default=function(e){let{Component:t,pageProps:r}=e,[i,l]=(0,a.useState)(!1);return(0,a.useEffect)(()=>l(!0),[]),i?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{...r}),(0,n.jsx)(o.GoogleTagManager,{gtmId:"GTM-K3R4C5LX"}),(0,n.jsx)(o.GoogleAnalytics,{gaId:"G-FSH19SFZRN"})]}):null}},7336:function(){},6517:function(){},2785:function(){},6454:function(){},9195:function(){},2355:function(e,t,r){e.exports=r(4884)},3462:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var n=r(1166);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return n.GoogleAnalytics}});var a=r(7664);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return a.GoogleMapsEmbed}});var o=r(4546);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return o.YouTubeEmbed}})},1166:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let o=a(r(479)),i=r(6140);t.GoogleAnalytics=e=>{var t=n(e,[]);return(0,i.formatData)(o.default,t)}},7664:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let o=a(r(5593)),i=r(6140);t.GoogleMapsEmbed=e=>{var t=n(e,[]);return(0,i.formatData)(o.default,t)}},4546:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let o=a(r(5941)),i=r(6140);t.YouTubeEmbed=e=>{var t=n(e,[]);return(0,i.formatData)(o.default,t)}},6140:function(e,t){"use strict";function r(e,t,r=!1){return t?Object.keys(e).filter(e=>r?!t.includes(e):t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{}):{}}function n(e,t,r,n){let a=n&&Object.keys(n).length>0?new URL(Object.values(n)[0],e):new URL(e);return t&&r&&t.forEach(e=>{r[e]&&a.searchParams.set(e,r[e])}),a.toString()}function a(e,t,r,a,o){var i;if(!t)return`<${e}></${e}>`;let l=(null===(i=t.src)||void 0===i?void 0:i.url)?Object.assign(Object.assign({},t),{src:n(t.src.url,t.src.params,a,o)}):t,u=Object.keys(Object.assign(Object.assign({},l),r)).reduce((e,t)=>{let n=null==r?void 0:r[t],a=l[t],o=null!=n?n:a,i=!0===o?t:`${t}="${o}"`;return o?e+` ${i}`:e},"");return`<${e}${u}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=n,t.createHtml=a,t.formatData=function(e,t){var o,i,l,u,s;let d=null===(o=e.scripts)||void 0===o?void 0:o.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[]),c=r(t,d),f=r(t,null===(l=null===(i=e.html)||void 0===i?void 0:i.attributes.src)||void 0===l?void 0:l.params),g=r(t,[null===(s=null===(u=e.html)||void 0===u?void 0:u.attributes.src)||void 0===s?void 0:s.slugParam]),p=r(t,[...Object.keys(c),...Object.keys(f),...Object.keys(g)],!0);return Object.assign(Object.assign({},e),{html:e.html?a(e.html.element,e.html.attributes,p,f,g):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:n(e.url,e.params,c)})):null})}},479:function(e){"use strict";e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},5593:function(e){"use strict";e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},5941:function(e){"use strict";e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(4878),t(8419)}),_N_E=e.O()}]);
//# sourceMappingURL=_app-501a953389f2b3c2.js.map