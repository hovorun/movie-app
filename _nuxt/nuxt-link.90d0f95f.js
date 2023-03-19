import{L as P,A as b,f as q,I as x,M as T,B as C,N as k,O as A,P as _,Q as R,R as N,S as w,T as B,U as L,V as I}from"./entry.a1d95ffb.js";async function S(t,a=P()){const{path:i,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(i)))return;const n=a._preloadPromises=a._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>S(t,a));a._routePreloaded.add(i);const l=e.map(r=>{var s;return(s=r.components)==null?void 0:s.default}).filter(r=>typeof r=="function");for(const r of l){const s=Promise.resolve(r()).catch(()=>{}).finally(()=>n.splice(n.indexOf(s)));n.push(s)}await Promise.all(n)}const y=globalThis.requestIdleCallback||(t=>{const a=Date.now(),i={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(i)},1)}),E=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),O=t=>{const a=b();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{y(t)}):y(t)},U=(...t)=>t.find(a=>a!==void 0),V="noopener noreferrer";function D(t){const a=t.componentName||"NuxtLink",i=(e,n)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const l=t.trailingSlash==="append"?B:L;if(typeof e=="string")return l(e,!0);const r="path"in e?e.path:n(e).path;return{...e,name:void 0,path:l(r,!0)}};return q({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:n}){const l=P(),r=x(()=>{const o=e.to||e.href||"";return i(o,l.resolve)}),s=x(()=>e.external||e.target&&e.target!=="_self"?!0:typeof r.value=="object"?!1:r.value===""||T(r.value,{acceptRelative:!0})),d=C(!1),f=C(null);if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!M()){const m=b();let v,u=null;k(()=>{const p=j();O(()=>{v=y(()=>{var h;(h=f==null?void 0:f.value)!=null&&h.tagName&&(u=p.observe(f.value,async()=>{u==null||u(),u=null;const c=typeof r.value=="string"?r.value:l.resolve(r.value).fullPath;await Promise.all([m.hooks.callHook("link:prefetch",c).catch(()=>{}),!s.value&&S(r.value,l).catch(()=>{})]),d.value=!0}))})})}),A(()=>{v&&E(v),u==null||u(),u=null})}return()=>{var p,h;if(!s.value){const c={ref:g=>{f.value=g==null?void 0:g.$el},to:r.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(d.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),_(R("RouterLink"),c,n.default)}const o=typeof r.value=="object"?((p=l.resolve(r.value))==null?void 0:p.href)??null:r.value||null,m=e.target||null,v=e.noRel?null:U(e.rel,t.externalRelAttribute,o?V:"")||null,u=()=>I(o,{replace:e.replace});return e.custom?n.default?n.default({href:o,navigate:u,get route(){if(!o)return;const c=N(o);return{path:c.pathname,fullPath:c.pathname,get query(){return w(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:v,target:m,isExternal:s.value,isActive:!1,isExactActive:!1}):null:_("a",{ref:f,href:o,rel:v,target:m},(h=n.default)==null?void 0:h.call(n))}}})}const F=D({componentName:"NuxtLink"});function j(){const t=b();if(t._observer)return t._observer;let a=null;const i=new Map,e=(l,r)=>(a||(a=new IntersectionObserver(s=>{for(const d of s){const f=i.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&f&&f()}})),i.set(l,r),a.observe(l),()=>{i.delete(l),a.unobserve(l),i.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function M(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{F as _};