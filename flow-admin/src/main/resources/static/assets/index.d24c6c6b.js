import{_ as e}from"./Editor.c05ac241.js";import{_ as a}from"./PageWrapper.ba7be9e5.js";import{k as o,r as n,K as r,o as t,n as d,Q as i,q as s}from"./vendor.bc3b2d68.js";import"./uuid.c53863e7.js";/* empty css              */import"./index.33a0330f.js";import"./onMountedOrActivated.06aaefd7.js";import"./usePageContext.a11cc1be.js";/* empty css              *//* empty css              */var p=o({components:{Tinymce:e,PageWrapper:a},setup:()=>({handleChange:function(e){},value:n("hello world!")})});p.render=function(e,a,o,n,p,l){const m=r("Tinymce"),u=r("PageWrapper");return t(),d(u,{title:"富文本组件示例"},{default:i((()=>[s(m,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),onChange:e.handleChange,width:"100%"},null,8,["modelValue","onChange"])])),_:1})};export default p;