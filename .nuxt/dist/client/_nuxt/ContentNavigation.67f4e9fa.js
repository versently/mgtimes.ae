import{y as f,J as v,B as l,K as d,A as g,L as h,H as _,D as r}from"./entry.573f58c0.js";import{q as y,h as p,e as C,j as w,u as $}from"./query.de0fa6bf.js";import{_ as N}from"./nuxt-link.c2925d06.js";import{w as m,s as P,u as j,a as D}from"./utils.f4e05c49.js";const T=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=y(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${C(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./client-db.e6d3a951.js"),["./client-db.e6d3a951.js","./entry.573f58c0.js","./utils.f4e05c49.js","./query.de0fa6bf.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:w(a),previewToken:j("previewToken").value}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},A=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=g(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=D();return{navigation:n}}const{data:s}=await $(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(N,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}});export{A as default};