var e=Object.defineProperty,l=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(l,n,t)=>n in l?e(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t,s=(e,l)=>{for(var n in l||(l={}))o.call(l,n)&&r(e,n,l[n]);if(t)for(var n of t(l))a.call(l,n)&&r(e,n,l[n]);return e},i=(e,t)=>l(e,n(t)),c=(e,l,n)=>new Promise(((t,o)=>{var a=e=>{try{s(n.next(e))}catch(l){o(l)}},r=e=>{try{s(n.throw(e))}catch(l){o(l)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,r);s((n=n.apply(e,l)).next())}));import{a5 as u,u as d,k as p,H as f,q as g,bm as h,a9 as m,r as b,f as v,D as C,I as y,a0 as H,J as k,K as F,ar as O,o as M,n as P,Q as S,w,R as x,ba as T,bb as j,bJ as W,V as $,X as B,N as R,Y as E,s as A,a6 as N,aL as _,a2 as I,b1 as L,ah as V,A as D,t as q,b0 as X,_ as Y}from"./vendor.9d9efc92.js";import{p as z,d as J,m as Q,aw as K,ac as G,A as U,B as Z,Q as ee,c as le,ax as ne,i as te,au as oe,af as ae,at as re}from"./index.5e2cac4f.js";import{u as se}from"./useWindowSizeFn.0534066c.js";const{t:ie}=J(),ce={visible:z.bool,scrollTop:z.bool.def(!0),height:z.number,minHeight:z.number,draggable:z.bool.def(!0),centered:z.bool,cancelText:z.string.def(ie("common.cancelText")),okText:z.string.def(ie("common.okText")),closeFunc:Function},ue=Object.assign({},ce,{defaultFullscreen:z.bool,canFullscreen:z.bool.def(!0),wrapperFooterOffset:z.number.def(0),helpMessage:[String,Array],useWrapper:z.bool.def(!0),loading:z.bool,loadingTip:z.string,showCancelBtn:z.bool.def(!0),showOkBtn:z.bool.def(!0),wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:z.bool.def(!0),closeIcon:Object,confirmLoading:z.bool,destroyOnClose:z.bool,footer:Object,getContainer:Function,mask:z.bool.def(!0),maskClosable:z.bool.def(!0),keyboard:z.bool.def(!0),maskStyle:Object,okType:z.string.def("primary"),okButtonProps:Object,cancelButtonProps:Object,title:z.string,visible:z.bool,width:[String,Number],wrapClassName:z.string,zIndex:z.number});function de(e){const l=(e,l)=>getComputedStyle(e)[l],n=n=>{if(!n)return;n.setAttribute("data-drag",d(e.draggable));const t=n.querySelector(".ant-modal-header"),o=n.querySelector(".ant-modal");t&&o&&d(e.draggable)&&(t.style.cursor="move",t.onmousedown=e=>{if(!e)return;const n=e.clientX,t=e.clientY,a=document.body.clientWidth,r=document.documentElement.clientHeight,s=o.offsetWidth,i=o.offsetHeight,c=o.offsetLeft,u=a-o.offsetLeft-s,d=o.offsetTop,p=r-o.offsetTop-i,f=l(o,"left"),g=l(o,"top");let h=+f,m=+g;f.includes("%")?(h=+document.body.clientWidth*(+f.replace(/%/g,"")/100),m=+document.body.clientHeight*(+g.replace(/%/g,"")/100)):(h=+f.replace(/px/g,""),m=+g.replace(/px/g,"")),document.onmousemove=function(e){let l=e.clientX-n,a=e.clientY-t;-l>c?l=-c:l>u&&(l=u),-a>d?a=-d:a>p&&(a=p),o.style.cssText+=`;left:${l+h}px;top:${a+m}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})};u((()=>{d(e.visible)&&d(e.draggable)&&Q((()=>{(()=>{const t=document.querySelectorAll(".ant-modal-wrap");for(const o of Array.from(t)){if(!o)continue;const t=l(o,"display"),a=o.getAttribute("data-drag");"none"!==t&&(null===a||d(e.destroyOnClose))&&n(o)}})()}),30)}))}var pe=p({name:"Modal",inheritAttrs:!1,props:ue,setup(e,{slots:l}){const{visible:n,draggable:t,destroyOnClose:o}=f(e),a=G();return de({visible:n,destroyOnClose:o,draggable:t}),()=>{let n;const t=s(s({},d(a)),e);return g(m,t,"function"==typeof(o=n=K(l))||"[object Object]"===Object.prototype.toString.call(o)&&!h(o)?n:{default:()=>[n]});var o}}});const fe=Symbol();function ge(){return Z(fe)}var he=p({name:"ModalWrapper",components:{ScrollContainer:ee},inheritAttrs:!1,props:{loading:z.bool,useWrapper:z.bool.def(!0),modalHeaderHeight:z.number.def(57),modalFooterHeight:z.number.def(74),minHeight:z.number.def(200),height:z.number,footerOffset:z.number.def(0),visible:z.bool,fullScreen:z.bool,loadingTip:z.string},emits:["height-change","ext-height"],setup(e,{emit:l}){const n=b(null),t=b(null),o=b(0),a=b(0);let r=0;se(i.bind(null,!1)),U({redoModalHeight:i},fe);const s=v((()=>({minHeight:`${e.minHeight}px`,height:`${d(o)}px`})));function i(){return c(this,null,(function*(){if(!e.visible)return;const a=d(n);if(!a)return;const s=a.$el.parentElement;if(s){s.style.padding="0",yield k();try{const n=s.parentElement&&s.parentElement.parentElement;if(!n)return;const a=getComputedStyle(n).top,i=Number.parseInt(a);let c=window.innerHeight-2*i+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;i<40&&(c-=26),yield k();const u=d(t);if(!u)return;yield k(),r=u.scrollHeight,e.fullScreen?o.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:o.value=e.height?e.height:r>c?c:r,l("height-change",d(o))}catch(i){}}}))}return u((()=>{e.useWrapper&&i()})),C((()=>e.fullScreen),(e=>{i(),e?a.value=o.value:o.value=a.value})),y((()=>{const{modalHeaderHeight:n,modalFooterHeight:t}=e;l("ext-height",n+t)})),H((()=>{})),{wrapperRef:n,spinRef:t,spinStyle:s,scrollTop:function(){return c(this,null,(function*(){k((()=>{var e;const l=d(n);l&&(null==(e=null==l?void 0:l.scrollTo)||e.call(l,0))}))}))},setModalHeight:i}}});he.render=function(e,l,n,t,o,a){const r=F("ScrollContainer"),s=O("loading");return M(),P(r,{ref:"wrapperRef"},{default:S((()=>[w(g("div",{ref:"spinRef",style:e.spinStyle,"loading-tip":e.loadingTip},[x(e.$slots,"default")],12,["loading-tip"]),[[s,e.loading]])])),_:3},512)};var me=p({name:"ModalClose",components:{FullscreenExitOutlined:T,FullscreenOutlined:j,CloseOutlined:W},props:{canFullscreen:z.bool.def(!0),fullScreen:z.bool},emits:["cancel","fullscreen"],setup(e,{emit:l}){const{prefixCls:n}=le("basic-modal-close");return{getClass:v((()=>[n,`${n}--custom`,{[`${n}--can-full`]:e.canFullscreen}])),prefixCls:n,handleCancel:function(){l("cancel")},handleFullScreen:function(e){null==e||e.stopPropagation(),null==e||e.preventDefault(),l("fullscreen")}}}});me.render=function(e,l,n,t,o,a){const r=F("FullscreenExitOutlined"),s=F("FullscreenOutlined"),i=F("CloseOutlined");return M(),P("div",{class:e.getClass},[e.canFullscreen?(M(),P($,{key:0},[e.fullScreen?(M(),P(r,{key:0,role:"full",onClick:e.handleFullScreen},null,8,["onClick"])):(M(),P(s,{key:1,role:"close",onClick:e.handleFullScreen},null,8,["onClick"]))],64)):B("",!0),g(i,{onClick:e.handleCancel},null,8,["onClick"])],2)};var be=p({name:"BasicModalFooter",props:ue,emits:["ok","cancel"],setup:(e,{emit:l})=>({handleOk:function(){l("ok")},handleCancel:function(){l("cancel")}})});be.render=function(e,l,n,t,o,a){const r=F("a-button");return M(),P("div",null,[x(e.$slots,"insertFooter"),e.showCancelBtn?(M(),P(r,R({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:S((()=>[E(A(e.cancelText),1)])),_:1},16,["onClick"])):B("",!0),x(e.$slots,"centerFooter"),e.showOkBtn?(M(),P(r,R({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:S((()=>[E(A(e.okText),1)])),_:1},16,["type","onClick","loading"])):B("",!0),x(e.$slots,"appendFooter")])};var ve=p({name:"BasicModalHeader",components:{BasicTitle:ne},props:{helpMessage:{type:[String,Array]},title:z.string}});ve.render=function(e,l,n,t,o,a){const r=F("BasicTitle");return M(),P(r,{helpMessage:e.helpMessage},{default:S((()=>[E(A(e.title),1)])),_:1},8,["helpMessage"])};var Ce=p({name:"BasicModal",components:{Modal:pe,ModalWrapper:he,ModalClose:me,ModalFooter:be,ModalHeader:ve},inheritAttrs:!1,props:ue,emits:["visible-change","height-change","cancel","ok","register"],setup(e,{emit:l,attrs:n}){const t=b(!1),o=b(null),a=b(null),r=b(0),p={setModalProps:function(e){if(o.value=oe(d(o)||{},e),!Reflect.has(e,"visible"))return;t.value=!!e.visible},emitVisible:void 0,redoModalHeight:()=>{k((()=>{d(a)&&d(a).setModalHeight()}))}},f=I();f&&l("register",p,f.uid);const g=v((()=>s(s({},e),d(o)))),{handleFullScreen:h,getWrapClassName:m,fullScreenRef:y}=function(e){const l=b(!1);return{getWrapClassName:v((()=>{const n=d(e.wrapClassName)||"";return d(l)?`fullscreen-modal ${n} `:d(n)})),handleFullScreen:function(e){e&&e.stopPropagation(),l.value=!d(l)},fullScreenRef:l}}({modalWrapperRef:a,extHeightRef:r,wrapClassName:N(g.value,"wrapClassName")}),H=v((()=>{const e=i(s({},d(g)),{visible:d(t),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return i(s({},e),{wrapClassName:d(m)})})),F=v((()=>{const e=s(s({},n),d(H));return d(y)?_(e,"height"):e})),O=v((()=>{if(!d(y))return d(H).height}));return u((()=>{t.value=!!e.visible,y.value=!!e.defaultFullscreen})),C((()=>d(t)),(n=>{var t;l("visible-change",n),f&&(null==(t=p.emitVisible)||t.call(p,n,f.uid)),k((()=>{e.scrollTop&&n&&d(a)&&d(a).scrollTop()}))}),{immediate:!1}),{handleCancel:function(n){return c(this,null,(function*(){if(null==n||n.stopPropagation(),e.closeFunc&&te(e.closeFunc)){const l=yield e.closeFunc();t.value=!l}else t.value=!1,l("cancel")}))},getBindValue:F,getProps:H,handleFullScreen:h,fullScreenRef:y,getMergeProps:g,handleOk:function(){l("ok")},visibleRef:t,omit:_,modalWrapperRef:a,handleExtHeight:function(e){r.value=e},handleHeightChange:function(e){l("height-change",e)},handleTitleDbClick:function(l){e.canFullscreen&&(l.stopPropagation(),h(l))},getWrapperHeight:O}}});Ce.render=function(e,l,n,t,o,a){const r=F("ModalClose"),s=F("ModalHeader"),i=F("ModalFooter"),c=F("ModalWrapper"),u=F("Modal");return M(),P(u,R({onCancel:e.handleCancel},e.getBindValue),L({default:S((()=>[g(c,R({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,visible:e.visibleRef,modalFooterHeight:void 0===e.footer||e.footer?void 0:0},e.omit(e.getProps.wrapperProps,"visible","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:S((()=>[x(e.$slots,"default")])),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])])),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:S((()=>[g(r,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])]))},e.$slots.title?void 0:{name:"title",fn:S((()=>[g(s,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])]))},e.$slots.footer?void 0:{name:"footer",fn:S((()=>[g(i,R(e.getProps,{onOk:e.handleOk,onCancel:e.handleCancel}),L({_:2},[V(Object.keys(e.$slots),(l=>({name:l,fn:S((n=>[x(e.$slots,l,n)]))})))]),1040,["onOk","onCancel"])]))},V(Object.keys(e.omit(e.$slots,"default")),(l=>({name:l,fn:S((n=>[x(e.$slots,l,n)]))})))]),1040,["onCancel"])};const ye=D({}),He=D({});function ke(){const e=b(null),l=b(!1),n=b("");const t=()=>{const l=d(e);return l||re("useModal instance is undefined!"),l};return[function(t,o){n.value=o,H((()=>{e.value=null,l.value=!1,ye[d(n)]=null})),d(l)&&ae()&&t===d(e)||(e.value=t,t.emitVisible=(e,l)=>{He[l]=e})},{setModalProps:e=>{var l;null==(l=t())||l.setModalProps(e)},getVisible:v((()=>He[~~d(n)])),redoModalHeight:()=>{var e,l;null==(l=null==(e=t())?void 0:e.redoModalHeight)||l.call(e)},openModal:(e=!0,l,o=!0)=>{var a;if(null==(a=t())||a.setModalProps({visible:e}),!l)return;if(o)return ye[d(n)]=null,void(ye[d(n)]=q(l));X(q(ye[d(n)]),q(l))||(ye[d(n)]=q(l))}}]}const Fe=e=>{const l=b(null),n=I(),t=b(""),o=()=>{const e=d(l);return e||re("useModalInner instance is undefined!"),e};return u((()=>{const l=ye[d(t)];l&&e&&te(e)&&k((()=>{e(l)}))})),[(e,o)=>{Y((()=>{l.value=null})),t.value=o,l.value=e,null==n||n.emit("register",e,o)},{changeLoading:(e=!0)=>{var l;null==(l=o())||l.setModalProps({loading:e})},getVisible:v((()=>He[~~d(t)])),changeOkLoading:(e=!0)=>{var l;null==(l=o())||l.setModalProps({confirmLoading:e})},closeModal:()=>{var e;null==(e=o())||e.setModalProps({visible:!1})},setModalProps:e=>{var l;null==(l=o())||l.setModalProps(e)}}]};export{Ce as _,Fe as a,ke as b,ge as u};