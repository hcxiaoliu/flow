var e=(e,t,n)=>new Promise(((r,s)=>{var l=e=>{try{a(n.next(e))}catch(t){s(t)}},o=e=>{try{a(n.throw(e))}catch(t){s(t)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(l,o);a((n=n.apply(e,t)).next())}));import{X as t}from"./index.1580ad70.js";import{k as n,r,u as s,o as l,n as o,w as a,v as c,q as u,R as i}from"./vendor.9d9efc92.js";import"./index.734d8392.js";import"./createAsyncComponent.ed3ddf1d.js";var d=n({name:"ImportExcel",emits:["success","error"],setup(n,{emit:l}){const o=r(null),a=r(!1);function c(e){if(!e||!e["!ref"])return[];const n=[],r=t.utils.decode_range(e["!ref"]),s=r.s.r;for(let l=r.s.c;l<=r.e.c;++l){const r=e[t.utils.encode_cell({c:l,r:s})];let o="UNKNOWN "+l;r&&r.t&&(o=t.utils.format_cell(r)),n.push(o)}return n}function u(n){return a.value=!0,new Promise(((r,s)=>{const o=new FileReader;o.onload=n=>e(this,null,(function*(){try{const e=n.target&&n.target.result,s=function(e){const n=[];for(const r of e.SheetNames){const s=e.Sheets[r],l=c(s),o=t.utils.sheet_to_json(s);n.push({header:l,results:o,meta:{sheetName:r}})}return n}(t.read(e,{type:"array"}));l("success",s),r("")}catch(e){s(e),l("error")}finally{a.value=!1}})),o.readAsArrayBuffer(n)}))}return{handleUpload:function(){const e=s(o);e&&e.click()},handleInputClick:function(t){const n=t&&t.target.files,r=n&&n[0];r&&function(t){e(this,null,(function*(){const e=s(o);e&&(e.value=""),yield u(t)}))}(r)},inputRef:o}}});d.render=function(e,t,n,r,s,d){return l(),o("div",null,[a(u("input",{ref:"inputRef",type:"file",accept:".xlsx, .xls",onChange:t[1]||(t[1]=(...t)=>e.handleInputClick&&e.handleInputClick(...t))},null,544),[[c,!1]]),u("div",{onClick:t[2]||(t[2]=(...t)=>e.handleUpload&&e.handleUpload(...t))},[i(e.$slots,"default")])])};export default d;
