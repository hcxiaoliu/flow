import{k as t,b3 as a,r as e,D as o,K as d,o as r,n as i,Q as s,q as n}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              *//* empty css              */import{u as l}from"./useECharts.3ff3d432.js";import"./index.f72cd585.js";var m=t({components:{Card:a},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(t){const a=e(null),{setOptions:d}=l(a);return o((()=>t.loading),(()=>{t.loading||d({legend:{bottom:0,data:["访问","购买"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"电脑",max:100},{text:"充电器",max:100},{text:"耳机",max:100},{text:"手机",max:100},{text:"Ipad",max:100},{text:"耳机",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"访问",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"购买",itemStyle:{color:"#5ab1ef"}}]}]})}),{immediate:!0}),{chartRef:a}}});m.render=function(t,a,e,o,l,m){const p=d("Card");return r(),i(p,{title:"转化率",loading:t.loading},{default:s((()=>[n("div",{ref:"chartRef",style:{width:t.width,height:t.height}},null,4)])),_:1},8,["loading"])};export default m;