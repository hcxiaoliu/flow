import{c as e}from"./index.f8d8fadd.js";import{b as r}from"./index.bab99e25.js";import{k as s,bN as t,K as i,o as n,n as o,V as a,ah as c,q as p}from"./vendor.bc3b2d68.js";import"./useDrawer.6025cc72.js";/* empty css              *//* empty css              */import"./createAsyncComponent.dc75f7c3.js";import"./useFrameKeepAlive.ba06b3f5.js";var l=s({name:"ThemeColorPicker",components:{CheckOutlined:t},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:t}=e("setting-theme-picker");return{prefixCls:t,handleClick:function(e){s.event&&r(s.event,e)}}}});l.render=function(e,r,s,t,l,d){const f=i("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(a,null,c(e.colorList||[],(r=>(n(),o("span",{key:r,onClick:s=>e.handleClick(r),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===r}],style:{background:r}},[p(f)],14,["onClick"])))),128))],2)};export default l;