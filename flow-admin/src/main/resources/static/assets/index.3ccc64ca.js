import{_ as e}from"./PageWrapper.ba7be9e5.js";import{f as t}from"./index.33a0330f.js";import"./account.17e21129.js";import{k as o,K as n,o as r,n as a,Q as s,q as i,Y as c}from"./vendor.bc3b2d68.js";import"./usePageContext.a11cc1be.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";var p=o({name:"TestSessionTimeout",components:{PageWrapper:e},setup(){const e=t();return{test:function(){return t=this,o=null,n=function*(){e.setToken(void 0),e.setSessionTimeout(!0)},new Promise(((e,r)=>{var a=e=>{try{i(n.next(e))}catch(t){r(t)}},s=e=>{try{i(n.throw(e))}catch(t){r(t)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,s);i((n=n.apply(t,o)).next())}));var t,o,n}}}});const u=c("点击触发用户登录过期");p.render=function(e,t,o,c,p,m){const d=n("a-button"),f=n("PageWrapper");return r(),a(f,{title:"登录过期示例",content:"用户登录过期示例，不再跳转登录页，直接生成页面覆盖当前页面，方便保持过期前的用户状态！"},{default:s((()=>[i(d,{type:"primary",onClick:e.test},{default:s((()=>[u])),_:1},8,["onClick"])])),_:1})};export default p;