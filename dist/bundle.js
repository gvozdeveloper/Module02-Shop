(()=>{"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function a(t,n){void 0===t&&(t={}),void 0===n&&(n={}),Object.keys(n).forEach((i=>{void 0===t[i]?t[i]=n[i]:e(n[i])&&e(t[i])&&Object.keys(n[i]).length>0&&a(t[i],n[i])}))}const t={document:{body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}},navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function n(){const e="undefined"!=typeof window?window:{};return a(e,t),e}function i(e){let a,t=e;if(t){for(a=0;null!==(t=t.previousSibling);)1===t.nodeType&&(a+=1);return a}}function l(e,a,t,n){return e.params.createElements&&Object.keys(n).forEach((i=>{if(!t[i]&&!0===t.auto){let l=function(e,a){return void 0===a&&(a=""),[...e.children].filter((e=>e.matches(a)))}(e.el,`.${n[i]}`)[0];l||(l=function(e,a){void 0===a&&(a=[]);const t=document.createElement("div");return t.classList.add(...Array.isArray(a)?a:function(e){return void 0===e&&(e=""),e.trim().split(" ").filter((e=>!!e.trim()))}(a)),t}(0,n[i]),l.className=n[i],e.el.append(l)),t[i]=l,a[i]=l}})),t}function s(e){let{swiper:a,extendParams:t,on:n,emit:i}=e;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null};const s=e=>(Array.isArray(e)?e:[e]).filter((e=>!!e));function r(e){let t;return e&&"string"==typeof e&&a.isElement&&(t=a.el.querySelector(e),t)?t:(e&&("string"==typeof e&&(t=[...document.querySelectorAll(e)]),a.params.uniqueNavElements&&"string"==typeof e&&t.length>1&&1===a.el.querySelectorAll(e).length&&(t=a.el.querySelector(e))),e&&!t?e:t)}function o(e,t){const n=a.params.navigation;(e=s(e)).forEach((e=>{e&&(e.classList[t?"add":"remove"](...n.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=t),a.params.watchOverflow&&a.enabled&&e.classList[a.isLocked?"add":"remove"](n.lockClass))}))}function p(){const{nextEl:e,prevEl:t}=a.navigation;if(a.params.loop)return o(t,!1),void o(e,!1);o(t,a.isBeginning&&!a.params.rewind),o(e,a.isEnd&&!a.params.rewind)}function c(e){e.preventDefault(),(!a.isBeginning||a.params.loop||a.params.rewind)&&(a.slidePrev(),i("navigationPrev"))}function d(e){e.preventDefault(),(!a.isEnd||a.params.loop||a.params.rewind)&&(a.slideNext(),i("navigationNext"))}function u(){const e=a.params.navigation;if(a.params.navigation=l(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;let t=r(e.nextEl),n=r(e.prevEl);Object.assign(a.navigation,{nextEl:t,prevEl:n}),t=s(t),n=s(n);const i=(t,n)=>{t&&t.addEventListener("click","next"===n?d:c),!a.enabled&&t&&t.classList.add(...e.lockClass.split(" "))};t.forEach((e=>i(e,"next"))),n.forEach((e=>i(e,"prev")))}function g(){let{nextEl:e,prevEl:t}=a.navigation;e=s(e),t=s(t);const n=(e,t)=>{e.removeEventListener("click","next"===t?d:c),e.classList.remove(...a.params.navigation.disabledClass.split(" "))};e.forEach((e=>n(e,"next"))),t.forEach((e=>n(e,"prev")))}n("init",(()=>{!1===a.params.navigation.enabled?m():(u(),p())})),n("toEdge fromEdge lock unlock",(()=>{p()})),n("destroy",(()=>{g()})),n("enable disable",(()=>{let{nextEl:e,prevEl:t}=a.navigation;e=s(e),t=s(t),a.enabled?p():[...e,...t].filter((e=>!!e)).forEach((e=>e.classList.add(a.params.navigation.lockClass)))})),n("click",((e,t)=>{let{nextEl:n,prevEl:l}=a.navigation;n=s(n),l=s(l);const r=t.target;if(a.params.navigation.hideOnClick&&!l.includes(r)&&!n.includes(r)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===r||a.pagination.el.contains(r)))return;let e;n.length?e=n[0].classList.contains(a.params.navigation.hiddenClass):l.length&&(e=l[0].classList.contains(a.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),[...n,...l].filter((e=>!!e)).forEach((e=>e.classList.toggle(a.params.navigation.hiddenClass)))}}));const m=()=>{a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),g()};Object.assign(a.navigation,{enable:()=>{a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),u(),p()},disable:m,update:p,init:u,destroy:g})}function r(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function o(e){let{swiper:a,extendParams:t,on:s,emit:o}=e;const p="swiper-pagination";let c;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${p}-bullet`,bulletActiveClass:`${p}-bullet-active`,modifierClass:`${p}-`,currentClass:`${p}-current`,totalClass:`${p}-total`,hiddenClass:`${p}-hidden`,progressbarFillClass:`${p}-progressbar-fill`,progressbarOppositeClass:`${p}-progressbar-opposite`,clickableClass:`${p}-clickable`,lockClass:`${p}-lock`,horizontalClass:`${p}-horizontal`,verticalClass:`${p}-vertical`,paginationDisabledClass:`${p}-disabled`}}),a.pagination={el:null,bullets:[]};let d=0;const u=e=>(Array.isArray(e)?e:[e]).filter((e=>!!e));function g(){return!a.params.pagination.el||!a.pagination.el||Array.isArray(a.pagination.el)&&0===a.pagination.el.length}function m(e,t){const{bulletActiveClass:n}=a.params.pagination;e&&(e=e[("prev"===t?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${n}-${t}`),(e=e[("prev"===t?"previous":"next")+"ElementSibling"])&&e.classList.add(`${n}-${t}-${t}`))}function v(e){const t=e.target.closest(r(a.params.pagination.bulletClass));if(!t)return;e.preventDefault();const n=i(t)*a.params.slidesPerGroup;if(a.params.loop){if(a.realIndex===n)return;a.slideToLoop(n)}else a.slideTo(n)}function f(){const e=a.rtl,t=a.params.pagination;if(g())return;let l,s,p=a.pagination.el;p=u(p);const v=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,f=a.params.loop?Math.ceil(v/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(s=a.previousRealIndex||0,l=a.params.slidesPerGroup>1?Math.floor(a.realIndex/a.params.slidesPerGroup):a.realIndex):void 0!==a.snapIndex?(l=a.snapIndex,s=a.previousSnapIndex):(s=a.previousIndex||0,l=a.activeIndex||0),"bullets"===t.type&&a.pagination.bullets&&a.pagination.bullets.length>0){const r=a.pagination.bullets;let o,u,g;if(t.dynamicBullets&&(c=function(e,a,t){const i=n();return e["width"===a?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===a?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===a?"margin-left":"margin-bottom"))}(r[0],a.isHorizontal()?"width":"height"),p.forEach((e=>{e.style[a.isHorizontal()?"width":"height"]=c*(t.dynamicMainBullets+4)+"px"})),t.dynamicMainBullets>1&&void 0!==s&&(d+=l-(s||0),d>t.dynamicMainBullets-1?d=t.dynamicMainBullets-1:d<0&&(d=0)),o=Math.max(l-d,0),u=o+(Math.min(r.length,t.dynamicMainBullets)-1),g=(u+o)/2),r.forEach((e=>{const a=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${t.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...a)})),p.length>1)r.forEach((e=>{const n=i(e);n===l?e.classList.add(...t.bulletActiveClass.split(" ")):a.isElement&&e.setAttribute("part","bullet"),t.dynamicBullets&&(n>=o&&n<=u&&e.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),n===o&&m(e,"prev"),n===u&&m(e,"next"))}));else{const e=r[l];if(e&&e.classList.add(...t.bulletActiveClass.split(" ")),a.isElement&&r.forEach(((e,a)=>{e.setAttribute("part",a===l?"bullet-active":"bullet")})),t.dynamicBullets){const e=r[o],a=r[u];for(let e=o;e<=u;e+=1)r[e]&&r[e].classList.add(...`${t.bulletActiveClass}-main`.split(" "));m(e,"prev"),m(a,"next")}}if(t.dynamicBullets){const n=Math.min(r.length,t.dynamicMainBullets+4),i=(c*n-c)/2-g*c,l=e?"right":"left";r.forEach((e=>{e.style[a.isHorizontal()?l:"top"]=`${i}px`}))}}p.forEach(((e,n)=>{if("fraction"===t.type&&(e.querySelectorAll(r(t.currentClass)).forEach((e=>{e.textContent=t.formatFractionCurrent(l+1)})),e.querySelectorAll(r(t.totalClass)).forEach((e=>{e.textContent=t.formatFractionTotal(f)}))),"progressbar"===t.type){let n;n=t.progressbarOpposite?a.isHorizontal()?"vertical":"horizontal":a.isHorizontal()?"horizontal":"vertical";const i=(l+1)/f;let s=1,o=1;"horizontal"===n?s=i:o=i,e.querySelectorAll(r(t.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${s}) scaleY(${o})`,e.style.transitionDuration=`${a.params.speed}ms`}))}"custom"===t.type&&t.renderCustom?(e.innerHTML=t.renderCustom(a,l+1,f),0===n&&o("paginationRender",e)):(0===n&&o("paginationRender",e),o("paginationUpdate",e)),a.params.watchOverflow&&a.enabled&&e.classList[a.isLocked?"add":"remove"](t.lockClass)}))}function h(){const e=a.params.pagination;if(g())return;const t=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.grid&&a.params.grid.rows>1?a.slides.length/Math.ceil(a.params.grid.rows):a.slides.length;let n=a.pagination.el;n=u(n);let i="";if("bullets"===e.type){let n=a.params.loop?Math.ceil(t/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&n>t&&(n=t);for(let t=0;t<n;t+=1)e.renderBullet?i+=e.renderBullet.call(a,t,e.bulletClass):i+=`<${e.bulletElement} ${a.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(i=e.renderFraction?e.renderFraction.call(a,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(i=e.renderProgressbar?e.renderProgressbar.call(a,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),a.pagination.bullets=[],n.forEach((t=>{"custom"!==e.type&&(t.innerHTML=i||""),"bullets"===e.type&&a.pagination.bullets.push(...t.querySelectorAll(r(e.bulletClass)))})),"custom"!==e.type&&o("paginationRender",n[0])}function b(){a.params.pagination=l(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const e=a.params.pagination;if(!e.el)return;let t;"string"==typeof e.el&&a.isElement&&(t=a.el.querySelector(e.el)),t||"string"!=typeof e.el||(t=[...document.querySelectorAll(e.el)]),t||(t=e.el),t&&0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&Array.isArray(t)&&t.length>1&&(t=[...a.el.querySelectorAll(e.el)],t.length>1&&(t=t.filter((e=>function(e,a){const t=[];let n=e.parentElement;for(;n;)a?n.matches(a)&&t.push(n):t.push(n),n=n.parentElement;return t}(e,".swiper")[0]===a.el))[0])),Array.isArray(t)&&1===t.length&&(t=t[0]),Object.assign(a.pagination,{el:t}),t=u(t),t.forEach((t=>{"bullets"===e.type&&e.clickable&&t.classList.add(...(e.clickableClass||"").split(" ")),t.classList.add(e.modifierClass+e.type),t.classList.add(a.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(t.classList.add(`${e.modifierClass}${e.type}-dynamic`),d=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.classList.add(e.progressbarOppositeClass),e.clickable&&t.addEventListener("click",v),a.enabled||t.classList.add(e.lockClass)})))}function y(){const e=a.params.pagination;if(g())return;let t=a.pagination.el;t&&(t=u(t),t.forEach((t=>{t.classList.remove(e.hiddenClass),t.classList.remove(e.modifierClass+e.type),t.classList.remove(a.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(t.classList.remove(...(e.clickableClass||"").split(" ")),t.removeEventListener("click",v))}))),a.pagination.bullets&&a.pagination.bullets.forEach((a=>a.classList.remove(...e.bulletActiveClass.split(" "))))}s("changeDirection",(()=>{if(!a.pagination||!a.pagination.el)return;const e=a.params.pagination;let{el:t}=a.pagination;t=u(t),t.forEach((t=>{t.classList.remove(e.horizontalClass,e.verticalClass),t.classList.add(a.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),s("init",(()=>{!1===a.params.pagination.enabled?E():(b(),h(),f())})),s("activeIndexChange",(()=>{void 0===a.snapIndex&&f()})),s("snapIndexChange",(()=>{f()})),s("snapGridLengthChange",(()=>{h(),f()})),s("destroy",(()=>{y()})),s("enable disable",(()=>{let{el:e}=a.pagination;e&&(e=u(e),e.forEach((e=>e.classList[a.enabled?"remove":"add"](a.params.pagination.lockClass))))})),s("lock unlock",(()=>{f()})),s("click",((e,t)=>{const n=t.target,i=u(a.pagination.el);if(a.params.pagination.el&&a.params.pagination.hideOnClick&&i&&i.length>0&&!n.classList.contains(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&n===a.navigation.nextEl||a.navigation.prevEl&&n===a.navigation.prevEl))return;const e=i[0].classList.contains(a.params.pagination.hiddenClass);o(!0===e?"paginationShow":"paginationHide"),i.forEach((e=>e.classList.toggle(a.params.pagination.hiddenClass)))}}));const E=()=>{a.el.classList.add(a.params.pagination.paginationDisabledClass);let{el:e}=a.pagination;e&&(e=u(e),e.forEach((e=>e.classList.add(a.params.pagination.paginationDisabledClass)))),y()};Object.assign(a.pagination,{enable:()=>{a.el.classList.remove(a.params.pagination.paginationDisabledClass);let{el:e}=a.pagination;e&&(e=u(e),e.forEach((e=>e.classList.remove(a.params.pagination.paginationDisabledClass)))),b(),h(),f()},disable:E,render:h,update:f,init:b,destroy:y})}new Swiper(".offerSwiper",{slidesPerView:3,spaceBetween:30,slidesPerGroup:3,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[s,o]}),new Swiper(".trendsSwiper",{slidesPerView:3,spaceBetween:30,slidesPerGroup:3,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[s,o]})})();