import{k as e,bz as t,f as s,l as o,m as a,K as n,o as r,n as i,x as l,q as u,s as p,Y as d}from"./vendor.bc3b2d68.js";/* empty css              */import c from"./CurrentPermissionMode.656491b7.js";import{ai as m,f,b0 as R}from"./index.33a0330f.js";import{_ as b}from"./PageWrapper.ba7be9e5.js";/* empty css              */import"./usePageContext.a11cc1be.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";var g=e({components:{Alert:t,CurrentPermissionMode:c,PageWrapper:b},setup(){const{changeRole:e}=m(),t=f();return{userStore:t,RoleEnum:R,isSuper:s((()=>t.getRoleList.includes(R.SUPER))),isTest:s((()=>t.getRoleList.includes(R.TEST))),changeRole:e}}});const E=l();o("data-v-024b4668");const j=d(" 当前角色: "),P={class:"mt-4"},S=d(" 权限切换(请先切换权限模式为前端角色权限模式): ");a();const x=E(((e,t,s,o,a,l)=>{const c=n("CurrentPermissionMode"),m=n("Alert"),f=n("a-button"),R=n("a-button-group"),b=n("PageWrapper");return r(),i(b,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:E((()=>[u(c),u("p",null,[j,u("a",null,p(e.userStore.getRoleList),1)]),u(m,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),u("div",P,[S,u(R,null,{default:E((()=>[u(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:E((()=>[d(p(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),u(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:E((()=>[d(p(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));g.render=x,g.__scopeId="data-v-024b4668";export default g;