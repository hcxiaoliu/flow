import{k as a,bm as n,r as o,K as e,o as r,n as t,P as i,q as d}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{_ as l}from"./PageWrapper.bf8b0064.js";import s from"./DynamicInfo.bc314165.js";import m from"./BannerInfo.22a6ec60.js";import c from"./NoticeInfo.eddd31e9.js";import f from"./ITWikiCard.3c9aaee9.js";import g from"./ITContactCard.9a840ce2.js";import p from"./CommonDownCard.54f31a5f.js";import{dynamicInfoItems as u,bannerList as I,noticeInfoItems as j}from"./data.cc04bca7.js";import"./index.e2ea082d.js";import"./usePageContext.8ac4efa6.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";/* empty css              *//* empty css              *//* empty css              */var y=a({components:{PageWrapper:l,DynamicInfo:s,BannerInfo:m,NoticeInfo:c,ITWikiCard:f,ITContactCard:g,CommonDownCard:p,Card:n},setup(){const a=o(!0);return setTimeout((()=>{a.value=!1}),1500),{loading:a,dynamicInfoItems:u,bannerInfoItems:I,noticeInfoItems:j}}});const C={class:"lg:flex"},w={class:"lg:w-2/10 w-full !mr-4 mt-4 enter-y"},x={class:"lg:w-4/10 w-full !mr-4 enter-y"},v={class:"lg:w-4/10 w-full enter-y"},b={class:"lg:flex"},T={class:"lg:w-2/10 w-full !mr-4 enter-y"},D={class:"lg:w-8/10 w-full enter-y"},S=d("div",{class:"lg:flex mt-4"},[d("div",{class:"lg:w-10/10 w-full enter-y"})],-1);y.render=function(a,n,o,l,s,m){const c=e("ITWikiCard"),f=e("BannerInfo"),g=e("NoticeInfo"),p=e("ITContactCard"),u=e("DynamicInfo"),I=e("CommonDownCard"),j=e("PageWrapper");return r(),t(j,null,{default:i((()=>[d("div",C,[d("div",w,[d(c,{loading:a.loading,class:"enter-y"},null,8,["loading"])]),d("div",x,[d(f,{dataSource:a.bannerInfoItems,height:"270",class:"!my-4 enter-y",loading:a.loading},null,8,["dataSource","loading"])]),d("div",v,[d(g,{dataSource:a.noticeInfoItems,loading:a.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])]),d("div",b,[d("div",T,[d(p,{loading:a.loading,class:"enter-y"},null,8,["loading"])]),d("div",D,[d(u,{dataSource:a.dynamicInfoItems,loading:a.loading,class:"enter-y"},null,8,["dataSource","loading"]),d(I,{loading:a.loading,class:"enter-y !mt-4"},null,8,["loading"])])]),S])),_:1})};export default y;