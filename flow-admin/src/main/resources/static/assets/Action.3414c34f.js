import{Q as s}from"./index.10276049.js";import{_ as o}from"./PageWrapper.fad7568d.js";import{k as l,r,u as e,l as a,m as t,K as c,o as n,n as d,q as i,V as p,ah as f,s as m,x as u,Y as x}from"./vendor.9d9efc92.js";import"./usePageContext.d3e060c8.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var _=l({components:{ScrollContainer:s,PageWrapper:o},setup(){const s=r(null),o=()=>{const o=e(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const j=u();a("data-v-83ef995e");const v={class:"my-4"},C=x(" 滚动到100px位置 "),b=x(" 滚动到800px位置 "),k=x(" 滚动到顶部 "),T=x(" 滚动到底部 "),g={class:"scroll-wrap"},P={class:"p-3"};t();const w=j(((s,o,l,r,e,a)=>{const t=c("a-button"),u=c("ScrollContainer"),x=c("PageWrapper");return n(),d(x,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:j((()=>[i("div",v,[i(t,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:j((()=>[C])),_:1}),i(t,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:j((()=>[b])),_:1}),i(t,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:j((()=>[k])),_:1}),i(t,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:j((()=>[T])),_:1})]),i("div",g,[i(u,{class:"mt-4",ref:"scrollRef"},{default:j((()=>[i("ul",P,[(n(),d(p,null,f(100,(s=>i("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},m(s),1))),64))])])),_:1},512)])])),_:1})}));_.render=w,_.__scopeId="data-v-83ef995e";export default _;