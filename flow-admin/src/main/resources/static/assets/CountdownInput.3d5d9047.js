import{A as t,B as n,a5 as e,f as a,a2 as u,b0 as o,r as s,u as r,_ as l,k as i,aJ as c,K as d,o as v,n as f,N as p,Q as m,Y as C,s as S,ad as b,q as h}from"./vendor.56d2c57f.js";import{p as x,d as y,i as g,c as w}from"./index.407e4786.js";function z(s,r="value",l="change"){const i=u(),c=null==i?void 0:i.emit,d=t({value:s[r]}),v=n(d);e((()=>{d.value=s[r]}));return[a({get:()=>d.value,set(t){o(t,v.value)||(d.value=t,null==c||c(l,t))}}),t=>{d.value=t},v]}var A=i({name:"CountButton",components:{Button:c},props:{value:x.any,count:x.number.def(60),beforeStartFunc:{type:Function,default:null}},setup(t){const n=s(!1),{currentCount:a,isStart:u,start:o,reset:i}=function(t){const n=s(t),e=s(!1);let a;function u(){a&&window.clearInterval(a)}function o(){e.value=!1,u(),a=null}function i(){r(e)||a||(e.value=!0,a=setInterval((()=>{1===r(n)?(o(),n.value=t):n.value-=1}),1e3))}function c(){n.value=t,o()}return l((()=>{c()})),{start:i,reset:c,restart:function(){c(),i()},clear:u,stop:o,currentCount:n,isStart:e}}(t.count),{t:c}=y();return e((()=>{void 0===t.value&&i()})),{handleStart:function(){return e=this,a=null,u=function*(){const{beforeStartFunc:e}=t;if(e&&g(e)){n.value=!0;try{(yield e())&&o()}finally{n.value=!1}}else o()},new Promise(((t,n)=>{var o=t=>{try{r(u.next(t))}catch(e){n(e)}},s=t=>{try{r(u.throw(t))}catch(e){n(e)}},r=n=>n.done?t(n.value):Promise.resolve(n.value).then(o,s);r((u=u.apply(e,a)).next())}));var e,a,u},isStart:u,currentCount:a,loading:n,t:c}}});A.render=function(t,n,e,a,u,o){const s=d("Button");return v(),f(s,p(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:m((()=>[C(S(t.isStart?t.t("component.countdown.sendText",[t.currentCount]):t.t("component.countdown.normalText")),1)])),_:1},16,["disabled","onClick","loading"])};var B=i({name:"CountDownInput",components:{[b.name]:b,CountButton:A},inheritAttrs:!1,props:{value:x.string,size:x.oneOf(["default","large","small"]),count:x.number.def(60),sendCodeApi:{type:Function,default:null}},setup(t){const{prefixCls:n}=w("countdown-input"),[e]=z(t);return{prefixCls:n,state:e}}});B.render=function(t,n,e,a,u,o){const s=d("CountButton"),r=d("AInput");return v(),f(r,p(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),{addonAfter:m((()=>[h(s,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])])),_:1},16,["class","size","value"])};export{B as _,z as u};
