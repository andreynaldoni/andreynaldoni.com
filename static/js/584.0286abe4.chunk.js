"use strict";(self.webpackChunkandreynaldoni_com=self.webpackChunkandreynaldoni_com||[]).push([[584],{7279:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(3026),i=n(1580),a=n(675),l=n(6481),s=n(7247),o=n(8861),c=n(8956),d=n(184),p=function(){var e=(0,l.X)(),t=e.colorScheme,n=e.toggleColorScheme,r=(0,s.rZ)();return(0,d.jsx)(o.r,{checked:"dark"===t,onChange:function(){return n()},onLabel:(0,d.jsx)(c.O31,{color:r.white,size:16,stroke:1.5}),offLabel:(0,d.jsx)(c.zG9,{color:r.colors.gray[6],size:16,stroke:1.5}),sx:{marginTop:"-17px"}})},u=n(4815),y=n(1087),m=function(){return(0,d.jsx)(y.rU,{to:"/",style:{textDecoration:"none"},children:(0,d.jsx)(u.D,{weight:600,order:3,variant:"gradient",gradient:{from:"indigo",to:"cyan"},children:"<Andrey Naldoni/>"})})},f={height:"100%"},x={"@media print":{margin:0,display:"none"}},h=function(){return(0,d.jsx)(r.h,{height:60,sx:x,children:(0,d.jsx)(i.W,{sx:f,children:(0,d.jsxs)(a.Z,{sx:f,align:"center",position:"apart",noWrap:!0,children:[(0,d.jsx)(m,{}),(0,d.jsx)(p,{})]})})})}},584:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var r=n(7247),i=n(4414),a=n(9982),l=n(4815),s=n(7762),o=n(2791),c=(0,o.createContext)({classNames:{},styles:{},unstyled:!1});function d(e){var t=e.children,n=e.classNames,r=e.unstyled,i=e.styles,a=e.staticSelector;return o.createElement(c.Provider,{value:{classNames:n,styles:i,unstyled:r,staticSelector:a}},t)}var p=n(4942),u=(0,o.createContext)(null);var y=n(7581),m=(0,y.k)((function(e,t,n){var r=t.spacing,i=t.center;return{itemWrapper:{ref:n("itemWrapper"),display:"inline-flex",flexDirection:"column",whiteSpace:"normal"},item:{whiteSpace:"nowrap",lineHeight:i?1:e.lineHeight,"&:not(:first-of-type)":{marginTop:e.fn.size({size:r,sizes:e.spacing})}},withIcon:(0,p.Z)({listStyle:"none"},"& .".concat(n("itemWrapper")),{display:"inline-flex",alignItems:i?"center":"flex-start",flexDirection:"row"}),itemIcon:{display:"inline-block",verticalAlign:"middle",marginRight:e.spacing.sm}}})),f=Object.defineProperty,x=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,j=function(e,t,n){return t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n};function v(e){var t=e,n=t.className,r=t.children,a=t.icon,l=function(e,t){var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&x){var i,a=(0,s.Z)(x(e));try{for(a.s();!(i=a.n()).done;)r=i.value,t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r])}catch(l){a.e(l)}finally{a.f()}}return n}(t,["className","children","icon"]),d=(0,o.useContext)(u)||{},y=d.icon,f=d.spacing,v=d.center,b=d.listStyleType,w=d.size,S=d.withPadding,O=(0,o.useContext)(c),P=O.classNames,N=O.styles,D=O.unstyled,z=a||y,E=m({withPadding:S,size:w,listStyleType:b,center:v,spacing:f},{classNames:P,styles:N,unstyled:D,name:"List"}),k=E.classes,C=E.cx;return o.createElement(i.x,function(e,t){for(var n in t||(t={}))h.call(t,n)&&j(e,n,t[n]);if(x){var r,i=(0,s.Z)(x(t));try{for(i.s();!(r=i.n()).done;)n=r.value,g.call(t,n)&&j(e,n,t[n])}catch(a){i.e(a)}finally{i.f()}}return e}({component:"li",className:C(k.item,(0,p.Z)({},k.withIcon,z),n)},l),o.createElement("div",{className:k.itemWrapper},z&&o.createElement("span",{className:k.itemIcon},z),o.createElement("span",null,r)))}v.displayName="@mantine/core/ListItem";var b=Object.defineProperty,w=Object.defineProperties,S=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,D=function(e,t,n){return t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},z=function(e,t){for(var n in t||(t={}))P.call(t,n)&&D(e,n,t[n]);if(O){var r,i=(0,s.Z)(O(t));try{for(i.s();!(r=i.n()).done;){n=r.value;N.call(t,n)&&D(e,n,t[n])}}catch(a){i.e(a)}finally{i.f()}}return e},E=(0,y.k)((function(e,t){var n,r,i=t.withPadding,a=t.size,l=t.listStyleType;return{root:(n=z({},e.fn.fontStyles()),r={listStyleType:l,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,fontSize:e.fn.size({size:a,sizes:e.fontSizes}),lineHeight:e.lineHeight,margin:0,paddingLeft:i?e.spacing.xl:0,listStylePosition:"inside"},w(n,S(r)))}})),k=Object.defineProperty,C=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,I=function(e,t,n){return t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},L={type:"unordered",size:"md",spacing:0},G=(0,o.forwardRef)((function(e,t){var n=(0,r.N4)("List",L,e),a=n.children,l=n.type,c=n.size,p=n.listStyleType,y=n.withPadding,m=n.center,f=n.spacing,x=n.icon,h=n.className,g=n.styles,j=n.classNames,v=n.unstyled,b=function(e,t){var n={};for(var r in e)T.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&C){var i,a=(0,s.Z)(C(e));try{for(a.s();!(i=a.n()).done;)r=i.value,t.indexOf(r)<0&&Z.call(e,r)&&(n[r]=e[r])}catch(l){a.e(l)}finally{a.f()}}return n}(n,["children","type","size","listStyleType","withPadding","center","spacing","icon","className","styles","classNames","unstyled"]),w=E({withPadding:y,size:c,listStyleType:p,center:m,spacing:f},{classNames:j,styles:g,name:"List",unstyled:v}),S=w.classes,O=w.cx;return o.createElement(d,{classNames:j,styles:g,unstyled:v},o.createElement(u.Provider,{value:{spacing:f,center:m,icon:x,listStyleType:p,size:c,withPadding:y}},o.createElement(i.x,function(e,t){for(var n in t||(t={}))T.call(t,n)&&I(e,n,t[n]);if(C){var r,i=(0,s.Z)(C(t));try{for(i.s();!(r=i.n()).done;)n=r.value,Z.call(t,n)&&I(e,n,t[n])}catch(a){i.e(a)}finally{i.f()}}return e}({component:"unordered"===l?"ul":"ol",className:O(S.root,h),ref:t},b),a)))}));G.Item=v,G.displayName="@mantine/core/List";var A=n(2982);function F(e){return Array.isArray(e)?e:[e]}var R={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"default",property:"alignItems"},justify:{type:"default",property:"justifyContent"},wrap:{type:"default",property:"flexWrap"},direction:{type:"default",property:"flexDirection"}},W=n(2878),B=Object.defineProperty,M=Object.defineProperties,Q=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,U=function(e,t,n){return t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},q={},X=(0,o.forwardRef)((function(e,t){var n,a,l=(0,r.N4)("Flex",q,e),c=l.gap,d=l.rowGap,p=l.columnGap,u=l.align,y=l.justify,m=l.wrap,f=l.direction,x=l.sx,h=function(e,t){var n={};for(var r in e)H.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&J){var i,a=(0,s.Z)(J(e));try{for(a.s();!(i=a.n()).done;)r=i.value,t.indexOf(r)<0&&K.call(e,r)&&(n[r]=e[r])}catch(l){a.e(l)}finally{a.f()}}return n}(l,["gap","rowGap","columnGap","align","justify","wrap","direction","sx"]);return o.createElement(i.x,(n=function(e,t){for(var n in t||(t={}))H.call(t,n)&&U(e,n,t[n]);if(J){var r,i=(0,s.Z)(J(t));try{for(i.s();!(r=i.n()).done;)n=r.value,K.call(t,n)&&U(e,n,t[n])}catch(a){i.e(a)}finally{i.f()}}return e}({},h),a={sx:[{display:"flex"},function(e){return(0,W.M)({gap:c,rowGap:d,columnGap:p,align:u,justify:y,wrap:m,direction:f},e,R)}].concat((0,A.Z)(F(x))),ref:t},M(n,Q(a))))}));X.displayName="@mantine/core/Flex";var _=n(8296),Y=n(1580),$=n(675),V=n(4293),ee=n(8956),te=n(7279),ne=n(184),re={display:"flex",alignItems:"center",gap:4},ie=function(){var e=(0,r.rZ)().colors.blue[6],t=[{icon:(0,ne.jsx)(ee.wRQ,{size:14,style:{color:e}}),text:"Sao Paulo, Brazil"},{icon:(0,ne.jsx)(ee.BQS,{size:14,style:{color:e}}),text:"+55 13 98175 0611"},{icon:(0,ne.jsx)(ee.haR,{size:14,style:{color:e}}),text:"andreynaldoni@gmail.com"},{icon:(0,ne.jsx)(ee.OBP,{size:14,style:{color:e}}),text:"andreynaldoni.com"}];return(0,ne.jsx)(i.x,{mb:"md",children:t.map((function(e){return(0,ne.jsxs)(a.x,{size:"sm",sx:re,children:[e.icon," ",e.text]},e.text)}))})},ae=function(e){var t=e.title,n=e.date,s=e.company,o=e.activities,c=(0,r.rZ)();return(0,ne.jsxs)(i.x,{mb:"sm",children:[(0,ne.jsx)(l.D,{order:5,children:t}),(0,ne.jsxs)(a.x,{mb:4,color:c.primaryColor,weight:500,children:[n," | ",s]}),(0,ne.jsx)(G,{children:o.map((function(e){return(0,ne.jsx)(G.Item,{children:e},e)}))})]})},le=function(e){var t=e.children;return(0,ne.jsx)(ne.Fragment,{children:(0,ne.jsx)(l.D,{order:4,mb:"lg",children:t})})},se=function(e){var t=e.title,n=e.skills;return(0,ne.jsxs)(i.x,{mb:"xl",children:[(0,ne.jsx)(l.D,{order:5,mb:4,children:t}),(0,ne.jsx)(X,{wrap:"wrap",gap:4,children:n.map((function(e){return(0,ne.jsx)(_.z,{variant:"outline",radius:"xl",size:"xs",children:e},e)}))})]})},oe=function(){var e=(0,V.a)("(max-width: 767px)");return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(te.Z,{}),(0,ne.jsx)(Y.W,{my:40,sx:{"@media print":{margin:0}},children:(0,ne.jsxs)(X,{children:[(0,ne.jsxs)(X,{direction:"column",miw:e?"50%":"70%",children:[(0,ne.jsx)(l.D,{weight:600,mb:"xs",children:"Andrey Naldoni"}),(0,ne.jsx)(l.D,{order:4,weight:400,sx:{letterSpacing:2},mb:"xl",children:"Full-Stack Developer"}),(0,ne.jsx)(le,{children:"RECENT EXPERIENCE"}),(0,ne.jsx)(ae,{title:"Full-Stack Developer",date:"Jan 2020 \u2013 Present",company:"Claro Brazil",activities:["Developed and maintaining an onboarding app available for 20k new customers daily."]}),(0,ne.jsx)(ae,{title:"Software Engineer",date:"May 2017 \u2013 Dec 2019",company:"Nextel Brazil",activities:["Integrated and maintained ANATEL (Equivalent to US FCC) Consumidor with Zendesk attending about 1k customers daily;","Designed and developed an anti-fraud system using biometrics validation with 70% efficiency;","Supported and guided 500+ automated process with more than $50 million estimated savings."]}),(0,ne.jsx)(ae,{title:"Software Developer",date:"Nov 2014 \u2013 May 2017",company:"Bematech S/A",activities:["Technical leadership of automation initiatives and the quality team;","Test architecture development using TDD (Test Driven Development) and KDT (Keyword Driven Development) resulting in a decrease of approximately 90% in the incidence of bugs and 70% in maintenance costs;","Automated data collection with real time results available in cloud."]}),(0,ne.jsx)(ae,{title:"Programmer",date:"Jun 2012 \u2013 Out 2014",company:"Nortia IT",activities:["Developed and maintained new features in retail ERP system for Leroy Merlin."]}),(0,ne.jsx)(ae,{title:"Computing instructor",date:"Jun 2011 \u2013 Dez 2011",company:"Praia Grande City Hall",activities:["Digital inclusion project aimed at children, teenagers, elderly and people with special needs in public schools."]}),(0,ne.jsx)(ae,{title:"Room monitor",date:"Jun 2010 \u2013 Dez 2010",company:"Sao Paulo Government",activities:["Digital inclusion project aimed at students and teachers of state public schools, focusing on collaboration trough technology."]})]}),(0,ne.jsxs)(X,{direction:"column",w:e?"50%":"30%",pl:"lg",children:[(0,ne.jsx)(ie,{}),(0,ne.jsx)(le,{children:"KEY SKILLS"}),(0,ne.jsx)(se,{title:"Front-end",skills:["React","Next.js","TypeScript","JavaScript"]}),(0,ne.jsx)(se,{title:"Back-end",skills:["Node.js","Express","NestJS","Python","Flask"]}),(0,ne.jsx)(se,{title:"Database",skills:["SQL","NoSQL","MySQL","PostgreeSQL","Oracle","MS SQL","MongoDB","Firestore"]}),(0,ne.jsx)(se,{title:"Cloud",skills:["GCP","AWS"]}),(0,ne.jsx)(le,{children:"LANGUAGES"}),(0,ne.jsxs)($.Z,{position:"apart",children:[(0,ne.jsx)(a.x,{children:"English"}),(0,ne.jsx)(a.x,{color:"blue",children:"Professional"})]}),(0,ne.jsxs)($.Z,{position:"apart",children:[(0,ne.jsx)(a.x,{children:"Portuguese"}),(0,ne.jsx)(a.x,{color:"blue",children:"Native"})]})]})]})})]})}}}]);
//# sourceMappingURL=584.0286abe4.chunk.js.map