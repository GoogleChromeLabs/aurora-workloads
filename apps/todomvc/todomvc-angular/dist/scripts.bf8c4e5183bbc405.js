function triggerEvent(e,t,a){const n=new CustomEvent(t);n.name=t,n.state=a,e.dispatchEvent(n)}window.name="todomvc-angular",window.version="1.0.0";const pushState=history.pushState;history.pushState=function(e){const t=pushState.apply(history,arguments);return triggerEvent(window,"pushstate",e),triggerEvent(window,"statechange",e),t};const replaceState=history.replaceState;history.replaceState=function(e){const t=replaceState.apply(history,arguments);return triggerEvent(window,"replacestate",e),triggerEvent(window,"statechange",e),t},window.addEventListener("popstate",function(e){triggerEvent(window,"statechange",e.state)});const appId=window.name&&window.version?`${window.name}-${window.version}`:-1;window.onmessage=async e=>{if(e.data.id!==appId||"benchmark-connector"!==e.data.type)return;const{name:t}=e.data,a=new Function(`return ${e.data.fn}`)();a&&(requestAnimationFrame(()=>{performance.mark(`${t}-start`)}),requestAnimationFrame(async()=>{await a(),setTimeout(()=>{performance.mark(`${t}-end`),performance.measure(`${t}`,{start:`${t}-start`,end:`${t}-end`});const n=JSON.stringify(performance.getEntriesByName(`${t}`)[0]);window.top.postMessage({type:"test-completed",status:"success",result:n},"*")},0)}))},window.top.postMessage({type:"app-ready",status:"success",appId},"*"),console.log(`Hello, benchmark connector for ${appId} is ready!`);
//# sourceMappingURL=scripts.bf8c4e5183bbc405.js.map