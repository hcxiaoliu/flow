import{k as s,bm as a,K as t,o as e,n as l,P as n,q as o,S as r,ag as d,s as i,N as c,X as m}from"./vendor.59fe1062.js";/* empty css              *//* empty css              *//* empty css              */import{m as f}from"./index.21cfc268.js";import{g as p}from"./data.93390901.js";var u=s({components:{Card:a,CardGrid:a.Grid,Icon:f},setup:()=>({items:p})});const x=m("更多"),j={class:"flex"},y={class:"text-lg ml-4"},b={class:"flex mt-2 h-10 text-secondary"},g={class:"flex justify-between text-secondary"};u.render=function(s,a,m,f,p,u){const v=t("a-button"),C=t("Icon"),k=t("CardGrid"),w=t("Card");return e(),l(w,c({title:"项目"},s.$attrs),{extra:n((()=>[o(v,{type:"link",size:"small"},{default:n((()=>[x])),_:1})])),default:n((()=>[(e(!0),l(r,null,d(s.items,(s=>(e(),l(k,{key:s,class:"!md:w-1/3 !w-full"},{default:n((()=>[o("span",j,[o(C,{icon:s.icon,color:s.color,size:"30"},null,8,["icon","color"]),o("span",y,i(s.title),1)]),o("div",b,i(s.desc),1),o("div",g,[o("span",null,i(s.group),1),o("span",null,i(s.date),1)])])),_:2},1024)))),128))])),_:1},16)};export default u;