import{b as I}from"./classnames-4e0763b2.js";import{a as A}from"./@babel-19082deb.js";function i(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var P=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),m=function(){return Math.random().toString(36).substring(7).split("").join(".")},w={INIT:"@@redux/INIT"+m(),REPLACE:"@@redux/REPLACE"+m(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+m()}};function T(r){if(typeof r!="object"||r===null)return!1;for(var t=r;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function O(r,t,n){var e;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(i(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(i(1));return n(O)(r,t)}if(typeof r!="function")throw new Error(i(2));var f=r,a=t,c=[],s=c,u=!1;function b(){s===c&&(s=c.slice())}function v(){if(u)throw new Error(i(3));return a}function h(o){if(typeof o!="function")throw new Error(i(4));if(u)throw new Error(i(5));var p=!0;return b(),s.push(o),function(){if(p){if(u)throw new Error(i(6));p=!1,b();var l=s.indexOf(o);s.splice(l,1),c=null}}}function d(o){if(!T(o))throw new Error(i(7));if(typeof o.type>"u")throw new Error(i(8));if(u)throw new Error(i(9));try{u=!0,a=f(a,o)}finally{u=!1}for(var p=c=s,g=0;g<p.length;g++){var l=p[g];l()}return o}function y(o){if(typeof o!="function")throw new Error(i(10));f=o,d({type:w.REPLACE})}function E(){var o,p=h;return o={subscribe:function(l){if(typeof l!="object"||l===null)throw new Error(i(11));function N(){l.next&&l.next(v())}N();var j=p(N);return{unsubscribe:j}}},o[P]=function(){return this},o}return d({type:w.INIT}),e={dispatch:d,subscribe:h,getState:v,replaceReducer:y},e[P]=E,e}var x=O;function _(r){Object.keys(r).forEach(function(t){var n=r[t],e=n(void 0,{type:w.INIT});if(typeof e>"u")throw new Error(i(12));if(typeof n(void 0,{type:w.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(i(13))})}function C(r){for(var t=Object.keys(r),n={},e=0;e<t.length;e++){var f=t[e];typeof r[f]=="function"&&(n[f]=r[f])}var a=Object.keys(n),c;try{_(n)}catch(s){c=s}return function(u,b){if(u===void 0&&(u={}),c)throw c;for(var v=!1,h={},d=0;d<a.length;d++){var y=a[d],E=n[y],o=u[y],p=E(o,b);if(typeof p>"u")throw b&&b.type,new Error(i(14));h[y]=p,v=v||p!==o}return v=v||a.length!==Object.keys(u).length,v?h:u}}function R(r,t){return function(){return t(r.apply(this,arguments))}}function L(r,t){if(typeof r=="function")return R(r,t);if(typeof r!="object"||r===null)throw new Error(i(16));var n={};for(var e in r){var f=r[e];typeof f=="function"&&(n[e]=R(f,t))}return n}function S(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.length===0?function(e){return e}:t.length===1?t[0]:t.reduce(function(e,f){return function(){return e(f.apply(void 0,arguments))}})}function M(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return function(e){return function(){var f=e.apply(void 0,arguments),a=function(){throw new Error(i(15))},c={getState:f.getState,dispatch:function(){return a.apply(void 0,arguments)}},s=t.map(function(u){return u(c)});return a=S.apply(void 0,s)(f.dispatch),A(A({},f),{},{dispatch:a})}}}const U=Object.freeze(Object.defineProperty({__proto__:null,__DO_NOT_USE__ActionTypes:w,applyMiddleware:M,bindActionCreators:L,combineReducers:C,compose:S,createStore:O,legacy_createStore:x},Symbol.toStringTag,{value:"Module"})),$=I(U);export{C as c,x as l,$ as r};
