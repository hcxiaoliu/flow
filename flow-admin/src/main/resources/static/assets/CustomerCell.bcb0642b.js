import{_ as e,a as t}from"./TableImg.7eb6c017.js";import"./BasicForm.86cd97da.js";import{u as s}from"./useTable.5323312b.js";import{k as i,b2 as o,K as a,o as d,n as r,q as n,Q as m,Y as c,s as p}from"./vendor.bc3b2d68.js";/* empty css              */import{d as l}from"./table.2b83964f.js";/* empty css              *//* empty css              */import"./useForm.87ab8aa1.js";import"./index.33a0330f.js";/* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.b44b8cab.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.a66d7f9a.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";const b=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var u=i({components:{BasicTable:e,TableImg:t,Tag:o},setup(){const[e]=s({title:"自定义列内容",api:l,columns:b,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const j={class:"p-4"};u.render=function(e,t,s,i,o,l){const b=a("Tag"),u=a("TableImg"),f=a("BasicTable");return d(),r("div",j,[n(f,{onRegister:e.registerTable},{id:m((({record:e})=>[c(" ID: "+p(e.id),1)])),no:m((({record:e})=>[n(b,{color:"green"},{default:m((()=>[c(p(e.no),1)])),_:2},1024)])),img:m((()=>[n(u,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:m((({record:e})=>[n(b,{color:"green"},{default:m((()=>[c(p(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default u;