import{k as n,bm as o,r as e,K as a,o as r,n as t,P as i,q as s}from"./vendor.0482ef83.js";/* empty css              *//* empty css              *//* empty css              */import{_ as d}from"./PageWrapper.02c58e5c.js";import l from"./DynamicInfo.78d9b8f1.js";import m from"./BannerInfo.985c233e.js";import f from"./NoticeInfo.53c74796.js";import c from"./ITWikiCard.82bfb698.js";import g from"./ITContactCard.71637f0c.js";import p from"./CommonDownCard.ca0ebea6.js";import{dynamicInfoItems as u,bannerList as I,noticeInfoItems as j}from"./data.20ed60df.js";import"./index.bfefd9f4.js";import"./usePageContext.2f9e0efb.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.66cf4856.js";/* empty css              *//* empty css              *//* empty css              */var y=n({components:{PageWrapper:d,DynamicInfo:l,BannerInfo:m,NoticeInfo:f,ITWikiCard:c,ITContactCard:g,CommonDownCard:p,Card:o},setup(){const n=e(!0);return setTimeout((()=>{n.value=!1}),1500),{loading:n,dynamicInfoItems:u,bannerInfoItems:I,noticeInfoItems:j}}});const C={class:"lg:flex"},x={class:"lg:w-6/10 w-full !mr-4 enter-y"},b={class:"lg:w-4/10 w-full enter-y"},w={class:"lg:flex"},v={class:"lg:w-2/10 w-full !mr-4 enter-y"},D={class:"lg:w-8/10 w-full enter-y"},S=s("div",{class:"lg:flex mt-4"},[s("div",{class:"lg:w-10/10 w-full enter-y"})],-1);y.render=function(n,o,e,d,l,m){const f=a("BannerInfo"),c=a("NoticeInfo"),g=a("ITContactCard"),p=a("DynamicInfo"),u=a("CommonDownCard"),I=a("PageWrapper");return r(),t(I,null,{default:i((()=>[s("div",C,[s("div",x,[s(f,{dataSource:n.bannerInfoItems,height:"270",class:"!my-4 enter-y",loading:n.loading},null,8,["dataSource","loading"])]),s("div",b,[s(c,{dataSource:n.noticeInfoItems,loading:n.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])]),s("div",w,[s("div",v,[s(g,{loading:n.loading,class:"enter-y"},null,8,["loading"])]),s("div",D,[s(p,{dataSource:n.dynamicInfoItems,loading:n.loading,class:"enter-y"},null,8,["dataSource","loading"]),s(u,{loading:n.loading,class:"enter-y !mt-4"},null,8,["loading"])])]),S])),_:1})};export default y;