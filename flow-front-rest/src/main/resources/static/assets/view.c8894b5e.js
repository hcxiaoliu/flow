var e=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,s=(o,r,t)=>r in o?e(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t;import{_ as a}from"./PageWrapper.3d5c8b2d.js";import{k as i,aI as n,bp as p,aT as c,bm as m,af as d,bi as f,r as u,u as j,a as l,I as b,J as x,K as v,o as y,n as B,P,q as w,a3 as A,X as g}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{P as h}from"./index.f2db78a2.js";import k from"./ActionButtons.5c8ae1fb.js";import O from"./BaseActionButtons.078c79ed.js";import F from"./ProcessBackButton.82466bae.js";import H from"./ApproveActionButtons.e0d47985.js";import I from"./ApprovalHistory.2a93ebf8.js";import M from"./ProcessHeader.74ecb5b7.js";import{j as R,g as S}from"./index.21f8a12f.js";import"./usePageContext.7550f9ef.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";import"./index.b628dde9.js";import"./useForm.87d4ef16.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.9b3564b9.js";import"./useModal.f5d94e37.js";import"./useWindowSizeFn.4f1b8c18.js";import"./download.03309c9a.js";import"./StrengthMeter.10576816.js";/* empty css              */import"./process.277f848b.js";import"./index.f720339f.js";import"./FlowDiagramModal.f83155b0.js";import"./Viewer.fd8523c8.js";import"./index.d237baa5.js";/* empty css              *//* empty css              */import"./index.3b150731.js";/* empty css              */var W=i({components:((e,a)=>{for(var i in a||(a={}))r.call(a,i)&&s(e,i,a[i]);if(o)for(var i of o(a))t.call(a,i)&&s(e,i,a[i]);return e})({Button:n,LeftOutlined:p,ProcessHeader:M,PageWrapper:a,[c.name]:c,[m.name]:m,AEmpty:d,[f.name]:f,[f.Item.name]:f.Item,ActionButtons:k,BaseActionButtons:O,ApproveActionButtons:H,ApprovalHistory:I,ProcessBackButton:F},h),setup(){const e=u(""),o=u(null),{createMessage:r}=S(),t=R(),{currentRoute:s}=j(),{params:{modelKey:a},query:{businessKey:i}}=l(s);return e.value=a,b((()=>{x((()=>{i&&l(o).initProcessForm(i)}))})),{currentView:e,processFormRef:o,doBack:function(){history.state.back?history.back():t("/process/todo")},doLaunch:function(){return e=this,s=null,a=function*(){yield l(o).doSubmit(),r.success("提交成功！"),t("/process/launched")},new Promise(((o,r)=>{var t=e=>{try{n(a.next(e))}catch(o){r(o)}},i=e=>{try{n(a.throw(e))}catch(o){r(o)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(t,i);n((a=a.apply(e,s)).next())}));var e,s,a}}}});const K=g(" 流程查看 "),V={class:"m-1 desc-wrap"},q={class:"m-4 desc-wrap"};W.render=function(e,o,r,t,s,a){const i=v("ProcessBackButton"),n=v("BaseActionButtons"),p=v("ApprovalHistory"),c=v("PageWrapper");return y(),B(c,{contentBackground:"",class:"!mt-4"},{title:P((()=>[w(i),K,w(n)])),extra:P((()=>[])),footer:P((()=>[])),default:P((()=>[w("div",V,[(y(),B(A(e.currentView),{ref:"processFormRef"},null,512))]),w("div",q,[w(p,{ref:"approvalHistoryRef"},null,512)])])),_:1})};export default W;