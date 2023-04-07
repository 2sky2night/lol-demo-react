import{r as Ee}from"./react-dom-fe255453.js";import{r as a,R as E}from"./react-037e1d06.js";import{h as be}from"./hoist-non-react-statics-7556f55f.js";import{s as Fe}from"./use-sync-external-store-9f93952d.js";import{e as we,f as A}from"./@babel-19082deb.js";function Ne(e){e()}let Ce=Ne;const $e=e=>Ce=e,_e=()=>Ce,Pe=a.createContext(null),Le=()=>{throw new Error("uSES not initialized!")};var se={},Ie={get exports(){return se},set exports(e){se=e}},u={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue=Symbol.for("react.element"),ie=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),j=Symbol.for("react.context"),ke=Symbol.for("react.server_context"),H=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),ge;ge=Symbol.for("react.module.reference");function h(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ue:switch(e=e.type,e){case V:case T:case q:case Y:case G:return e;default:switch(e=e&&e.$$typeof,e){case ke:case j:case H:case K:case J:case W:return e;default:return t}}case ie:return t}}}u.ContextConsumer=j;u.ContextProvider=W;u.Element=ue;u.ForwardRef=H;u.Fragment=V;u.Lazy=K;u.Memo=J;u.Portal=ie;u.Profiler=T;u.StrictMode=q;u.Suspense=Y;u.SuspenseList=G;u.isAsyncMode=function(){return!1};u.isConcurrentMode=function(){return!1};u.isContextConsumer=function(e){return h(e)===j};u.isContextProvider=function(e){return h(e)===W};u.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ue};u.isForwardRef=function(e){return h(e)===H};u.isFragment=function(e){return h(e)===V};u.isLazy=function(e){return h(e)===K};u.isMemo=function(e){return h(e)===J};u.isPortal=function(e){return h(e)===ie};u.isProfiler=function(e){return h(e)===T};u.isStrictMode=function(e){return h(e)===q};u.isSuspense=function(e){return h(e)===Y};u.isSuspenseList=function(e){return h(e)===G};u.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===V||e===T||e===q||e===Y||e===G||e===Ue||typeof e=="object"&&e!==null&&(e.$$typeof===K||e.$$typeof===J||e.$$typeof===W||e.$$typeof===j||e.$$typeof===H||e.$$typeof===ge||e.getModuleId!==void 0)};u.typeOf=h;(function(e){e.exports=u})(Ie);const Be=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function Ae(e,t,r,o,{areStatesEqual:s,areOwnPropsEqual:n,areStatePropsEqual:l}){let i=!1,f,c,d,p,y;function F(m,S){return f=m,c=S,d=e(f,c),p=t(o,c),y=r(d,p,c),i=!0,y}function R(){return d=e(f,c),t.dependsOnOwnProps&&(p=t(o,c)),y=r(d,p,c),y}function k(){return e.dependsOnOwnProps&&(d=e(f,c)),t.dependsOnOwnProps&&(p=t(o,c)),y=r(d,p,c),y}function b(){const m=e(f,c),S=!l(m,d);return d=m,S&&(y=r(d,p,c)),y}function O(m,S){const x=!n(S,c),Q=!s(m,f,S,c);return f=m,c=S,x&&Q?R():x?k():Q?b():y}return function(S,x){return i?O(S,x):F(S,x)}}function ze(e,t){let{initMapStateToProps:r,initMapDispatchToProps:o,initMergeProps:s}=t,n=we(t,Be);const l=r(e,n),i=o(e,n),f=s(e,n);return Ae(l,i,f,e,n)}function Ve(e,t){const r={};for(const o in e){const s=e[o];typeof s=="function"&&(r[o]=(...n)=>t(s(...n)))}return r}function ce(e){return function(r){const o=e(r);function s(){return o}return s.dependsOnOwnProps=!1,s}}function me(e){return e.dependsOnOwnProps?!!e.dependsOnOwnProps:e.length!==1}function xe(e,t){return function(o,{displayName:s}){const n=function(i,f){return n.dependsOnOwnProps?n.mapToProps(i,f):n.mapToProps(i,void 0)};return n.dependsOnOwnProps=!0,n.mapToProps=function(i,f){n.mapToProps=e,n.dependsOnOwnProps=me(e);let c=n(i,f);return typeof c=="function"&&(n.mapToProps=c,n.dependsOnOwnProps=me(c),c=n(i,f)),c},n}}function fe(e,t){return(r,o)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`)}}function qe(e){return e&&typeof e=="object"?ce(t=>Ve(e,t)):e?typeof e=="function"?xe(e):fe(e,"mapDispatchToProps"):ce(t=>({dispatch:t}))}function Te(e){return e?typeof e=="function"?xe(e):fe(e,"mapStateToProps"):ce(()=>({}))}function We(e,t,r){return A({},r,e,t)}function je(e){return function(r,{displayName:o,areMergedPropsEqual:s}){let n=!1,l;return function(f,c,d){const p=e(f,c,d);return n?s(p,l)||(l=p):(n=!0,l=p),l}}}function He(e){return e?typeof e=="function"?je(e):fe(e,"mergeProps"):()=>We}function Ye(){const e=_e();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let o=t;for(;o;)o.callback(),o=o.next})},get(){let o=[],s=t;for(;s;)o.push(s),s=s.next;return o},subscribe(o){let s=!0,n=r={callback:o,next:null,prev:r};return n.prev?n.prev.next=n:t=n,function(){!s||t===null||(s=!1,n.next?n.next.prev=n.prev:r=n.prev,n.prev?n.prev.next=n.next:t=n.next)}}}}const Se={notify(){},get:()=>[]};function Me(e,t){let r,o=Se;function s(p){return f(),o.subscribe(p)}function n(){o.notify()}function l(){d.onStateChange&&d.onStateChange()}function i(){return!!r}function f(){r||(r=t?t.addNestedSub(l):e.subscribe(l),o=Ye())}function c(){r&&(r(),r=void 0,o.clear(),o=Se)}const d={addNestedSub:s,notifyNestedSubs:n,handleChangeWrapper:l,isSubscribed:i,trySubscribe:f,tryUnsubscribe:c,getListeners:()=>o};return d}const Ge=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z=Ge?a.useLayoutEffect:a.useEffect;function he(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function oe(e,t){if(he(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(let s=0;s<r.length;s++)if(!Object.prototype.hasOwnProperty.call(t,r[s])||!he(e[r[s]],t[r[s]]))return!1;return!0}const Je=["reactReduxForwardedRef"];let ve=Le;const Ke=e=>{ve=e},Qe=[null,null];function Xe(e,t,r){z(()=>e(...t),r)}function Ze(e,t,r,o,s,n){e.current=o,r.current=!1,s.current&&(s.current=null,n())}function De(e,t,r,o,s,n,l,i,f,c,d){if(!e)return()=>{};let p=!1,y=null;const F=()=>{if(p||!i.current)return;const k=t.getState();let b,O;try{b=o(k,s.current)}catch(m){O=m,y=m}O||(y=null),b===n.current?l.current||c():(n.current=b,f.current=b,l.current=!0,d())};return r.onStateChange=F,r.trySubscribe(),F(),()=>{if(p=!0,r.tryUnsubscribe(),r.onStateChange=null,y)throw y}}function et(e,t){return e===t}function ut(e,t,r,{pure:o,areStatesEqual:s=et,areOwnPropsEqual:n=oe,areStatePropsEqual:l=oe,areMergedPropsEqual:i=oe,forwardRef:f=!1,context:c=Pe}={}){const d=c,p=Te(e),y=qe(t),F=He(r),R=!!e;return b=>{const O=b.displayName||b.name||"Component",m=`Connect(${O})`,S={shouldHandleStateChanges:R,displayName:m,wrappedComponentName:O,WrappedComponent:b,initMapStateToProps:p,initMapDispatchToProps:y,initMergeProps:F,areStatesEqual:s,areStatePropsEqual:l,areOwnPropsEqual:n,areMergedPropsEqual:i};function x(C){const[P,X,M]=a.useMemo(()=>{const{reactReduxForwardedRef:w}=C,I=we(C,Je);return[C.context,w,I]},[C]),N=a.useMemo(()=>P&&P.Consumer&&se.isContextConsumer(E.createElement(P.Consumer,null))?P:d,[P,d]),g=a.useContext(N),$=!!C.store&&!!C.store.getState&&!!C.store.dispatch,Re=!!g&&!!g.store,v=$?C.store:g.store,le=Re?g.getServerState:v.getState,Z=a.useMemo(()=>ze(v.dispatch,S),[v]),[_,ae]=a.useMemo(()=>{if(!R)return Qe;const w=Me(v,$?void 0:g.subscription),I=w.notifyNestedSubs.bind(w);return[w,I]},[v,$,g]),de=a.useMemo(()=>$?g:A({},g,{subscription:_}),[$,g,_]),D=a.useRef(),ee=a.useRef(M),L=a.useRef(),pe=a.useRef(!1);a.useRef(!1);const te=a.useRef(!1),ne=a.useRef();z(()=>(te.current=!0,()=>{te.current=!1}),[]);const ye=a.useMemo(()=>()=>L.current&&M===ee.current?L.current:Z(v.getState(),M),[v,M]),Oe=a.useMemo(()=>I=>_?De(R,v,_,Z,ee,D,pe,te,L,ae,I):()=>{},[_]);Xe(Ze,[ee,D,pe,M,L,ae]);let B;try{B=ve(Oe,ye,le?()=>Z(le(),M):ye)}catch(w){throw ne.current&&(w.message+=`
The error may be correlated with this previous error:
${ne.current.stack}

`),w}z(()=>{ne.current=void 0,L.current=void 0,D.current=B});const re=a.useMemo(()=>E.createElement(b,A({},B,{ref:X})),[X,b,B]);return a.useMemo(()=>R?E.createElement(N.Provider,{value:de},re):re,[N,re,de])}const U=E.memo(x);if(U.WrappedComponent=b,U.displayName=x.displayName=m,f){const P=E.forwardRef(function(M,N){return E.createElement(U,A({},M,{reactReduxForwardedRef:N}))});return P.displayName=m,P.WrappedComponent=b,be(P,b)}return be(U,b)}}function it({store:e,context:t,children:r,serverState:o}){const s=a.useMemo(()=>{const i=Me(e);return{store:e,subscription:i,getServerState:o?()=>o:void 0}},[e,o]),n=a.useMemo(()=>e.getState(),[e]);z(()=>{const{subscription:i}=s;return i.onStateChange=i.notifyNestedSubs,i.trySubscribe(),n!==e.getState()&&i.notifyNestedSubs(),()=>{i.tryUnsubscribe(),i.onStateChange=void 0}},[s,n]);const l=t||Pe;return E.createElement(l.Provider,{value:s},r)}Ke(Fe.useSyncExternalStore);$e(Ee.unstable_batchedUpdates);export{it as P,ut as c};
