import{k as e,bm as a,r as o,K as n,o as r,n as s,P as t,q as d}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{_ as i}from"./PageWrapper.5ef0540d.js";import m from"./WorkbenchHeader.6f43b3a7.js";import c from"./SystemListCard.8ede6e68.js";import f from"./QuickNav.d0b0719e.js";import l from"./DynamicInfo.ff400ac0.js";import p from"./NoticeInfo.e1a1c827.js";import j from"./BannerInfo.0433f91a.js";import u from"./SaleRadar.2cc7f751.js";import{d as I,n as g,b}from"./data.108c606b.js";import"./index.dd44fc8e.js";import"./usePageContext.913e3c16.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";import"./header.d801b988.js";/* empty css              *//* empty css              */import"./process.f0749243.js";/* empty css              */import"./useECharts.2d5d69a7.js";var y=e({components:{PageWrapper:i,WorkbenchHeader:m,SystemListCard:c,NoticeInfo:p,BannerInfo:j,QuickNav:f,DynamicInfo:l,SaleRadar:u,Card:a},setup(){const e=o(!0);return setTimeout((()=>{e.value=!1}),1500),{loading:e,dynamicInfoItems:I,noticeInfoItems:g,bannerInfoItems:b}}});const x={class:"lg:flex"},S={class:"lg:w-7/10 w-full enter-y"},v={class:"lg:w-3/10 !pl-4"};y.render=function(e,a,o,i,m,c){const f=n("WorkbenchHeader"),l=n("NoticeInfo"),p=n("SystemListCard"),j=n("BannerInfo"),u=n("DynamicInfo"),I=n("PageWrapper");return r(),s(I,{class:"!mt-4"},{headerContent:t((()=>[d(f)])),default:t((()=>[d("div",x,[d("div",S,[d(l,{dataSource:e.noticeInfoItems,loading:e.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"]),d(p,{loading:e.loading,class:"enter-y"},null,8,["loading"])]),d("div",v,[d(j,{dataSource:e.bannerInfoItems,class:"!my-4 enter-y",loading:e.loading},null,8,["dataSource","loading"]),d(u,{dataSource:e.dynamicInfoItems,loading:e.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])])])),_:1})};export default y;