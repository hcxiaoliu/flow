import{_ as e}from"./TableImg.44575666.js";import{f as o}from"./BasicForm.52dd7a78.js";import{u as t}from"./useTable.9cfd2432.js";import{b as i}from"./useModal.a73129f6.js";import{_ as n,c as a,s as r}from"./JobGradeTypeModal.16006f2d.js";import{a as s,d}from"./jobGradeType.94797967.js";import{k as c,K as l,o as m,n as p,q as u,Q as b,Y as f}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.141421b5.js";import"./index.f72cd585.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.13695b66.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";var j=c({name:"JobGradeType",components:{BasicTable:e,TableAction:o,JobGradeTypeModal:n},setup(){const[e,{openModal:o}]=i(),[n,{reload:c}]=t({title:"列表",api:s,columns:a,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,isTreeTable:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){d(e.id).then((()=>{c()}))},handleSuccess:function(){c()}}}});const h=f(" 新增 ");j.render=function(e,o,t,i,n,a){const r=l("a-button"),s=l("TableAction"),d=l("BasicTable"),c=l("JobGradeTypeModal");return m(),p("div",null,[u(d,{onRegister:e.registerTable},{toolbar:b((()=>[u(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[h])),_:1},8,["onClick"])])),action:b((({record:o})=>[u(s,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;