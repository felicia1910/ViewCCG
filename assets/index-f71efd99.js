import{d as V,u as z,h as $,r as n,l as v,k as s,D as E,o as F,e as h,g as t,t as l,m as i,c as w,n as a,a as N,F as x,v as f,b as d}from"./index-4405b5ba.js";import{_ as M}from"./index.vue_vue_type_script_setup_true_lang-0fef365a.js";import{_ as K}from"./index.vue_vue_type_script_setup_true_lang-5a95ef0c.js";import{_ as U}from"./group.vue_vue_type_script_setup_true_lang-d6310068.js";const j={class:"label-input"},q={key:0},A={class:"table-footer"},G={class:"horizon"},H={class:"title"},J=t("div",{class:"value"},"100",-1),L={class:"horizon"},O={class:"title"},Q=t("div",{class:"value"},"100",-1),W={class:"horizon"},X={class:"title"},Y=t("div",{class:"value"},"100",-1),ne=V({__name:"index",setup(Z){const R=z(),{t:o}=$(),p=n({start:"",end:""}),g=v(null),C=[],b=n({gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr"}),m=n({each:10,total:2}),y=n({id:"0",tableTemp:[{id:123,Shopname:{tc:"中文1",en:"Eng"},Inventory:"2023/10/10",Reserve:"13:00:00",Customercollectionstatus:"077777777",Product:"Product"},{id:456,Shopname:{tc:"中文2",en:"Eng"},Inventory:"2023/10/10",Reserve:"13:00:00",Customercollectionstatus:"077777777",Product:"Product"}]}),u=v(0),D=s(()=>[{name:o("RedemptionReport.page.daily"),icon:"fa-clipboard-list",act:!0}]),T=s(()=>[{name:o("RedemptionReport.field.MemberID"),type:1},{name:o("RedemptionReport.field.TransactionID"),type:1},{name:o("RedemptionReport.field.Redemptionstatus"),type:1},{name:o("RedemptionReport.field.Collectionstatus"),type:1},{name:o("RedemptionReport.field.Product"),type:1}]),r=s(()=>y.tableTemp.map(e=>({value:e,icon:null,css:"",data:{Shopname:e.Shopname,Inventory:e.Inventory,Reserve:e.Reserve,Customercollectionstatus:e.Customercollectionstatus,Product:e.Product}}))),c=s(()=>({Transaction:o("RedemptionReport.field.TransactionID"),Redemption:o("RedemptionReport.field.Redemptionstatus"),Collection:o("RedemptionReport.field.Collectionstatus")}));E(()=>R.language,()=>{u.value+=1});const P=e=>{},I=e=>{console.log("change page:",e)};return F(()=>{}),(e,_)=>{const k=f("el-date-picker"),B=f("el-pagination");return d(),h(x,null,[t("div",j,[t("label",null,l(e.$t("RedemptionReport.field.Date")),1),i(k,{class:"normel-input",modelValue:p.end,"onUpdate:modelValue":_[0]||(_[0]=S=>p.end=S),type:"daterange","start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date,new Date]},null,8,["modelValue","default-value"])]),i(U,{items:C,value:g.value,label:e.$t("RedemptionReport.field.Filter"),onChange:P},null,8,["value","label"]),(d(),w(M,{items:a(D),key:u.value},null,8,["items"])),a(r).length!=0?(d(),h("section",q,[i(K,{total:m.total,tableData:a(r),tableTitle:a(T),PCgridTemplateColumns:b},null,8,["total","tableData","tableTitle","PCgridTemplateColumns"]),t("div",A,[t("div",G,[t("div",H,l(a(c).Transaction)+": ",1),J]),t("div",L,[t("div",O,l(a(c).Redemption)+": ",1),Q]),t("div",W,[t("div",X,l(a(c).Collection)+": ",1),Y])]),i(B,{"page-size":m.each,layout:"prev, pager, next",total:a(r).length,onCurrentChange:I},null,8,["page-size","total"])])):N("",!0)],64)}}});export{ne as default};
