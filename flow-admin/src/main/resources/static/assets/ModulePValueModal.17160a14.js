var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,s=(e,o,t)=>new Promise(((r,i)=>{var s=e=>{try{a(t.next(e))}catch(o){i(o)}},n=e=>{try{a(t.throw(e))}catch(o){i(o)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,n);a((t=t.apply(e,o)).next())}));import{_ as n,a}from"./useModal.b121dc3d.js";import{_ as d}from"./BasicForm.4b5e3079.js";import{u as l}from"./useForm.c00e8219.js";import{f as m,b as c}from"./module.data.d2a99690.js";import{k as p,r as u,u as f,f as b,K as j,o as h,n as g,Q as x,q as y,N as v}from"./vendor.9d9efc92.js";import"./index.734d8392.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.b71977b9.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.48c86db0.js";import"./StrengthMeter.14956067.js";var w=p({name:"ModuleModal",components:{BasicModal:n,BasicForm:d},emits:["success","register"],setup(e,{emit:n}){const d=u(!0),[p,{resetFields:j,setFieldsValue:h,updateSchema:g,validate:x}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[y,{setModalProps:v,closeModal:w}]=a((e=>s(this,null,(function*(){j(),v({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate),f(d)?(h(((e,s)=>{for(var n in s||(s={}))t.call(s,n)&&i(e,n,s[n]);if(o)for(var n of o(s))r.call(s,n)&&i(e,n,s[n]);return e})({},e.record)),g([{field:"component",show:!1},{field:"url",show:!1}])):g([{field:"component",show:!0},{field:"url",show:!0}])}))));return{registerModal:y,registerForm:p,getTitle:b((()=>f(d)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{v({confirmLoading:!0});const e=yield x();yield c(e),w(),n("success")}finally{v({confirmLoading:!1})}}))}}}});w.render=function(e,o,t,r,i,s){const n=j("BasicForm"),a=j("BasicModal");return h(),g(a,v(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:x((()=>[y(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default w;
