/*! (c) Andrea Giammarchi - ISC */var lighterhtml=function(e){"use strict";
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var t,n="-"+Math.random().toFixed(6)+"%",r=!1;try{"content"in(t=document.createElement("template"))&&(t.innerHTML='<p tabindex="'+n+'"></p>',t.content.childNodes[0].getAttribute("tabindex")==n)||(n="_dt: "+n.slice(1,-1)+";",r=!0)}catch(e){}var o="\x3c!--"+n+"--\x3e",a=8,l=1,s=3,i=/^(?:style|textarea)$/i,c=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
/*! (c) Andrea Giammarchi - ISC */
function u(e){return e.join(o).replace(m,x).replace(g,w)}/*! (c) Andrea Giammarchi - ISC */var f=" \\f\\n\\r\\t",p="[^"+f+"\\/>\"'=]+",h="["+f+"]+"+p,d="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",v="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+p.replace("\\/","")+"))?)",g=new RegExp(d+h+v+"+)(["+f+"]*/?>)","g"),m=new RegExp(d+h+v+"*)(["+f+"]*/>)","g"),y=new RegExp("("+h+"\\s*=\\s*)(['\"]?)"+o+"\\2","gi");function w(e,t,n,r){return"<"+t+n.replace(y,b)+r}function b(e,t,r){return t+(r||'"')+n+(r||'"')}function x(e,t,n){return c.test(t)?e:"<"+t+n+"></"+t+">"}
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var N=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);const{isArray:k}=Array,C=N.prototype.nodeType;function E(e,t){this.type=e,this.args=t}
/*! (c) Andrea Giammarchi - ISC */Object.freeze(E);/*! (c) Andrea Giammarchi - ISC */var A=function(e){var t="fragment",n=function(e){var t=r("template");return t.innerHTML=e,t.content};return function(e,t){return("svg"===t?o:n)(e)};function r(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}function o(e){var n=r(t),o=r("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",function(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}(n,o.firstChild.childNodes),n}}(document);const{indexOf:S}=[],j=(e,t,n,r,o,a)=>{const l="selectedIndex"in t;let s=l;for(;r<o;){const o=e(n[r],1);if(t.insertBefore(o,a),l&&s&&o.selected){s=!s;let{selectedIndex:e}=t;t.selectedIndex=e<0?r:S.call(t.querySelectorAll("option"),o)}r++}},T=(e,t)=>e==t,M=e=>e,L=(e,t,n,r,o,a,l)=>{const s=a-o;if(s<1)return-1;for(;n-t>=s;){let s=t,i=o;for(;s<n&&i<a&&l(e[s],r[i]);)s++,i++;if(i===a)return t;t=s+1}return-1},$=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,D=(e,t,n,r,o)=>{for(;r<o;)G(e(n[r++],-1),t)},O=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},_=(e,t,n,r,o,a,l,s,i,c,u,f,p)=>{((e,t,n,r,o,a,l,s,i)=>{const c=new Map,u=e.length;let f=l,p=0;for(;p<u;)switch(e[p++]){case 0:o++,f++;break;case 1:c.set(r[o],1),j(t,n,r,o++,o,f<s?t(a[f],0):i);break;case-1:f++}for(p=0;p<u;)switch(e[p++]){case 0:l++;break;case-1:c.has(a[l])?l++:D(t,n,a,l++,l)}})(((e,t,n,r,o,a,l)=>{const s=n+a,i=[];let c,u,f,p,h,d,v;e:for(c=0;c<=s;c++){if(c>50)return null;for(v=c-1,h=c?i[c-1]:[0,0],d=i[c]=[],u=-c;u<=c;u+=2){for(f=(p=u===-c||u!==c&&h[v+u-1]<h[v+u+1]?h[v+u+1]:h[v+u-1]+1)-u;p<a&&f<n&&l(r[o+p],e[t+f]);)p++,f++;if(p===a&&f===n)break e;d[c+u]=p}}const g=Array(c/2+s/2);let m=g.length-1;for(c=i.length-1;c>=0;c--){for(;p>0&&f>0&&l(r[o+p-1],e[t+f-1]);)g[m--]=0,p--,f--;if(!c)break;v=c-1,h=c?i[c-1]:[0,0],(u=p-f)===-c||u!==c&&h[v+u-1]<h[v+u+1]?(f--,g[m--]=1):(p--,g[m--]=-1)}return g})(n,r,a,l,s,c,f)||((e,t,n,r,o,a,l,s)=>{let i=0,c=r<s?r:s;const u=Array(c++),f=Array(c);f[0]=-1;for(let e=1;e<c;e++)f[e]=l;const p=new Map;for(let e=a;e<l;e++)p.set(o[e],e);for(let r=t;r<n;r++){const t=p.get(e[r]);null!=t&&-1<(i=O(f,c,t))&&(f[i]=t,u[i]={newi:r,oldi:t,prev:u[i-1]})}for(i=--c,--l;f[i]>l;)--i;c=s+r-i;const h=Array(c);let d=u[i];for(--n;d;){const{newi:e,oldi:t}=d;for(;n>e;)h[--c]=1,--n;for(;l>t;)h[--c]=-1,--l;h[--c]=0,--n,--l,d=d.prev}for(;n>=t;)h[--c]=1,--n;for(;l>=a;)h[--c]=-1,--l;return h})(n,r,o,a,l,s,i,c),e,t,n,r,l,s,u,p)};let G=(e,t)=>{(G="remove"in e?e=>{e.remove()}:(e,t)=>{e.parentNode===t&&t.removeChild(e)})(e,t)};
/*! (c) 2018 Andrea Giammarchi (ISC) */const V=(e,t,n,r)=>{r||(r={});const o=r.compare||T,a=r.node||M,l=null==r.before?null:a(r.before,0),s=t.length;let i=s,c=0,u=n.length,f=0;for(;c<i&&f<u&&o(t[c],n[f]);)c++,f++;for(;c<i&&f<u&&o(t[i-1],n[u-1]);)i--,u--;const p=c===i,h=f===u;if(p&&h)return n;if(p&&f<u)return j(a,e,n,f,u,$(a,t,c,s,l)),n;if(h&&c<i)return D(a,e,t,c,i),n;const d=i-c,v=u-f;let g=-1;if(d<v){if(-1<(g=L(n,f,u,t,c,i,o)))return j(a,e,n,f,g,a(t[c],0)),j(a,e,n,g+d,u,$(a,t,i,s,l)),n}else if(v<d&&-1<(g=L(t,c,i,n,f,u,o)))return D(a,e,t,c,g),D(a,e,t,g+v,i),n;return d<2||v<2?(j(a,e,n,f,u,a(t[c],0)),D(a,e,t,c,i),n):d===v&&((e,t,n,r,o,a)=>{for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t})(n,u,t,c,i,o)?(j(a,e,n,f,u,$(a,t,i,s,l)),n):(_(a,e,n,f,u,v,t,c,i,d,s,o,l),n)};/*! (c) Andrea Giammarchi - ISC */var R=String.prototype.trim;function W(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function z(e,t,a,l){for(var s=new Map,i=e.attributes,c=[],u=c.slice.call(i,0),f=u.length,p=0;p<f;){var h,d=u[p++],v=d.value===n;if(v||1<(h=d.value.split(o)).length){var g=d.name;if(!s.has(g)){var m=a.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+g+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),y=i[m]||i[m.toLowerCase()];if(s.set(g,y),v)t.push(Z(y,l,m,null));else{for(var w=h.length-2;w--;)a.shift();t.push(Z(y,l,m,h))}}c.push(d)}}p=0;for(var b=(0<(f=c.length)&&r&&!("ownerSVGElement"in e));p<f;){var x=c[p++];b&&(x.value=""),e.removeAttribute(x.name)}var N=e.nodeName;if(/^script$/i.test(N)){var k=document.createElement(N);for(f=i.length,p=0;p<f;)k.setAttributeNode(i[p++].cloneNode(!0));k.textContent=e.textContent,e.parentNode.replaceChild(k,e)}}function H(e,t){return{type:"any",node:e,path:t}}function Z(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function F(e,t){return{type:"text",node:e,path:t}}var I=document.importNode,B=String.prototype.trim,q=new WeakMap,P=new WeakMap;function J(e,t){var r=(e.convert||u)(t),c=e.transform;c&&(r=c(r));var f=A(r,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===B.call(r.textContent).length&&e.removeChild(r)}}
/*! (c) Andrea Giammarchi - ISC */(f);/*! (c) Andrea Giammarchi - ISC */var p=[];!function e(t,r,c,u){for(var f=t.childNodes,p=f.length,h=0;h<p;){var d=f[h];switch(d.nodeType){case l:var v=u.concat(h);z(d,r,c,v),e(d,r,c,v);break;case a:var g=d.textContent;if(g===n)c.shift(),r.push(i.test(t.nodeName)?F(t,u):H(d,u.concat(h)));else switch(g.slice(0,2)){case"/*":if("*/"!==g.slice(-2))break;case"👻":t.removeChild(d),h--,p--}break;case s:i.test(t.nodeName)&&R.call(d.textContent)===o&&(c.shift(),r.push(F(t,u)))}h++}}(f,p,t.slice(0),[]);var h={content:f,updates:function(n){for(var r=[],o=p.length,a=0,l=0;a<o;){var s=p[a++],i=W(n,s.path);switch(s.type){case"any":r.push({fn:e.any(i,[]),sparse:!1});break;case"attr":var c=s.sparse,u=e.attribute(i,s.name,s.node);null===c?r.push({fn:u,sparse:!1}):(l+=c.length-2,r.push({fn:u,sparse:!0,values:c}));break;case"text":r.push({fn:e.text(i),sparse:!1}),i.textContent=""}}return o+=l,function(){var e=arguments.length;if(o!==e-1)throw new Error(e-1+" values instead of "+o+"\n"+t.join("${value}"));for(var a=1,l=1;a<e;){var s=r[a-l];if(s.sparse){var i=s.values,c=i[0],u=1,f=i.length;for(l+=f-2;u<f;)c+=arguments[a++]+i[u++];s.fn(c)}else s.fn(arguments[a++])}return n}}};return q.set(t,h),h}function K(e,t){var n=q.get(t)||J(e,t),r=I.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return P.set(e,o),o}var Q=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,l;return function(s){var i,c,u,f;switch(typeof s){case"object":if(s){if("object"===a){if(!o&&l!==s)for(c in l)c in s||(r[c]="")}else o?r.value="":r.cssText="";for(c in i=o?{}:r,s)u="number"!=typeof(f=s[c])||e.test(c)?f:f+"px",!o&&/^--/.test(c)?i.setProperty(c,u):i[c]=u;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(l=i):l=s;break}default:l!=s&&(a="string",l=s,o?r.value=s||"":r.cssText=s||"")}}}}();const U=(e,t)=>e.nodeType===C?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,X=(e,t)=>{let n,r=!1;const o=t.cloneNode(!0);return t=>{n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},Y=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},ee=/^(?:form|list)$/i,te=[].slice,ne=(e,t)=>e.ownerDocument.createTextNode(t);function re(e){return this.type=e,t=this,function(e){var n=P.get(t);return null!=n&&n.template===e||(n=K(t,e)),n.updates.apply(null,arguments),n.content};var t}function oe(e){return e(this)}re.prototype={attribute(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return X(e,n);t="className";case"data":case"props":return Y(e,t);case"style":return Q(e,n,"ownerSVGElement"in e);case"ref":return(e=>t=>{t.current=e})(e);default:return"."===t.slice(0,1)?((e,t,n)=>n?n=>{try{e[t]=n}catch(r){e.setAttribute(t,n)}}:n=>{e[t]=n})(e,t.slice(1),"ownerSVGElement"in e):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!("ownerSVGElement"in e||ee.test(t))?Y(e,t):X(e,n)}},any(e,t){const n={node:U,before:e},r="ownerSVGElement"in e?"svg":"html";let o,a=!1;const l=s=>{switch(typeof s){case"string":case"number":case"boolean":a?o!==s&&(o=s,t[0].textContent=s):(a=!0,o=s,t=V(e.parentNode,t,[ne(e,s)],n));break;case"function":l(s(e));break;case"object":case"undefined":if(null==s){a=!1,t=V(e.parentNode,t,[],n);break}default:if(a=!1,k(s))if(o=s,0===s.length)t.length&&(t=V(e.parentNode,t,[],n));else switch(typeof s[0]){case"string":case"number":case"boolean":l(String(s));break;case"function":l(s.map(oe,e));break;case"object":k(s[0])&&(s=s.concat.apply([],s));default:t=V(e.parentNode,t,s,n)}else if((e=>"ELEMENT_NODE"in e)(s))o=s,t=V(e.parentNode,t,11===s.nodeType?te.call(s.childNodes):[s],n);else if("text"in s)l(String(s.text));else if("any"in s)l(s.any);else if("html"in s){const a=[].concat(s.html).join("");a!==o&&(o=a,t=V(e.parentNode,t,te.call(A(a,r).childNodes),n))}else"length"in s&&l(te.call(s))}};return l},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(te.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const{create:ae,keys:le}=Object,se=new WeakMap,ie=new WeakMap,ce=re.prototype;let ue=null;const fe=e=>{const t=ye("html",e),n=ye("svg",e);return{html:t,svg:n,hook:e=>({html:me(e,t),svg:me(e,n)}),render(t,n){const r=we.call(this,t,n,e);return ie.get(t)!==r&&(ie.set(t,r),function(e,t){e.textContent="",e.appendChild(t)}(t,r)),t}}},{html:pe,svg:he,render:de,hook:ve}=fe(re);function ge(e,t){return e.nodeType===C?e.valueOf(t):e}function me(e,t){return function(){const n=e(null);return null===n.current&&(n.current=t.for(n)),ge(n.current.apply(null,arguments),!1)}}function ye(e,t){const n=new WeakMap;return r.for=(r,o)=>{const a=n.get(r)||function(e){const t={$:null};return n.set(e,t),t}(r);return null==o&&(o="$"),a[o]||function(n,r){let o=[],a=null;const l=new t(e),s=()=>l.apply(null,xe(o,1,1,t));return n[r]=function(){o=arguments;const e=we(l,s,t);return a||(a=Ne(e))}}(a,o)},r;function r(){const n=arguments;return ue?new E(e,n):new t(e).apply(null,n)}}function we(e,t,n){const r=ue;(ue=se.get(e)||function(e){const t={i:0,length:0,stack:[],update:!1};return se.set(e,t),t}(e)).i=0;const o=t.call(this);let a;if(o instanceof E){a=ge(be(o,0,n),ue.update);const{i:e,length:t,stack:r,update:l}=ue;e<t&&r.splice(ue.length=e),l&&(ue.update=!1)}else a=ge(o,!1);return ue=r,a}function be(e,t,n){const{i:r,length:o,stack:a}=ue,{type:l,args:s}=e,i=r<o;ue.i++,i||(ue.length=a.push({l:t,kind:l,tag:null,tpl:s[0],wire:null})),xe(s,1,t+1,n);const c=a[r];if(i){const{l:e,kind:n,tag:r,tpl:o,wire:a}=c;if(e===t&&l===n&&o===s[0])return r.apply(null,s),a}const u=new n(l),f=Ne(u.apply(null,s));return c.l=t,c.kind=l,c.tag=u,c.tpl=s[0],c.wire=f,r<1&&(ue.update=!0),f}function xe(e,t,n,r){for(const{length:o}=e;t<o;t++){const o=e[t];"object"==typeof o&&o&&(o instanceof E?e[t]=be(o,n-1,r):k(o)&&(e[t]=xe(o,0,n++,r)))}return e}function Ne(e){const t=e.childNodes,{length:n}=t;return 1===n?t[0]:n?new N(t):e}return e.Hole=E,e.custom=e=>{const t=ae(ce);return le(e).forEach(n=>{t[n]=e[n](t[n]||("convert"===n?u:String))}),n.prototype=t,fe(n);function n(){return re.apply(this,arguments)}},e.hook=ve,e.html=pe,e.render=de,e.svg=he,e}({});
