var D=Object.freeze,C1=Object.defineProperty;var _=(e,t)=>D(C1(e,"raw",{value:D(t||e.slice())}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerPolicy&&(s.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?s.credentials="include":c.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(c){if(c.ep)return;c.ep=!0;const s=a(c);fetch(c.href,s)}})();/*! (c) Andrea Giammarchi - ISC */var Z={};try{Z.WeakMap=WeakMap}catch{Z.WeakMap=function(t,a){var l=a.defineProperty,c=a.hasOwnProperty,s=r.prototype;return s.delete=function(i){return this.has(i)&&delete i[this._]},s.get=function(i){return this.has(i)?i[this._]:void 0},s.has=function(i){return c.call(i,this._)},s.set=function(i,n){return l(i,this._,{configurable:!0,value:n}),this},r;function r(i){l(this,"_",{value:"_@ungap/weakmap"+t++}),i&&i.forEach(o,this)}function o(i){this.set(i[0],i[1])}}(Math.random(),Object)}const S=Z.WeakMap;/*! (c) Andrea Giammarchi - ISC */var d="-"+Math.random().toFixed(6)+"%",O=!1;try{(function(e,t,a){return t in e&&(e.innerHTML="<p "+a+'="'+d+'"></p>',e[t].childNodes[0].getAttribute(a)==d)})(document.createElement("template"),"content","tabindex")||(d="_dt: "+d.slice(1,-1)+";",O=!0)}catch{}var E="<!--"+d+"-->",f1=8,u1=1,h1=3,j=/^(?:plaintext|script|style|textarea|title|xmp)$/i,m1=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;/*! (c) Andrea Giammarchi - ISC */function g1(e){return e.join(E).replace(v1,y1).replace(d1,b1)}var V=" \\f\\n\\r\\t",J="[^"+V+`\\/>"'=]+`,N="["+V+"]+"+J,Q="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",e1=`(?:\\s*=\\s*(?:'[^']*?'|"[^"]*?"|<[^>]*?>|`+J.replace("\\/","")+"))?)",d1=new RegExp(Q+N+e1+"+)(["+V+"]*/?>)","g"),v1=new RegExp(Q+N+e1+"*)(["+V+"]*/>)","g"),w1=new RegExp("("+N+`\\s*=\\s*)(['"]?)`+E+"\\2","gi");function b1(e,t,a,l){return"<"+t+a.replace(w1,x1)+l}function x1(e,t,a){return t+(a||'"')+d+(a||'"')}function y1(e,t,a){return m1.test(t)?e:"<"+t+a+"></"+t+">"}const{isArray:H}=Array,{indexOf:d2,slice:L}=[],I=e=>({get:t=>e.get(t),set:(t,a)=>(e.set(t,a),a)}),M1=1,t1=111,k1=({firstChild:e,lastChild:t})=>{const a=document.createRange();return a.setStartAfter(e),a.setEndAfter(t),a.deleteContents(),e},M=(e,t)=>e.nodeType===t1?1/t<0?t?k1(e):e.lastChild:t?e.valueOf():e.firstChild:e,L1=e=>{const{childNodes:t}=e,{length:a}=t;if(a<2)return a?t[0]:e;const l=L.call(t,0),c=l[0],s=l[a-1];return{ELEMENT_NODE:M1,nodeType:t1,firstChild:c,lastChild:s,valueOf(){if(t.length!==a){let r=0;for(;r<a;)e.appendChild(l[r++])}return e}}};/*! (c) Andrea Giammarchi - ISC */var a1=function(e){var t="fragment",a="template",l="content"in r(a),c=l?function(i){var n=r(a);return n.innerHTML=i,n.content}:function(i){var n=r(t),C=r(a),f=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(i)){var u=RegExp.$1;C.innerHTML="<table>"+i+"</table>",f=C.querySelectorAll(u)}else C.innerHTML=i,f=C.childNodes;return s(n,f),n};return function(n,C){return(C==="svg"?o:c)(n)};function s(i,n){for(var C=n.length;C--;)i.appendChild(n[0])}function r(i){return i===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",i)}function o(i){var n=r(t),C=r("div");return C.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+i+"</svg>",s(n,C.firstChild.childNodes),n}}(document);const k=(e,t,a,l,c)=>{const s=a.length;let r=t.length,o=s,i=0,n=0,C=null;for(;i<r||n<o;)if(r===i){const f=o<s?n?l(a[n-1],-0).nextSibling:l(a[o-n],0):c;for(;n<o;)e.insertBefore(l(a[n++],1),f)}else if(o===n)for(;i<r;)(!C||!C.has(t[i]))&&e.removeChild(l(t[i],-1)),i++;else if(t[i]===a[n])i++,n++;else if(t[r-1]===a[o-1])r--,o--;else if(t[i]===a[o-1]&&a[n]===t[r-1]){const f=l(t[--r],-1).nextSibling;e.insertBefore(l(a[n++],1),l(t[i++],-1).nextSibling),e.insertBefore(l(a[--o],1),f),t[r]=a[o]}else{if(!C){C=new Map;let f=n;for(;f<o;)C.set(a[f],f++)}if(C.has(t[i])){const f=C.get(t[i]);if(n<f&&f<o){let u=i,m=1;for(;++u<r&&u<o&&C.get(t[u])===f+m;)m++;if(m>f-n){const h=l(t[i],0);for(;n<f;)e.insertBefore(l(a[n++],1),h)}else e.replaceChild(l(a[n++],1),l(t[i++],-1))}else i++}else e.removeChild(l(t[i++],-1))}return a};/*! (c) Andrea Giammarchi - ISC */var T1=function(e,t,a,l,c){var s=c in e,r=e.createDocumentFragment();r[t](e[l]("g")),r[t](e[l](""));var o=s?e[c](r,!0):r[a](!0);return o.childNodes.length<2?function i(n,C){for(var f=n[a](),u=n.childNodes||[],m=u.length,h=0;C&&h<m;h++)f[t](i(u[h],C));return f}:s?e[c]:function(i,n){return i[a](!!n)}}(document,"appendChild","cloneNode","createTextNode","importNode"),l1="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},z1=O?function(e,t){var a=t.join(" ");return t.slice.call(e,0).sort(function(l,c){return a.indexOf(l.name)<=a.indexOf(c.name)?-1:1})}:function(e,t){return t.slice.call(e,0)};function H1(e,t){for(var a=t.length,l=0;l<a;)e=e.childNodes[t[l++]];return e}function r1(e,t,a,l){for(var c=e.childNodes,s=c.length,r=0;r<s;){var o=c[r];switch(o.nodeType){case u1:var i=l.concat(r);A1(o,t,a,i),r1(o,t,a,i);break;case f1:var n=o.textContent;if(n===d)a.shift(),t.push(j.test(e.nodeName)?G(e,l):E1(o,l.concat(r)));else switch(n.slice(0,2)){case"/*":if(n.slice(-2)!=="*/")break;case"👻":e.removeChild(o),r--,s--}break;case h1:j.test(e.nodeName)&&l1.call(o.textContent)===E&&(a.shift(),t.push(G(e,l)));break}r++}}function A1(e,t,a,l){for(var c=e.attributes,s=[],r=[],o=z1(c,a),i=o.length,n=0;n<i;){var C=o[n++],f=C.value===d,u;if(f||1<(u=C.value.split(E)).length){var m=C.name;if(s.indexOf(m)<0){s.push(m);var h=a.shift().replace(f?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+m+`)\\s*=\\s*('|")[\\S\\s]*`,"i"),"$1"),w=c[h]||c[h.toLowerCase()];if(f)t.push(F(w,l,h,null));else{for(var b=u.length-2;b--;)a.shift();t.push(F(w,l,h,u))}}r.push(C)}}i=r.length,n=0;for(var z=0<i&&O&&!("ownerSVGElement"in e);n<i;){var v=r[n++];z&&(v.value=""),e.removeAttribute(v.name)}var x=e.nodeName;if(/^script$/i.test(x)){var y=document.createElement(x);for(i=c.length,n=0;n<i;)y.setAttributeNode(c[n++].cloneNode(!0));y.textContent=e.textContent,e.parentNode.replaceChild(y,e)}}function E1(e,t){return{type:"any",node:e,path:t}}function F(e,t,a,l){return{type:"attr",node:e,path:t,name:a,sparse:l}}function G(e,t){return{type:"text",node:e,path:t}}var R=I(new S);function V1(e,t){var a=(e.convert||g1)(t),l=e.transform;l&&(a=l(a));var c=a1(a,e.type);c1(c);var s=[];return r1(c,s,t.slice(0),[]),{content:c,updates:function(r){for(var o=[],i=s.length,n=0,C=0;n<i;){var f=s[n++],u=H1(r,f.path);switch(f.type){case"any":o.push({fn:e.any(u,[]),sparse:!1});break;case"attr":var m=f.sparse,h=e.attribute(u,f.name,f.node);m===null?o.push({fn:h,sparse:!1}):(C+=m.length-2,o.push({fn:h,sparse:!0,values:m}));break;case"text":o.push({fn:e.text(u),sparse:!1}),u.textContent="";break}}return i+=C,function(){var w=arguments.length;if(i!==w-1)throw new Error(w-1+" values instead of "+i+`
`+t.join("${value}"));for(var b=1,z=1;b<w;){var v=o[b-z];if(v.sparse){var x=v.values,y=x[0],P=1,$=x.length;for(z+=$-2;P<$;)y+=arguments[b++]+x[P++];v.fn(y)}else v.fn(arguments[b++])}return r}}}}function B1(e,t){var a=R.get(t)||R.set(t,V1(e,t));return a.updates(T1.call(document,a.content,!0))}var Z1=[];function S1(e){var t=Z1,a=c1;return function(l){return t!==l&&(a=B1(e,t=l)),a.apply(null,arguments)}}function c1(e){for(var t=e.childNodes,a=t.length;a--;){var l=t[a];l.nodeType!==1&&l1.call(l.textContent).length===0&&e.removeChild(l)}}/*! (c) Andrea Giammarchi - ISC */var O1=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(o,i){return"ownerSVGElement"in o?l(o,i):s(o.style,!1)};function a(r,o,i){return o+"-"+i.toLowerCase()}function l(r,o){var i;return o?i=o.cloneNode(!0):(r.setAttribute("style","--hyper:style;"),i=r.getAttributeNode("style")),i.value="",r.setAttributeNode(i),s(i,!0)}function c(r){var o,i=[];for(o in r)i.push(o.replace(t,a),":",r[o],";");return i.join("")}function s(r,o){var i,n;return function(C){var f,u,m,h;switch(typeof C){case"object":if(C){if(i==="object"){if(!o&&n!==C)for(u in n)u in C||(r[u]="")}else o?r.value="":r.cssText="";f=o?{}:r;for(u in C)h=C[u],m=typeof h=="number"&&!e.test(u)?h+"px":h,!o&&/^--/.test(u)?f.setProperty(u,m):f[u]=m;i="object",o?r.value=c(n=f):n=C;break}default:n!=C&&(i="string",n=C,o?r.value=C||"":r.cssText=C||"");break}}}}();const N1=e=>t=>{for(const a in t){const l=a==="role"?a:`aria-${a}`,c=t[a];c==null?e.removeAttribute(l):e.setAttribute(l,c)}},Y=(e,t)=>{let a,l=!0;const c=document.createAttributeNS(null,t);return s=>{a!==s&&(a=s,a==null?l||(e.removeAttributeNode(c),l=!0):(c.value=s,l&&(e.setAttributeNodeNS(c),l=!1)))}},I1=(e,t,a)=>l=>{a!==!!l&&((a=!!l)?e.setAttribute(t,""):e.removeAttribute(t))},i1=({dataset:e})=>t=>{for(const a in t){const l=t[a];l==null?delete e[a]:e[a]=l}},q1=(e,t)=>{let a,l=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(l=l.toLowerCase()),c=>{const s=H(c)?c:[c,!1];a!==s[0]&&(a&&e.removeEventListener(l,a,s[1]),(a=s[0])&&e.addEventListener(l,a,s[1]))}},P1=e=>t=>{typeof t=="function"?t(e):t.current=e},W=(e,t)=>t==="dataset"?i1(e):a=>{e[t]=a},$1=(e,t)=>{let a;return l=>{a!==l&&(a=l,e[t]!==l&&(l==null?(e[t]="",e.removeAttribute(t)):e[t]=l))}},D1=/^(?:form|list)$/i,_1=(e,t)=>e.ownerDocument.createTextNode(t);function s1(e){return this.type=e,S1(this)}s1.prototype={attribute(e,t,a){const l=this.type==="svg";switch(t){case"class":if(l)return Y(e,t);t="className";case"props":return W(e,t);case"aria":return N1(e);case"style":return O1(e,a,l);case"ref":return P1(e);case".dataset":return i1(e);default:return t.slice(0,1)==="."?W(e,t.slice(1)):t.slice(0,1)==="?"?I1(e,t.slice(1)):t.slice(0,2)==="on"?q1(e,t):t in e&&!(l||D1.test(t))?$1(e,t):Y(e,t)}},any(e,t){const{type:a}=this;let l=!1,c;const s=r=>{switch(typeof r){case"string":case"number":case"boolean":l?c!==r&&(c=r,t[0].textContent=r):(l=!0,c=r,t=k(e.parentNode,t,[_1(e,r)],M,e));break;case"function":s(r(e));break;case"object":case"undefined":if(r==null){l=!1,t=k(e.parentNode,t,[],M,e);break}default:if(l=!1,c=r,H(r))if(r.length===0)t.length&&(t=k(e.parentNode,t,[],M,e));else switch(typeof r[0]){case"string":case"number":case"boolean":s(String(r));break;case"function":s(r.map(j1,e));break;case"object":H(r[0])&&(r=r.concat.apply([],r));default:t=k(e.parentNode,t,r,M,e);break}else"ELEMENT_NODE"in r?t=k(e.parentNode,t,r.nodeType===11?L.call(r.childNodes):[r],M,e):"text"in r?s(String(r.text)):"any"in r?s(r.any):"html"in r?t=k(e.parentNode,t,L.call(a1([].concat(r.html).join(""),a).childNodes),M,e):"length"in r&&s(L.call(r));break}};return s},text(e){let t;const a=l=>{if(t!==l){t=l;const c=typeof l;c==="object"&&l?"text"in l?a(String(l.text)):"any"in l?a(l.any):"html"in l?a([].concat(l.html).join("")):"length"in l&&a(L.call(l).join("")):c==="function"?a(l(e)):e.textContent=l??""}};return a}};function j1(e){return e(this)}const{create:F1,freeze:G1,keys:v2}=Object,K=I(new S),R1=e=>({html:U("html",e),svg:U("svg",e),render(t,a){const l=typeof a=="function"?a():a,c=K.get(t)||K.set(t,T()),s=l instanceof B?A(e,c,l):l;return s!==c.wire&&(c.wire=s,t.textContent="",t.appendChild(s.valueOf())),t}}),T=()=>({stack:[],entry:null,wire:null}),U=(e,t)=>{const a=I(new S),l=s=>function(){return A(t,s,c.apply(null,arguments))};return c.for=(s,r)=>{const o=a.get(s)||a.set(s,F1(null));return o[r]||(o[r]=l(T()))},c.node=function(){return A(t,T(),c.apply(null,arguments)).valueOf()},c;function c(){return new B(e,W1.apply(null,arguments))}},A=(e,t,{type:a,template:l,values:c})=>{const{length:s}=c;o1(e,t,c,s);let{entry:r}=t;if(!r||r.template!==l||r.type!==a){const o=new e(a);t.entry=r={type:a,template:l,tag:o,wire:L1(o(l,...c))}}else r.tag(l,...c);return r.wire},o1=(e,{stack:t},a,l)=>{for(let c=0;c<l;c++){const s=a[c];s instanceof Y1?a[c]=A(e,t[c]||(t[c]=T()),s):H(s)?o1(e,t[c]||(t[c]=T()),s,s.length):t[c]=null}l<t.length&&t.splice(l)};G1(B);function B(e,t){this.type=e,this.template=t.shift(),this.values=t}const Y1=B,{render:w2,html:p,svg:b2}=R1(s1);function W1(){let e=[],t=0,{length:a}=arguments;for(;t<a;)e.push(arguments[t++]);return e}const K1="Yorick Dupon",U1="Dit is de website van Yorick Dupon",X1="Yorick Dupon",J1="Journalist bij HLN met een passie voor technologie en sociale media",Q1="glitch",e2="https://cdn.glitch.global/b7fdb4b0-fc76-40d5-8b32-7634a54862e6/profesjkleinst.webp?v=1650211699452",t2="https://cdn.glitch.global/fca33d9c-0b2e-49bb-9527-3f92219b51a1/Yoyo.png?v=1650119870223",n1=[{url:"https://www.hln.be/zoeken?query=yorick+dupon",text:"Lees m'n artikels op HLN",img:"",altText:""},{url:"https://yorickdupon.medium.com/",text:"Lees m'n artikels op Tandem Tech (RIP)",img:"",altText:""},{url:"https://signal.me/#eu/bCxs0xmx7X-nNI5nyCnNuued2um_2ylNNe8jR6dgHtE7g_or3xhEsLs1aqG7omQj",text:"Contacteer me op Signal (yorickdupon.50)",img:"",altText:""}],a2={glitch:"",spotify:"https://open.spotify.com/user/yorickdupon2",applemusic:"",substack:"",devTo:"",stackOverflow:"",facebook:"",github:"",gitlab:"",replit:"",hashnode:"",instagram:"https://instagram.com/yorickdupon",keybase:"",pinboard:"",tumblr:"",linkedin:"https://linkedin.com/in/yorickdupon/",medium:"",patreon:"",kofi:"",pinterest:"",youtube:"",twitch:"",tiktok:"",podcast:"",soundcloud:"",bandcamp:"",mastodon:"https://mstdn.social/@yorickdupon",email:"",buttondown:"",letterboxd:"https://letterboxd.com/yorickdupon/",statuslol:"",bluesky:"https://bsky.app/profile/yorickdupon.com",threads:"https://threads.net/@yorickdupon",pixelfed:"",bookwyrm:"",peertube:"",codeberg:"",lemmy:"",hackaday:"",flipboard:"",itchio:"",lexaloffle:"",wordpress:"",friendica:"",lastfm:"",steam:"",xbox:"",psn:"",bgg:"",flickr:"https://www.flickr.com/photos/yorickdupon/",matrix:""},g={metaTitle:K1,metaDescription:U1,name:X1,bio:J1,theme:Q1,avatarImage:e2,favicon:t2,links:n1,social:a2};var X;const l2=p.node(X||(X=_([`
  <title>`,`</title>
  
  <!-- Web Monetization -->
  <meta name="monetization" content="$ilp.uphold.com/xkwmiyHi47Rw">
  
  <!-- analytics -->
  <!-- Google tag (gtag.js) -->
  <!-- should be configurable in settings.json -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-GKZGDYRC6J"><\/script>
  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GKZGDYRC6J');
  <\/script>
  
  <!-- OpenGraph/Social sharing -->
  <!-- moved into index for now -->

  <!-- Load our custom theme -->
  <link rel="stylesheet" type="text/css" href="/styles/themes/`,`.css" />
`])),g.metaTitle,g.theme),r2=p.node`<div>
  <!-- Avatar Image -->
  <!-- fades between two images on hover; remove the second img if not wanted -->

  <div class="avatar-container">
    <img src="${g.avatarImage}" width="200" height="200" class="avatar" alt="${g.name}" />
  </div>
  <h1 class="name">${g.name}</h1>
  <div class="subhead">${g.bio}</div>
</div>`;function c2(e){const t=e.url?e.url.replace(/[^a-z0-9]/gi,"-").toLowerCase():"";return p`
    <li class=${t}>
      <a href=${e.url}>
        ${e.img?p`<img src=${e.img} alt=${e.altText} />`:""}
        <span>${e.text}</span>
      </a>
    </li>
  `}const i2=p.node`
    <ul class="link-list">
      ${n1.map(c2)}
    </ul>
  `,s2={glitch:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="glitch"
  >
    <path
      d="M22.6555 15.0534C22.4795 14.4777 22.4207 14.5928 22.7727 13.7871C22.9235 13.4429 23.0008 13.0721 23 12.6975C22.9996 12.653 22.9879 12.6093 22.966 12.5703C22.9441 12.5313 22.9127 12.4982 22.8746 12.4741C22.8364 12.4499 22.7928 12.4355 22.7476 12.432C22.7024 12.4285 22.657 12.4361 22.6155 12.454C22.0767 12.6836 21.0494 13.1198 20.5442 13.3265C19.8406 13.6143 19.0781 13.7293 18.1984 13.4415C17.3188 13.1537 16.043 12.5058 14.8701 12.2464C14.0853 12.0731 13.5821 11.9217 12.7648 11.8346C12.9109 11.8206 13.8438 11.6419 14.7823 11.3685C15.703 11.0874 16.6086 10.761 17.4958 10.3905C18.551 9.92991 19.2551 10.0449 20.0171 10.3328C20.4782 10.507 21.367 10.9119 21.9986 11.2057C22.2522 11.3232 22.6216 11.0931 22.4998 10.8456C22.2751 10.3905 22.2167 9.61321 22.5099 9.09534C22.8432 8.50626 22.7737 8.37579 22.5977 7.80065C22.4217 7.22552 22.3633 7.34005 22.7149 6.53436C22.847 6.23287 22.9229 5.91057 22.9391 5.58276C22.9413 5.52412 22.9283 5.4659 22.9014 5.4135C22.8745 5.36109 22.8346 5.31619 22.7853 5.28297C22.736 5.24975 22.679 5.22928 22.6195 5.22345C22.56 5.21762 22.5 5.22663 22.445 5.24963C21.887 5.48766 20.9586 5.88054 20.4863 6.07375C19.7827 6.36157 19.0203 6.47659 18.1406 6.18878L14.5591 5.01659C14.4884 4.99434 14.427 4.95012 14.3841 4.89061C14.2294 4.67599 13.8098 4.1387 13.3903 4.00126C12.8627 3.82847 10.9274 3.25433 10.2238 3.13781C9.52016 3.02129 9.05091 2.84999 8.69885 3.25284C8.43911 3.55161 8.02617 4.03363 7.82731 4.26667C7.79196 4.30754 7.74748 4.33986 7.69733 4.36111C7.64717 4.38235 7.59271 4.39196 7.53816 4.38917C6.96187 4.36327 5.04937 4.36278 3.18607 5.32532C1.53128 6.18031 1.11124 7.51035 1.00471 8.13877C0.997129 8.18363 0.998714 8.22953 1.00937 8.27379C1.02002 8.31805 1.03954 8.35979 1.06677 8.39658C1.09401 8.43337 1.12843 8.46448 1.16802 8.48809C1.20762 8.51171 1.2516 8.52736 1.29742 8.53414C1.78848 8.61132 2.65443 8.79457 2.64378 9.12472C2.63566 9.37867 2.2212 9.56292 1.85138 9.67645C1.79177 9.69555 1.73838 9.7298 1.69663 9.77573C1.65488 9.82165 1.62627 9.87761 1.61369 9.93791C1.60112 9.99821 1.60503 10.0607 1.62504 10.119C1.64505 10.1774 1.68043 10.2295 1.7276 10.27C2.28918 10.7515 3.43617 11.486 5.3715 11.8346C4.63164 11.9849 3.9164 12.2346 3.24594 12.5765C1.52113 13.4664 1.13863 14.8716 1.0529 15.4647C1.04735 15.5001 1.04898 15.5362 1.05769 15.571C1.06639 15.6058 1.08201 15.6386 1.10364 15.6675C1.12527 15.6963 1.15249 15.7207 1.18374 15.7392C1.21499 15.7578 1.24965 15.77 1.28575 15.7754C1.75855 15.8456 2.71429 16.0299 2.70364 16.3769C2.69451 16.6598 2.18265 16.8555 1.79051 16.9645C1.74343 16.9773 1.70068 17.0021 1.66663 17.0365C1.63259 17.0709 1.60849 17.1136 1.59682 17.1601C1.58514 17.2067 1.58631 17.2554 1.6002 17.3014C1.61409 17.3474 1.64021 17.3889 1.67586 17.4216C2.29019 17.9858 3.81005 19.046 6.70822 19.2551C7.15261 19.287 7.63556 19.2999 8.12865 19.2994C8.55021 19.8472 9.30963 20.6085 10.4211 20.8635C11.2622 21.0567 11.7822 21.0129 12.0861 20.9267C12.135 20.9121 12.1799 20.8865 12.2172 20.852C12.2544 20.8175 12.2831 20.7751 12.3009 20.728C12.3187 20.6808 12.3252 20.6303 12.3199 20.5803C12.3146 20.5303 12.2976 20.4822 12.2702 20.4397L11.4585 19.1451C12.1449 19.0893 12.6324 19.037 12.7298 19.0265C12.7416 19.0251 12.7533 19.0229 12.7648 19.0201C13.0362 18.9533 16.5421 18.0854 17.5567 17.6427C18.6124 17.1821 19.316 17.2971 20.0785 17.585C20.5746 17.7722 21.5669 18.2278 22.2 18.5231C22.4065 18.6192 22.6566 18.437 22.586 18.2243C22.4242 17.7299 22.3659 16.8091 22.5708 16.3485C22.8427 15.7311 22.8311 15.629 22.6555 15.0534ZM4.4675 8.40169C4.09464 8.40169 3.79128 8.06557 3.79128 7.65475C3.79128 7.24394 4.09464 6.90483 4.4675 6.90483C4.84036 6.90483 5.14373 7.23846 5.14373 7.65177C5.14373 8.06507 4.84036 8.40169 4.4675 8.40169ZM4.4675 15.515C4.09464 15.515 3.79128 15.1788 3.79128 14.765C3.79128 14.3512 4.09565 14.0181 4.4675 14.0181C4.83935 14.0181 5.14373 14.3542 5.14373 14.765C5.14373 15.1759 4.84036 15.515 4.4675 15.515V15.515ZM7.80652 15.2904C7.75021 16.0737 7.68527 16.352 7.41894 16.9456C7.3851 17.0199 7.33005 17.0829 7.26045 17.1271C7.19085 17.1713 7.10969 17.1947 7.0268 17.1946C6.96716 17.1947 6.90817 17.1823 6.85382 17.1582C6.75212 17.1125 6.67235 17.03 6.63122 16.9279C6.59009 16.8258 6.59078 16.7121 6.63314 16.6105C6.81678 16.1528 6.90049 15.9437 6.95172 15.2306C6.98673 14.7392 6.7067 14.3308 6.49516 14.0664C6.42903 13.9787 6.40021 13.8692 6.41479 13.761C6.42936 13.6528 6.48619 13.5544 6.57327 13.4866C6.66035 13.4187 6.77088 13.3867 6.88153 13.3974C6.99218 13.408 7.09429 13.4604 7.16631 13.5436L7.17747 13.5575C7.74767 14.2626 7.83391 14.889 7.80652 15.2904ZM7.81412 7.90074C7.78927 8.5441 7.72231 8.97832 7.42402 9.5659C7.38899 9.63851 7.3339 9.70001 7.26503 9.74341C7.19615 9.78681 7.11625 9.81036 7.03441 9.81139C6.97499 9.81147 6.91622 9.79925 6.86193 9.77554C6.80941 9.75276 6.76203 9.71994 6.72257 9.67898C6.68312 9.63803 6.65237 9.58977 6.63213 9.53702C6.61217 9.48587 6.60287 9.43131 6.60479 9.37657C6.60671 9.32182 6.6198 9.26802 6.64329 9.21833C6.84621 8.79258 6.90708 8.57099 6.95883 7.84597C6.99383 7.35548 6.7138 6.94666 6.50226 6.68175C6.43804 6.59407 6.41061 6.48551 6.42567 6.37854C6.44072 6.27156 6.4971 6.17436 6.58313 6.10706C6.66917 6.03975 6.77827 6.0075 6.88787 6.01696C6.99746 6.02642 7.09915 6.07689 7.17189 6.1579C7.42604 6.47211 7.84456 7.11398 7.81412 7.90074ZM9.41616 5.75506C10.6038 5.79746 11.7873 5.91472 12.9596 6.10612C14.6555 6.39792 16.6121 7.02833 16.8288 7.09904C16.9184 7.12862 16.9945 7.18849 17.0434 7.26798C17.0923 7.34748 17.1108 7.44143 17.0957 7.5331C17.0806 7.62476 17.0328 7.70818 16.9609 7.76849C16.889 7.8288 16.7975 7.86208 16.7029 7.8624C16.6602 7.86234 16.6177 7.85545 16.5771 7.84198C16.5563 7.83551 14.5018 7.16626 12.8232 6.87745C11.6931 6.69317 10.5523 6.57974 9.40754 6.53784C9.30179 6.53659 9.20088 6.49415 9.127 6.41986C9.05313 6.34557 9.01234 6.24552 9.01362 6.14172C9.0149 6.03792 9.05814 5.93886 9.13382 5.86635C9.2095 5.79384 9.31143 5.7538 9.41718 5.75506H9.41616ZM17.0814 14.5888C17.0549 14.6667 17.0041 14.7344 16.9361 14.7824C16.8682 14.8304 16.7866 14.8562 16.7029 14.8562C16.6602 14.8563 16.6177 14.8496 16.5771 14.8363C16.5563 14.8293 14.5018 14.1605 12.8232 13.8717C11.6932 13.6872 10.5523 13.5737 9.40754 13.5321C9.30179 13.5309 9.20088 13.4884 9.127 13.4141C9.05313 13.3398 9.01234 13.2398 9.01362 13.136C9.0149 13.0322 9.05814 12.9331 9.13382 12.8606C9.2095 12.7881 9.31143 12.7481 9.41718 12.7493C10.6047 12.7906 11.7883 12.907 12.9606 13.0979C14.6565 13.3892 16.6132 14.0201 16.8298 14.0908C16.9302 14.124 17.013 14.1949 17.0602 14.2879C17.1074 14.381 17.115 14.4887 17.0814 14.5873V14.5888Z"
      fill="#333333"
    />
  </svg>`,arena:p`
    <svg
      class="social-profile-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 152.9 90.5"
      tabindex="0"
      focusable="true"
      role="img" aria-label="arena"
    >
      <path
        d="M150.2,63.1l-20.8-16.4c-1.3-1-1.3-2.6,0-3.6l20.8-16.4c1.3-1,1.8-2.7,1.2-3.8c-0.6-1.1-2.4-1.4-3.9-0.8L122.7,32
	c-1.5,0.6-2.9-0.2-3.2-1.8l-3.7-26.5c-0.2-1.6-1.4-2.9-2.7-2.9c-1.2,0-2.5,1.3-2.7,2.9l-3.7,26.5c-0.2,1.6-1.6,2.4-3.2,1.8
	l-24.4-9.7c-1.5-0.6-4-0.6-5.5,0L49.3,32c-1.5,0.6-2.9-0.2-3.2-1.8L42.5,3.7c-0.2-1.6-1.4-2.9-2.7-2.9c-1.3,0-2.5,1.3-2.7,2.9
	l-3.7,26.5c-0.2,1.6-1.6,2.4-3.2,1.8L5.4,22.1c-1.5-0.6-3.3-0.2-3.9,0.8c-0.6,1.1-0.1,2.8,1.2,3.8l20.9,16.4c1.3,1,1.3,2.6,0,3.6
	L2.7,63.1c-1.3,1-1.8,2.8-1.2,4c0.6,1.2,2.4,1.7,3.9,1.1L30,58.3c1.5-0.6,2.9,0.2,3.1,1.8l3.5,26.7c0.2,1.6,1.6,2.9,3.1,2.9
	c1.5,0,2.9-1.3,3.1-2.9l3.5-26.7c0.2-1.6,1.6-2.4,3.1-1.8L73.7,68c1.5,0.6,4,0.6,5.5,0l24.2-9.7c1.5-0.6,2.9,0.2,3.1,1.8l3.6,26.7
	c0.2,1.6,1.6,2.9,3.1,2.9c1.5,0,2.9-1.3,3.1-2.9l3.6-26.7c0.2-1.6,1.6-2.4,3.1-1.8l24.6,9.9c1.5,0.6,3.2,0.1,3.9-1.1
	C152,65.9,151.5,64.1,150.2,63.1L150.2,63.1z M97.2,46.9L78.8,61.1c-1.3,1-3.4,1-4.7,0L55.8,46.9c-1.3-1-1.3-2.6,0-3.6l18.4-14.5
	c1.3-1,3.4-1,4.6,0l18.4,14.5C98.5,44.3,98.5,45.9,97.2,46.9L97.2,46.9z"
        fill="black"
      />
    </svg>
  `,bandcamp:p` <svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    tabindex="0"
    focusable="true"
    role="img" aria-label="bandcamp"
  >
    <path
      fill="currentColor"
      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm48.2,326.1h-181L207.9,178h181Z"
    ></path>
  </svg>`,devTo:p`<svg
    class="social-profile-icon"
    viewBox="0 32 447.99999999999994 448"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="DEV.to"
  >
    <path
      d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
    />
  </svg>`,facebook:p`<svg
    class="social-profile-icon"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Facebook"
  >
    <path
      d="M10.001 0.00195312C4.47895 0.00195312 0.00195312 4.47895 0.00195312 10.001C0.00195312 14.991 3.65795 19.127 8.43895 19.88V12.892H5.89895V10.001H8.43895V7.79795C8.43895 5.28995 9.93195 3.90695 12.215 3.90695C13.309 3.90695 14.455 4.10195 14.455 4.10195V6.56095H13.191C11.951 6.56095 11.563 7.33295 11.563 8.12395V9.99895H14.334L13.891 12.89H11.563V19.878C16.344 19.129 20 14.992 20 10.001C20 4.47895 15.523 0.00195312 10.001 0.00195312Z"
      fill="#2E3A59"
    />
  </svg>`,github:p` <svg
    class="social-profile-icon"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="GitHub"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.026 0C4.517 0 0.052002 4.465 0.052002 9.974C0.052002 14.38 2.909 18.119 6.873 19.439C7.372 19.529 7.552 19.222 7.552 18.958C7.552 18.721 7.544 18.093 7.541 17.262C4.766 17.864 4.18 15.924 4.18 15.924C3.728 14.772 3.073 14.465 3.073 14.465C2.168 13.846 3.142 13.86 3.142 13.86C4.144 13.93 4.669 14.888 4.669 14.888C5.559 16.412 7.005 15.972 7.571 15.717C7.662 15.072 7.922 14.632 8.206 14.383C5.992 14.132 3.664 13.276 3.664 9.453C3.664 8.366 4.053 7.474 4.688 6.778C4.587 6.525 4.242 5.51 4.787 4.138C4.787 4.138 5.624 3.869 7.529 5.159C8.327 4.938 9.178 4.827 10.025 4.823C10.874 4.827 11.726 4.938 12.521 5.159C14.427 3.868 15.263 4.138 15.263 4.138C15.808 5.51 15.466 6.525 15.362 6.778C16.002 7.474 16.386 8.365 16.386 9.453C16.386 13.286 14.056 14.128 11.834 14.375C12.189 14.683 12.509 15.291 12.509 16.221C12.509 17.555 12.497 18.631 12.497 18.958C12.497 19.225 12.675 19.535 13.184 19.437C17.146 18.115 20 14.379 20 9.974C20 4.465 15.535 0 10.026 0Z"
      fill="#2E3A59"
    />
  </svg>`,gitlab:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="GitLab"
  >
    <path
      d="M4.845.904c-.435 0-.82.28-.955.692C2.639 5.449 1.246 9.728.07 13.335a1.437 1.437 0 0 0 .522 1.607l11.071 8.045c.2.145.472.144.67-.004l11.073-8.04a1.436 1.436 0 0 0 .522-1.61c-1.285-3.942-2.683-8.256-3.817-11.746a1.004 1.004 0 0 0-.957-.684a.987.987 0 0 0-.949.69L15.8 9.001H8.203l-2.41-7.408a.987.987 0 0 0-.942-.69h-.006zm-.006 1.42l2.173 6.678H2.675zm14.326 0l2.168 6.678h-4.341zm-10.593 7.81h6.862c-1.142 3.52-2.288 7.04-3.434 10.559L8.572 10.135zm-5.514.005h4.321l3.086 9.5zm13.567 0h4.325c-2.467 3.17-4.95 6.328-7.411 9.502c1.028-3.167 2.059-6.334 3.086-9.502zM2.1 10.762l6.977 8.947l-7.817-5.682a.305.305 0 0 1-.112-.341zm19.798 0l.952 2.922a.305.305 0 0 1-.11.341v.002l-7.82 5.68l.026-.035z"
      fill="#2E3A59"
    />
  </svg>`,hashnode:p`<svg
    class="social-profile-icon"
    viewBox="0 0 337 337"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Hashnode"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"
      fill="#2E3A59"
    />
  </svg>`,instagram:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Instagram"
  >
    <path
      d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
      fill="black"
    />
  </svg>`,keybase:p`<svg
    class="social-profile-icon"
    viewBox="0 0 448 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Keybase"
  >
    <path
      d="M286.17 419a18 18 0 1 0 18 18 18 18 0 0 0-18-18zm111.92-147.6c-9.5-14.62-39.37-52.45-87.26-73.71q-9.1-4.06-18.38-7.27a78.43 78.43 0 0 0-47.88-104.13c-12.41-4.1-23.33-6-32.41-5.77-.6-2-1.89-11 9.4-35L198.66 32l-5.48 7.56c-8.69 12.06-16.92 23.55-24.34 34.89a51 51 0 0 0-8.29-1.25c-41.53-2.45-39-2.33-41.06-2.33-50.61 0-50.75 52.12-50.75 45.88l-2.36 36.68c-1.61 27 19.75 50.21 47.63 51.85l8.93.54a214 214 0 0 0-46.29 35.54C14 304.66 14 374 14 429.77v33.64l23.32-29.8a148.6 148.6 0 0 0 14.56 37.56c5.78 10.13 14.87 9.45 19.64 7.33 4.21-1.87 10-6.92 3.75-20.11a178.29 178.29 0 0 1-15.76-53.13l46.82-59.83-24.66 74.11c58.23-42.4 157.38-61.76 236.25-38.59 34.2 10.05 67.45.69 84.74-23.84.72-1 1.2-2.16 1.85-3.22a156.09 156.09 0 0 1 2.8 28.43c0 23.3-3.69 52.93-14.88 81.64-2.52 6.46 1.76 14.5 8.6 15.74 7.42 1.57 15.33-3.1 18.37-11.15C429 443 434 414 434 382.32c0-38.58-13-77.46-35.91-110.92zM142.37 128.58l-15.7-.93-1.39 21.79 13.13.78a93 93 0 0 0 .32 19.57l-22.38-1.34a12.28 12.28 0 0 1-11.76-12.79L107 119c1-12.17 13.87-11.27 13.26-11.32l29.11 1.73a144.35 144.35 0 0 0-7 19.17zm148.42 172.18a10.51 10.51 0 0 1-14.35-1.39l-9.68-11.49-34.42 27a8.09 8.09 0 0 1-11.13-1.08l-15.78-18.64a7.38 7.38 0 0 1 1.34-10.34l34.57-27.18-14.14-16.74-17.09 13.45a7.75 7.75 0 0 1-10.59-1s-3.72-4.42-3.8-4.53a7.38 7.38 0 0 1 1.37-10.34L214 225.19s-18.51-22-18.6-22.14a9.56 9.56 0 0 1 1.74-13.42 10.38 10.38 0 0 1 14.3 1.37l81.09 96.32a9.58 9.58 0 0 1-1.74 13.44zM187.44 419a18 18 0 1 0 18 18 18 18 0 0 0-18-18z"
      fill="black"
    />
  </svg>`,kofi:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Kofi"
  >
    <path
      d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01 3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963c1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"
      fill="black"
    />
  </svg>`,letterboxd:p`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Letterboxd"
  >
    <path
      d="M11.052 22.339v-12.74h-2.323v-3.198h8.438v3.198h-2.328v12.766h5.234v-3.49h3.781v6.724h-15.125v-3.26zM0 16c0 8.839 7.161 16 16 16s16-7.161 16-16c0-8.839-7.161-16-16-16s-16 7.161-16 16z"
      fill="black"
    />
  </svg>`,linkedin:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="LinkedIn"
  >
    <path
      d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71648 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31543 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30817 8.5752 7.002 8.575H7.003ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.669H19.67Z"
      fill="black"
    />
  </svg>`,mastodon:p`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 216.4144 232.00976"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Mastodon"
  >
    <path
      d="M107.86523 0C78.203984.2425 49.672422 3.4535937 33.044922 11.089844c0 0-32.97656262 14.752031-32.97656262 65.082031 0 11.525-.224375 25.306175.140625 39.919925 1.19750002 49.22 9.02375002 97.72843 54.53124962 109.77343 20.9825 5.55375 38.99711 6.71547 53.505856 5.91797 26.31125-1.45875 41.08203-9.38867 41.08203-9.38867l-.86914-19.08984s-18.80171 5.92758-39.91796 5.20508c-20.921254-.7175-43.006879-2.25516-46.390629-27.94141-.3125-2.25625-.46875-4.66938-.46875-7.20313 0 0 20.536953 5.0204 46.564449 6.21289 15.915.73001 30.8393-.93343 45.99805-2.74218 29.07-3.47125 54.38125-21.3818 57.5625-37.74805 5.0125-25.78125 4.59961-62.916015 4.59961-62.916015 0-50.33-32.97461-65.082031-32.97461-65.082031C166.80539 3.4535938 138.255.2425 108.59375 0h-.72852zM74.296875 39.326172c12.355 0 21.710234 4.749297 27.896485 14.248047l6.01367 10.080078 6.01563-10.080078c6.185-9.49875 15.54023-14.248047 27.89648-14.248047 10.6775 0 19.28156 3.753672 25.85156 11.076172 6.36875 7.3225 9.53907 17.218828 9.53907 29.673828v60.941408h-24.14454V81.869141c0-12.46875-5.24453-18.798829-15.73828-18.798829-11.6025 0-17.41797 7.508516-17.41797 22.353516v32.375002H96.207031V85.423828c0-14.845-5.815468-22.353515-17.417969-22.353516-10.49375 0-15.740234 6.330079-15.740234 18.798829v59.148439H38.904297V80.076172c0-12.455 3.171016-22.351328 9.541015-29.673828 6.568751-7.3225 15.172813-11.076172 25.851563-11.076172z"
      fill="black"
    />
  </svg>`,medium:p`<svg
    class="social-profile-icon"
    viewBox="0 0 1043.63 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Medium"
  >
    <path
      d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
    ></path>
  </svg>`,patreon:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Patreon"
  >
    <path
      d="M15 17C13.0109 17 11.1032 16.2098 9.6967 14.8033C8.29018 13.3968 7.5 11.4891 7.5 9.5C7.5 7.51088 8.29018 5.60322 9.6967 4.1967C11.1032 2.79018 13.0109 2 15 2C16.9891 2 18.8968 2.79018 20.3033 4.1967C21.7098 5.60322 22.5 7.51088 22.5 9.5C22.5 11.4891 21.7098 13.3968 20.3033 14.8033C18.8968 16.2098 16.9891 17 15 17ZM2 2H6V22H2V2Z"
      fill="black"
    />
  </svg>`,pinboard:p`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Pinboard"
  >
    <path
      d="M17.802 19.448l-6.010 6.151 0.958-5.417-8.177-10.089-4.573 0.245 10.104-10.339v3.938l9.62 8.859 6.021-1.474-6.255 6.646 12.51 14.031z"
      fill="black"
    />
  </svg>`,pinterest:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Pinterest"
  >
    <path
      d="M13.37 2.09383C10.9773 1.76469 8.54625 2.31238 6.52583 3.63579C4.50541 4.9592 3.03205 6.96893 2.3778 9.2939C1.72356 11.6189 1.93261 14.102 2.96637 16.2849C4.00012 18.4677 5.78876 20.2029 8.002 21.1698C7.94215 20.4016 7.99709 19.6288 8.165 18.8768C8.35 18.0378 9.461 13.4138 9.461 13.4138C9.23977 12.9179 9.12921 12.3798 9.137 11.8368C9.137 10.3518 9.994 9.24383 11.06 9.24383C11.2515 9.24105 11.4414 9.27953 11.6167 9.35666C11.792 9.4338 11.9486 9.54778 12.076 9.69086C12.2033 9.83393 12.2983 10.0027 12.3546 10.1858C12.4108 10.3689 12.427 10.5619 12.402 10.7518C12.402 11.6518 11.824 13.0138 11.522 14.2918C11.4623 14.5262 11.4585 14.7713 11.5109 15.0075C11.5634 15.2436 11.6705 15.4641 11.8238 15.6512C11.977 15.8383 12.1721 15.9868 12.3932 16.0847C12.6144 16.1826 12.8555 16.2272 13.097 16.2148C14.995 16.2148 16.267 13.7838 16.267 10.9138C16.267 8.71383 14.81 7.06583 12.124 7.06583C11.4814 7.04086 10.8404 7.14676 10.2399 7.37709C9.63949 7.60742 9.09212 7.95738 8.63105 8.40572C8.16999 8.85406 7.80486 9.39144 7.55783 9.98521C7.31079 10.579 7.18701 11.2168 7.194 11.8598C7.16537 12.5732 7.39551 13.2728 7.842 13.8298C7.92544 13.8921 7.98636 13.9798 8.01558 14.0798C8.0448 14.1797 8.04074 14.2864 8.004 14.3838C7.958 14.5678 7.842 15.0068 7.796 15.1678C7.78644 15.2224 7.76418 15.274 7.73103 15.3184C7.69787 15.3629 7.65475 15.3989 7.60513 15.4236C7.55552 15.4483 7.50079 15.461 7.44536 15.4607C7.38993 15.4604 7.33534 15.4471 7.286 15.4218C5.902 14.8678 5.25 13.3448 5.25 11.6058C5.25 8.75883 7.634 5.35083 12.404 5.35083C16.2 5.35083 18.724 8.12783 18.724 11.0978C18.724 15.0068 16.547 17.9458 13.33 17.9458C12.8492 17.9612 12.3723 17.8551 11.9433 17.6373C11.5144 17.4195 11.1473 17.0971 10.876 16.6998C10.876 16.6998 10.298 19.0158 10.184 19.4538C9.9513 20.2105 9.60791 20.9286 9.165 21.5848C10.088 21.8648 11.047 22.0048 12.011 22.0008C13.3246 22.0019 14.6255 21.7438 15.8392 21.2414C17.0529 20.739 18.1556 20.0021 19.0841 19.0729C20.0126 18.1438 20.7487 17.0406 21.2503 15.8265C21.7518 14.6125 22.009 13.3114 22.007 11.9978C22.0058 9.58283 21.1308 7.24983 19.5436 5.42961C17.9565 3.6094 15.7643 2.4249 13.372 2.09483L13.37 2.09383Z"
      fill="black"
    />
  </svg>`,podcast:p` <svg
    class="social-profile-icon"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Podcast"
  >
    <path
      d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105    C512,47.103,464.897,0,407,0z M308.558,340.537l-9.273,74.185C297.408,429.734,284.646,441,269.517,441h-27.033    c-15.13,0-27.892-11.266-29.768-26.279l-9.273-74.185C199.49,308.923,224.14,281,256,281c-24.813,0-45-20.187-45-45    s20.187-45,45-45s45,20.187,45,45s-20.187,45-45,45C287.86,281,312.51,308.923,308.558,340.537z M256,161    c-46.869,0-85,38.131-85,85c0,16.893,4.974,32.637,13.505,45.883c-6.132,10.42-9.908,22.057-11.076,34.072    C153.368,305.245,141,277.042,141,246c0-63.411,51.589-115,115-115s115,51.589,115,115c0,31.042-12.368,59.245-32.428,79.956    c-1.168-12.016-4.945-23.652-11.076-34.072C336.026,278.637,341,262.893,341,246C341,199.131,302.869,161,256,161z     M330.838,404.168l4.617-36.938C374.901,341.289,401,296.639,401,246c0-79.953-65.047-145-145-145s-145,65.047-145,145    c0,50.639,26.099,95.289,65.545,121.23l4.617,36.938C122.004,376.063,81,315.734,81,246c0-96.495,78.505-175,175-175    s175,78.505,175,175C431,315.734,389.996,376.063,330.838,404.168z"
    />
  </svg>`,spotify:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Spotify"
  >
    <path
      d="M12.01 2.01904C6.51504 2.01904 2.01904 6.51504 2.01904 12.01C2.01904 17.504 6.51504 22 12.01 22C17.504 22 22 17.504 22 12.01C22 6.51504 17.554 2.01904 12.01 2.01904ZM16.605 16.455C16.406 16.754 16.056 16.855 15.755 16.656C13.406 15.206 10.459 14.906 6.96204 15.705C6.61404 15.807 6.31404 15.557 6.21404 15.256C6.11304 14.906 6.36304 14.608 6.66404 14.507C10.459 13.657 13.757 14.008 16.354 15.607C16.704 15.756 16.754 16.155 16.605 16.455ZM17.805 13.708C17.554 14.057 17.105 14.207 16.754 13.957C14.057 12.311 9.96204 11.809 6.81504 12.809C6.41704 12.91 5.96504 12.709 5.86604 12.311C5.76504 11.909 5.96604 11.459 6.36504 11.359C10.011 10.261 14.508 10.811 17.604 12.71C17.904 12.859 18.054 13.358 17.805 13.708ZM17.904 10.909C14.707 9.01204 9.36204 8.81204 6.31404 9.76304C5.81504 9.91104 5.31404 9.61204 5.16604 9.16304C5.01604 8.66104 5.31404 8.16204 5.76504 8.01204C9.31204 6.96304 15.157 7.16204 18.854 9.36304C19.303 9.61204 19.453 10.212 19.203 10.661C18.953 11.011 18.354 11.159 17.904 10.909Z"
      fill="#2E3A59"
    />
  </svg>`,onlyfans:p`<svg
    class="social-profile-icon"
    viewBox="3.743 4.3627 375 250"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="OnlyFans"
  >
    <g transform="matrix(1, 0, 0, 1, 3.743036985397339, -9.04318618774414)">
      <path
        class="st0"
        d="M125.0004578,13.4060478C56.0003128,13.405695,0.0003531,69.4050827,0,138.4052277 s55.9990349,125.0001068,124.999176,125.0004425c69.0001526,0.0003662,125.0001068-55.9990234,125.0004578-124.9991608 S194.0005951,13.4064016,125.0004578,13.4060478z M124.9996262,175.9058075 c-20.7496338-0.0001068-37.4998627-16.7512665-37.4997559-37.5001373 c0.0001068-20.7503891,16.7505035-37.499855,37.5001373-37.4997482s37.499855,16.7497406,37.4997635,37.5001297 C162.4996643,159.1549225,145.7492676,175.9059143,124.9996262,175.9058075z"
      />
      <path
        class="st1"
        d="M265.4999695,107.1560211c31.7554626,9.136734,69.2501221,0.0003357,69.2501221,0.0003357 c-10.8758545,47.5007324-45.3752136,77.2492065-95.1255035,80.8744659 C220.4998627,232.4065094,176.3745728,263.4061584,125,263.4059143l37.5003967-119.1857758 C201.0488129,21.7035465,220.806015,13.4054594,312.2287292,13.4059067L375,13.4062138 C364.4994812,59.6557198,328.3123779,94.9902802,265.4999695,107.1560211z"
      />
    </g>
  </svg>`,soundcloud:p`<svg
    class="social-profile-icon"
    viewBox="0 0 143 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Soundcloud"
  >
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g
        transform="translate(-166.000000, -1125.000000)"
        fill="#333333"
        fill-rule="nonzero"
      >
        <path
          d="M308.984235,1169.99251 C308.382505,1180.70295 299.444837,1189.03525 288.718543,1188.88554 L240.008437,1188.88554 C237.777524,1188.86472 235.977065,1187.05577 235.966737,1184.82478 L235.966737,1132.37801 C235.894282,1130.53582 236.962478,1128.83883 238.654849,1128.10753 C238.654849,1128.10753 243.135035,1124.99996 252.572022,1124.99996 C258.337036,1124.99309 263.996267,1126.54789 268.948531,1129.49925 C276.76341,1134.09703 282.29495,1141.75821 284.200228,1150.62285 C285.880958,1150.14737 287.620063,1149.90993 289.36674,1149.91746 C294.659738,1149.88414 299.738952,1152.0036 303.438351,1155.78928 C307.13775,1159.57496 309.139562,1164.70168 308.984235,1169.99251 Z M229.885123,1135.69525 C231.353099,1153.48254 232.420718,1169.70654 229.885123,1187.43663 C229.796699,1188.23857 229.119091,1188.84557 228.312292,1188.84557 C227.505494,1188.84557 226.827885,1188.23857 226.739461,1187.43663 C224.375448,1169.85905 225.404938,1153.33003 226.739461,1135.69525 C226.672943,1135.09199 226.957336,1134.50383 227.471487,1134.18133 C227.985639,1133.85884 228.638946,1133.85884 229.153097,1134.18133 C229.667248,1134.50383 229.951641,1135.09199 229.885123,1135.69525 Z M220.028715,1187.4557 C219.904865,1188.26549 219.208361,1188.86356 218.389157,1188.86356 C217.569953,1188.86356 216.87345,1188.26549 216.7496,1187.4557 C214.986145,1172.28686 214.986145,1156.96477 216.7496,1141.79593 C216.840309,1140.9535 217.551388,1140.31488 218.398689,1140.31488 C219.245991,1140.31488 219.95707,1140.9535 220.047779,1141.79593 C222.005153,1156.95333 221.998746,1172.29994 220.028715,1187.4557 Z M210.153241,1140.2517 C211.754669,1156.55195 212.479125,1171.15545 210.134176,1187.41757 C210.134176,1188.29148 209.425728,1188.99993 208.551813,1188.99993 C207.677898,1188.99993 206.969449,1188.29148 206.969449,1187.41757 C204.70076,1171.36516 205.463344,1156.34224 206.969449,1140.2517 C207.05845,1139.43964 207.744425,1138.82474 208.561345,1138.82474 C209.378266,1138.82474 210.06424,1139.43964 210.153241,1140.2517 Z M200.258703,1187.47476 C200.169129,1188.29694 199.474788,1188.91975 198.647742,1188.91975 C197.820697,1188.91975 197.126356,1188.29694 197.036782,1187.47476 C195.216051,1173.32359 195.216051,1158.99744 197.036782,1144.84627 C197.036782,1143.94077 197.770837,1143.20671 198.676339,1143.20671 C199.581842,1143.20671 200.315897,1143.94077 200.315897,1144.84627 C202.251054,1158.99121 202.231809,1173.33507 200.258703,1187.47476 Z M190.383229,1155.50339 C192.880695,1166.56087 191.755882,1176.32196 190.287906,1187.58915 C190.168936,1188.33924 189.522207,1188.89148 188.762737,1188.89148 C188.003266,1188.89148 187.356537,1188.33924 187.237567,1187.58915 C185.903044,1176.47448 184.797296,1166.48462 187.142244,1155.50339 C187.142244,1154.60842 187.867763,1153.8829 188.762737,1153.8829 C189.65771,1153.8829 190.383229,1154.60842 190.383229,1155.50339 Z M180.526821,1153.82571 C182.814575,1165.15009 182.071055,1174.7396 180.469627,1186.10211 C180.27898,1187.7798 177.400223,1187.79886 177.247706,1186.10211 C175.798795,1174.91118 175.112468,1165.0357 177.190512,1153.82571 C177.281785,1152.97315 178.001234,1152.32661 178.858666,1152.32661 C179.716099,1152.32661 180.435548,1152.97315 180.526821,1153.82571 Z M170.575089,1159.31632 C172.977231,1166.82778 172.157452,1172.92846 170.479765,1180.63056 C170.391921,1181.42239 169.722678,1182.02149 168.925999,1182.02149 C168.12932,1182.02149 167.460077,1181.42239 167.372232,1180.63056 C165.923321,1173.08097 165.332318,1166.84684 167.23878,1159.31632 C167.330053,1158.46376 168.049502,1157.81722 168.906934,1157.81722 C169.764367,1157.81722 170.483816,1158.46376 170.575089,1159.31632 Z"
        ></path>
      </g>
    </g>
  </svg>`,stackOverflow:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tabIndex="0"
    focusable="true"
    role="img" aria-label="Stack Overflow"
  >
    <g fill="none">
      <path
        d="M18.372 20.222v-5.358h1.79V22H4v-7.136h1.79v5.358h12.582z"
        fill="currentColor"
      />
      <path
        d="M7.768 14.356l8.79 1.824l.372-1.755L8.14 12.6l-.372 1.756zm1.162-4.157l8.14 3.764l.744-1.617l-8.14-3.787l-.744 1.64zm2.256-3.973l6.907 5.705l1.14-1.363l-6.907-5.704l-1.14 1.362zM15.651 2L14.21 3.062l5.35 7.16L21 9.159L15.651 2zm-8.07 16.42h8.977v-1.778H7.581v1.778z"
        fill="currentColor"
      />
    </g>
  </svg>`,substack:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Substack"
  >
    <path d="M3 1H22.269V3.57932H3V1Z" fill="black" />
    <path d="M3 5.85538H22.269V8.58642H3V5.85538Z" fill="black" />
    <path
      d="M3 10.8623H22.269V23.0002L12.6345 17.6805L3 23.0002V10.8623Z"
      fill="black"
    />
  </svg>`,tiktok:p`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2859 3333"
    tabindex="0"
    focusable="true"
    role="img" aria-label="TikTok"
  >
    <path
      d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"
    />
  </svg>`,twitch:p`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Twitch"
  >
    <path
    d="M21 3V14.74L16.304 19.435H12.391L9.954 21.783H6.913V19.435H3V6.13L4.227 3H21ZM19.435 4.565H6.13V16.305H9.26V18.652L11.609 16.304H16.304L19.434 13.174V4.565H19.435ZM16.305 7.695V12.391H14.739V7.696H16.304L16.305 7.695ZM12.391 7.695V12.391H10.826V7.696H12.391V7.695Z" 
    />
  </svg>`,X:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="X"
  >
    <path
      d="M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75097 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.3449 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.264 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.23009 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
      fill="black"
    />
  </svg>`,tumblr:p`<svg
    class="social-profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 260 260"
    tabindex="0"
    focusable="true"
    role="img" aria-label="Tumblr"
  >
    <path
      d="M210.857,197.545c-1.616-0.872-3.584-0.787-5.119,0.223c-11.62,7.638-23.4,11.511-35.016,11.511
c-6.242,0-11.605-1.394-16.416-4.275c-3.27-1.936-6.308-5.321-7.397-8.263c-1.057-2.797-1.045-10.327-1.029-20.748l0.005-63.543
h52.795c2.762,0,5-2.239,5-5V62.802c0-2.761-2.238-5-5-5h-52.795V5c0-2.761-2.238-5-5-5h-35.566c-2.528,0-4.658,1.887-4.964,4.397
c-1.486,12.229-4.258,22.383-8.247,30.196c-3.89,7.7-9.153,14.401-15.651,19.925c-5.206,4.44-14.118,8.736-26.49,12.769
c-2.058,0.671-3.45,2.589-3.45,4.754v35.41c0,2.761,2.238,5,5,5h28.953v82.666c0,12.181,1.292,21.347,3.952,28.026
c2.71,6.785,7.521,13.174,14.303,18.993c6.671,5.716,14.79,10.187,24.158,13.298c9.082,2.962,16.315,4.567,28.511,4.567
c10.31,0,20.137-1.069,29.213-3.179c8.921-2.082,19.017-5.761,30.008-10.934c1.753-0.825,2.871-2.587,2.871-4.524v-39.417
C213.484,200.108,212.476,198.418,210.857,197.545z"
    />
  </svg>`,youtube:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="YouTube"
  >
    <path
      d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z"
      fill="black"
    />
  </svg>`,email:p`<svg
    class="social-profile-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tabindex="0"
    focusable="true"
    role="img" aria-label="E-mail"
  >
    <path
      d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.061 11.683H12.06Z"
      fill="black"
    />
  </svg>`,replit:p`<svg
        class="social-profile-icon"
        viewbox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        tabindex="0"
        focusable="true"
        role="img" aria-label="Replit"
      >
        <path
          fill="black"
          d="M12.265.002a11.911 11.911 0 0 0-2.437.204c13.876 1.704 10.27 17.94 1.717 17.819c0 0 12.453 1.625 11.673-10.215A11.911 11.911 0 0 0 12.265.002zM8.213.827c-.2.002-.402.008-.61.016A11.856 11.856 0 0 0 .146 13.608C2.93-.421 18.805 4.122 17.9 12.688c0 0 2.85-12.014-9.688-11.861zm1.454 5.035C6.002 5.886.691 7.45.816 16.344a12.013 12.013 0 0 0 2.897 4.33c.052.051.108.1.162.149a12.02 12.02 0 0 0 1.137.926c.061.044.12.092.181.135a11.93 11.93 0 0 0 1.312.779c.132.068.266.13.4.193a11.854 11.854 0 0 0 1.199.486c.1.034.195.077.297.109a11.874 11.874 0 0 0 1.49.353c.153.027.307.05.461.07a12.016 12.016 0 0 0 1.578.123l.06.003c.4 0 .792-.021 1.18-.06c-13.949-3.327-8.645-18.924-.114-17.68c0 0-1.469-.41-3.389-.398zm2.436 2.762a3.355 3.355 0 1 0 3.354 3.356a3.355 3.355 0 0 0-3.354-3.356zm-5.95 2.192S2.82 23.09 16.172 23.196a11.978 11.978 0 0 0 7.743-9.992c.033-.319.043-.644.05-.97c.001-.085.013-.168.013-.255c0-.371-.023-.737-.056-1.1c-3.527 13.887-19.132 8.448-17.77-.063z"
        />
  </svg>`,buttondown:p`<svg
        class="social-profile-icon"
        viewbox="0 0 300 300"
        preserveaspectratio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Buttondown">
        <g transform="translate(0, 300) scale(0.1,-0.1)"
          fill="#0069FF"
          stroke="none">
          <path fill="currentColor"
            d="M1188 2995 c-3 -3 -57 -10 -120 -15 -536 -44 -907 -357 -1023 -864
-28 -126 -39 -297 -39 -616 0 -418 16 -570 81 -760 105 -309 344 -548 653
-653 190 -65 342 -81 760 -81 418 0 570 16 760 81 309 105 548 344 653 653 65
190 81 342 81 760 0 492 -29 684 -139 900 -171 335 -489 538 -915 582 -114 12
-742 23 -752 13z m1010 -653 c58 -31 117 -92 144 -149 l23 -48 0 -645 0 -645
-23 -48 c-28 -60 -89 -121 -149 -149 l-48 -23 -640 0 -640 0 -41 22 c-90 48
-140 108 -168 203 -24 80 -24 1200 0 1280 33 110 108 188 214 221 14 4 309 7
655 6 l630 -2 43 -23z" />
          <path fill="currentColor"
            d="M873 1715 c-51 -51 -93 -98 -93 -103 0 -17 274 -276 333 -315 71 -48
173 -94 235 -108 76 -18 229 -22 281 -9 183 47 275 104 464 289 l148 145 -98
98 c-54 54 -101 98 -104 98 -4 0 -54 -47 -112 -104 -176 -174 -237 -216 -354
-240 -58 -13 -78 -13 -133 -1 -109 23 -162 58 -316 208 -78 75 -145 137 -150
137 -5 -1 -51 -43 -101 -95z" />
        </g></svg>`,bluesky:p`<svg
        class="social-profile-icon"
        viewbox="0 0 24 24"
        preserveaspectratio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Bluesky">
        <path fill="currentColor" d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565C.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479c.815 2.736 3.713 3.66 6.383 3.364q.204-.03.415-.056q-.207.033-.415.056c-3.912.58-7.387 2.005-2.83 7.078c5.013 5.19 6.87-1.113 7.823-4.308c.953 3.195 2.05 9.271 7.733 4.308c4.267-4.308 1.172-6.498-2.74-7.078a9 9 0 0 1-.415-.056q.21.026.415.056c2.67.297 5.568-.628 6.383-3.364c.246-.828.624-5.79.624-6.478c0-.69-.139-1.861-.902-2.206c-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8"/>
      </svg>`,threads:p`<svg
        class="social-profile-icon"
        viewbox="0 0 24 24"
        preserveaspectratio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Threads">
        <path fill="currentColor" d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098c1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015c-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164c1.43 1.783 3.631 2.698 6.54 2.717c2.623-.02 4.358-.631 5.8-2.045c1.647-1.613 1.618-3.593 1.09-4.798c-.31-.71-.873-1.3-1.634-1.75c-.192 1.352-.622 2.446-1.284 3.272c-.886 1.102-2.14 1.704-3.73 1.79c-1.202.065-2.361-.218-3.259-.801c-1.063-.689-1.685-1.74-1.752-2.964c-.065-1.19.408-2.285 1.33-3.082c.88-.76 2.119-1.207 3.583-1.291a14 14 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757c-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32l-1.757-1.18c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388q.163.07.321.142c1.49.7 2.58 1.761 3.154 3.07c.797 1.82.871 4.79-1.548 7.158c-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69q-.362 0-.739.021c-1.836.103-2.98.946-2.916 2.143c.067 1.256 1.452 1.839 2.784 1.767c1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221"/></svg>`,pixelfed:p`<svg
        class="social-profile-icon"
        viewbox="0 0 24 24"
        preserveaspectratio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Pixelfed">
        <path fill="currentColor" d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12s-5.373 12-12 12m-.953-9.38h2.202c2.074 0 3.755-1.637 3.755-3.656S15.323 7.31 13.249 7.31h-3.177c-1.197 0-2.167.944-2.167 2.109v8.208z"/></svg>`,bookwyrm:p`<svg
        class="social-profile-icon"
        viewbox="0 0 24 24"
        preserveaspectratio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Bookwyrm">
        <path fill="currentColor" d="m8.3359 0.0078125c-2.0069 0.073882-3.9461 1.339-5.1719 3.1055-1.2258 1.7665-1.686 4.04-0.90234 6.2734 0.7201 2.0524 2.301 3.6839 4.377 4.3066l-0.40234 2.5547c-0.61924-0.29743-1.2854-0.52634-1.9707-0.55078-1.0699-0.03816-2.6915 0.27366-3.707 2.0703-0.69877 1.2362-0.81095 2.9826 0.10555 4.4707 0.61159 0.99303 1.7053 1.9179 4.2929 1.4745 1.4845-0.25433 2.2237-1.3456 2.9082-2.9727 0.37179-0.88378 0.65101-2.0921 1.1895-2.8398 0.73644-1.0227 2.285-1.5902 3.2578-1.6113-0.93782-0.45256-3.7855-1.1922-5.584 1.8008-0.48715 0.8107-1.0605 2.4179-1.9609 2.9531-0.2998 0.1782-0.76718 0.0994-1.0781-0.13477-0.20088-0.15128-0.95922-1.0342-0.16016-1.9395 0.21799-0.24696 0.54865-0.3631 0.93555-0.33398 0.26333 0.01982 0.55734 0.12268 0.88477 0.35352 0.21582-0.44651 0.44063-0.88851 0.68359-1.3204 0.19226-0.34173 0.49358-0.75049 0.88086-1.1426l0.87305-5.3652c-0.24381 0.10022-0.52508 0.15616-0.76367 0.18559-0.41295 0.05094-0.81717 0.02605-1.1895-0.08789-0.48449-0.14828-0.99894-0.41785-1.2695-0.93554-0.086172-0.16486-0.024184-0.37016 0.13477-0.4668 0.17373-0.10562 0.37573-0.028092 0.5 0.13281 0.41046 0.53144 1.1723 0.85969 2.0879 0.58794 1.2598-0.3318 2.1585-0.89477 2.7973-0.94823 0.62644-0.052424 0.9395 0.63646 1.1998 1.2859 0.08927-0.40702 0.33679-1.217 1-0.30078 0.020069-0.7907 0.48358-0.94364 0.93945-0.37895-1.2259-2.9496-3.6999-1.7628-5.0589-1.4148-0.63799 0.1634-1.8432 0.2286-2.5441-1.5549-0.19205-1.9238 0.832-3.0815 1.9497-3.6181 1.11-0.5329 2.4759-0.33316 3.4043 0.23242-0.36121 0.71072-0.96917 0.66041-1.7031 0.73633 0.97044 0.57933 1.6654 0.51691 2.4707 0.23438 0.05017 0.64643-0.27301 0.94594-0.66797 1.4023 1.1363 0.014693 1.7281-0.12865 1.9199-0.2207-0.06996-0.12068-0.13737-0.24477-0.20117-0.375-0.15114-0.30851-0.20068-1.0047-0.10742-1.7402 0.2535 0.25256 0.66781 0.50633 1.0586 0.54492-0.13923-0.55326 0.04953-1.4041 0.36523-1.9453 0.17929 0.22031 0.65534 0.48341 1.0664 0.51758-0.03367-0.13937-0.01471-0.38143 0.01758-0.63672-0.9214-0.25345-1.2388-0.43896-1.8164-0.75195-0.73954-0.40078-3.2824-1.7015-5.041-1.6367zm11.457 1.4355-0.50391 1.0195c-0.6186-0.30447-1.3497 0.099697-1.4238 0.78516 0 0-1.575-0.59615-1.7793-1.3223-0.25838 0.42041-0.34228 1.2928-0.10156 1.9375-0.25368 0.056883-1.3427-0.18224-1.5254-0.42578-0.17662 0.4343-0.06096 1.5935 0.38086 1.9824-0.70463-0.029033-1.2107-0.10404-1.6016-0.47266 0.05528 0.65482 1.1567 2.5058 3.0605 2.4473 1.8859-0.057961 5.3416-2.0444 5.1172 0.77734l0.76367-0.91406 0.44922 1.082 0.12891-1.502 0.62891 0.10352-0.01563-0.86719c-1.0878 0.21766-2.216 0.15404-3.2715-0.1875 0 0 0.81541-1.2247 3.2109-0.62695 0 0 1.0704-0.18142 0.54492-1.0547-0.52548-0.87327-1.0156 0.42383-1.0156 0.42383-0.45143-0.28472-0.85656-0.63336-1.291-0.94336-0.79444-0.56687-1.4356-1.3204-1.7559-2.2422zm-0.8418 1.2695c0.75216-0.00879 1.4355 0.46302 1.7031 1.166 0.04186 0.10996 0.15236 0.15844 0.26758 0.13477 0.1635-0.033594 0.32277 0.073435 0.36719 0.23438 0.04852 0.17581-0.05737 0.35656-0.23437 0.40039-0.43572 0.1079-0.84051-0.14952-1.002-0.56836-0.02156-0.055928-0.27308-0.7224-1.1016-0.70117-0.187 0.00479-0.33205-0.14489-0.33203-0.33203 0-0.18715 0.14489-0.3318 0.33203-0.33398zm0.25781 1.0957c0.26687 0.00108 0.48296 0.21751 0.48242 0.48438-5.37e-4 0.26611-0.21632 0.48135-0.48242 0.48242-0.26763 0.00108-0.48579-0.21479-0.48633-0.48242-5.41e-4 -0.2684 0.21793-0.48546 0.48633-0.48438zm-10.809 3.0397c-0.34991 0.22367-0.78824 0.66637-0.87563 1.2212l-0.02322 0.14744c0.11372 0.12466 0.70444-9.118e-4 0.7719-0.043257 0.072919-0.44812 0.27343-0.56586 0.52734-0.7258 0.23894-0.15051 0.51638-0.15096 0.6371-0.12959l8.1113 1.4355-1.5332 9.2793-4.498-0.7793c-0.90219 0.26905-1.5466 0.74872-1.8106 1.1153-0.23032 0.31978-0.45999 0.95271-0.64258 1.457h0.00195l5.6465 0.94531 0.10547-0.60938 0.26172-1.5273c2e-3 -0.0014 0.0039-0.0025 0.0059-0.0039l1.4961 0.27148 0.60547-3.5977c0.53943 0.80503 0.83125 1.8162 0.69727 2.6641-0.14 0.88552-0.69613 1.6056-1.9375 1.9688-0.12433 0.03633-0.24744 0.06753-0.36914 0.0957l-0.19727 1.2051c-0.03115 0.20643-0.23137 0.34436-0.43555 0.30078l-6.1348-1.0312-0.4043 0.97656c1.464 1.0792 3.2449 2.1812 5.5723 2.2578 1.1718 0.03857 2.7611-0.13523 4.207-0.83594 1.4459-0.7007 2.7188-1.9524 3.2031-3.9375 0.35588-1.4586 0.21674-3.049-0.29883-4.4395-0.7975-2.1508-2.4648-3.307-3.1621-3.625l0.45703-2.7188-1.0625-0.19141c-1.0515 0.21674-2.1447 0.13408-3.1035-0.5625l-4.6797-0.84768c-0.15388-0.027874-0.67134-0.034627-1.1391 0.26435zm1.2523 3.6087-0.00195 0.0039-0.8125 4.8438c0.78057-0.26418 1.5395-0.2905 2.2051-0.20898l0.64636-3.8533c-0.23318 0.2305-0.41364 0.22022-0.48214 0.21007-0.51767-0.07669-0.62748-0.99295-0.98846-1.1614-0.11104-0.05182-0.29544-0.02624-0.56639 0.16594z"/></svg>`,peertube:p`<svg
        class="social-profile-icon"
        viewbox="0 0 24 24"
        preserveaspectratio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="PeerTube"
      ><path fill="currentColor" d="M12 6.545v10.91L20.727 12M3.273 12v12L12 17.455M3.273 0v12L12 6.545"/></svg>`,codeberg:p`<svg
        class="social-profile-icon"
        viewbox="0 0 24 24"
        preserveaspectratio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Codeberg"
      ><path fill="currentColor" d="M11.955.49A12 12 0 0 0 0 12.49a12 12 0 0 0 1.832 6.373L11.838 5.928a.187.14 0 0 1 .324 0l10.006 12.935A12 12 0 0 0 24 12.49a12 12 0 0 0-12-12zm.375 6.467l4.416 16.553a12 12 0 0 0 5.137-4.213z"/></svg>`,lemmy:p`<svg
        class="social-profile-icon"
        viewbox="0 0 24 24"
        preserveaspectratio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Lemmy">
        <path fill="currentColor" d="M2.96 4.223a4 4 0 0 0-.333.019A2.84 2.84 0 0 0 .474 5.628c-.475.8-.593 1.68-.35 2.497c.242.816.83 1.558 1.698 2.145l.016.011c.746.45 1.492.743 2.288.9c-.02.332-.028.669-.006 1.018c.063 1.043.436 2 .996 2.85l-2.006.818a.42.42 0 0 0-.228.224a.42.42 0 0 0 .088.455a.42.42 0 0 0 .294.123a.4.4 0 0 0 .16-.031l2.209-.904c.408.486.87.932 1.372 1.318q.03.02.06.043l-1.291 1.71a.416.416 0 0 0 .664.5l1.314-1.738a9.3 9.3 0 0 0 2.229 1.025c.383.72 1.138 1.187 2.02 1.187c.89 0 1.644-.501 2.024-1.207a9.4 9.4 0 0 0 2.208-1.027l1.332 1.76a.416.416 0 0 0 .744-.193a.42.42 0 0 0-.08-.307l-1.31-1.735c.008-.007.018-.01.026-.018c.497-.38.955-.818 1.362-1.294l2.155.88a.416.416 0 0 0 .541-.228a.415.415 0 0 0-.227-.544l-1.944-.792c.577-.854.97-1.819 1.05-2.87c.027-.35.025-.691.009-1.026a7 7 0 0 0 2.273-.897l.017-.012c.868-.587 1.456-1.328 1.698-2.145c.242-.816.125-1.697-.35-2.497a2.84 2.84 0 0 0-2.155-1.386a3 3 0 0 0-.332-.019c-.786-.015-1.623.23-2.429.694c-.593.342-1.125.867-1.543 1.439c-1.17-.67-2.693-1.048-4.564-1.078a16 16 0 0 0-.51 0c-2.086.034-3.755.43-5.015 1.144c-.003-.003-.005-.011-.008-.015C6.55 5.815 6 5.27 5.389 4.917c-.805-.465-1.643-.708-2.428-.694Zm.285.736c.557.042 1.17.236 1.779.588c.485.28.976.755 1.346 1.27a6 6 0 0 0-.497.408c-.92.852-1.461 1.96-1.668 3.233a6.2 6.2 0 0 1-1.984-.794C1.466 9.15 1.005 8.54.821 7.919C.636 7.295.713 6.648 1.098 6c.375-.63.928-.953 1.612-1.032a3 3 0 0 1 .535-.007Zm17.51 0a3 3 0 0 1 .535.008c.684.078 1.237.402 1.612 1.032c.385.648.462 1.296.277 1.92c-.184.622-.645 1.231-1.4 1.744a6.2 6.2 0 0 1-1.96.789c-.194-1.297-.737-2.434-1.666-3.302a6 6 0 0 0-.47-.392c.364-.49.828-.943 1.293-1.212c.61-.351 1.222-.545 1.779-.587m-8.749 1.045a15 15 0 0 1 .487 0c2.39.039 4.085.67 5.163 1.678c1.15 1.075 1.642 2.6 1.5 4.467c-.132 1.707-1.221 3.228-2.653 4.324a9 9 0 0 1-2.225 1.229c.003-.045.014-.089.014-.135c.003-1.196-.932-2.213-2.292-2.213s-2.322 1.015-2.292 2.221c.001.05.014.097.018.147a8.9 8.9 0 0 1-2.278-1.245c-1.423-1.095-2.5-2.613-2.603-4.322c-.113-1.857.378-3.339 1.521-4.397s2.986-1.711 5.64-1.754m-3.642 6.829a1.096 1.096 0 1 0 0 2.192a1.096 1.096 0 0 0 0-2.192m7.282.011a1.086 1.086 0 1 0 0 2.173a1.086 1.086 0 0 0 0-2.173M12 16.084c1.024 0 1.565.638 1.563 1.482c-.001.785-.672 1.485-1.563 1.485c-.917 0-1.54-.562-1.563-1.493c-.022-.834.54-1.474 1.563-1.474"/></svg>`,hackaday:p`<svg class="social-profile-icon"
        viewbox="0 0 24 24"
        preserveaspectratio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Hackaday">
        <path fill="currentColor" d="M0 4.124c0-.204.021-.401.06-.595l1.956 1.734 2.144-2.38L2.246 1.18c.259-.072.53-.114.812-.114a3.062 3.062 0 0 1 3.058 3.037v.021c0 .152-.012.304-.033.45l2.385 2.112a6.716 6.716 0 0 0-2.013 2.54L3.982 7.037a3.038 3.038 0 0 1-.924.145A3.06 3.06 0 0 1 0 4.124zm20.942 12.694c-.306 0-.601.045-.88.129l-2.308-2.044a6.862 6.862 0 0 1-1.819 2.706l1.993 1.765a3.05 3.05 0 0 0-.044.502 3.06 3.06 0 0 0 3.935 2.929l-1.992-1.77 2.14-2.365 1.981 1.76c.034-.181.052-.364.052-.554v-.026a3.057 3.057 0 0 0-3.058-3.032zm-3.397-7.592 2.473-2.189c.292.093.601.145.924.145A3.06 3.06 0 0 0 23.94 3.53l-1.956 1.734-2.144-2.38 1.914-1.703a3.049 3.049 0 0 0-.812-.114 3.062 3.062 0 0 0-3.058 3.037v.021c0 .152.012.304.033.45l-2.385 2.112a6.716 6.716 0 0 1 2.013 2.54zm-11.3 5.677-2.307 2.044A3.057 3.057 0 0 0 0 19.85v.026c0 .19.018.373.052.554l1.982-1.76 2.14 2.365-1.993 1.77a3.06 3.06 0 0 0 3.935-2.929 3.05 3.05 0 0 0-.044-.502l1.993-1.765a6.862 6.862 0 0 1-1.82-2.706zm8.971 2.657a1.076 1.076 0 1 1-1.961.424h-.192a1.076 1.076 0 1 1-2.127 0h-.15A1.105 1.105 0 0 1 9.7 19.23c-.604 0-1.094-.5-1.094-1.115 0-.21.057-.405.156-.572-1.493-1.142-2.474-3.051-2.474-5.213 0-3.497 2.559-6.332 5.713-6.332s5.713 2.835 5.713 6.332c0 2.173-.991 4.091-2.497 5.231zm-4.194-5.914a1.995 1.995 0 0 0-.559-.66 1.804 1.804 0 0 0-.918-.264 1.45 1.45 0 0 0-.319.036c-.405.05-.747.327-.983.647-.207.257-.368.569-.372.905-.032.278.024.556.075.828.066.322.293.584.55.774.119.095.29.226.44.116.1-.134.016-.33.107-.478a.5.5 0 0 1 .258-.326c.263-.132.527-.262.808-.355.228-.067.416-.219.61-.349.255-.197.424-.558.303-.874zm.996 2.325c-.279-.007-.63 1.237-.574 1.78.175.72.237-.505.574-.506.323.014.275 1.255.53.504.078-.5-.224-1.77-.53-1.778zm4.036-.833c.051-.272.107-.55.075-.828-.004-.336-.165-.648-.372-.905-.236-.32-.578-.596-.983-.647a1.45 1.45 0 0 0-.319-.036c-.32-.001-.644.1-.918.264-.235.171-.42.406-.559.66-.121.316.048.677.303.874.194.13.382.282.61.35.28.092.545.222.808.354a.5.5 0 0 1 .258.326c.091.147.007.344.106.478.151.11.322-.021.44-.116.258-.19.485-.452.551-.774z"/></svg>`,friendica:p`<svg class="social-profile-icon"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Friendica">
        <path fill="currentColor" d="M15 3v4.5H9v4h6v5H9V21h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" /></svg>`,lexaloffle:p`<svg class="social-profile-icon"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512" 
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Lexaloffle/PICO-8">
	      <path fill="currentColor" d="M204.287 0v101.883l-102.142.262l-.262 102.142H0v103.426h101.889V410.11h102.398V512h103.426V410.111H410.11V307.713H512V204.287H410.111V101.89H307.713V0zm1.026 102.912h101.375v102.4h102.4v101.372l-102.145.26l-.26 102.144h-101.37v-102.4h-102.4V205.313h102.4z" /></svg>`,itchio:p`<svg class="social-profile-icon"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 32 32"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="itch">
	      <path fill="currentColor" d="M4.172 1.787C2.776 2.615.027 5.771 0 6.599v1.375c0 1.735 1.625 3.267 3.099 3.267c1.771 0 3.251-1.469 3.251-3.213c0 1.744 1.421 3.213 3.197 3.213c1.771 0 3.151-1.469 3.151-3.213c0 1.744 1.516 3.213 3.287 3.213h.032c1.776 0 3.291-1.469 3.291-3.213c0 1.744 1.381 3.213 3.152 3.213s3.197-1.469 3.197-3.213c0 1.744 1.475 3.213 3.245 3.213c1.479 0 3.104-1.532 3.104-3.267V6.599c-.032-.828-2.776-3.984-4.177-4.812c-4.339-.156-7.344-.183-11.823-.183c-4.484.005-10.593.073-11.828.183zm8.505 8.634a3.7 3.7 0 0 1-.625.797v.005a3.73 3.73 0 0 1-2.599 1.057a3.7 3.7 0 0 1-2.599-1.063a3.4 3.4 0 0 1-.6-.787c-.167.297-.4.552-.645.787A3.7 3.7 0 0 1 3.01 12.28h-.005a1.1 1.1 0 0 1-.349-.073a55 55 0 0 0-.224 3.937v.005c-.005.527-.005.953-.011 1.552c.032 3.115-.307 10.089 1.376 11.803c2.604.604 7.396.88 12.197.885h.005c4.807-.005 9.593-.281 12.197-.885c1.683-1.713 1.344-8.688 1.376-11.803c-.005-.599-.005-1.025-.011-1.552v-.005a52 52 0 0 0-.224-3.937a1 1 0 0 1-.349.073h-.005a3.7 3.7 0 0 1-2.599-1.063h.005c-.245-.235-.479-.489-.645-.787h-.005a3.4 3.4 0 0 1-.595.787a3.71 3.71 0 0 1-5.198 0a3.6 3.6 0 0 1-.615-.787l-.011-.016c-.172.308-.38.573-.615.803a3.7 3.7 0 0 1-2.599 1.063h-.005q-.048.001-.104-.005q-.054.006-.109.005h-.005a3.7 3.7 0 0 1-2.593-1.063a3.4 3.4 0 0 1-.609-.787l-.011-.016zm-2.672 3.454c1.057.005 1.995 0 3.161 1.271c.916-.093 1.875-.14 2.833-.14s1.917.047 2.833.14c1.167-1.271 2.104-1.271 3.161-1.271h.005c.5 0 2.5 0 3.891 3.912l1.495 5.369c1.109 3.995-.355 4.095-2.177 4.095c-2.708-.1-4.208-2.068-4.208-4.037c-1.5.251-3.251.371-5 .371s-3.5-.12-4.995-.371c0 1.969-1.5 3.937-4.208 4.037c-1.828-.005-3.292-.1-2.183-4.095l1.495-5.369c1.396-3.912 3.396-3.912 3.896-3.912zM16 16.953c-.005 0-2.849 2.62-3.364 3.547l1.864-.073v1.625c0 .079.751.047 1.5.011c.749.036 1.495.068 1.495-.011v-1.625l1.869.073C18.849 19.573 16 16.953 16 16.953" /></svg>`,wordpress:p`<svg class="social-profile-icon"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="WordPress">
	      <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2M3.01 12c0-1.3.28-2.54.78-3.66l4.29 11.75c-3-1.46-5.07-4.53-5.07-8.09M12 20.99c-.88 0-1.73-.13-2.54-.37l2.7-7.84l2.76 7.57c.02.04.04.09.06.12c-.93.34-1.93.52-2.98.52m1.24-13.21c.54-.03 1.03-.09 1.03-.09c.48-.06.43-.77-.06-.74c0 0-1.46.11-2.4.11c-.88 0-2.37-.11-2.37-.11c-.48-.02-.54.72-.05.75c0 0 .46.06.94.09l1.4 3.84l-1.97 5.9l-3.27-9.75c.54-.02 1.03-.08 1.03-.08c.48-.06.43-.77-.06-.74c0 0-1.46.11-2.4.11c-.17 0-.37 0-.58-.01C6.1 4.62 8.86 3.01 12 3.01c2.34 0 4.47.89 6.07 2.36c-.04 0-.08-.01-.12-.01c-.88 0-1.51.77-1.51 1.6c0 .74.43 1.37.88 2.11c.34.6.74 1.37.74 2.48c0 .77-.3 1.66-.68 2.91l-.9 3zm6.65-.09a8.99 8.99 0 0 1-3.37 12.08l2.75-7.94c.51-1.28.68-2.31.68-3.22c0-.33-.02-.64-.06-.92" /></svg>`,flipboard:p`<svg class="social-profile-icon"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"        
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Flipboard">
	      <path fill="currentColor"  d="M0 0v24h24V0zm19.2 9.6h-4.8v4.8H9.6v4.8H4.8V4.8h14.4z" /></svg>`,applemusic:p`<svg class="social-profile-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Apple Music">
	      <path fill="currentColor" d="M23.994 6.124a9.2 9.2 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5 5 0 0 0-1.877-.726a10.5 10.5 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986q-.227.014-.455.026c-.747.043-1.49.123-2.193.4c-1.336.53-2.3 1.452-2.865 2.78c-.192.448-.292.925-.363 1.408a11 11 0 0 0-.1 1.18c0 .032-.007.062-.01.093v12.223l.027.424c.05.815.154 1.624.497 2.373c.65 1.42 1.738 2.353 3.234 2.801c.42.127.856.187 1.293.228c.555.053 1.11.06 1.667.06h11.03a13 13 0 0 0 1.57-.1c.822-.106 1.596-.35 2.295-.81a5.05 5.05 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324c.113-.675.138-1.358.137-2.04c-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206c-.29.59-.76.962-1.388 1.14q-.524.15-1.07.173c-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 0 1 1.038-2.022c.323-.16.67-.25 1.018-.324c.378-.082.758-.153 1.134-.24c.274-.063.457-.23.51-.516a1 1 0 0 0 .02-.193q0-2.723-.002-5.443a.7.7 0 0 0-.026-.185c-.04-.15-.15-.243-.304-.234c-.16.01-.318.035-.475.066q-1.14.226-2.28.456l-2.325.47l-1.374.278l-.048.013c-.277.077-.377.203-.39.49q-.002.063 0 .13c-.002 2.602 0 5.204-.003 7.805c0 .42-.047.836-.215 1.227c-.278.64-.77 1.04-1.434 1.233q-.526.152-1.075.172c-.96.036-1.755-.6-1.92-1.544c-.14-.812.23-1.685 1.154-2.075c.357-.15.73-.232 1.108-.31c.287-.06.575-.116.86-.177q.574-.126.6-.714v-.15l.002-8.882c0-.123.013-.25.042-.37c.07-.285.273-.448.546-.518c.255-.066.515-.112.774-.165q1.1-.224 2.2-.444l2.27-.46l2.01-.403c.22-.043.442-.088.663-.106c.31-.025.523.17.554.482q.012.11.012.223q.003 2.866 0 5.732z" /></svg>`,lastfm:p`<svg class="social-profile-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 32 32"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Last.FM">
	      <path fill="currentColor" d="M14.348 22.078L13.32 19.29s-1.668 1.86-4.168 1.86c-2.21 0-3.785-1.926-3.785-5.004c0-3.946 1.988-5.356 3.946-5.356c2.824 0 3.718 1.828 4.492 4.168l1.023 3.207c1.027 3.113 2.953 5.613 8.5 5.613c3.977 0 6.672-1.218 6.672-4.425c0-2.598-1.477-3.946-4.234-4.586l-2.055-.45c-1.41-.32-1.828-.898-1.828-1.859c0-1.09.867-1.734 2.277-1.734c1.54 0 2.375.578 2.504 1.957l3.207-.383c-.258-2.887-2.246-4.074-5.52-4.074c-2.882 0-5.706 1.09-5.706 4.586c0 2.18 1.058 3.558 3.718 4.203l2.184.511c1.633.387 2.18 1.059 2.18 1.989c0 1.187-1.157 1.668-3.336 1.668c-3.239 0-4.586-1.7-5.356-4.04l-1.058-3.206c-1.348-4.172-3.497-5.711-7.762-5.711c-4.711 0-7.215 2.98-7.215 8.05c0 4.875 2.504 7.504 6.992 7.504c3.625 0 5.356-1.699 5.356-1.699z" /></svg>`,steam:p`<svg class="social-profile-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Steam">
	      <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10c-4.6 0-8.45-3.08-9.64-7.27l3.83 1.58a2.84 2.84 0 0 0 2.78 2.27c1.56 0 2.83-1.27 2.83-2.83v-.13l3.4-2.43h.08c2.08 0 3.77-1.69 3.77-3.77s-1.69-3.77-3.77-3.77s-3.78 1.69-3.78 3.77v.05l-2.37 3.46l-.16-.01c-.59 0-1.14.18-1.59.49L2 11.2C2.43 6.05 6.73 2 12 2M8.28 17.17c.8.33 1.72-.04 2.05-.84s-.05-1.71-.83-2.04l-1.28-.53c.49-.18 1.04-.19 1.56.03c.53.21.94.62 1.15 1.15c.22.52.22 1.1 0 1.62c-.43 1.08-1.7 1.6-2.78 1.15c-.5-.21-.88-.59-1.09-1.04zm9.52-7.75c0 1.39-1.13 2.52-2.52 2.52a2.52 2.52 0 0 1-2.51-2.52a2.5 2.5 0 0 1 2.51-2.51a2.52 2.52 0 0 1 2.52 2.51m-4.4 0c0 1.04.84 1.89 1.89 1.89c1.04 0 1.88-.85 1.88-1.89s-.84-1.89-1.88-1.89c-1.05 0-1.89.85-1.89 1.89" /</svg>`,bgg:p`<svg class="social-profile-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        tabIndex="0"
        focusable="true"
        role="img" aria-label="BoardGameGeek">
      	<path fill="currentColor" d="m19.7 4.44l-2.38.64L19.65 0L4.53 5.56l.83 6.67l-1.4 1.34L8.12 24l8.85-3.26l3.07-7.22l-1.32-1.27z" />
</svg>`,flickr:p`<svg class="social-profile-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Flickr">
        <path fill="currentColor" d="M5.334 6.666a5.335 5.335 0 0 0 0 10.668A5.333 5.333 0 0 0 10.666 12a5.333 5.333 0 0 0-5.332-5.334m13.332 0A5.333 5.333 0 0 0 13.334 12A5.333 5.333 0 1 0 24 12a5.335 5.335 0 0 0-5.334-5.334" />
</svg>`,matrix:p`<svg class="social-profile-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        tabIndex="0"
        focusable="true"
        role="img" aria-label="Matrix">
	      <path fill="currentColor" d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033a3.3 3.3 0 0 1 1.117-1.024c.433-.245.936-.365 1.5-.365q.81.002 1.481.314c.448.208.785.582 1.02 1.108q.382-.562 1.034-.992q.651-.43 1.546-.43q.679 0 1.26.167c.388.11.716.286.993.53c.276.245.489.559.646.951q.229.587.23 1.417v5.728h-2.349V11.52q0-.43-.032-.812a1.8 1.8 0 0 0-.18-.66a1.1 1.1 0 0 0-.438-.448q-.292-.165-.785-.166q-.498 0-.803.189a1.4 1.4 0 0 0-.48.499a2 2 0 0 0-.231.696a6 6 0 0 0-.06.785v4.768h-2.35v-4.8q.002-.38-.018-.752a2.1 2.1 0 0 0-.143-.688a1.05 1.05 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19q-.168 0-.439.074c-.18.051-.36.143-.53.282a1.64 1.64 0 0 0-.439.595q-.18.39-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z" />
</svg>`};function o2(e){if(g.social[e.name])return p`
      <a
        aria-label="${g.name} on ${e.name}"
        href="${g.social[e.name]}"
        tabindex="-1"
        rel=${e.rel}
        >${s2[e.name]}</a
      >
    `}const n2=[{name:"mastodon",altText:"Mastodon",rel:"me"},{name:"pixelfed",altText:"Pixelfed"},{name:"podcast",altText:"Podcast"},{name:"glitch",altText:"Glitch"},{name:"threads",altText:"Threads"},{name:"applemusic",altText:"Apple Music"},{name:"lastfm",altText:"Last.FM"},{name:"arena",altText:"Arena"},{name:"bluesky",altTest:"Bluesky"},{name:"bookwyrm",altTest:"Bookwyrm"},{name:"buttondown",altText:"Buttondown"},{name:"codeberg",altText:"Codeberg"},{name:"devTo",altText:"DEV.to"},{name:"facebook",altText:"Facebook"},{name:"flickr",altText:"Flickr"},{name:"flipboard",altText:"Flipboard"},{name:"friendica",altText:"Friendica"},{name:"github",altText:"GitHub"},{name:"gitlab",altText:"GitLab"},{name:"hackaday",altText:"Hackaday"},{name:"hashnode",altText:"Hashnode"},{name:"instagram",altText:"Instagram"},{name:"bgg",altText:"BoardGameGeek"},{name:"itchio",altText:"Itch.io"},{name:"keybase",altText:"Keybase"},{name:"kofi",altText:"Ko-fi"},{name:"lemmy",altText:"Lemmy"},{name:"lexaloffle",altText:"Lexaloffle BBS (PICO-8)"},{name:"letterboxd",altText:"Letterboxd"},{name:"linkedin",altText:"LinkedIn"},{name:"matrix",altText:"Matrix"},{name:"medium",altText:"Medium"},{name:"onlyfans",altText:"OnlyFans"},{name:"patreon",altText:"Patreon"},{name:"peertube",altText:"PeerTube"},{name:"pinboard",altText:"Pinboard"},{name:"pinterest",altText:"Pinterest"},{name:"replit",altText:"Replit"},{name:"spotify",altText:"Spotify"},{name:"soundcloud",altText:"Soundcloud"},{name:"stackOverflow",altText:"Stack Overflow"},{name:"steam",altText:"Steam"},{name:"substack",altText:"Substack"},{name:"tiktok",altText:"TikTok"},{name:"twitch",altText:"Twitch"},{name:"tumblr",altText:"Tumblr"},{name:"wordpress",altText:"WordPress"},{name:"X",altText:"X"},{name:"youtube",altText:"YouTube"},{name:"bandcamp",altText:"Bandcamp"}];function p2(e){for(let t=e.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}return e}const C2=p.node`
  <div class="social-icons">
    ${p2([...n2]).map(e=>p.node`${o2(e)}`)}
    ${void 0}
  </div>
`,f2={"@type":"Person",name:"Andy Piper",affiliation:[{"@type":"Organization",name:"Games at Work dot Biz",sameAs:["https://botsin.space/@gamesatwork_biz","https://gamesatwork.biz"]},{"@type":"Organization",name:"Forge and Craft",sameAs:["https://forgeandcraft.co.uk","https://shop.forgeandcraft.co.uk","https://metapixl.com/forgeandcraft"]}],alumniOf:[{"@type":"CollegeOrUniversity",name:"Brasenose College Oxford",sameAs:"https://en.wikipedia.org/wiki/Brasenose_College,_Oxford"}],Description:"Technologist",jobTitle:"Freelance technology consultant & speaker",worksFor:[{"@type":"Organization",name:"The Lost Outpost"}],email:"andypiper@omg.lol",url:"https://andypiper.me",image:"https://gravatar.com/avatar/1526dcb784188b422544c6344ef223c2?size=256",address:{"@type":"PostalAddress",addressLocality:"Kingston upon Thames",addressRegion:"London",addressCountry:"United Kingdom"},sameAs:["https://andypiper.omg.lol/","https://andypiper.me","https://instagram.com/andypiper","https://glitch.com/@andypiper","https://replit.com/@andypiper","https://dev.to/andypiper","https://github.com/andypiper","https://gitlab.com/andypiper","https://codeberg.org/andypiper","https://www.linkedin.com/in/andypiperuk/","https://ko-fi.com/andypiper","https://twitch.tv/andypiper","https://andypiper.medium.com/","https://soundcloud.com/andypiper","https://bandcamp.com/andypiper","https://macaw.social/@andypiper","https://youtube.com/andypiperuk","https://foursquare.com/andypiper","https://andypiper.co.uk/","https://pixelfed.social/@andypiper","https://makertube.net/a/andypiper","https://poly.me/andypiper","https://lobste.rs/u/andypiper","https://venera.social/profile/andypiper","https://gravatar.com/andypiper","https://pipesmarks.glitch.me/u/andypiper","https://lemmy.world/u/andypiper","https://social.lol/@andypiper","https://bookrastinating.com/user/andypiper","https://www.printables.com/@AndyPiper","https://bsky.app/profile/andypiper.me","https://threads.net/@andypiper","https://g.dev/andypiper","https://andypiper.org","https://hackaday.io/andypiper","https://andypiper.itch.io/","https://www.lexaloffle.com/bbs/?uid=52301","https://flipboard.com/@andypiper"]},u2={"@context":"http://schema.org","@type":"ProfilePage",mainEntity:f2},p1=document.getElementsByTagName("head")[0],q=document.createElement("script");q.type="application/ld+json";q.textContent=JSON.stringify(u2);p1.appendChild(q);p1.appendChild(l2);const h2=document.getElementById("content"),m2=[r2,i2,C2];m2.forEach(e=>h2.appendChild(e));