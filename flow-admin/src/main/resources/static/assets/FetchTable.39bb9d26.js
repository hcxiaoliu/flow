import{_ as e}from"./TableImg.67f55203.js";import"./BasicForm.d23c40e0.js";import{u as o}from"./useTable.0dd6c347.js";import{getBasicColumns as t}from"./tableData.83d6955e.js";import{d as r}from"./table.fc630007.js";import{k as i,K as a,o as s,n as d,q as n,Q as m,Y as p}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.a6964f79.js";import"./index.407e4786.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.14f2a57c.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.ab37f9af.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.3d5d9047.js";/* empty css              *//* empty css              */import"./download.dd3a6468.js";import"./StrengthMeter.ca48504f.js";var l=i({components:{BasicTable:e},setup(){const[e,{reload:i}]=o({title:"远程加载示例",api:r,columns:t()});return{registerTable:e,handleReloadCurrent:function(){i()},handleReload:function(){i({page:1})}}}});const f={class:"p-4"},c=p(" 刷新当前页 "),j=p(" 刷新并返回第一页 ");l.render=function(e,o,t,r,i,p){const l=a("a-button"),u=a("BasicTable");return s(),d("div",f,[n(u,{onRegister:e.registerTable},{toolbar:m((()=>[n(l,{type:"primary",onClick:e.handleReloadCurrent},{default:m((()=>[c])),_:1},8,["onClick"]),n(l,{type:"primary",onClick:e.handleReload},{default:m((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default l;
