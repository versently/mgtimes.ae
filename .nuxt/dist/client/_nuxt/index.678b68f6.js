import{_ as f}from"./nuxt-img.7b8bb400.js";import g from"./ContentList.a37db8ac.js";import{u as z,c,a as o,f as n,t as s,d as b,b as _,w as l,o as m,F as M,r as v}from"./entry.573f58c0.js";import{u as y}from"./composables.8516a2da.js";import{u as k}from"./vue.f36acd1f.37653591.js";import"./ContentQuery.8af7e8db.js";import"./query.de0fa6bf.js";import"./utils.f4e05c49.js";function p(r){r.__i18n=r.__i18n||[],r.__i18n.push({locale:"",resource:{en:{title:t=>{const{normalize:e,plural:a}=t;return a([e(["Articles about escorts"]),e(["Media content Mgtimes Dubai"])])},description:t=>{const{normalize:e}=t;return e(["Escort news. The best articles about escorts on the site mgtimes.ae. Media content on the subject of escort. Escort blog."])},"Home page":t=>{const{normalize:e}=t;return e(["Home page"])},Media:t=>{const{normalize:e}=t;return e(["Media"])},"More information":t=>{const{normalize:e}=t;return e(["More information"])}},ru:{title:t=>{const{normalize:e,plural:a}=t;return a([e(["Статьи об эскорте"]),e(["Медиаконтент Mgtimes Дубай"])])},description:t=>{const{normalize:e}=t;return e(["Эскорт новости. Лучшие статьи об эскорте на сайте mgtimes.ae. Медийный контент на тему сопровождения. Эскорт блог."])},"Home page":t=>{const{normalize:e}=t;return e(["Главная"])},Media:t=>{const{normalize:e}=t;return e(["Медиа"])},"More information":t=>{const{normalize:e}=t;return e(["Узнать подробнее"])}}}})}const x={class:"media"},L={class:"media__container"},w={class:"casting__way-block bread-crumblist",itemscope:"",itemtype:"https://schema.org/BreadcrumbList"},E={itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},H=["href"],I={itemprop:"name"},$=o("meta",{itemprop:"position",content:"1"},null,-1),B={itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},N={itemprop:"item"},V={itemprop:"name"},q=o("meta",{itemprop:"position",content:"2"},null,-1),D={class:"media__title"},F={class:"media__content"},P={class:"media__content-block-info"},S={class:"media__content-block-subtitle"},T={class:"media__content-block-text"},j=["href"],A=o("p",null,"No media found.",-1),C={__name:"index",setup(r){const{t}=z({useScope:"local"}),e=y();return k({title:t("title"),meta:[{name:"description",content:t("description")}]}),(a,G)=>{const d=f,u=g;return m(),c("main",null,[o("div",x,[o("div",L,[o("div",w,[o("li",E,[o("a",{itemprop:"item",href:n(e)("index")},[o("span",I,s(n(t)("Home page")),1),$],8,H)]),b(" / "),o("li",B,[o("div",N,[o("span",V,s(n(t)("Media")),1),q])])]),o("div",D,[o("h1",null,s(n(t)("Media")),1)]),_(u,{path:n(e)("/media"),query:{only:["title","description","tags","_path","mainImage","folder"],sort:[{date:-1}],where:{tags:{$contains:a.filter}},$sensitivity:"base"}},{default:l(({list:h})=>[o("div",F,[(m(!0),c(M,null,v(h,i=>(m(),c("div",{class:"media__content-block odd",key:i._path},[_(d,{src:`/assets/img/media/${i.folder}/${i.mainImage}`,alt:i.title},null,8,["src","alt"]),o("div",P,[o("div",S,s(i.title),1),o("div",T,s(i.description),1),o("a",{class:"media__content-block-more",href:n(e)(i._path)},s(n(t)("More information")),9,j)])]))),128))])]),"not-found":l(()=>[A]),_:1},8,["path","query"])])])])}}};typeof p=="function"&&p(C);export{C as default};