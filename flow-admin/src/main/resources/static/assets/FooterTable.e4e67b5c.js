import{_ as e}from"./TableImg.67f55203.js";import"./BasicForm.d23c40e0.js";import{u as o}from"./useTable.0dd6c347.js";import{getBasicColumns as r}from"./tableData.83d6955e.js";import{d as s}from"./table.fc630007.js";import{k as t,K as i,o as n,n as a,q as d}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.a6964f79.js";import"./index.407e4786.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.14f2a57c.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.ab37f9af.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.3d5d9047.js";/* empty css              *//* empty css              */import"./download.dd3a6468.js";import"./StrengthMeter.ca48504f.js";var m=t({components:{BasicTable:e},setup(){const[e]=o({title:"表尾行合计示例",api:s,rowSelection:{type:"checkbox"},columns:r(),showSummary:!0,summaryFunc:function(e){const o=e.reduce(((e,o)=>e+=o.no),0);return[{_row:"合计",_index:"平均值",no:o},{_row:"合计",_index:"平均值",no:o}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const p={class:"p-4"};m.render=function(e,o,r,s,t,m){const c=i("BasicTable");return n(),a("div",p,[d(c,{onRegister:e.registerTable},null,8,["onRegister"])])};export default m;
