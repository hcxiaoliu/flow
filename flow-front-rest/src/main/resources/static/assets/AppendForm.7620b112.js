import{f as e,g as o}from"./useForm.87d4ef16.js";import{ac as a,aw as t}from"./index.21f8a12f.js";import{k as n,ac as i,r,K as s,o as l,n as d,P as p,q as c,W as u,X as m}from"./vendor.d660e98f.js";import{_ as f}from"./PageWrapper.3d5c8b2d.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.9b3564b9.js";import"./useModal.f5d94e37.js";import"./useWindowSizeFn.4f1b8c18.js";/* empty css              */import"./download.03309c9a.js";import"./StrengthMeter.10576816.js";import"./usePageContext.7550f9ef.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";var b=n({components:{BasicForm:e,CollapseContainer:a,PageWrapper:f,[i.name]:i,Button:t},setup(){const[e,{appendSchemaByField:a,removeSchemaByFiled:t,validate:n}]=o({schemas:[{field:"field0a",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});const i=r(1);return{register:e,handleSubmit:function(){return e=this,o=null,a=function*(){try{yield n()}catch(e){}},new Promise(((t,n)=>{var i=e=>{try{s(a.next(e))}catch(o){n(o)}},r=e=>{try{s(a.throw(e))}catch(o){n(o)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(i,r);s((a=a.apply(e,o)).next())}));var e,o,a},add:function(){a({field:`field${i.value}a`,component:"Input",label:"字段"+i.value,colProps:{span:8},required:!0},""),a({field:`field${i.value}b`,component:"Input",label:"字段"+i.value,colProps:{span:8},required:!0},""),a({field:`${i.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),i.value++},del:function(e){t([`field${e}a`,`field${e}b`,`${e}`]),i.value--}}}});const j=m("+"),v=m("-");b.render=function(e,o,a,t,n,i){const r=s("Button"),m=s("BasicForm"),f=s("CollapseContainer"),b=s("PageWrapper");return l(),d(b,{title:"表单增删示例"},{default:p((()=>[c(f,{title:"表单增删"},{default:p((()=>[c(m,{onRegister:e.register,onSubmit:e.handleSubmit},{add:p((({field:o})=>[0===Number(o)?(l(),d(r,{key:0,onClick:e.add},{default:p((()=>[j])),_:1},8,["onClick"])):u("",!0),o>0?(l(),d(r,{key:1,onClick:a=>e.del(o)},{default:p((()=>[v])),_:2},1032,["onClick"])):u("",!0)])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default b;