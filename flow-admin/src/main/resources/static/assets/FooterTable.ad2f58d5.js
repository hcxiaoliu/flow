import{_ as e}from"./TableImg.44575666.js";import"./BasicForm.52dd7a78.js";import{u as o}from"./useTable.9cfd2432.js";import{getBasicColumns as r}from"./tableData.83d6955e.js";import{d as s}from"./table.cbb2e425.js";import{k as t,K as i,o as n,n as a,q as d}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.141421b5.js";import"./index.f72cd585.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.a73129f6.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.13695b66.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";var m=t({components:{BasicTable:e},setup(){const[e]=o({title:"表尾行合计示例",api:s,rowSelection:{type:"checkbox"},columns:r(),showSummary:!0,summaryFunc:function(e){const o=e.reduce(((e,o)=>e+=o.no),0);return[{_row:"合计",_index:"平均值",no:o},{_row:"合计",_index:"平均值",no:o}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const c={class:"p-4"};m.render=function(e,o,r,s,t,m){const p=i("BasicTable");return n(),a("div",c,[d(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default m;