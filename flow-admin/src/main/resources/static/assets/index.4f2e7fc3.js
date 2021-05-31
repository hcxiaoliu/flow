import{_ as e}from"./TableImg.44575666.js";import{f as t}from"./BasicForm.52dd7a78.js";import{u as i}from"./useTable.9cfd2432.js";import{a,d as o}from"./dept.9d148ea2.js";import{_ as n}from"./PageWrapper.c247b944.js";import r from"./DictTypeTree.855ebe37.js";import s from"./DictionaryTable.a42fbc6f.js";import d from"./DictionaryItemTable.44978893.js";import{g as c}from"./index.f72cd585.js";import{b as l}from"./useModal.a73129f6.js";import{k as m,l as p}from"./dictionary.b40d9039.js";import{k as f,r as u,K as b,o as j,n as x,Q as y,q as T}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.141421b5.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.13695b66.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";import"./usePageContext.8ab99773.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.39b0f7de.js";import"./useContextMenu.e2a9a589.js";import"./dicType.e591f397.js";import"./DictionaryModal.02db531c.js";import"./DictionaryItemModal.21d4b323.js";const{createMessage:h}=c();var D=f({name:"Dictionary",components:{BasicTable:e,PageWrapper:n,DictTypeTree:r,DictionaryTable:s,DictionaryItemTable:d,TableAction:t},setup(){const[e,{openModal:t}]=l(),n=u(),r=u(),[s,{reload:d}]=i({title:"列表",api:a,columns:m,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{dictionaryRef:n,dictionaryItemRef:r,registerTable:s,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDictSelect:function(e){e&&r.value.filterByDict(e)},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):o([e.id]).then((()=>{d()}))},handleSuccess:function(){d()},handleDictTypeSelect:function(e=""){e?(n.value.filterByDictType(e),r.value.cleanTableData()):n.value.cleanTableData()}}}});D.render=function(e,t,i,a,o,n){const r=b("DictTypeTree"),s=b("DictionaryTable"),d=b("DictionaryItemTable"),c=b("PageWrapper");return j(),x(c,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:y((()=>[T(r,{class:"w-2/8 xl:w-2/8",onSelect:e.handleDictTypeSelect},null,8,["onSelect"]),T(s,{ref:"dictionaryRef",onHandleSelect:e.handleDictSelect,class:"w-3/8 xl:w-3/8"},null,8,["onHandleSelect"]),T(d,{ref:"dictionaryItemRef",class:"w-3/8 xl:w-3/8"},null,512)])),_:1})};export default D;