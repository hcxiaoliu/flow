import{k as n,bm as o,r as a,K as e,o as r,n as t,P as d,q as i}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{_ as s}from"./PageWrapper.3afd24ed.js";import l from"./DynamicInfo.83104fc9.js";import m from"./BannerInfo.446a9203.js";import f from"./NoticeInfo.28d16c3f.js";import c from"./ITWikiCard.1f410b32.js";import g from"./ITContactCard.df3d10bf.js";import p from"./CommonDownCard.ef200d72.js";import{dynamicInfoItems as u,bannerList as I,noticeInfoItems as j}from"./data.efa2ba67.js";import"./index.51c58f14.js";import"./usePageContext.31d72795.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";/* empty css              *//* empty css              *//* empty css              */var y=n({components:{PageWrapper:s,DynamicInfo:l,BannerInfo:m,NoticeInfo:f,ITWikiCard:c,ITContactCard:g,CommonDownCard:p,Card:o},setup(){const n=a(!0);return setTimeout((()=>{n.value=!1}),1500),{loading:n,dynamicInfoItems:u,bannerInfoItems:I,noticeInfoItems:j}}});const C={class:"lg:flex"},x={class:"lg:w-6/10 w-full !mr-4 enter-y"},w={class:"lg:w-4/10 w-full enter-y"},v={class:"lg:flex"},b={class:"lg:w-2/10 w-full !mr-4 enter-y"},D={class:"lg:w-8/10 w-full enter-y"},S=i("div",{class:"lg:flex mt-4"},[i("div",{class:"lg:w-10/10 w-full enter-y"})],-1);y.render=function(n,o,a,s,l,m){const f=e("BannerInfo"),c=e("NoticeInfo"),g=e("ITContactCard"),p=e("DynamicInfo"),u=e("CommonDownCard"),I=e("PageWrapper");return r(),t(I,null,{default:d((()=>[i("div",C,[i("div",x,[i(f,{dataSource:n.bannerInfoItems,height:"270",class:"!my-4 enter-y",loading:n.loading},null,8,["dataSource","loading"])]),i("div",w,[i(c,{dataSource:n.noticeInfoItems,loading:n.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])]),i("div",v,[i("div",b,[i(g,{loading:n.loading,class:"enter-y"},null,8,["loading"])]),i("div",D,[i(p,{dataSource:n.dynamicInfoItems,loading:n.loading,class:"enter-y"},null,8,["dataSource","loading"]),i(u,{loading:n.loading,class:"enter-y !mt-4"},null,8,["loading"])])]),S])),_:1})};export default y;