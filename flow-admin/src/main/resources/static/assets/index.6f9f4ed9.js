import e from"./CurrentPermissionMode.0bf40b2d.js";import{ai as t,b0 as a}from"./index.407e4786.js";import{_ as n}from"./PageWrapper.745b68b0.js";import{k as s,bz as o,l as r,m as i,K as d,o as c,n as m,x as u,q as p,Y as f}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./usePageContext.60e4e10d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";var l=s({components:{Alert:o,CurrentPermissionMode:e,PageWrapper:n},setup(){const{changeMenu:e}=t();return{RoleEnum:a,changeMenu:e}}});const b=u();r("data-v-21af05ba");const g={class:"mt-4"},j=f(" 权限切换(请先切换权限模式为后台权限模式): "),x=f(" 获取用户id为1的菜单 "),M=f(" 获取用户id为2的菜单 ");i();const C=b(((e,t,a,n,s,o)=>{const r=d("CurrentPermissionMode"),i=d("Alert"),u=d("a-button"),f=d("a-button-group"),l=d("PageWrapper");return c(),m(l,{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:b((()=>[p(r),p(i,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),p("div",g,[j,p(f,null,{default:b((()=>[p(u,{onClick:t[1]||(t[1]=t=>e.changeMenu("1"))},{default:b((()=>[x])),_:1}),p(u,{onClick:t[2]||(t[2]=t=>e.changeMenu("2"))},{default:b((()=>[M])),_:1})])),_:1})])])),_:1})}));l.render=C,l.__scopeId="data-v-21af05ba";export default l;
