(this["webpackJsonppokemon-app-frontend"]=this["webpackJsonppokemon-app-frontend"]||[]).push([[0],{55:function(e,t,a){},68:function(e,t){},74:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(9),r=a.n(s),i=(a(55),a(34)),o=a(14),l=a(11),d=a(42),j=a.n(d),p=a(115),b=a(118),h=a(120),m=a(82),x=a(121),u=a(127),O=a(122),g=a(128),N=a(124),f=a(125),v=a(126),y=a(123),C=(a(74),a(5)),k=Object(p.a)((function(e){return{main:{maxWidth:"100vw",height:"100vh",backgroundColor:e.palette.grey[200],paddingTop:e.spacing(5)},img:Object(l.a)({width:"80%"},e.breakpoints.up("xs"),{padding:"40px"}),imgContainer:{position:"relative",borderRadius:"50%",textAlign:"center"},textHeader:{marginBottom:e.spacing(4)},seperator:{borderTop:0,borderBottom:"10px solid #6EECB7",borderRadius:"5px",width:"60%"},search:{display:"flex"},searchInput:{flexGrow:1,width:"75%",marginRight:e.spacing(1)},CardContent:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:"100px",marginTop:"-140px"},root:{overflow:"visible"},label:{textTransform:"none"},content:Object(l.a)({},e.breakpoints.up("sm"),{paddingTop:e.spacing(.5)}),errorMessage:{paddingTop:e.spacing(4)}}})),I=function(){var e=k(),t=Object(n.useState)("Charizard"),a=Object(o.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(""),l=Object(o.a)(r,2),d=l[0],p=l[1],I=Object(n.useState)({}),T=Object(o.a)(I,2),w=T[0],S=T[1],P=function(e){return e.substr(0,1).toUpperCase()+e.substr(1)};return Object(C.jsxs)(n.Fragment,{children:[Object(C.jsx)(b.a,{}),Object(C.jsxs)("main",{className:e.main,children:[Object(C.jsx)("div",{children:Object(C.jsx)(h.a,{maxWidth:"sm",className:e.textHeader,children:Object(C.jsx)(m.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0,children:"FIND YOUR POKEMON!"})})}),Object(C.jsxs)(h.a,{children:[Object(C.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(){var e={};return e.search=c?"":"*Please Input an ID or Name",e.search=c.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)||null===e.search?"*Input cannot contain both Alphabets & Numbers":e.search,S(Object(i.a)({},e)),Object.values(e).every((function(e){return""===e}))}()&&j.a.post("/pokemonProd").send({search:isNaN(c)?c.toLowerCase():c}).set("Accept","application/json").then((function(e){return p(e.body)}))},autoComplete:"off",children:Object(C.jsxs)(x.a,{className:e.search,children:[Object(C.jsx)(u.a,Object(i.a)({variant:"outlined",className:e.searchInput,label:"Search Pokemon",placeholder:"Input Pokemon Id or Name",name:"pokemon",value:c,InputProps:{startAdornment:Object(C.jsx)(O.a,{position:"start",children:Object(C.jsx)(y.a,{})})},onChange:function(e){return s(e.target.value)}},w.search&&{error:!0,helperText:w.search})),Object(C.jsx)(g.a,{variant:"contained",type:"submit",size:"large",color:"primary",classes:{label:e.label},children:"Submit"})]})}),Object(C.jsx)(N.a,{container:!0,justify:"center",className:e.content,children:Object(C.jsx)(N.a,{item:!0,xs:10,sm:6,md:4,lg:4,children:d&&void 0===d.error?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:e.imgContainer,children:Object(C.jsx)("img",{src:d.sprite,alt:d.name,className:e.img})}),Object(C.jsx)(f.a,{classes:{root:e.root},children:Object(C.jsxs)(v.a,{className:e.CardContent,component:"div",children:[Object(C.jsx)(m.a,{variant:"h5",children:"".concat(P(d.name))}),Object(C.jsx)("hr",{className:e.seperator}),Object(C.jsxs)("div",{className:"stats",children:[Object(C.jsx)("span",{className:"first cp-text",children:"Max Hp ".concat(d.hp)}),Object(C.jsx)("span",{className:"cp-text",children:"Xp ".concat(d.xp)})]}),Object(C.jsxs)("div",{className:"attributes-container",children:[Object(C.jsxs)("div",{className:"col attributes-content",style:{minWidth:"42%"},children:[Object(C.jsx)("p",{className:"cp-text",children:d.types.map((function(e,t,a){var n=a.length;return t+1!==n&&n>1?"".concat(e,"/"):"".concat(e)}))}),Object(C.jsx)("small",{className:"text-muted",children:"Type"})]}),Object(C.jsxs)("div",{className:"col attributes-content",children:[Object(C.jsx)("p",{className:"cp-text",children:"".concat(d.weight,"kg")}),Object(C.jsx)("small",{className:"text-muted",children:"Weight"})]}),Object(C.jsxs)("div",{className:"col attributes-content",children:[Object(C.jsx)("p",{className:"cp-text no-border",style:{borderRight:0},children:"".concat(d.height/10,"m")}),Object(C.jsx)("small",{className:"text-muted",children:"Height"})]})]}),Object(C.jsx)("div",{className:"player-data",children:Object(C.jsxs)("div",{className:"col data-container",children:[Object(C.jsx)("p",{className:"stardust",children:d.abilities.map((function(e,t,a){var n=a.length;return t+1!==n&&n>1?"".concat(P(e),", "):"".concat(P(e))}))}),Object(C.jsx)("p",{className:"muted-text",children:"Abilities"})]})})]})})]}):Object(C.jsx)(m.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0,className:e.errorMessage,children:d.error})})})]})]})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,130)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(I,{})}),document.getElementById("root")),T()}},[[81,1,2]]]);
//# sourceMappingURL=main.9fcc98aa.chunk.js.map