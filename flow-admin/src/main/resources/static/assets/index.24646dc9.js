import{_ as e}from"./TableImg.7eb6c017.js";import{f as o}from"./BasicForm.86cd97da.js";import{u as t}from"./useTable.5323312b.js";import{g as a,d as n}from"./jobGrade.ed20cab3.js";import{_ as i}from"./PageWrapper.ba7be9e5.js";import s from"./JobGradeTypeList.08b35f4c.js";import{b as r}from"./useModal.b44b8cab.js";import{_ as d,c,s as l}from"./JobGradeModal.2d33fc6c.js";import{k as m,aw as p,r as b,u,K as f,o as j,n as x,Q as g,q as h,Y as C}from"./vendor.bc3b2d68.js";import{g as w}from"./index.33a0330f.js";/* empty css              *//* empty css              */import"./useForm.87ab8aa1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.a66d7f9a.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";import"./usePageContext.a11cc1be.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.5d1be1b0.js";import"./useContextMenu.4afbb1e4.js";import"./jobGradeType.c4c43c66.js";const{createMessage:S}=w();var T=m({name:"JobGrade",components:{BasicTable:e,PageWrapper:i,JobGradeTypeList:s,JobGradeModal:d,TableAction:o,Popconfirm:p},setup(){const[e,{openModal:o}]=r(),i=b({}),[s,{reload:d}]=t({title:"列表",api:a,immediate:!1,columns:c,formConfig:{labelWidth:120,schemas:l,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function m(e){i.value=e;let o={typeId:e?e.id:""};d({searchInfo:o})}return{registerTable:s,registerModal:e,handleCreate:function(){u(i).code?o(!0,{record:{typeId:u(i).id,typeCode:u(i).code},isUpdate:!0}):S.warning("请选择分类！",2)},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n(e.id).then((()=>{d()}))},handleSuccess:function(){m(i.value)},handleSelect:m}}});const y=C("新增");T.render=function(e,o,t,a,n,i){const s=f("JobGradeTypeList"),r=f("a-button"),d=f("TableAction"),c=f("BasicTable"),l=f("JobGradeModal"),m=f("PageWrapper");return j(),x(m,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:g((()=>[h(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),h(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:g((()=>[h(r,{type:"primary",onClick:e.handleCreate},{default:g((()=>[y])),_:1},8,["onClick"])])),action:g((({record:o})=>[h(d,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default T;