import{k as e,aI as o,bT as r,u as t,a as n,K as a,o as s,n as i,q as d,P as l,S as m}from"./vendor.d660e98f.js";import p from"./FlowDiagramModal.0a22e96c.js";import{u as c}from"./useModal.ecb4e4c6.js";import u from"./index.214115cb.js";import"./Viewer.fd8523c8.js";import"./process.5fe17569.js";import"./index.491886fb.js";import"./useWindowSizeFn.4f1b8c18.js";import"./PageWrapper.7bb5c2b8.js";import"./usePageContext.f85f3259.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";/* empty css              *//* empty css              *//* empty css              */import"./index.6761adbd.js";var g=e({name:"BaseActionButtons",components:{Button:o,ApartmentOutlined:r,FlowDiagramModal:p,BpmnPreviewModal:u},setup(e,{emit:o}){const{currentRoute:r}=t(),{params:{modelKey:a},query:{taskId:s,procInstId:i}}=n(r),[d,{openModal:l,setModalProps:m}]=c(),[p,{openModal:u,setModalProps:g}]=c();return{registerFlowDiagramModal:d,registerBpmnPreviewModal:p,handleCloseFunc:function(){return Promise.resolve(!0)},showFlowDiagram:function(){u(!0,{modelKey:a,procInstId:i||"",isUpdate:!0}),g({bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"关闭"})}}}});g.render=function(e,o,r,t,n,p){const c=a("ApartmentOutlined"),u=a("Button"),g=a("FlowDiagramModal"),f=a("BpmnPreviewModal");return s(),i(m,null,[d(u,{title:"查看流程图",type:"link",onClick:e.showFlowDiagram},{icon:l((()=>[d(c)])),_:1},8,["onClick"]),d(g,{onRegister:e.registerFlowDiagramModal},null,8,["onRegister"]),d(f,{onRegister:e.registerBpmnPreviewModal,closeFunc:e.handleCloseFunc},null,8,["onRegister","closeFunc"])],64)};export default g;