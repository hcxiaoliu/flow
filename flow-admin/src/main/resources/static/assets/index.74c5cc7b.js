import{k as e,bz as o,K as a,o as r,n as s,Q as i,q as t,Y as n}from"./vendor.56d2c57f.js";/* empty css              */import{b as d}from"./useModal.14f2a57c.js";import l from"./Modal1.08946041.js";import p from"./Modal2.9ca9a02d.js";import m from"./Modal3.2df8abf3.js";import c from"./Modal4.ae9dd140.js";import{_ as f}from"./PageWrapper.745b68b0.js";import"./index.407e4786.js";import"./useWindowSizeFn.d0559e60.js";import"./BasicForm.d23c40e0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.3d5d9047.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.dd3a6468.js";import"./StrengthMeter.ca48504f.js";import"./useForm.a6964f79.js";import"./usePageContext.60e4e10d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";var g=e({components:{Alert:o,Modal1:l,Modal2:p,Modal3:m,Modal4:c,PageWrapper:f},setup(){const[e,{openModal:o,setModalProps:a}]=d(),[r,{openModal:s}]=d(),[i,{openModal:t}]=d(),[n,{openModal:l}]=d();return{register1:e,openModal1:o,register2:r,openModal2:s,register3:i,openModal3:t,register4:n,openModal4:l,send:function(){l(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),a({loading:!0}),setTimeout((()=>{a({loading:!1})}),2e3)}}}});const j=n(" 打开弹窗 默认可以拖动/全屏 "),M=n(" 打开弹窗 "),u=n(" 打开弹窗 "),b=n(" 打开弹窗并传递数据 ");g.render=function(e,o,n,d,l,p){const m=a("Alert"),c=a("a-button"),f=a("Modal1"),g=a("Modal2"),x=a("Modal3"),y=a("Modal4"),C=a("PageWrapper");return r(),s(C,{title:"modal组件使用示例"},{default:i((()=>[t(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\r\n    参数进行控制是否可以拖动/全屏","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:i((()=>[j])),_:1},8,["onClick"]),t(m,{message:"内外同时同时显示隐藏","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:i((()=>[M])),_:1},8,["onClick"]),t(m,{message:"自适应高度","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:i((()=>[u])),_:1},8,["onClick"]),t(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.send},{default:i((()=>[b])),_:1},8,["onClick"]),t(f,{onRegister:e.register1},null,8,["onRegister"]),t(g,{onRegister:e.register2},null,8,["onRegister"]),t(x,{onRegister:e.register3},null,8,["onRegister"]),t(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default g;
