var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{k as n,ad as i,b2 as d,A as c,c5 as u,a5 as p,f as m,H as f,K as v,o as g,n as b,Q as y,q as h,Y as x,s as O,V as j,ah as w}from"./vendor.56d2c57f.js";/* empty css              */import{_ as T}from"./PageWrapper.745b68b0.js";import{aO as P}from"./index.407e4786.js";import"./usePageContext.60e4e10d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";var k=n({components:{PageWrapper:T,[i.name]:i,InputTextArea:i.TextArea,Tag:d},setup(){const e=c({server:"ws://localhost:3380/test",sendValue:"",recordList:[]}),{status:n,data:i,send:d,close:v,open:g}=u(e.server,{autoReconnect:!0,heartbeat:!0});p((()=>{if(i.value)try{const a=JSON.parse(i.value);e.recordList.push(a)}catch(a){e.recordList.push({res:i.value,id:Math.ceil(1e3*Math.random()),time:(new Date).getTime()})}}));const b=m((()=>"OPEN"===n.value)),y=m((()=>b.value?"success":"red")),h=m((()=>[...e.recordList].reverse()));return x=((e,a)=>{for(var t in a||(a={}))r.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))l.call(a,t)&&o(e,t,a[t]);return e})({status:n,formatToDateTime:P},f(e)),a(x,t({handlerSend:function(){d(e.sendValue),e.sendValue=""},getList:h,toggle:function(){b.value?v():g()},getIsOpen:b,getTagColor:y}));var x}});const C={class:"flex"},I={class:"w-1/3 bg-white p-4"},L={class:"flex items-center"},V=h("span",{class:"text-lg font-medium mr-4"}," 连接状态: ",-1),_=h("hr",{class:"my-4"},null,-1),A={class:"flex"},S=x(" 服务地址 "),D=h("p",{class:"text-lg font-medium mt-4"},"设置",-1),W=h("hr",{class:"my-4"},null,-1),M=x(" 发送 "),E={class:"w-2/3 bg-white ml-4 p-4"},N=h("span",{class:"text-lg font-medium mr-4"}," 消息记录: ",-1),U=h("hr",{class:"my-4"},null,-1),q={class:"max-h-80 overflow-auto"},B={class:"flex items-center"},H=h("span",{class:"mr-2 text-primary font-medium"},"收到消息:",-1);k.render=function(e,a,t,s,r,l){const o=v("Tag"),n=v("a-input"),i=v("a-button"),d=v("InputTextArea"),c=v("PageWrapper");return g(),b(c,{title:"WebSocket 示例"},{default:y((()=>[h("div",C,[h("div",I,[h("div",L,[V,h(o,{color:e.getTagColor},{default:y((()=>[x(O(e.status),1)])),_:1},8,["color"])]),_,h("div",A,[h(n,{value:e.server,"onUpdate:value":a[1]||(a[1]=a=>e.server=a),disabled:""},{addonBefore:y((()=>[S])),_:1},8,["value"]),h(i,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle},{default:y((()=>[x(O(e.getIsOpen?"关闭连接":"开启连接"),1)])),_:1},8,["type","onClick"])]),D,W,h(d,{placeholder:"需要发送到服务器的内容",disabled:!e.getIsOpen,value:e.sendValue,"onUpdate:value":a[2]||(a[2]=a=>e.sendValue=a),allowClear:""},null,8,["disabled","value"]),h(i,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:y((()=>[M])),_:1},8,["disabled","onClick"])]),h("div",E,[N,U,h("div",q,[h("ul",null,[(g(!0),b(j,null,w(e.getList,(a=>(g(),b("li",{class:"mt-2",key:a.time},[h("div",B,[H,h("span",null,O(e.formatToDateTime(a.time)),1)]),h("div",null,O(a.res),1)])))),128))])])])])])),_:1})};export default k;
