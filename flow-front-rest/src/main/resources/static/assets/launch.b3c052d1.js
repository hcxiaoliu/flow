var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r;import{_ as a}from"./PageWrapper.01f0bc61.js";import{k as n,aT as i,bm as c,af as m,bi as p,r as d,u,a as f,K as j,o as l,n as b,P as x,q as P,a3 as B,X as v}from"./vendor.59fe1062.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{P as y}from"./index.cacd00b8.js";import h from"./ActionButtons.a61e8a9b.js";import w from"./BaseActionButtons.3ad18c17.js";import g from"./ProcessBackButton.3d982d6f.js";import A from"./ProcessHeader.eb457392.js";import{j as O,g as k}from"./index.21cfc268.js";import"./usePageContext.557e08ad.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.932ae6a7.js";import"./index.013ae759.js";import"./useForm.2f2fe7b8.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ac1f5740.js";import"./useModal.7ee8a690.js";import"./useWindowSizeFn.cd99a382.js";import"./download.a7e72615.js";import"./StrengthMeter.aa8057ae.js";/* empty css              */import"./process.b37f0197.js";import"./index.7c87ed53.js";import"./index.664df72a.js";/* empty css              *//* empty css              */import"./index.69af581d.js";import"./Viewer.f6103f50.js";var F=n({components:((e,a)=>{for(var n in a||(a={}))o.call(a,n)&&s(e,n,a[n]);if(t)for(var n of t(a))r.call(a,n)&&s(e,n,a[n]);return e})({ProcessHeader:A,PageWrapper:a,[i.name]:i,[c.name]:c,AEmpty:m,[p.name]:p,[p.Item.name]:p.Item,ActionButtons:h,BaseActionButtons:w,ProcessBackButton:g},y),setup(){const e=d(""),t=d(null),{createMessage:o}=k(),r=O(),{currentRoute:s}=u(),{params:{modelKey:a}}=f(s);return e.value=a,{currentView:e,processFormRef:t,doLaunch:function(){return e=this,s=null,a=function*(){yield f(t).doSubmit(),o.success("提交成功！"),r("/process/launched")},new Promise(((t,o)=>{var r=e=>{try{i(a.next(e))}catch(t){o(t)}},n=e=>{try{i(a.throw(e))}catch(t){o(t)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,n);i((a=a.apply(e,s)).next())}));var e,s,a}}}});const I=v(" 发起流程 "),L={class:"m-1 desc-wrap"};F.render=function(e,t,o,r,s,a){const n=j("ProcessBackButton"),i=j("BaseActionButtons"),c=j("action-buttons"),m=j("PageWrapper");return l(),b(m,{contentBackground:"",class:"!mt-4"},{title:x((()=>[P(n),I,P(i)])),extra:x((()=>[P(c,{onDoLaunch:e.doLaunch},null,8,["onDoLaunch"])])),footer:x((()=>[])),default:x((()=>[P("div",L,[(l(),b(B(e.currentView),{ref:"processFormRef"},null,512))])])),_:1})};export default F;