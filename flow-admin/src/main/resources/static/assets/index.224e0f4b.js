import{_ as e}from"./TableImg.67f55203.js";import{f as o}from"./BasicForm.d23c40e0.js";import{u as t}from"./useTable.0dd6c347.js";import{c as i}from"./system.79f5df33.js";import{u as r}from"./useDrawer.b63a9552.js";import{_ as n,c as s,s as a}from"./RoleDrawer.e740647e.js";import{k as d,K as l,o as m,n as c,q as p,Q as u,Y as f}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.a6964f79.js";import"./index.407e4786.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.14f2a57c.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.ab37f9af.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.3d5d9047.js";/* empty css              *//* empty css              */import"./download.dd3a6468.js";import"./StrengthMeter.ca48504f.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.e8be757a.js";import"./useContextMenu.553121b5.js";var j=d({name:"RoleManagement",components:{BasicTable:e,RoleDrawer:n,TableAction:o},setup(){const[e,{openDrawer:o}]=r(),[n,{reload:d}]=t({title:"角色列表",api:i,columns:s,formConfig:{labelWidth:120,schemas:a,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:n,registerDrawer:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const b=f(" 新增角色 ");j.render=function(e,o,t,i,r,n){const s=l("a-button"),a=l("TableAction"),d=l("BasicTable"),f=l("RoleDrawer");return m(),c("div",null,[p(d,{onRegister:e.registerTable},{toolbar:u((()=>[p(s,{type:"primary",onClick:e.handleCreate},{default:u((()=>[b])),_:1},8,["onClick"])])),action:u((({record:o})=>[p(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(f,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;
