import{g as u,b as f,a as x,j as s,L as y}from"./index-43daa01b.js";import{a as h}from"./camera-e2de6a79.js";const g="_container_bx1we_1",b="_link_bx1we_16",T="_info_bx1we_27",j="_title_bx1we_31",v="_tag_bx1we_37",N="_footer_bx1we_49",R="_footdate_bx1we_55",w="_image_bx1we_66",r={container:g,link:b,info:T,title:j,tag:v,footer:N,footdate:R,image:w};var p={exports:{}},P="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",S=P,k=S;function l(){}function m(){}m.resetWarningCache=l;var O=function(){function e(n,t,c,A,C,_){if(_!==k){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}e.isRequired=e;function o(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:m,resetWarningCache:l};return a.PropTypes=a,a};p.exports=O();var E=p.exports;const I=u(E),d=f.memo(({articles:e})=>{const a=[...x(t=>t.articles.articles)].slice(2,40),n=["ReadWrite","Google News"];return a.map(t=>{const c=encodeURIComponent(t.url);return s.jsx(y,{to:`/news/detail/${c}`,className:r.link,children:s.jsxs("div",{className:r.container,children:[s.jsxs("div",{className:r.info,children:[s.jsx("span",{className:r.tag,children:t.source.name}),s.jsx("p",{className:r.title,children:t.title}),s.jsxs("p",{className:r.footer,children:[s.jsx("span",{children:s.jsx("i",{className:"bx bxs-news"})})," ",t.author,s.jsx("span",{className:r.footdate,children:t.publishedAt.substring(0,10)})]})]}),s.jsx("div",{className:r.image,children:s.jsx("img",{src:n.includes(t.source.name)?h:t.urlToImage,alt:"avatar"})})]})},t.url)})});d.displayName="Article";d.propTypes={articles:I.array.isRequired};export{d as default};
