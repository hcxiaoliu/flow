import{_ as e}from"./PageWrapper.745b68b0.js";import{_ as r}from"./BasicForm.d23c40e0.js";import{u as s}from"./useForm.a6964f79.js";import{k as t,K as o,o as i,n,Q as a,q as d,Y as l}from"./vendor.56d2c57f.js";import"./index.407e4786.js";import"./usePageContext.60e4e10d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.3d5d9047.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.14f2a57c.js";import"./useWindowSizeFn.d0559e60.js";/* empty css              *//* empty css              */import"./download.dd3a6468.js";import"./StrengthMeter.ca48504f.js";const p=[{field:"passwordOld",label:"当前密码",component:"InputPassword",required:!0},{field:"passwordNew",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"confirmPassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(r,s)=>s?s!==e.passwordNew?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("不能为空")}]}];var m=t({name:"ChangePassword",components:{BasicForm:r,PageWrapper:e},setup(){const[e,{validate:r,resetFields:t}]=s({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:p});return{register:e,resetFields:t,handleSubmit:function(){return e=this,s=null,t=function*(){try{const e=yield r(),{passwordOld:s,passwordNew:t}=e}catch(e){}},new Promise(((r,o)=>{var i=e=>{try{a(t.next(e))}catch(r){o(r)}},n=e=>{try{a(t.throw(e))}catch(r){o(r)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,n);a((t=t.apply(e,s)).next())}));var e,s,t}}}});const c={class:"py-8 bg-white flex flex-col justify-center items-center"},u={class:"flex justify-center"},f=l(" 重置 "),j=l(" 确认 ");m.render=function(e,r,s,t,l,p){const m=o("BasicForm"),x=o("a-button"),b=o("PageWrapper");return i(),n(b,{title:"修改当前用户密码",content:"修改成功后会自动退出当前登录！"},{default:a((()=>[d("div",c,[d(m,{onRegister:e.register},null,8,["onRegister"]),d("div",u,[d(x,{onClick:e.resetFields},{default:a((()=>[f])),_:1},8,["onClick"]),d(x,{class:"!ml-4",type:"primary",onClick:e.handleSubmit},{default:a((()=>[j])),_:1},8,["onClick"])])])])),_:1})};export default m;
