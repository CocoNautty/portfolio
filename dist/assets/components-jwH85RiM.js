import{j as e,I as W,A as G,r as o}from"./vendor-DoG4PS60.js";import{S as T,O as Y,W as B,D as $,M as F,a as D,V as O}from"./three-BBnhqZ3w.js";const V="_header_16mr5_2",X="_title_16mr5_15",q="_subtitle_16mr5_29",U="_shortdescription_16mr5_43",J="_jumplinks_16mr5_49",K="_jumplinklist_16mr5_58",Q="_jumplinkitem_16mr5_65",Z="_navindicator_16mr5_72",ee="_navtext_16mr5_91",te="_sociallinks_16mr5_105",ne="_sociallinkitem_16mr5_114",ie="_sociallinkicon_16mr5_120",oe="_sociallinkindicator_16mr5_128",i={header:V,title:X,subtitle:q,shortdescription:U,jumplinks:J,jumplinklist:K,jumplinkitem:Q,navindicator:Z,navtext:ee,sociallinks:te,sociallinkitem:ne,sociallinkicon:ie,sociallinkindicator:oe},ge=()=>{const s=[{href:"#about",text:"About"},{href:"#experience",text:"Experiences"},{href:"#projects",text:"Projects"}],a=({href:t,text:d})=>e.jsx("li",{children:e.jsxs("a",{className:i.jumplinkitem,href:t,children:[e.jsx("span",{className:i.navindicator}),e.jsx("span",{className:i.navtext,children:d})]})}),x=[{title:"github",icon:e.jsx(G,{}),link:"https://github.com/CocoNautty"}],l=({title:t,icon:d,link:c})=>e.jsx("li",{className:i.sociallinkitem,title:t,children:e.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":"Github (opens in a new tab)",children:[e.jsx("span",{className:i.sociallinkindicator,children:"Github"}),d]})});return e.jsxs("header",{className:i.header,children:[e.jsxs("div",{children:[e.jsx("a",{href:"/",children:e.jsx("h1",{className:i.title,children:"Yixuan Chen (陈奕煊)"})}),e.jsx("h2",{className:i.subtitle,children:"MSI Student in UMich"}),e.jsx("p",{className:i.shortdescription,children:"I learn, I code, I build. I put things together and make them work."}),e.jsx("nav",{className:i.jumplinks,"aria-label":"In-page jump links",children:e.jsx("ul",{className:i.jumplinklist,children:s.map(t=>e.jsx(a,{href:t.href,text:t.text},t.href))})})]}),e.jsx("ul",{className:i.sociallinks,children:e.jsx(W.Provider,{value:{className:i.sociallinkicon},children:x.map(t=>e.jsx(l,{title:t.title,icon:t.icon,link:t.link},t.title))})})]})},se="_sectiontitle_pkgss_1",re={sectiontitle:se},ae="_sectioncontainer_1pbt6_1",ce="_titlecontainer_1pbt6_17",le="_notPinned_1pbt6_31",de="_Pinned_1pbt6_34",ue="_wordblock_1pbt6_70",v={sectioncontainer:ae,titlecontainer:ce,notPinned:le,Pinned:de,wordblock:ue},me=({id:s,children:a})=>e.jsx("section",{id:s,className:v.sectioncontainer,children:a}),he=({children:s})=>{const[a,x]=o.useState(!1),l=o.useRef(null);return o.useEffect(()=>{const t=()=>{if(l.current){const{top:d}=l.current.getBoundingClientRect(),c=window.getComputedStyle(l.current);x(d<=0&&c.opacity!=="0")}};return window.addEventListener("scroll",t),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[]),e.jsx("div",{ref:l,className:`${v.titlecontainer} ${a?v.Pinned:v.notPinned}`,children:s})},r=({children:s})=>e.jsx("p",{className:v.wordblock,children:s}),be=()=>e.jsxs(me,{id:"About",children:[e.jsx(he,{children:e.jsx("h2",{className:re.sectiontitle,children:"About"})}),e.jsxs("div",{children:[e.jsx(r,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(r,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(r,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(r,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(r,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(r,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(r,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(r,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(r,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(r,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."})]})]}),xe=({scrollableheight:s})=>{const a=o.useRef(null),x=o.useRef(null),l=o.useRef(null),t=o.useRef(null),d=o.useRef(null),c=o.useRef(!1),w=o.useRef({x:0,y:0,z:0}),y=o.useRef({x:0,y:0});return o.useEffect(()=>{const k=window.matchMedia("(prefers-reduced-motion: reduce)").matches,_=new T;let h=window.innerWidth,p=window.innerHeight;const L=h/p;let f=5;const j=f/L,n=new Y(-f,f,j,-j,.1,1e3),u=new B({alpha:!0,antialias:!0});u.setSize(h,p),u.setPixelRatio(window.devicePixelRatio),a.current.appendChild(u.domElement);const z=new $(5,1),A=new F({color:13421772,wireframe:!0}),g=new D(z,A);_.add(g),n.position.set(0,0,10);let R=new O(1.5,5,0);n.lookAt(R),x.current=n,l.current=u,t.current=_;const M=()=>{w.current={x:(Math.random()-.5)*.005,y:(Math.random()-.5)*.005,z:(Math.random()-.5)*.005}},I=()=>{w.current={x:0,y:0,z:0}};M();const N=()=>{k||(c.current||(g.rotation.x+=w.current.x,g.rotation.y+=w.current.y,g.rotation.z+=w.current.z),u.render(_,n),d.current=requestAnimationFrame(N))};k||N();const E=m=>{if(c.current=!0,!k){I();const b={x:m.clientX,y:m.clientY},C=b.x-y.current.x,H=b.y-y.current.y;g.rotation.x-=H*.001,g.rotation.y-=C*.001,y.current=b,I()}clearTimeout(c.current),c.current=setTimeout(()=>{c.current=!1,M()},10)},P=()=>{if(!k){const m=window.scrollY;n.position.y=-m*p*.01/s,n.position.x=-m*h*2e-4/s,console.log("Camera position: ",n.position),n.lookAt(R)}},S=()=>{h=window.innerWidth,p=window.innerHeight;const m=h/p,b=f/m;n.left=-f,n.right=f,n.top=b,n.bottom=-b,n.updateProjectionMatrix(),u.setSize(h,p)};return window.addEventListener("mousemove",E),window.addEventListener("scroll",P),window.addEventListener("resize",S),()=>{window.removeEventListener("mousemove",E),window.removeEventListener("scroll",P),window.removeEventListener("resize",S),cancelAnimationFrame(d.current),a.current.removeChild(u.domElement)}},[]),e.jsx("div",{ref:a,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})};export{be as A,ge as H,xe as T};
