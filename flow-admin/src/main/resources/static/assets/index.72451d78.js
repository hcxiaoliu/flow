import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.e8be757a.js";import{t}from"./data.2c592186.js";import{_ as a}from"./PageWrapper.745b68b0.js";import{k as r,K as s,o,n,Q as i,q as c}from"./vendor.56d2c57f.js";import"./index.407e4786.js";import"./useContextMenu.553121b5.js";/* empty css              */import"./useExpose.46777d04.js";import"./usePageContext.60e4e10d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";var p=r({components:{BasicTree:e,PageWrapper:a},setup:()=>({treeData:t,handleCheck:function(e,t){}})});const l={class:"flex"};p.render=function(e,t,a,r,p,d){const m=s("BasicTree"),u=s("PageWrapper");return o(),n(u,{title:"Tree基础示例"},{default:i((()=>[c("div",l,[c(m,{treeData:e.treeData,title:"基础示例",class:"w-1/3"},null,8,["treeData"]),c(m,{treeData:e.treeData,title:"可勾选",checkable:!0,class:"w-1/3 mx-4",onCheck:e.handleCheck},null,8,["treeData","onCheck"]),c(m,{title:"默认展开/勾选示例",treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"],class:"w-1/3"},null,8,["treeData"])])])),_:1})};export default p;