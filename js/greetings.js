"use strict";(()=>{var j=Object.defineProperty;var Ie=Object.getOwnPropertyDescriptor;var We=Object.getOwnPropertyNames;var Re=Object.prototype.hasOwnProperty;var je=e=>j(e,"__esModule",{value:!0});var V=(e,t)=>()=>(e&&(t=e(e=0)),t);var Ve=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),B=(e,t)=>{for(var n in t)j(e,n,{get:t[n],enumerable:!0})},Be=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of We(t))!Re.call(e,o)&&(n||o!=="default")&&j(e,o,{get:()=>t[o],enumerable:!(r=Ie(t,o))||r.enumerable});return e};var F=(e=>(t,n)=>e&&e.get(t)||(n=Be(je({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var z={};B(z,{Component:()=>P,Fragment:()=>D,cloneElement:()=>Qe,createContext:()=>Xe,createElement:()=>W,createRef:()=>$e,h:()=>W,hydrate:()=>ve,isValidElement:()=>ne,options:()=>l,render:()=>de,toChildArray:()=>ce});function k(e,t){for(var n in t)e[n]=t[n];return e}function ie(e){var t=e.parentNode;t&&t.removeChild(e)}function W(e,t,n){var r,o,_,u={};for(_ in t)_=="key"?r=t[_]:_=="ref"?o=t[_]:u[_]=t[_];if(arguments.length>2&&(u.children=arguments.length>3?w.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)u[_]===void 0&&(u[_]=e.defaultProps[_]);return T(e,u,r,o,null)}function T(e,t,n,r,o){var _={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++te};return o==null&&l.vnode!=null&&l.vnode(_),_}function $e(){return{current:null}}function D(e){return e.children}function P(e,t){this.props=e,this.context=t}function E(e,t){if(t==null)return e.__?E(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?E(e):null}function ue(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ue(e)}}function G(e){(!e.__d&&(e.__d=!0)&&N.push(e)&&!q.__r++||X!==l.debounceRendering)&&((X=l.debounceRendering)||re)(q)}function q(){for(var e;q.__r=N.length;)e=N.sort(function(t,n){return t.__v.__b-n.__v.__b}),N=[],e.some(function(t){var n,r,o,_,u,c;t.__d&&(u=(_=(n=t).__v).__e,(c=n.__P)&&(r=[],(o=k({},_)).__v=_.__v+1,$(c,_,o,n.__n,c.ownerSVGElement!==void 0,_.__h!=null?[u]:null,r,u??E(_),_.__h),fe(r,_),_.__e!=u&&ue(_)))})}function ae(e,t,n,r,o,_,u,c,p,h){var i,d,s,a,f,A,v,m=r&&r.__k||oe,g=m.length;for(n.__k=[],i=0;i<t.length;i++)if((a=n.__k[i]=(a=t[i])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?T(null,a,null,null,a):Array.isArray(a)?T(D,{children:a},null,null,null):a.__b>0?T(a.type,a.props,a.key,null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(s=m[i])===null||s&&a.key==s.key&&a.type===s.type)m[i]=void 0;else for(d=0;d<g;d++){if((s=m[d])&&a.key==s.key&&a.type===s.type){m[d]=void 0;break}s=null}$(e,a,s=s||O,o,_,u,c,p,h),f=a.__e,(d=a.ref)&&s.ref!=d&&(v||(v=[]),s.ref&&v.push(s.ref,null,a),v.push(d,a.__c||f,a)),f!=null?(A==null&&(A=f),typeof a.type=="function"&&a.__k===s.__k?a.__d=p=le(a,p,e):p=se(e,a,s,m,f,p),typeof n.type=="function"&&(n.__d=p)):p&&s.__e==p&&p.parentNode!=e&&(p=E(s))}for(n.__e=A,i=g;i--;)m[i]!=null&&(typeof n.type=="function"&&m[i].__e!=null&&m[i].__e==n.__d&&(n.__d=E(r,i+1)),he(m[i],m[i]));if(v)for(i=0;i<v.length;i++)pe(v[i],v[++i],v[++i])}function le(e,t,n){for(var r,o=e.__k,_=0;o&&_<o.length;_++)(r=o[_])&&(r.__=e,t=typeof r.type=="function"?le(r,t,n):se(n,r,r,o,r.__e,t));return t}function ce(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){ce(n,t)}):t.push(e)),t}function se(e,t,n,r,o,_){var u,c,p;if(t.__d!==void 0)u=t.__d,t.__d=void 0;else if(n==null||o!=_||o.parentNode==null)e:if(_==null||_.parentNode!==e)e.appendChild(o),u=null;else{for(c=_,p=0;(c=c.nextSibling)&&p<r.length;p+=2)if(c==o)break e;e.insertBefore(o,_),u=_}return u!==void 0?u:o.nextSibling}function ze(e,t,n,r,o){var _;for(_ in n)_==="children"||_==="key"||_ in t||I(e,_,null,n[_],r);for(_ in t)o&&typeof t[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===t[_]||I(e,_,t[_],n[_],r)}function Y(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ge.test(t)?n:n+"px"}function I(e,t,n,r,o){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Y(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r||e.addEventListener(t,_?ee:Z,_):e.removeEventListener(t,_?ee:Z,_);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Z(e){this.l[e.type+!1](l.event?l.event(e):e)}function ee(e){this.l[e.type+!0](l.event?l.event(e):e)}function $(e,t,n,r,o,_,u,c,p){var h,i,d,s,a,f,A,v,m,g,M,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,c=t.__e=n.__e,t.__h=null,_=[c]),(h=l.__b)&&h(t);try{e:if(typeof b=="function"){if(v=t.props,m=(h=b.contextType)&&r[h.__c],g=h?m?m.props.value:h.__:r,n.__c?A=(i=t.__c=n.__c).__=i.__E:("prototype"in b&&b.prototype.render?t.__c=i=new b(v,g):(t.__c=i=new P(v,g),i.constructor=b,i.render=Ke),m&&m.sub(i),i.props=v,i.state||(i.state={}),i.context=g,i.__n=r,d=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),b.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=k({},i.__s)),k(i.__s,b.getDerivedStateFromProps(v,i.__s))),s=i.props,a=i.state,d)b.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==s&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(v,g),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(v,i.__s,g)===!1||t.__v===n.__v){i.props=v,i.state=i.__s,t.__v!==n.__v&&(i.__d=!1),i.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(U){U&&(U.__=t)}),i.__h.length&&u.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(v,i.__s,g),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(s,a,f)})}i.context=g,i.props=v,i.state=i.__s,(h=l.__r)&&h(t),i.__d=!1,i.__v=t,i.__P=e,h=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(r=k(k({},r),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(f=i.getSnapshotBeforeUpdate(s,a)),M=h!=null&&h.type===D&&h.key==null?h.props.children:h,ae(e,Array.isArray(M)?M:[M],t,n,r,o,_,u,c,p),i.base=t.__e,t.__h=null,i.__h.length&&u.push(i),A&&(i.__E=i.__=null),i.__e=!1}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Je(n.__e,t,n,r,o,_,u,p);(h=l.diffed)&&h(t)}catch(U){t.__v=null,(p||_!=null)&&(t.__e=c,t.__h=!!p,_[_.indexOf(c)]=null),l.__e(U,t,n)}}function fe(e,t){l.__c&&l.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){l.__e(r,n.__v)}})}function Je(e,t,n,r,o,_,u,c){var p,h,i,d=n.props,s=t.props,a=t.type,f=0;if(a==="svg"&&(o=!0),_!=null){for(;f<_.length;f++)if((p=_[f])&&"setAttribute"in p==!!a&&(a?p.localName===a:p.nodeType===3)){e=p,_[f]=null;break}}if(e==null){if(a===null)return document.createTextNode(s);e=o?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,s.is&&s),_=null,c=!1}if(a===null)d===s||c&&e.data===s||(e.data=s);else{if(_=_&&w.call(e.childNodes),h=(d=n.props||O).dangerouslySetInnerHTML,i=s.dangerouslySetInnerHTML,!c){if(_!=null)for(d={},f=0;f<e.attributes.length;f++)d[e.attributes[f].name]=e.attributes[f].value;(i||h)&&(i&&(h&&i.__html==h.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(ze(e,s,d,o,c),i)t.__k=[];else if(f=t.props.children,ae(e,Array.isArray(f)?f:[f],t,n,r,o&&a!=="foreignObject",_,u,_?_[0]:n.__k&&E(n,0),c),_!=null)for(f=_.length;f--;)_[f]!=null&&ie(_[f]);c||("value"in s&&(f=s.value)!==void 0&&(f!==e.value||a==="progress"&&!f||a==="option"&&f!==d.value)&&I(e,"value",f,d.value,!1),"checked"in s&&(f=s.checked)!==void 0&&f!==e.checked&&I(e,"checked",f,d.checked,!1))}return e}function pe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){l.__e(r,n)}}function he(e,t,n){var r,o;if(l.unmount&&l.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||pe(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){l.__e(_,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&he(r[o],t,typeof e.type!="function");n||e.__e==null||ie(e.__e),e.__e=e.__d=void 0}function Ke(e,t,n){return this.constructor(e,n)}function de(e,t,n){var r,o,_;l.__&&l.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,_=[],$(t,e=(!r&&n||t).__k=W(D,null,[e]),o||O,O,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?w.call(t.childNodes):null,_,!r&&n?n:o?o.__e:t.firstChild,r),fe(_,e)}function ve(e,t){de(e,t,ve)}function Qe(e,t,n){var r,o,_,u=k({},e.props);for(_ in t)_=="key"?r=t[_]:_=="ref"?o=t[_]:u[_]=t[_];return arguments.length>2&&(u.children=arguments.length>3?w.call(arguments,2):n),T(e.type,u,r||e.key,o||e.ref,null)}function Xe(e,t){var n={__c:t="__cC"+_e++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,_;return this.getChildContext||(o=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&o.some(G)},this.sub=function(u){o.push(u);var c=u.componentWillUnmount;u.componentWillUnmount=function(){o.splice(o.indexOf(u),1),c&&c.call(u)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}var w,l,te,ne,N,re,X,_e,O,oe,Ge,L=V(()=>{O={},oe=[],Ge=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;w=oe.slice,l={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(_){e=_}throw e}},te=0,ne=function(e){return e!=null&&e.constructor===void 0},P.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},n),this.props)),e&&k(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),G(this))},P.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),G(this))},P.prototype.render=D,N=[],re=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q.__r=0,_e=0});var be=Ve((Et,ge)=>{var me=(L(),F(z)),Ye=function(e){return e.replace(/-([a-z])/gi,function(t,n){return n.toUpperCase()})},Ze=function(){return document.currentScript||function(){var e=document.getElementsByTagName("script");return e[e.length-1]}()},et=function(e,t){t===void 0&&(t={});var n=e.attributes,r=Object.assign({},t);return Object.keys(n).forEach(function(o){if(n.hasOwnProperty(o)){var _=n[o].name;if(!_||typeof _!="string")return!1;var u=_.split(/(data-props?-)/).pop()||"";if(u=Ye(u),_!==u){var c=n[o].nodeValue;r[u]=c}}}),[].forEach.call(e.getElementsByTagName("script"),function(o){var _={};if(o.hasAttribute("type")){if(o.getAttribute("type")!=="text/props"&&o.getAttribute("type")!=="application/json")return;try{_=JSON.parse(o.innerHTML)}catch(u){throw new Error(u)}Object.assign(r,_)}}),r},tt=function(e){var t=e.attributes,n=null;return Object.keys(t).forEach(function(r){t.hasOwnProperty(r)&&t[r].name==="data-mount-in"&&(n=t[r].nodeValue)}),n},ye=function(e){var t=e.selector,n=e.inline,r=e.clientSpecified,o=[],_=Ze();if(n===!0){var u=_.parentNode;o.push(u)}return r!==!0||t||(t=tt(_)),t&&[].forEach.call(document.querySelectorAll(t),function(c){o.push(c)}),o},nt=function(e,t,n,r,o){t.forEach(function(_){var u=_;if(!u._habitat){u._habitat=!0;var c=et(_,o)||o;return r&&(u.innerHTML=""),me.render(me.h(e,c),u,n)}})},rt=function(e){var t=e;return{render:function(n){n===void 0&&(n={});var r=n.selector;r===void 0&&(r=null);var o=n.inline;o===void 0&&(o=!1);var _=n.clean;_===void 0&&(_=!1);var u=n.clientSpecified;u===void 0&&(u=!1);var c=n.defaultProps;c===void 0&&(c={});var p=ye({selector:r,inline:o,clientSpecified:u}),h=function(){if(p.length>0){var i=ye({selector:r,inline:o,clientSpecified:u});return nt(t,i,null,_,c)}};h(),document.addEventListener("DOMContentLoaded",h),document.addEventListener("load",h)}}};ge.exports=rt});var Le={};B(Le,{useCallback:()=>ut,useContext:()=>at,useDebugValue:()=>lt,useEffect:()=>_t,useErrorBoundary:()=>ct,useImperativeHandle:()=>it,useLayoutEffect:()=>we,useMemo:()=>K,useReducer:()=>Pe,useRef:()=>ot,useState:()=>Te});function H(e,t){l.__h&&l.__h(y,e,C||t),C=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Te(e){return C=1,Pe(De,e)}function Pe(e,t,n){var r=H(S++,2);return r.t=e,r.__c||(r.__=[n?n(t):De(void 0,t),function(o){var _=r.t(r.__[0],o);r.__[0]!==_&&(r.__=[_,r.__[1]],r.__c.setState({}))}],r.__c=y),r.__}function _t(e,t){var n=H(S++,3);!l.__s&&Q(n.__H,t)&&(n.__=e,n.__H=t,y.__H.__h.push(n))}function we(e,t){var n=H(S++,4);!l.__s&&Q(n.__H,t)&&(n.__=e,n.__H=t,y.__h.push(n))}function ot(e){return C=5,K(function(){return{current:e}},[])}function it(e,t,n){C=6,we(function(){typeof e=="function"?e(t()):e&&(e.current=t())},n==null?n:n.concat(e))}function K(e,t){var n=H(S++,7);return Q(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ut(e,t){return C=8,K(function(){return e},t)}function at(e){var t=y.context[e.__c],n=H(S++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(y)),t.props.value):e.__}function lt(e,t){l.useDebugValue&&l.useDebugValue(t?t(e):e)}function ct(e){var t=H(S++,10),n=Te();return t.__=e,y.componentDidCatch||(y.componentDidCatch=function(r){t.__&&t.__(r),n[1](r)}),[n[0],function(){n[1](void 0)}]}function st(){for(var e;e=Ne.shift();)if(e.__P)try{e.__H.__h.forEach(R),e.__H.__h.forEach(J),e.__H.__h=[]}catch(t){e.__H.__h=[],l.__e(t,e.__v)}}function R(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function J(e){var t=y;e.__c=e.__(),y=t}function Q(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function De(e,t){return typeof t=="function"?t(e):t}var S,y,ke,C,Ne,xe,Se,Ae,Ee,Ce,He,Me=V(()=>{L();C=0,Ne=[],xe=l.__b,Se=l.__r,Ae=l.diffed,Ee=l.__c,Ce=l.unmount;l.__b=function(e){y=null,xe&&xe(e)},l.__r=function(e){Se&&Se(e),S=0;var t=(y=e.__c).__H;t&&(t.__h.forEach(R),t.__h.forEach(J),t.__h=[])},l.diffed=function(e){Ae&&Ae(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Ne.push(t)!==1&&ke===l.requestAnimationFrame||((ke=l.requestAnimationFrame)||function(n){var r,o=function(){clearTimeout(_),He&&cancelAnimationFrame(r),setTimeout(n)},_=setTimeout(o,100);He&&(r=requestAnimationFrame(o))})(st)),y=null},l.__c=function(e,t){t.some(function(n){try{n.__h.forEach(R),n.__h=n.__h.filter(function(r){return!r.__||J(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],l.__e(r,n.__v)}}),Ee&&Ee(e,t)},l.unmount=function(e){Ce&&Ce(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{R(r)}catch(o){t=o}}),t&&l.__e(t,n.__v))};He=typeof requestAnimationFrame=="function"});var Ue={};B(Ue,{default:()=>pt});function ft({name:e}){return W("b",null,e)}var pt,Fe=V(()=>{L();pt=ft});var x=(L(),F(z)),ht=qe(be()),dt=(Me(),F(Le)),vt=qe((Fe(),F(Ue)));function qe(e){return e&&e.__esModule?e:{default:e}}function mt(e,t){return kt(e)||bt(e,t)||gt(e,t)||yt()}function yt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(e,t){if(!!e){if(typeof e=="string")return Oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oe(e,t)}}function Oe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bt(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,_=!1,u,c;try{for(n=n.call(e);!(o=(u=n.next()).done)&&(r.push(u.value),!(t&&r.length===t));o=!0);}catch(p){_=!0,c=p}finally{try{!o&&n.return!=null&&n.return()}finally{if(_)throw c}}return r}}function kt(e){if(Array.isArray(e))return e}function xt(e){var t=e.initialName,n=(0,dt.useState)(t),r=mt(n,2),o=r[0],_=r[1];return(0,x.h)("div",{className:"greetings container p-3"},(0,x.h)("h3",null,"Greetings Widgets"),(0,x.h)("p",null,"Nice to see you ",(0,x.h)(vt.default,{name:o}),"!"),(0,x.h)("form",{className:"form-inline"},(0,x.h)("label",{className:"sr-only",htmlFor:"inputName"},"Greetings"),(0,x.h)("div",{className:"input-group mb-2 mr-sm-2"},(0,x.h)("div",{className:"input-group-text"},"Hello"),(0,x.h)("input",{type:"text",className:"form-control",id:"inputName",value:o,placeholder:"Florian",onInput:function(c){return _(c.currentTarget.value)}}))))}var St=(0,ht.default)(xt);St.render({inline:!0});})();
