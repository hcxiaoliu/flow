import{k as t,b3 as e,br as a,K as s,o as i,n as r,Q as n,q as o,Y as d,s as m,N as l}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as c}from"./data.8ddc77c3.js";import{h as u}from"./header.d801b988.js";import{j as p}from"./index.407e4786.js";var f=t({components:{Card:e,List:a,ListItem:a.Item,ListItemMeta:a.Item.Meta,Icon:p},setup:()=>({items:c,headerImg:u})});const I=d("更多");f.render=function(t,e,a,c,u,p){const f=s("a-button"),j=s("Icon"),b=s("ListItemMeta"),L=s("ListItem"),x=s("List"),M=s("Card");return i(),r(M,l({title:"最新动态"},t.$attrs),{extra:n((()=>[o(f,{type:"link",size:"small"},{default:n((()=>[I])),_:1})])),default:n((()=>[o(x,{"item-layout":"horizontal","data-source":t.items},{renderItem:n((({item:t})=>[o(L,null,{default:n((()=>[o(b,null,{description:n((()=>[d(m(t.date),1)])),title:n((()=>[d(m(t.name)+" ",1),o("span",{innerHTML:t.desc},null,8,["innerHTML"])])),avatar:n((()=>[o(j,{icon:t.avatar,size:30},null,8,["icon"])])),_:2},1024)])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)};export default f;
