import{k as t,aI as n,bp as o,K as e,o as s,n as a,P as i,q as r}from"./vendor.d660e98f.js";import{j as c}from"./index.fe7e6ae2.js";var u=t({name:"ActionButtons",components:{Button:n,LeftOutlined:o},setup(t,{emit:n}){const o=c();return{doBack:function(){history.state.back?history.back():o("/process/launch")}}}});u.render=function(t,n,o,c,u,d){const f=e("LeftOutlined"),k=e("Button");return s(),a(k,{onClick:t.doBack,type:"link",title:"返回"},{icon:i((()=>[r(f)])),_:1},8,["onClick"])};export default u;