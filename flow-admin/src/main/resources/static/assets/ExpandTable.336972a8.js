import{_ as e}from"./TableImg.8ccd808f.js";import"./BasicForm.312985a0.js";import{u as s}from"./useTable.84f74a57.js";import{getBasicColumns as o}from"./tableData.83d6955e.js";import{d as r}from"./table.ffb5ceaa.js";import{k as i,K as t,o as a,n as d,q as n,Q as m,s as p}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.a3596aad.js";import"./index.f8d8fadd.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.9d70781f.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.88a1af21.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";var c=i({components:{BasicTable:e},setup(){const[e]=s({title:"可展开表格",api:r,titleHelpMessage:"不能与scroll共用",columns:o(),rowKey:"id",canResize:!1});return{registerTable:e}}});const j={class:"p-4"};c.render=function(e,s,o,r,i,c){const f=t("BasicTable");return a(),d("div",j,[n(f,{onRegister:e.registerTable},{expandedRowRender:m((({record:e})=>[n("span",null,"No: "+p(e.no),1)])),_:1},8,["onRegister"])])};export default c;