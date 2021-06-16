var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(e,t,r)=>new Promise(((a,o)=>{var i=e=>{try{l(r.next(e))}catch(t){o(t)}},s=e=>{try{l(r.throw(e))}catch(t){o(t)}},l=e=>e.done?a(e.value):Promise.resolve(e.value).then(i,s);l((r=r.apply(e,t)).next())}));import{_ as s,a as l}from"./useModal.b121dc3d.js";import{_ as n}from"./BasicForm.4b5e3079.js";import{u as d}from"./useForm.c00e8219.js";import{s as u}from"./appPrivilegeValue.c229a685.js";import{k as c,r as m,u as p,f,K as g,o as b,n as h,Q as v,q as y,N as w}from"./vendor.9d9efc92.js";const I=[{title:"名称",dataIndex:"name",width:100,align:"left"},{title:"位",dataIndex:"position",width:100},{title:"排序号",dataIndex:"orderNo",width:100},{title:"备注",dataIndex:"remark",width:400,align:"left"}],j=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:"名称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:32,message:"字符长度不能大于32！"}]},{field:"position",label:"位",required:!0,component:"InputNumber"},{field:"orderNo",label:"排序",required:!0,component:"InputNumber"},{label:"备注",field:"remark",component:"InputTextArea",rules:[{max:200,message:"字符长度不能大于200！"}]}];var x=c({name:"AppPrivilegeValueModal",components:{BasicModal:s,BasicForm:n},emits:["success","register"],setup(e,{emit:s}){const n=m(!0),[c,{resetFields:g,setFieldsValue:b,validate:h}]=d({labelWidth:100,schemas:j,showActionButtonGroup:!1}),[v,{setModalProps:y,closeModal:w}]=l((e=>i(this,null,(function*(){g(),y({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate),p(n)&&b(((e,i)=>{for(var s in i||(i={}))r.call(i,s)&&o(e,s,i[s]);if(t)for(var s of t(i))a.call(i,s)&&o(e,s,i[s]);return e})({},e.record))}))));return{registerModal:v,registerForm:c,getTitle:f((()=>p(n)?"修改":"新增")),handleSubmit:function(){return i(this,null,(function*(){try{y({confirmLoading:!0});const e=yield h();yield u(e);w(),s("success")}finally{y({confirmLoading:!1})}}))}}}});x.render=function(e,t,r,a,o,i){const s=g("BasicForm"),l=g("BasicModal");return b(),h(l,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[y(s,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});export{M as A,x as _,I as c};
