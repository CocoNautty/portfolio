import{j as e,I as L,A as z,r,S as C,O as H,W,D as G,M as T,a as Y,V as B}from"./vendor-kjgEj_H5.js";const $="_header_16mr5_2",F="_title_16mr5_15",D="_subtitle_16mr5_29",O="_shortdescription_16mr5_43",V="_jumplinks_16mr5_49",X="_jumplinklist_16mr5_58",q="_jumplinkitem_16mr5_65",U="_navindicator_16mr5_72",J="_navtext_16mr5_91",K="_sociallinks_16mr5_105",Q="_sociallinkitem_16mr5_114",Z="_sociallinkicon_16mr5_120",ee="_sociallinkindicator_16mr5_128",n={header:$,title:F,subtitle:D,shortdescription:O,jumplinks:V,jumplinklist:X,jumplinkitem:q,navindicator:U,navtext:J,sociallinks:K,sociallinkitem:Q,sociallinkicon:Z,sociallinkindicator:ee},ue=()=>{const i=[{href:"#about",text:"About"},{href:"#experience",text:"Experiences"},{href:"#projects",text:"Projects"}],c=({href:t,text:o})=>e.jsx("li",{children:e.jsxs("a",{className:n.jumplinkitem,href:t,children:[e.jsx("span",{className:n.navindicator}),e.jsx("span",{className:n.navtext,children:o})]})}),p=[{title:"github",icon:e.jsx(z,{}),link:"https://github.com/CocoNautty"}],l=({title:t,icon:o,link:d})=>e.jsx("li",{className:n.sociallinkitem,title:t,children:e.jsxs("a",{href:d,target:"_blank",rel:"noopener noreferrer","aria-label":"Github (opens in a new tab)",children:[e.jsx("span",{className:n.sociallinkindicator,children:"Github"}),o]})});return e.jsxs("header",{className:n.header,children:[e.jsxs("div",{children:[e.jsx("a",{href:"/",children:e.jsx("h1",{className:n.title,children:"Yixuan Chen (陈奕煊)"})}),e.jsx("h2",{className:n.subtitle,children:"MSI Student in UMich"}),e.jsx("p",{className:n.shortdescription,children:"I learn, I code, I build. I put things together and make them work."}),e.jsx("nav",{className:n.jumplinks,"aria-label":"In-page jump links",children:e.jsx("ul",{className:n.jumplinklist,children:i.map(t=>e.jsx(c,{href:t.href,text:t.text},t.href))})})]}),e.jsx("ul",{className:n.sociallinks,children:e.jsx(L.Provider,{value:{className:n.sociallinkicon},children:p.map(t=>e.jsx(l,{title:t.title,icon:t.icon,link:t.link},t.title))})})]})},te="_sectiontitle_pkgss_1",ne={sectiontitle:te},ie="_sectioncontainer_2jcea_1",oe="_titlecontainer_2jcea_17",se="_notPinned_2jcea_31",re="_Pinned_2jcea_34",ae="_wordblock_2jcea_61",g={sectioncontainer:ie,titlecontainer:oe,notPinned:se,Pinned:re,wordblock:ae},ce=({id:i,children:c})=>e.jsx("section",{id:i,className:g.sectioncontainer,children:c}),le=({children:i})=>{const[c,p]=r.useState(!1),l=r.useRef(null);return r.useEffect(()=>{const t=()=>{if(l.current){const{top:o}=l.current.getBoundingClientRect();p(o<=0)}};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]),e.jsx("div",{ref:l,className:`${g.titlecontainer} ${c?g.Pinned:g.notPinned}`,children:i})},a=({children:i})=>e.jsx("p",{className:g.wordblock,children:i}),he=()=>e.jsxs(ce,{id:"About",children:[e.jsx(le,{children:e.jsx("h2",{className:ne.sectiontitle,children:"About"})}),e.jsxs("div",{children:[e.jsx(a,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(a,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(a,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(a,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(a,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(a,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(a,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(a,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(a,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(a,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."})]})]}),me=()=>{const i=r.useRef(null),c=r.useRef(null),p=r.useRef(null),l=r.useRef(null),t=r.useRef(null),o=r.useRef(!1),d=r.useRef({x:0,y:0,z:0});return r.useEffect(()=>{const b=window.matchMedia("(prefers-reduced-motion: reduce)").matches,w=new C,E=window.innerWidth/window.innerHeight;let m=5;const v=m/E,s=new H(-m,m,v,-v,.1,1e3),u=new W({alpha:!0,antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(window.devicePixelRatio),i.current.appendChild(u.domElement);const P=new G(5,1),S=new T({color:13421772,wireframe:!0}),f=new Y(P,S);w.add(f),s.position.set(0,0,10);let j=new B(2,5,0);s.lookAt(j),c.current=s,p.current=u,l.current=w;const _=()=>{d.current={x:(Math.random()-.5)*.001,y:(Math.random()-.5)*.001,z:(Math.random()-.5)*.001}},A=()=>{d.current={x:0,y:0,z:0}};_();const y=()=>{b||(o.current||(f.rotation.x+=d.current.x,f.rotation.y+=d.current.y,f.rotation.z+=d.current.z),u.render(w,s),t.current=requestAnimationFrame(y))};b||y();const R=h=>{if(o.current=!0,!b){A();const x=h.clientX/window.innerWidth*2-1,k=-(h.clientY/window.innerHeight)*2+1;f.rotation.x+=x*.01,f.rotation.y+=k*.01}clearTimeout(o.current),o.current=setTimeout(()=>{o.current=!1,_()},1e3)},M=()=>{if(!b){const h=window.scrollY;s.position.y=-h*.001,s.lookAt(j)}},I=()=>{const h=window.innerWidth,x=window.innerHeight,k=h/x,N=m/k;s.left=-m,s.right=m,s.top=N,s.bottom=-N,s.updateProjectionMatrix(),u.setSize(h,x)};return window.addEventListener("mousemove",R),window.addEventListener("scroll",M),window.addEventListener("resize",I),()=>{window.removeEventListener("mousemove",R),window.removeEventListener("scroll",M),window.removeEventListener("resize",I),cancelAnimationFrame(t.current),i.current.removeChild(u.domElement)}},[]),e.jsx("div",{ref:i,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})};export{he as A,ue as H,me as T};
