import{_ as e}from"./useModal.e0e169dd.js";import{_ as t,u as s}from"./useDescription.dcfb2478.js";import{d as o}from"./index.bfefd9f4.js";import{getDescSchema as r}from"./data.6eb05105.js";import{k as a,K as i,o as n,n as d,P as f,q as c,N as m}from"./vendor.0482ef83.js";import"./useWindowSizeFn.3a3072fc.js";/* empty css              *//* empty css              */var p=a({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:e}=o(),[t]=s({column:2,schema:r()});return{register:t,useI18n:o,t:e}}});p.render=function(e,t,s,o,r,a){const p=i("Description"),l=i("BasicModal");return n(),d(l,m({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:f((()=>[c(p,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default p;