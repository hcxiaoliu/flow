import o from"./LockPage.62ca4fe9.js";import{u as e}from"./lock.95e852c6.js";import{k as t,f as a,K as r,o as s,n,Q as c,X as m,T as d}from"./vendor.56d2c57f.js";import"./index.407e4786.js";import"./header.d801b988.js";var u=t({name:"Lock",components:{LockPage:o},setup(){const o=e();return{getIsLock:a((()=>{var e,t;return null!=(t=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&t}))}}});u.render=function(o,e,t,a,u,f){const i=r("LockPage");return s(),n(d,{name:"fade-bottom",mode:"out-in"},{default:c((()=>[o.getIsLock?(s(),n(i,{key:0})):m("",!0)])),_:1})};export default u;
