import{k as e,aI as o,bT as r,u as t,a as n,K as a,o as s,n as i,q as d,P as l,S as m}from"./vendor.d660e98f.js";import p from"./FlowDiagramModal.2fc6d648.js";import{u as c}from"./useModal.fddc6186.js";import u from"./index.6afa5c42.js";import"./Viewer.fd8523c8.js";import"./process.f0749243.js";import"./index.dd44fc8e.js";import"./useWindowSizeFn.4f1b8c18.js";import"./PageWrapper.5ef0540d.js";import"./usePageContext.913e3c16.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";/* empty css              *//* empty css              *//* empty css              */import"./index.ef1e9878.js";var f=e({name:"BaseActionButtons",components:{Button:o,ApartmentOutlined:r,FlowDiagramModal:p,BpmnPreviewModal:u},setup(e,{emit:o}){const{currentRoute:r}=t(),{params:{modelKey:a},query:{taskId:s,procInstId:i}}=n(r),[d,{openModal:l,setModalProps:m}]=c(),[p,{openModal:u,setModalProps:f}]=c();return{registerFlowDiagramModal:d,registerBpmnPreviewModal:p,handleCloseFunc:function(){return Promise.resolve(!0)},showFlowDiagram:function(){u(!0,{modelKey:a,procInstId:i||"",isUpdate:!0}),f({bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"关闭"})}}}});f.render=function(e,o,r,t,n,p){const c=a("ApartmentOutlined"),u=a("Button"),f=a("FlowDiagramModal"),g=a("BpmnPreviewModal");return s(),i(m,null,[d(u,{title:"查看流程图",type:"link",onClick:e.showFlowDiagram},{icon:l((()=>[d(c)])),_:1},8,["onClick"]),d(f,{onRegister:e.registerFlowDiagramModal},null,8,["onRegister"]),d(g,{onRegister:e.registerBpmnPreviewModal,closeFunc:e.handleCloseFunc},null,8,["onRegister","closeFunc"])],64)};export default f;