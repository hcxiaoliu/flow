import{k as a,ad as e,a as r,f as t,u as s,K as n,o,n as p,Q as u,Y as m,s as i,q as d}from"./vendor.56d2c57f.js";import{_ as c}from"./PageWrapper.745b68b0.js";import"./index.407e4786.js";import"./usePageContext.60e4e10d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";var f=a({name:"TestTab",components:{PageWrapper:c,Input:e},setup(){const{currentRoute:a}=r();return{params:t((()=>s(a).params))}}});const l=d("br",null,null,-1),j=m(" Keep Alive ");f.render=function(a,e,r,t,s,c){const f=n("Input"),b=n("PageWrapper");return o(),p(b,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:u((()=>[m(" Current Param : "+i(a.params)+" ",1),l,j,d(f)])),_:1})};export default f;
