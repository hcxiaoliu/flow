import{_ as e}from"./TableImg.67f55203.js";import{f as t}from"./BasicForm.d23c40e0.js";import{u as i}from"./useTable.0dd6c347.js";import{d as n}from"./table.fc630007.js";import{k as o,K as a,o as d,n as s,q as r,Q as l}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.a6964f79.js";import"./index.407e4786.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.14f2a57c.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.ab37f9af.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.3d5d9047.js";/* empty css              *//* empty css              */import"./download.dd3a6468.js";import"./StrengthMeter.ca48504f.js";const p=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",auth:"test"},{title:"状态",dataIndex:"status"},{title:"地址",dataIndex:"address",auth:"super",ifShow:e=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var c=o({components:{BasicTable:e,TableAction:t},setup(){const[e]=i({title:"TableAction组件及固定列示例",api:n,columns:p,bordered:!0,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleEdit:function(e){},handleDelete:function(e){},handleOpen:function(e){}}}});const m={class:"p-4"};c.render=function(e,t,i,n,o,p){const c=a("TableAction"),u=a("BasicTable");return d(),s("div",m,[r(u,{onRegister:e.registerTable},{action:l((({record:t})=>[r(c,{actions:[{label:"编辑",onClick:e.handleEdit.bind(null,t),auth:"other"},{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,t),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,t)},ifShow:e=>"enable"!==t.status},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:e.handleOpen.bind(null,t)},ifShow:()=>"enable"===t.status},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:e.handleOpen.bind(null,t)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default c;
