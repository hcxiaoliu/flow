import{_ as e}from"./useModal.47c80e94.js";import{_ as t,u as s}from"./useDescription.b62a4599.js";import{d as o}from"./index.ee676e78.js";import{getDescSchema as r}from"./data.dc1d4421.js";import{k as a,K as i,o as n,n as d,P as c,q as m,N as p}from"./vendor.d660e98f.js";import"./useWindowSizeFn.4f1b8c18.js";/* empty css              *//* empty css              */var l=a({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:e}=o(),[t]=s({column:2,schema:r()});return{register:t,useI18n:o,t:e}}});l.render=function(e,t,s,o,r,a){const l=i("Description"),f=i("BasicModal");return n(),d(f,p({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:c((()=>[m(l,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;