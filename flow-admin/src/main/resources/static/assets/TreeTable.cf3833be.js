import{_ as e}from"./TableImg.67f55203.js";import"./BasicForm.d23c40e0.js";import{u as o}from"./useTable.0dd6c347.js";import{getBasicColumns as t,getTreeTableData as s}from"./tableData.83d6955e.js";import{k as i,K as r,o as a,n as d,q as n,Q as p,Y as l}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.a6964f79.js";import"./index.407e4786.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.14f2a57c.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.ab37f9af.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.3d5d9047.js";/* empty css              *//* empty css              */import"./download.dd3a6468.js";import"./StrengthMeter.ca48504f.js";var m=i({components:{BasicTable:e},setup(){const[e,{expandAll:i,collapseAll:r}]=o({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:t(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:i,collapseAll:r}}});const c={class:"p-4"},j=l("展开全部"),f=l("折叠全部");m.render=function(e,o,t,s,i,l){const m=r("a-button"),u=r("BasicTable");return a(),d("div",c,[n(u,{onRegister:e.register},{toolbar:p((()=>[n(m,{type:"primary",onClick:e.expandAll},{default:p((()=>[j])),_:1},8,["onClick"]),n(m,{type:"primary",onClick:e.collapseAll},{default:p((()=>[f])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default m;
