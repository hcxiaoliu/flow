import{k as t,bm as e,bs as s,K as a,o as i,n as o,P as d,q as r,s as n,N as m,X as l}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{m as c}from"./index.dd44fc8e.js";var f=t({props:{dataSource:Array},components:{Card:e,List:s,ListItem:s.Item,ListItemMeta:s.Item.Meta,Icon:c},setup:t=>({items:t.dataSource})});const p=l("更多"),u={class:""},x={class:"content"};f.render=function(t,e,s,l,c,f){const I=a("a-button"),j=a("ListItem"),b=a("List"),y=a("Card");return i(),o(y,m({title:"通知公告"},t.$attrs,{bodyStyle:"padding-top:0;"}),{extra:d((()=>[r(I,{type:"link",size:"small"},{default:d((()=>[p])),_:1})])),default:d((()=>[r(b,{"item-layout":"horizontal","data-source":t.items},{renderItem:d((({item:t})=>[r(j,{class:"custom-list-item"},{actions:d((()=>[r("span",u,n(t.date),1)])),default:d((()=>[r("div",x,[r("a",{href:"/",title:t.title},n(t.title),9,["title"])])])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)};export default f;