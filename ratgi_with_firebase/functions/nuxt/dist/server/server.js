module.exports=function(t){var e={},n={0:0};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(e){if(0!==n[e]){var r=require("./"+{1:"e813feca1f4184373dca"}[e]+".js"),o=r.modules,c=r.ids;for(var l in o)t[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="/assets/",r.oe=function(t){process.nextTick((function(){throw t}))},r(r.s=11)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function r(t,e,n,r,o,c,l,d){var h,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},f._ssrRegister=h):o&&(h=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),h)if(f.functional){f._injectStyles=h;var m=f.render;f.render=function(t,e){return h.call(e),m(t,e)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,h):[h]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports=require("vue-no-ssr")},function(t,e){t.exports=require("vue-client-only")},function(t,e){t.exports=require("vue-router")},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e,n){t.exports=n(15)},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(8),o=n(0),c=n.n(o),l=n(9),d=n.n(l);var h={};function f(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function m(t,e=!1){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).map(r=>(e&&e.push(n),t.components[r]))))}function x(t,e){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((r,o)=>(t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r),[])))}(t,async(t,n,r,o)=>("function"!=typeof t||t.options||(t=await t()),r.components[o]=t=f(t),"function"==typeof e?e(t,n,r,o):t)))}async function y(t){if(t)return await x(t),{...t,meta:m(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function v(t,e){t.context||(t.context={isStatic:!1,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,n)=>{if(!e)return;t.context._redirected=!0;let r=typeof path;"number"==typeof e||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=e),e=302),"object"===r&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));let o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&([path,o]=c);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=o?"#"+o:""}(path,n),t.context.next({path:path,status:e}))},t.context.beforeNuxtRender=t=>e.beforeRenderFns.push(t));const[n,r]=await Promise.all([y(e.route),y(e.from)]);e.route&&(t.context.route=n),e.from&&(t.context.from=r),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=Boolean(e.isHMR),t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function _(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():w(t[0],e).then(()=>_(t.slice(1),e))}function w(t,e){let n;return(n=2===t.length?new Promise(n=>{t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function C(t,e){return function(t){const e=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){let path="";const data=n||{},o=(r||{}).pretty?k:encodeURIComponent;for(let i=0;i<t.length;i++){const n=t[i];if("string"==typeof n){path+=n;continue}const r=data[n.name||"pathMatch"];let c;if(null==r){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(r)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let t=0;t<r.length;t++){if(c=o(r[t]),!e[i].test(c))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(c)+"`");path+=(0===t?n.prefix:n.delimiter)+c}}else{if(c=n.asterisk?encodeURI(r).replace(/[?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase()):o(r),!e[i].test(c))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+c+'"');path+=n.prefix+c}}return path}}(function(t,e){const n=[];let r=0,o=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=$.exec(t));){const e=l[0],d=l[1],h=l.index;if(path+=t.slice(o,h),o=h+e.length,d){path+=d[1];continue}const f=t[o],m=l[2],x=l[3],y=l[4],v=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const C=null!=m&&null!=f&&f!==m,$="+"===_||"*"===_,k="?"===_||"*"===_,j=l[2]||c,pattern=y||v;n.push({name:x||r++,prefix:m||"",delimiter:j,optional:k,repeat:$,partial:C,asterisk:Boolean(w),pattern:pattern?T(pattern):w?".*":"[^"+S(j)+"]+?"})}o<t.length&&(path+=t.substr(o));path&&n.push(path);return n}(t,e))}const $=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function k(t){return encodeURI(t).replace(/[\/?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function S(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$\/()])/g,"\\$1")}var j=n(10),E=n.n(j),N=n(6),O=n.n(N),P=n(5),A=n.n(P),R=n(7),M=n.n(R);c.a.use(M.a);const D={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){let r=!1;const o=m(t);o.length<2&&o.every(t=>!1!==t.options.scrollToTop)?r={x:0,y:0}:o.some(t=>t.options.scrollToTop)&&(r={x:0,y:0}),n&&(r=n);const c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick(()=>c.$emit("triggerScroll")),new Promise(e=>{c.$once("triggerScroll",()=>{if(t.hash){let e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(r={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})},routes:[{path:"/",component:()=>(function(t){return t.then(t=>t.default||t)})(n.e(1).then(n.bind(null,20))),name:"index"}],fallback:!1};var L={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){data.nuxtChild=!0;const r=e,o=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition;let l=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;data.nuxtChildDepth=l;const d=o[l]||c,h={};B.forEach(t=>{void 0!==d[t]&&(h[t]=d[t])});const f={};U.forEach(t=>{"function"==typeof d[t]&&(f[t]=d[t].bind(r))});const m=f.beforeEnter;if(f.beforeEnter=t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(r,t)},!1===d.css){const t=f.leave;(!t||t.length<2)&&(f.leave=(e,n)=>{t&&t.call(r,e),r.$nextTick(n)})}let x=t("routerView",data);return n.keepAlive&&(x=t("keep-alive",{props:n.keepAliveProps},[x])),t("transition",{props:h,on:f},[x])}};const B=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],U=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var I={name:"NuxtError",props:{error:{type:Object,default:null}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}}},F=n(1);var K=Object(F.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])}),[],!1,(function(t){var e=n(12);e.__inject__&&e.__inject__(t)}),null,"025027b3").exports,H={name:"Nuxt",components:{NuxtChild:L,NuxtError:K},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||C(this.$route.matched[0].path)(this.$route.params);const[t]=this.$route.matched;if(!t)return this.$route.path;const e=t.components.default;if(e&&e.options){const{options:t}=e;if(t.key)return"function"==typeof t.key?t.key(this.$route):t.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},V={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var z=Object(F.a)(V,void 0,void 0,!1,(function(t){var e=n(13);e.__inject__&&e.__inject__(t)}),null,"253c0427").exports;const J={_default:Object(F.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)}),[],!1,(function(t){var e=n(14);e.__inject__&&e.__inject__(t)}),null,"28b41d4c").exports};var W={head:{title:"src",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My outstanding Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render(t,e){const n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error,this.context=this.$options.context},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},async refresh(){const t=function(t,e=!1){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.instances).map(r=>(e&&e.push(n),t.instances[r]))))}(this.$route);if(!t.length)return;this.$loading.start();const e=t.map(async t=>{const p=[];return t.$options.fetch&&p.push(w(t.$options.fetch,this.context)),t.$options.asyncData&&p.push(w(t.$options.asyncData,this.context).then(e=>{for(const n in e)c.a.set(t.$data,n,e[n])})),Promise.all(p)});try{await Promise.all(e)}catch(t){this.$loading.fail(),function(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}(t),this.error(t)}this.$loading.finish()},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&J["_"+t]||(t="default"),this.layoutName=t,this.layout=J["_"+t],this.layout},loadLayout:t=>(t&&J["_"+t]||(t="default"),Promise.resolve(J["_"+t]))},components:{NuxtLoading:z}};c.a.component(O.a.name,O.a),c.a.component(A.a.name,{...A.a,render:(t,e)=>A.a.render(t,e)}),c.a.component(L.name,L),c.a.component("NChild",L),c.a.component(H.name,H),c.a.use(E.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const X={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function G(t){const e=await new M.a(D),n={router:e,nuxt:{defaultTransition:X,transitions:[X],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},X,{name:t}):Object.assign({},X,t):X),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,n.context._errored=Boolean(e),e=e?function(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}(e):null;const r=this.nuxt||this.$options.nuxt;return r.dateErr=Date.now(),r.err=e,t&&(t.nuxt.error=e),e}},...W},r=t?t.next:t=>n.router.push(t);let o;if(t)o=e.resolve(t.url).route;else{const path=function(base,t){let path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(e.options.base);o=e.resolve(path).route}return await v(n,{route:o,next:r,error:n.nuxt.error.bind(n),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t}),t&&t.url&&await new Promise((r,o)=>{e.push(t.url,r,()=>{const o=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,n.context.route=await y(e),n.context.params=e.params||{},n.context.query=e.query||{},o(),r()})})}),{app:n,router:e}}var Q={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};c.a.component(Q.name,Q),c.a.component("NLink",Q),global.fetch||(global.fetch=d.a);const Y=()=>new c.a({render:t=>t("div")}),Z=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(r.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=async t=>{t.redirected=!1,t.next=Z(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],error:null,serverRendered:!0};const{app:e,router:n}=await G(t),r=new c.a(e);t.meta=r.$meta(),t.asyncData={};const o=async()=>{await Promise.all(t.beforeRenderFns.map(e=>w(e,{Components:x,nuxtState:t.nuxt}))),t.rendered=()=>{}},l=async()=>{const n="function"==typeof K.layout?K.layout(e.context):K.layout;return t.nuxt.layout=n||"default",await r.loadLayout(n),r.setLayout(n),await o(),r},d=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),l()),x=m(n.match(t.url));let y=[];if(y=y.map(t=>"function"==typeof t?t:("function"!=typeof h[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),h[t])),await _(y,e.context),t.redirected)return Y();if(t.nuxt.error)return l();let v=x.length?x[0].options.layout:K.layout;if("function"==typeof v&&(v=v(e.context)),await r.loadLayout(v),t.nuxt.error)return l();if(v=r.setLayout(v),t.nuxt.layout=r.layoutName,y=[],(v=f(v)).options.middleware&&(y=y.concat(v.options.middleware)),x.forEach(t=>{t.options.middleware&&(y=y.concat(t.options.middleware))}),y=y.map(t=>"function"==typeof t?t:("function"!=typeof h[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),h[t])),await _(y,e.context),t.redirected)return Y();if(t.nuxt.error)return l();let C=!0;try{for(const t of x)if("function"==typeof t.options.validate&&!(C=await t.options.validate(e.context)))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),l()}if(!C)return t._generate&&(t.nuxt.serverRendered=!1),d();if(!x.length)return d();const $=await Promise.all(x.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=w(n.options.asyncData,e.context);o.then(e=>(t.asyncData[n.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){const data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(n),e)),r.push(o)}else r.push(null);return n.options.fetch?r.push(n.options.fetch(e.context)):r.push(null),Promise.all(r)}));return t.nuxt.data=$.map(t=>t[0]||{}),t.redirected?Y():t.nuxt.error?l():(await o(),r)}}]);
//# sourceMappingURL=server.js.map