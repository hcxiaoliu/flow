import{_ as e}from"./TableImg.35f1bee6.js";import"./useForm.87d4ef16.js";import{u as s}from"./useTable.c93b5e32.js";import{_ as o}from"./PageWrapper.3d5c8b2d.js";import{k as t,aT as a,bm as r,af as n,bi as i,b_ as m,bd as d,K as p,o as c,n as b,P as f,q as u,X as j,s as l}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{haveDownTableSchema as x,searchFormSchema as h}from"./data.66752124.js";import g from"./ProcessHeader.74ecb5b7.js";import w from"./LaunchButton.132aa9e4.js";import{b as I,h as P}from"./process.277f848b.js";/* empty css              */import"./index.21f8a12f.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.4f1b8c18.js";import"./useModal.f5d94e37.js";import"./onMountedOrActivated.a3bdff8d.js";import"./useSortable.0b13751b.js";/* empty css              */import"./CountdownInput.9b3564b9.js";import"./download.03309c9a.js";import"./StrengthMeter.10576816.js";import"./usePageContext.7550f9ef.js";/* empty css              *//* empty css              *//* empty css              */var v=t({components:{BasicTable:e,ProcessHeader:g,LaunchButton:w,PageWrapper:o,[a.name]:a,[r.name]:r,AEmpty:n,[i.name]:i,[i.Item.name]:i.Item,[m.name]:m,[m.Step.name]:m.Step,[d.name]:d,[d.TabPane.name]:d.TabPane},setup(){const[e,{getForm:o}]=s({api:I,title:"",columns:x,formConfig:{labelWidth:120,schemas:h,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return P().then((e=>{const{updateSchema:s}=o();s({field:"appSn",componentProps:{options:e}})})),{registerHaveDownTable:e}}});const S={class:"m-1 desc-wrap process"};v.render=function(e,s,o,t,a,r){const n=p("launch-button"),i=p("process-header"),m=p("router-link"),d=p("BasicTable"),x=p("PageWrapper");return c(),b(x,{title:"流程中心",contentBackground:"",class:"!mt-4"},{extra:f((()=>[u(n)])),footer:f((()=>[u(i,{current:"have-down"})])),default:f((()=>[u("div",S,[u(d,{onRegister:e.registerHaveDownTable},{nameRender:f((({record:e})=>[u(m,{to:`/process/view/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:f((()=>[j(l(e.formName),1)])),_:2},1032,["to"])])),_:1},8,["onRegister"])])])),_:1})};export default v;