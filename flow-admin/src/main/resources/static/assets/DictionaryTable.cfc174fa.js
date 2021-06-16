import{_ as e}from"./TableImg.67f55203.js";import{f as o}from"./BasicForm.d23c40e0.js";import{u as t}from"./useTable.0dd6c347.js";import{j as i,k as n,l as a,m as r}from"./dictionary.3a510a4b.js";import{_ as s}from"./PageWrapper.745b68b0.js";import{g as d}from"./index.407e4786.js";import{b as c}from"./useModal.14f2a57c.js";import l from"./DictionaryModal.5f798151.js";import{k as p,r as m,K as u,o as f,n as b,q as j,Q as h,X as g,Y as y}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.a6964f79.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.ab37f9af.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.3d5d9047.js";/* empty css              *//* empty css              */import"./download.dd3a6468.js";import"./StrengthMeter.ca48504f.js";import"./usePageContext.60e4e10d.js";/* empty css              *//* empty css              */const{createMessage:w}=d();var x=p({name:"DictionaryTable",components:{BasicTable:e,DictionaryModal:l,PageWrapper:s,TableAction:o},setup(e,{emit:o}){const[s,{openModal:d,setModalProps:l}]=c(),p=m(""),[u,{reload:f,setProps:b,setTableData:j,setSelectedRowKeys:h}]=t({title:"列表",api:i,columns:n,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,clickToRowSelect:!0,rowSelection:{type:"radio",columnWidth:40},useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,pagination:!0,rowKey:"id",actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:u,registerModal:s,dictTypeId:p,handleDeleteStop:function(e,o){o.stopPropagation()},clickDictionary:function(e){h(e.id),o("handleSelect",e.id)},changeDictionary:function({keys:e,rows:t}){o("handleSelect",t[0].id)},filterByDictType:function(e){p.value=e,b({searchInfo:{dicTypeId:e}}),f({page:1})},cleanTableData:function(){j([]),p.value=""},handleCreate:function(){""!==p.value?(l({title:"新增字典"}),d(!0,{record:{dicTypeId:p.value},isUpdate:!1})):w.warning("请选择数据类型！",2)},handleEdit:function(e,o){o.stopPropagation(),l({title:"修改字典"}),d(!0,{record:e,isUpdate:!0})},handleDelete:function(e){r(e.id).then((()=>{f()}))},handleSuccess:function(){f()}}}});const S={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},T=y("新增");x.render=function(e,o,t,i,n,a){const r=u("a-button"),s=u("TableAction"),d=u("BasicTable"),c=u("DictionaryModal");return f(),b("div",S,[j(d,{onRegister:e.registerTable,onRowClick:e.clickDictionary,onSelectionChange:e.changeDictionary,class:"w-4/4 xl:w-5/5"},{toolbar:h((()=>[""!==e.dictTypeId?(f(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:h((()=>[T])),_:1},8,["onClick"])):g("",!0)])),action:h((({record:o})=>[j(s,{actions:[{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",onClick:e.handleDeleteStop.bind(null,o),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister","onRowClick","onSelectionChange"]),j(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
