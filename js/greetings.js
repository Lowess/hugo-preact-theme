(()=>{var Oe=Object.defineProperty;var R=(e,t)=>()=>(e&&(t=e(e=0)),t),qe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),j=(e,t)=>{for(var n in t)Oe(e,n,{get:t[n],enumerable:!0})};var V={};j(V,{Component:()=>D,Fragment:()=>w,cloneElement:()=>Be,createContext:()=>Ge,createElement:()=>O,createRef:()=>We,h:()=>O,hydrate:()=>he,isValidElement:()=>Q,options:()=>l,render:()=>pe,toChildArray:()=>le});function k(e,t){for(var n in t)e[n]=t[n];return e}function te(e){var t=e.parentNode;t&&t.removeChild(e)}function O(e,t,n){var r,i,_,u={};for(_ in t)_=="key"?r=t[_]:_=="ref"?i=t[_]:u[_]=t[_];if(arguments.length>2&&(u.children=arguments.length>3?N.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)u[_]===void 0&&(u[_]=e.defaultProps[_]);return P(e,u,r,i,null)}function P(e,t,n,r,i){var _={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++K};return i==null&&l.vnode!=null&&l.vnode(_),_}function We(){return{current:null}}function w(e){return e.children}function D(e,t){this.props=e,this.context=t}function E(e,t){if(t==null)return e.__?E(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?E(e):null}function ne(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ne(e)}}function B(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!q.__r++||Y!==l.debounceRendering)&&((Y=l.debounceRendering)||X)(q)}function q(){for(var e;q.__r=T.length;)e=T.sort(function(t,n){return t.__v.__b-n.__v.__b}),T=[],e.some(function(t){var n,r,i,_,u,c;t.__d&&(u=(_=(n=t).__v).__e,(c=n.__P)&&(r=[],(i=k({},_)).__v=_.__v+1,G(c,_,i,n.__n,c.ownerSVGElement!==void 0,_.__h!=null?[u]:null,r,u??E(_),_.__h),re(r,_),_.__e!=u&&ne(_)))})}function ae(e,t,n,r,i,_,u,c,p,h){var o,d,s,a,f,A,v,m=r&&r.__k||ee,g=m.length;for(n.__k=[],o=0;o<t.length;o++)if((a=n.__k[o]=(a=t[o])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?P(null,a,null,null,a):Array.isArray(a)?P(w,{children:a},null,null,null):a.__b>0?P(a.type,a.props,a.key,null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(s=m[o])===null||s&&a.key==s.key&&a.type===s.type)m[o]=void 0;else for(d=0;d<g;d++){if((s=m[d])&&a.key==s.key&&a.type===s.type){m[d]=void 0;break}s=null}G(e,a,s=s||F,i,_,u,c,p,h),f=a.__e,(d=a.ref)&&s.ref!=d&&(v||(v=[]),s.ref&&v.push(s.ref,null,a),v.push(d,a.__c||f,a)),f!=null?(A==null&&(A=f),typeof a.type=="function"&&a.__k===s.__k?a.__d=p=_e(a,p,e):p=oe(e,a,s,m,f,p),typeof n.type=="function"&&(n.__d=p)):p&&s.__e==p&&p.parentNode!=e&&(p=E(s))}for(n.__e=A,o=g;o--;)m[o]!=null&&(typeof n.type=="function"&&m[o].__e!=null&&m[o].__e==n.__d&&(n.__d=E(r,o+1)),ue(m[o],m[o]));if(v)for(o=0;o<v.length;o++)ie(v[o],v[++o],v[++o])}function _e(e,t,n){for(var r,i=e.__k,_=0;i&&_<i.length;_++)(r=i[_])&&(r.__=e,t=typeof r.type=="function"?_e(r,t,n):oe(n,r,r,i,r.__e,t));return t}function le(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){le(n,t)}):t.push(e)),t}function oe(e,t,n,r,i,_){var u,c,p;if(t.__d!==void 0)u=t.__d,t.__d=void 0;else if(n==null||i!=_||i.parentNode==null)e:if(_==null||_.parentNode!==e)e.appendChild(i),u=null;else{for(c=_,p=0;(c=c.nextSibling)&&p<r.length;p+=2)if(c==i)break e;e.insertBefore(i,_),u=_}return u!==void 0?u:i.nextSibling}function Re(e,t,n,r,i){var _;for(_ in n)_==="children"||_==="key"||_ in t||I(e,_,null,n[_],r);for(_ in t)i&&typeof t[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===t[_]||I(e,_,t[_],n[_],r)}function ce(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ie.test(t)?n:n+"px"}function I(e,t,n,r,i){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ce(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||ce(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r||e.addEventListener(t,_?fe:se,_):e.removeEventListener(t,_?fe:se,_);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch(u){}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function se(e){this.l[e.type+!1](l.event?l.event(e):e)}function fe(e){this.l[e.type+!0](l.event?l.event(e):e)}function G(e,t,n,r,i,_,u,c,p){var h,o,d,s,a,f,A,v,m,g,M,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,c=t.__e=n.__e,t.__h=null,_=[c]),(h=l.__b)&&h(t);try{e:if(typeof b=="function"){if(v=t.props,m=(h=b.contextType)&&r[h.__c],g=h?m?m.props.value:h.__:r,n.__c?A=(o=t.__c=n.__c).__=o.__E:("prototype"in b&&b.prototype.render?t.__c=o=new b(v,g):(t.__c=o=new D(v,g),o.constructor=b,o.render=Ve),m&&m.sub(o),o.props=v,o.state||(o.state={}),o.context=g,o.__n=r,d=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=k({},o.__s)),k(o.__s,b.getDerivedStateFromProps(v,o.__s))),s=o.props,a=o.state,d)b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==s&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,g),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,g)===!1||t.__v===n.__v){o.props=v,o.state=o.__s,t.__v!==n.__v&&(o.__d=!1),o.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(U){U&&(U.__=t)}),o.__h.length&&u.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,g),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(s,a,f)})}o.context=g,o.props=v,o.state=o.__s,(h=l.__r)&&h(t),o.__d=!1,o.__v=t,o.__P=e,h=o.render(o.props,o.state,o.context),o.state=o.__s,o.getChildContext!=null&&(r=k(k({},r),o.getChildContext())),d||o.getSnapshotBeforeUpdate==null||(f=o.getSnapshotBeforeUpdate(s,a)),M=h!=null&&h.type===w&&h.key==null?h.props.children:h,ae(e,Array.isArray(M)?M:[M],t,n,r,i,_,u,c,p),o.base=t.__e,t.__h=null,o.__h.length&&u.push(o),A&&(o.__E=o.__=null),o.__e=!1}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=je(n.__e,t,n,r,i,_,u,p);(h=l.diffed)&&h(t)}catch(U){t.__v=null,(p||_!=null)&&(t.__e=c,t.__h=!!p,_[_.indexOf(c)]=null),l.__e(U,t,n)}}function re(e,t){l.__c&&l.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){l.__e(r,n.__v)}})}function je(e,t,n,r,i,_,u,c){var p,h,o,d=n.props,s=t.props,a=t.type,f=0;if(a==="svg"&&(i=!0),_!=null){for(;f<_.length;f++)if((p=_[f])&&"setAttribute"in p==!!a&&(a?p.localName===a:p.nodeType===3)){e=p,_[f]=null;break}}if(e==null){if(a===null)return document.createTextNode(s);e=i?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,s.is&&s),_=null,c=!1}if(a===null)d===s||c&&e.data===s||(e.data=s);else{if(_=_&&N.call(e.childNodes),h=(d=n.props||F).dangerouslySetInnerHTML,o=s.dangerouslySetInnerHTML,!c){if(_!=null)for(d={},f=0;f<e.attributes.length;f++)d[e.attributes[f].name]=e.attributes[f].value;(o||h)&&(o&&(h&&o.__html==h.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(Re(e,s,d,i,c),o)t.__k=[];else if(f=t.props.children,ae(e,Array.isArray(f)?f:[f],t,n,r,i&&a!=="foreignObject",_,u,_?_[0]:n.__k&&E(n,0),c),_!=null)for(f=_.length;f--;)_[f]!=null&&te(_[f]);c||("value"in s&&(f=s.value)!==void 0&&(f!==e.value||a==="progress"&&!f||a==="option"&&f!==d.value)&&I(e,"value",f,d.value,!1),"checked"in s&&(f=s.checked)!==void 0&&f!==e.checked&&I(e,"checked",f,d.checked,!1))}return e}function ie(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){l.__e(r,n)}}function ue(e,t,n){var r,i;if(l.unmount&&l.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ie(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){l.__e(_,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&ue(r[i],t,typeof e.type!="function");n||e.__e==null||te(e.__e),e.__e=e.__d=void 0}function Ve(e,t,n){return this.constructor(e,n)}function pe(e,t,n){var r,i,_;l.__&&l.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,_=[],G(t,e=(!r&&n||t).__k=O(w,null,[e]),i||F,F,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?N.call(t.childNodes):null,_,!r&&n?n:i?i.__e:t.firstChild,r),re(_,e)}function he(e,t){pe(e,t,he)}function Be(e,t,n){var r,i,_,u=k({},e.props);for(_ in t)_=="key"?r=t[_]:_=="ref"?i=t[_]:u[_]=t[_];return arguments.length>2&&(u.children=arguments.length>3?N.call(arguments,2):n),P(e.type,u,r||e.key,i||e.ref,null)}function Ge(e,t){var n={__c:t="__cC"+Z++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,_;return this.getChildContext||(i=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&i.some(B)},this.sub=function(u){i.push(u);var c=u.componentWillUnmount;u.componentWillUnmount=function(){i.splice(i.indexOf(u),1),c&&c.call(u)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}var N,l,K,Q,T,X,Y,Z,F,ee,Ie,L=R(()=>{F={},ee=[],Ie=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;N=ee.slice,l={__e:function(e,t){for(var n,r,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(_){e=_}throw e}},K=0,Q=function(e){return e!=null&&e.constructor===void 0},D.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},n),this.props)),e&&k(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),B(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),B(this))},D.prototype.render=w,T=[],X=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q.__r=0,Z=0});var ye=qe((gt,de)=>{var ve=(L(),V),$e=function(e){return e.replace(/-([a-z])/gi,function(t,n){return n.toUpperCase()})},ze=function(){return document.currentScript||function(){var e=document.getElementsByTagName("script");return e[e.length-1]}()},Je=function(e,t){t===void 0&&(t={});var n=e.attributes,r=Object.assign({},t);return Object.keys(n).forEach(function(i){if(n.hasOwnProperty(i)){var _=n[i].name;if(!_||typeof _!="string")return!1;var u=_.split(/(data-props?-)/).pop()||"";if(u=$e(u),_!==u){var c=n[i].nodeValue;r[u]=c}}}),[].forEach.call(e.getElementsByTagName("script"),function(i){var _={};if(i.hasAttribute("type")){if(i.getAttribute("type")!=="text/props"&&i.getAttribute("type")!=="application/json")return;try{_=JSON.parse(i.innerHTML)}catch(u){throw new Error(u)}Object.assign(r,_)}}),r},Ke=function(e){var t=e.attributes,n=null;return Object.keys(t).forEach(function(r){t.hasOwnProperty(r)&&t[r].name==="data-mount-in"&&(n=t[r].nodeValue)}),n},me=function(e){var t=e.selector,n=e.inline,r=e.clientSpecified,i=[],_=ze();if(n===!0){var u=_.parentNode;i.push(u)}return r!==!0||t||(t=Ke(_)),t&&[].forEach.call(document.querySelectorAll(t),function(c){i.push(c)}),i},Qe=function(e,t,n,r,i){t.forEach(function(_){var u=_;if(!u._habitat){u._habitat=!0;var c=Je(_,i)||i;return r&&(u.innerHTML=""),ve.render(ve.h(e,c),u,n)}})},Xe=function(e){var t=e;return{render:function(n){n===void 0&&(n={});var r=n.selector;r===void 0&&(r=null);var i=n.inline;i===void 0&&(i=!1);var _=n.clean;_===void 0&&(_=!1);var u=n.clientSpecified;u===void 0&&(u=!1);var c=n.defaultProps;c===void 0&&(c={});var p=me({selector:r,inline:i,clientSpecified:u}),h=function(){if(p.length>0){var o=me({selector:r,inline:i,clientSpecified:u});return Qe(t,o,null,_,c)}};h(),document.addEventListener("DOMContentLoaded",h),document.addEventListener("load",h)}}};de.exports=Xe});var ge={};j(ge,{useCallback:()=>tt,useContext:()=>nt,useDebugValue:()=>rt,useEffect:()=>Ye,useErrorBoundary:()=>_t,useImperativeHandle:()=>et,useLayoutEffect:()=>Pe,useMemo:()=>z,useReducer:()=>He,useRef:()=>Ze,useState:()=>Te});function H(e,t){l.__h&&l.__h(y,e,C||t),C=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Te(e){return C=1,He(Ne,e)}function He(e,t,n){var r=H(S++,2);return r.t=e,r.__c||(r.__=[n?n(t):Ne(void 0,t),function(i){var _=r.t(r.__[0],i);r.__[0]!==_&&(r.__=[_,r.__[1]],r.__c.setState({}))}],r.__c=y),r.__}function Ye(e,t){var n=H(S++,3);!l.__s&&$(n.__H,t)&&(n.__=e,n.__H=t,y.__H.__h.push(n))}function Pe(e,t){var n=H(S++,4);!l.__s&&$(n.__H,t)&&(n.__=e,n.__H=t,y.__h.push(n))}function Ze(e){return C=5,z(function(){return{current:e}},[])}function et(e,t,n){C=6,Pe(function(){typeof e=="function"?e(t()):e&&(e.current=t())},n==null?n:n.concat(e))}function z(e,t){var n=H(S++,7);return $(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function tt(e,t){return C=8,z(function(){return e},t)}function nt(e){var t=y.context[e.__c],n=H(S++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(y)),t.props.value):e.__}function rt(e,t){l.useDebugValue&&l.useDebugValue(t?t(e):e)}function _t(e){var t=H(S++,10),n=Te();return t.__=e,y.componentDidCatch||(y.componentDidCatch=function(r){t.__&&t.__(r),n[1](r)}),[n[0],function(){n[1](void 0)}]}function ot(){for(var e;e=ke.shift();)if(e.__P)try{e.__H.__h.forEach(W),e.__H.__h.forEach(J),e.__H.__h=[]}catch(t){e.__H.__h=[],l.__e(t,e.__v)}}function W(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function J(e){var t=y;e.__c=e.__(),y=t}function $(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ne(e,t){return typeof t=="function"?t(e):t}var S,y,be,C,ke,xe,Se,Ae,Ee,Ce,we,De=R(()=>{L();C=0,ke=[],xe=l.__b,Se=l.__r,Ae=l.diffed,Ee=l.__c,Ce=l.unmount;l.__b=function(e){y=null,xe&&xe(e)},l.__r=function(e){Se&&Se(e),S=0;var t=(y=e.__c).__H;t&&(t.__h.forEach(W),t.__h.forEach(J),t.__h=[])},l.diffed=function(e){Ae&&Ae(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ke.push(t)!==1&&be===l.requestAnimationFrame||((be=l.requestAnimationFrame)||function(n){var r,i=function(){clearTimeout(_),we&&cancelAnimationFrame(r),setTimeout(n)},_=setTimeout(i,100);we&&(r=requestAnimationFrame(i))})(ot)),y=null},l.__c=function(e,t){t.some(function(n){try{n.__h.forEach(W),n.__h=n.__h.filter(function(r){return!r.__||J(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],l.__e(r,n.__v)}}),Ee&&Ee(e,t)},l.unmount=function(e){Ce&&Ce(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{W(r)}catch(i){t=i}}),t&&l.__e(t,n.__v))};we=typeof requestAnimationFrame=="function"});var Le={};j(Le,{default:()=>ut});function it({name:e}){return O("b",null,e)}var ut,Me=R(()=>{L();ut=it});"use strict";var x=(L(),V),at=Ue(ye()),lt=(De(),ge),ct=Ue((Me(),Le));function Ue(e){return e&&e.__esModule?e:{default:e}}function dt(e,t){return ht(e)||pt(e,t)||ft(e,t)||st()}function st(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(e,t){if(!!e){if(typeof e=="string")return Fe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fe(e,t)}}function Fe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pt(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,_=!1,u,c;try{for(n=n.call(e);!(i=(u=n.next()).done)&&(r.push(u.value),!(t&&r.length===t));i=!0);}catch(p){_=!0,c=p}finally{try{!i&&n.return!=null&&n.return()}finally{if(_)throw c}}return r}}function ht(e){if(Array.isArray(e))return e}function vt(e){var t=e.initialName,n=(0,lt.useState)(t),r=dt(n,2),i=r[0],_=r[1];return(0,x.h)("div",{className:"greetings container p-3"},(0,x.h)("h3",null,"Greetings Widgets"),(0,x.h)("p",null,"Nice to see you ",(0,x.h)(ct.default,{name:i}),"!"),(0,x.h)("form",{className:"form-inline"},(0,x.h)("label",{className:"sr-only",htmlFor:"inputName"},"Greetings"),(0,x.h)("div",{className:"input-group mb-2 mr-sm-2"},(0,x.h)("div",{className:"input-group-text"},"Hello"),(0,x.h)("input",{type:"text",className:"form-control",id:"inputName",value:i,placeholder:"Florian",onInput:function(c){return _(c.currentTarget.value)}}))))}var mt=(0,at.default)(vt);mt.render({inline:!0});})();
