(this["webpackJsonpreact-code"]=this["webpackJsonpreact-code"]||[]).push([[0],{132:function(e,t,a){},136:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),c=a.n(r),i=a(11),s=a.n(i),o=(a(132),a(14)),l=a(206),d=a(116),j=a(37),p=a(3),h=a(110),b=a(6),u=a(49),m=a(204),x={overrides:{h1:{component:u.a,props:{gutterBottom:!0,variant:"h5",align:"center"}},h2:{component:u.a,props:{gutterBottom:!0,variant:"h6",align:"center"}},h3:{component:u.a,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:u.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0,color:"secondary",align:"center"}},p:{component:u.a,props:{paragraph:!0,align:"center"}},a:{component:m.a,props:{color:"secondary"}},li:{component:Object(b.a)((function(e){return{listItem:{marginTop:e.spacing(1)}}}))((function(e){var t=e.classes,a=Object(p.a)(e,["classes"]);return Object(n.jsx)("li",{className:t.listItem,children:Object(n.jsx)(u.a,Object(j.a)({component:"span"},a))})}))}}};function O(e){return Object(n.jsx)(h.a,Object(j.a)({options:x},e))}var g=a.p+"static/media/motd.0abb9fe5.md",f=a(205),v=Object(f.a)((function(e){return{root:{flexGrow:1},markdown:{padding:e.spacing(2)}}}));var y=a(10),w=a(5),N=a(207),k=a(208),S=a(210),C=a(211),F=a(212),T=a(213),A=a(226),L=a(209),B=a(78),D=Object(f.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:B.a[500]}}}));function z(e){var t=D(),a=c.a.useState(!1),r=Object(o.a)(a,2),i=r[0],s=r[1];return Object(n.jsxs)(N.a,{className:t.root,children:[Object(n.jsx)(k.a,{avatar:Object(n.jsx)(A.a,{"aria-label":"recipe",className:t.avatar,children:e.therapist.name.substring(0,2)}),action:Object(n.jsx)(L.a,{"aria-label":"settings"}),title:e.therapist.name,subheader:Object(n.jsxs)(u.a,{variant:"body2",component:"p",children:["Rating: ",e.therapist.rating,"/5.",Object(n.jsx)("br",{}),"Address: "+e.therapist.address]})}),Object(n.jsx)(S.a,{className:t.media,image:e.therapist.image,title:e.therapist.name}),Object(n.jsx)(C.a,{children:Object(n.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",children:e.therapist.description})}),Object(n.jsxs)(F.a,{disableSpacing:!0,children:[Object(n.jsx)(L.a,{"aria-label":"add to favorites"}),Object(n.jsx)(L.a,{"aria-label":"share"}),Object(n.jsx)(L.a,{className:Object(w.a)(t.expand,Object(y.a)({},t.expandOpen,i)),onClick:function(){s(!i)},"aria-expanded":i,"aria-label":"show more"})]}),Object(n.jsx)(T.a,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(n.jsxs)(C.a,{children:[Object(n.jsx)(u.a,{paragraph:!0,children:"Method:"}),Object(n.jsx)(u.a,{paragraph:!0,children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."}),Object(n.jsx)(u.a,{paragraph:!0,children:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."}),Object(n.jsx)(u.a,{paragraph:!0,children:"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"}),Object(n.jsx)(u.a,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})})]})}function I(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){fetch("/therapist/all").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),Object(n.jsx)("div",{className:"TherapistList",children:a.map((function(e){return Object(n.jsx)(z,{therapist:e})}))})}var P=a(115),W=(a(136),a(137),a(138),a(162),Object(f.a)((function(e){return{avatar:{backgroundColor:B.a[500],marginLeft:-20,margintop:-20}}}))),E=function(e){var t=e.text,a=e.name,r=W();return Object(n.jsxs)("div",{className:"pin",children:[Object(n.jsx)(A.a,{"aria-label":"recipe",className:r.avatar,children:a.substring(0,2)}),Object(n.jsx)("p",{className:"pin-text",children:t})]})};function R(e){var t=e.location,a=e.zoomLevel,c=Object(r.useState)([]),i=Object(o.a)(c,2),s=i[0],l=i[1];return Object(r.useEffect)((function(){fetch("/therapist/all").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),Object(n.jsxs)("div",{className:"map",children:[Object(n.jsx)("h2",{className:"map-h2",children:"Therapists near you"}),Object(n.jsx)("div",{className:"google-map",children:Object(n.jsx)(P.a,{bootstrapURLKeys:{key:"AIzaSyDzfyVMpZz-VjaueHWDQ2vFs3LPf7Fs5hs"},defaultCenter:t,defaultZoom:a,children:s.map((function(e){return Object(n.jsx)(E,{lat:parseFloat(e.lat),lng:parseFloat(e.lon),text:e.address,name:e.name})}))})})]})}var H=Object(f.a)((function(e){return{grid:{width:"100%",margin:"0px"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,bacground:e.palette.success.light,maxHeight:850,overflow:"auto"}}})),q={address:"1 E Jackson Blvd, Chicago, IL 60605",lat:41.8770902,lng:-87.6310575};function G(){var e=H();return Object(n.jsxs)(l.a,{container:!0,spacing:2,className:e.grid,children:[Object(n.jsx)(l.a,{item:!0,xs:6,md:3,children:Object(n.jsx)(d.a,{className:e.paper,children:Object(n.jsx)(I,{})})}),Object(n.jsx)(l.a,{item:!0,xs:6,md:9,children:Object(n.jsx)(d.a,{className:e.paper,children:Object(n.jsx)(R,{location:q,zoomLevel:10})})})]})}var J=[{path:"/therapists",private:!1,name:"Therapists",component:G},{path:"/about",private:!1,name:"About",component:function(){var e=v(),t=Object(r.useState)("loading..."),a=Object(o.a)(t,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){fetch(g).then((function(e){return e.text()})).then((function(e){return i(e)})).catch((function(e){return console.error(e)}))})),Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(l.a,{container:!0,spacing:3,children:Object(n.jsx)(l.a,{item:!0,xs:12,children:Object(n.jsx)(d.a,{children:Object(n.jsx)(O,{className:e.markdown,children:c})})})})})}},{path:"/",private:!1,component:G}],M=a(54),V=a(13),U=a(217),Y=a(218),Z=a(113),K=a.n(Z),Q=a(224),X=a(216),$=K()((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(y.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),tabs:{marginLeft:"30%"}}}));var _=function(e){e.route;var t=$(),a=Object(V.g)(),r=c.a.useState(a.location.pathname),i=Object(o.a)(r,2),s=i[0],l=i[1];return Object(n.jsx)("nav",{className:"breadcrumbs",children:Object(n.jsx)(U.a,{position:"static",children:Object(n.jsxs)(Y.a,{className:t.grow,children:[Object(n.jsx)(u.a,{className:t.title,variant:"h6",noWrap:!0,children:"TheraArt-2020"}),Object(n.jsx)(Q.a,{value:s,onChange:function(e,t){e.preventDefault(),l(t),a.push(t)},"aria-label":"simple tabs example",centered:!0,className:t.tabs,children:J.map((function(e,t){return"undefined"!==typeof e.name?Object(n.jsx)(X.a,{label:e.name,value:e.path}):null}))})]})})})},ee=a(227),te=a(219),ae=Object(f.a)((function(e){return{container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},content:{flexGrow:1,height:"100vh",overflow:"auto",background:e.palette.background.default}}}));function ne(){return Object(n.jsxs)(u.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(m.a,{color:"inherit",href:"/",children:"TheraArt"})," ",(new Date).getFullYear(),"."]})}var re=function(e){var t=e.route,a=t.component,r=Object(V.h)(),c=ae();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(_,{route:t}),Object(n.jsx)("main",{className:c.content,children:Object(n.jsxs)(te.a,{maxWidth:"xl",className:c.container,children:[Object(n.jsx)(a,{params:r}),Object(n.jsx)(ee.a,{pt:4,children:Object(n.jsx)(ne,{})})]})})]})},ce=a(215),ie=a(114),se=Object(ie.a)({palette:{primary:{main:"#212121",contrastText:"#fff"},secondary:{main:"#f44336"},background:{default:"#F5F5F6"}},typography:{button:{fontSize:18,textTransform:"none"}}}),oe=Object(r.createContext)();var le=function(e){var t=e.children,a=e.isPrivate,c=Object(p.a)(e,["children","isPrivate"]);return Object(r.useContext)(oe)&&a?Object(n.jsx)(V.a,{to:"/login"}):Object(n.jsx)(V.b,Object(j.a)(Object(j.a)({exact:!0},c),{},{children:t}))},de=a(222),je=a(220),pe=a(223),he=a(221),be=a(225);function ue(){return Object(n.jsxs)(u.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(m.a,{color:"inherit",href:"/",children:"AppName"})," ",(new Date).getFullYear(),"."]})}var me=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function xe(){var e=me();return console.log("rendering"),Object(n.jsxs)(te.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(je.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(u.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(n.jsx)(pe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(n.jsx)(pe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(n.jsx)(he.a,{control:Object(n.jsx)(be.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(n.jsx)(de.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(n.jsxs)(l.a,{container:!0,children:[Object(n.jsx)(l.a,{item:!0,xs:!0,children:Object(n.jsx)(m.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(n.jsx)(l.a,{item:!0,children:Object(n.jsx)(m.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(n.jsx)(ee.a,{mt:8,children:Object(n.jsx)(ue,{})})]})}function Oe(){return Object(n.jsx)(oe.Provider,{value:!1,children:Object(n.jsx)(ce.a,{theme:se,children:Object(n.jsx)(M.a,{basename:"",children:Object(n.jsxs)(V.d,{children:[J.map((function(e){return Object(n.jsx)(le,{path:e.path,isPrivate:e.private,children:Object(n.jsx)(re,{route:e})},e.path)})),Object(n.jsx)(V.b,{exact:!0,path:"/login",component:xe})]})})})})}var ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,228)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(Oe,{})}),document.getElementById("root")),ge()}},[[163,1,2]]]);
//# sourceMappingURL=main.8decc8c6.chunk.js.map