import{_ as M}from"./SearchBox.vue_vue_type_script_setup_true_lang-a6a08cb4.js";import{_ as P}from"./index.vue_vue_type_script_setup_true_lang-5a95ef0c.js";import{d as C,h as D,r as n,k as s,o as N,e as c,m as o,n as r,a as v,v as T,b as p}from"./index-4405b5ba.js";const E={key:0},S=C({__name:"index",props:{closeTable:{type:Boolean},value:null},emits:["click","search"],setup(l,{emit:m}){const d=l,{t}=D(),b=n({gridTemplateColumns:"1fr 1fr 1fr 1fr 110px 80px 140px 100px"}),u=n({id:"0",tableTemp:[{id:123,memberName:{tc:"中文1",en:"Eng"},memberID:"999999",Email:"777777",phoneNo:"077777777",birth:"3",gender:"GenderGenderGenderGenderGenderGender",status:"Status",point:2e3},{id:456,memberName:{tc:"中文2",en:"Eng2"},memberID:"999999",Email:"777777",phoneNo:"077777777",birth:"2",gender:"Gender",status:"Status",point:7e3}]}),a=n({each:10,total:2}),f=s(()=>[{name:t("MemberProfile.field.MemberName"),type:1},{name:t("MemberProfile.field.MemberID"),type:1},{name:t("MemberProfile.field.PhoneNo"),type:1},{name:t("MemberProfile.field.Email"),type:1},{name:t("MemberProfile.field.Dob"),type:1},{name:t("MemberProfile.field.Gender"),type:1},{name:t("MemberProfile.field.Status"),type:1},{name:t("button.edit"),type:2}]),i=s(()=>u.tableTemp.map(e=>({value:e,icon:"fa-edit",data:{Membername:e.memberName,memberID:e.memberID,PhoneNo:e.phoneNo,Email:e.Email,DateofBirth:e.birth,Gender:e.gender,Status:e.status,Edit:"fa-edit"}}))),h=e=>{console.log("getSearch:",e),m("search")},g=e=>{m("click",e)},_=()=>{};return N(()=>{}),(e,G)=>{const y=T("el-pagination");return p(),c("div",null,[o(M,{onSearch:h,needDrop:!0,value:d.value},null,8,["value"]),r(i).length!=0&&!l.closeTable?(p(),c("section",E,[o(P,{total:a.total,tableData:r(i),tableTitle:r(f),PCgridTemplateColumns:b,onClick:g},null,8,["total","tableData","tableTitle","PCgridTemplateColumns"]),o(y,{"page-size":a.each,layout:"prev, pager, next",total:a.total,onCurrentChange:_},null,8,["page-size","total"])])):v("",!0)])}}});export{S as _};
