(this["webpackJsonpreact-code"]=this["webpackJsonpreact-code"]||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),c=n.n(r),o=n(12),i=n.n(o);n(121),n.p,n(122);var s=n(23),l=n(187),j=n(153),b=n(45),d=n(2),p=n(99),m=n(6),u=n(103),h=n(185),x={overrides:{h1:{component:u.a,props:{gutterBottom:!0,variant:"h5"}},h2:{component:u.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:u.a,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:u.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0,color:"secondary"}},p:{component:u.a,props:{paragraph:!0}},a:{component:h.a,props:{color:"secondary"}},li:{component:Object(m.a)((function(e){return{listItem:{marginTop:e.spacing(1)}}}))((function(e){var t=e.classes,n=Object(d.a)(e,["classes"]);return Object(a.jsx)("li",{className:t.listItem,children:Object(a.jsx)(u.a,Object(b.a)({component:"span"},n))})}))}}};function O(e){return Object(a.jsx)(p.a,Object(b.a)({options:x},e))}var g=n.p+"static/media/motd.cb560fb7.md",f=n(186),v=Object(f.a)((function(e){return{root:{flexGrow:1},markdown:{padding:e.spacing(2)}}}));var y=[{path:"/",private:!1,component:function(){var e=v(),t=Object(r.useState)("loading..."),n=Object(s.a)(t,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){fetch(g).then((function(e){return e.text()})).then((function(e){return o(e)})).catch((function(e){return console.error(e)}))})),Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(l.a,{container:!0,spacing:3,children:Object(a.jsx)(l.a,{item:!0,xs:12,children:Object(a.jsx)(j.a,{children:Object(a.jsx)(O,{className:e.markdown,children:c})})})})})}}],w=n(50),F=n(13),T=n(10),C=n(190),N=n(191),k=n(101),S=n.n(k),I=n(198),B=n(192),P=S()((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(T.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"})}})),W=function(e){e.route;var t=P(),n=c.a.useState(0),r=Object(s.a)(n,2),o=r[0],i=r[1];return Object(a.jsx)("nav",{className:"breadcrumbs",children:Object(a.jsxs)(C.a,{position:"static",children:[Object(a.jsx)(N.a,{children:Object(a.jsx)(u.a,{className:t.title,variant:"h6",noWrap:!0,children:"TheraArt-2020"})}),Object(a.jsxs)(I.a,{value:o,onChange:function(e,t){i(t)},"aria-label":"simple tabs example",children:[Object(a.jsx)(B.a,{label:"Item One"}),Object(a.jsx)(B.a,{label:"Item Two"}),Object(a.jsx)(B.a,{label:"Item Three"})]})]})})},D=n(200),A=n(193),E=Object(f.a)((function(e){return{container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},content:{flexGrow:1,height:"100vh",overflow:"auto",background:e.palette.background.default}}}));function G(){return Object(a.jsxs)(u.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(h.a,{color:"inherit",href:"/",children:"TheraArt"})," ",(new Date).getFullYear(),"."]})}var q=function(e){var t=e.route,n=t.component,r=Object(F.g)(),c=E();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(W,{route:t}),Object(a.jsx)("main",{className:c.content,children:Object(a.jsxs)(A.a,{maxWidth:"xl",className:c.container,children:[Object(a.jsx)(n,{params:r}),Object(a.jsx)(D.a,{pt:4,children:Object(a.jsx)(G,{})})]})})]})},J=n(189),L=n(102),R=Object(L.a)({palette:{primary:{main:"#212121",contrastText:"#fff"},secondary:{main:"#f44336"},background:{default:"#F5F5F6"}},typography:{button:{fontSize:18,textTransform:"none"}}}),Y=Object(r.createContext)();var z=function(e){var t=e.children,n=e.isPrivate,c=Object(d.a)(e,["children","isPrivate"]);return Object(r.useContext)(Y)&&n?Object(a.jsx)(F.a,{to:"/login"}):Object(a.jsx)(F.b,Object(b.a)(Object(b.a)({exact:!0},c),{},{children:t}))},M=n(196),U=n(194),V=n(197),H=n(195),K=n(199);function Q(){return Object(a.jsxs)(u.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(h.a,{color:"inherit",href:"/",children:"AppName"})," ",(new Date).getFullYear(),"."]})}var X=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Z(){var e=X();return console.log("rendering"),Object(a.jsxs)(A.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(U.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(u.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(a.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(a.jsx)(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(a.jsx)(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(a.jsx)(H.a,{control:Object(a.jsx)(K.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(a.jsx)(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(a.jsxs)(l.a,{container:!0,children:[Object(a.jsx)(l.a,{item:!0,xs:!0,children:Object(a.jsx)(h.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(a.jsx)(l.a,{item:!0,children:Object(a.jsx)(h.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(a.jsx)(D.a,{mt:8,children:Object(a.jsx)(Q,{})})]})}function $(){return Object(a.jsx)(Y.Provider,{value:!1,children:Object(a.jsx)(J.a,{theme:R,children:Object(a.jsx)(w.a,{basename:"",children:Object(a.jsxs)(F.d,{children:[y.map((function(e){return Object(a.jsx)(z,{path:e.path,isPrivate:e.private,children:Object(a.jsx)(q,{route:e})},e.path)})),Object(a.jsx)(F.b,{exact:!0,path:"/login",component:Z})]})})})})}var _=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,201)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)($,{})}),document.getElementById("root")),_()}},[[149,1,2]]]);
//# sourceMappingURL=main.748218d2.chunk.js.map