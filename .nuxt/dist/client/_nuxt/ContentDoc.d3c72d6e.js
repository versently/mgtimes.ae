import{f as h,E as g,g as a,G as C,y as w,B as D,H as _,I as v,D as r}from"./entry.573f58c0.js";import{u as x}from"./vue.f36acd1f.37653591.js";import H from"./ContentRenderer.b20c6c33.js";import S from"./ContentQuery.8af7e8db.js";import"./ContentRendererMarkdown.bbba50a1.js";import"./index.a6ef77ff.js";import"./query.de0fa6bf.js";import"./utils.f4e05c49.js";const y=(u,e=a())=>{const f=h(u),p=w();g(()=>h(u),(t=f)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const c=n.title||(t==null?void 0:t.title);c&&(n.title=c),p.public.content.host;const s=(n==null?void 0:n.description)||(t==null?void 0:t.description);s&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:s}),n!=null&&n.image||(t==null||t.image),C(()=>x(n))},{immediate:!0})},q=D({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=_(),{tag:f,excerpt:p,path:m,query:t,head:n}=u,c={...t||{},path:m||(t==null?void 0:t.path)||v(a().path),find:"one"},s=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(S,c,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&y(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:p,...this.$attrs})}:({data:i})=>(n&&y(i),r(H,{value:i,excerpt:p,tag:f,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):s("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),R=q;export{R as default};