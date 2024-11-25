import{j as e,I as oe,A as re,r as i}from"./vendor-Din7TClK.js";import{S as se,O as ae,W as ce,D as le,E as O,I as de,G as ue,M as me,V as v,C as he,a as pe}from"./three-CPCi20_Q.js";const fe="_header_16mr5_2",ge="_title_16mr5_15",be="_subtitle_16mr5_29",xe="_shortdescription_16mr5_43",we="_jumplinks_16mr5_49",ye="_jumplinklist_16mr5_58",ve="_jumplinkitem_16mr5_65",ke="_navindicator_16mr5_72",_e="_navtext_16mr5_91",je="_sociallinks_16mr5_105",Re="_sociallinkitem_16mr5_114",Me="_sociallinkicon_16mr5_120",Ie="_sociallinkindicator_16mr5_128",r={header:fe,title:ge,subtitle:be,shortdescription:xe,jumplinks:we,jumplinklist:ye,jumplinkitem:ve,navindicator:ke,navtext:_e,sociallinks:je,sociallinkitem:Re,sociallinkicon:Me,sociallinkindicator:Ie},Be=()=>{const s=[{href:"#about",text:"About"},{href:"#experience",text:"Experiences"},{href:"#projects",text:"Projects"}],l=({href:t,text:u})=>e.jsx("li",{children:e.jsxs("a",{className:r.jumplinkitem,href:t,children:[e.jsx("span",{className:r.navindicator}),e.jsx("span",{className:r.navtext,children:u})]})}),k=[{title:"github",icon:e.jsx(re,{}),link:"https://github.com/CocoNautty"}],p=({title:t,icon:u,link:d})=>e.jsx("li",{className:r.sociallinkitem,title:t,children:e.jsxs("a",{href:d,target:"_blank",rel:"noopener noreferrer","aria-label":"Github (opens in a new tab)",children:[e.jsx("span",{className:r.sociallinkindicator,children:"Github"}),u]})});return e.jsxs("header",{className:r.header,children:[e.jsxs("div",{children:[e.jsx("a",{href:"/",children:e.jsx("h1",{className:r.title,children:"Yixuan Chen (陈奕煊)"})}),e.jsx("h2",{className:r.subtitle,children:"MSI Student in UMich"}),e.jsx("p",{className:r.shortdescription,children:"I learn, I code, I build. I put things together and make them work."}),e.jsx("nav",{className:r.jumplinks,"aria-label":"In-page jump links",children:e.jsx("ul",{className:r.jumplinklist,children:s.map(t=>e.jsx(l,{href:t.href,text:t.text},t.href))})})]}),e.jsx("ul",{className:r.sociallinks,children:e.jsx(oe.Provider,{value:{className:r.sociallinkicon},children:k.map(t=>e.jsx(p,{title:t.title,icon:t.icon,link:t.link},t.title))})})]})},ze="_sectiontitle_pkgss_1",Ee={sectiontitle:ze},Ne="_sectioncontainer_3c2ug_1",Se="_titlecontainer_3c2ug_17",Ae="_notPinned_3c2ug_31",Pe="_Pinned_3c2ug_34",Ce="_wordblock_3c2ug_61",_={sectioncontainer:Ne,titlecontainer:Se,notPinned:Ae,Pinned:Pe,wordblock:Ce},Le=({id:s,children:l})=>e.jsx("section",{id:s,className:_.sectioncontainer,children:l}),Ge=({children:s})=>{const[l,k]=i.useState(!1),p=i.useRef(null);return i.useEffect(()=>{const t=()=>{if(p.current){const u=window.innerWidth,{top:d}=p.current.getBoundingClientRect();u<=768&&k(d<=1)}};return window.addEventListener("scroll",t),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[]),e.jsx("div",{ref:p,className:`${_.titlecontainer} ${l?_.Pinned:_.notPinned}`,children:s})},c=({children:s})=>e.jsx("p",{className:_.wordblock,children:s}),Ye=()=>e.jsxs(Le,{id:"About",children:[e.jsx(Ge,{children:e.jsx("h2",{className:Ee.sectiontitle,children:"About"})}),e.jsxs("div",{children:[e.jsx(c,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(c,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(c,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(c,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(c,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(c,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(c,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(c,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(c,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}),e.jsx(c,{children:"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."})]})]}),Ve=({scrollableheight:s})=>{const l=i.useRef(null),k=i.useRef(null),p=i.useRef(null),t=i.useRef(null),u=i.useRef(null),d=i.useRef(!1),m=i.useRef({x:0,y:0,z:0}),j=i.useRef({x:0,y:0,z:0}),E=i.useRef({x:0,y:0}),R=i.useRef(1);return i.useEffect(()=>{const M=window.matchMedia("(prefers-reduced-motion: reduce)").matches,I=new se;let h=window.innerWidth,b=window.innerHeight;const U=h/b;let x=5;const A=x/U,o=new ae(-x,x,A,-A,.1,1e3),f=new ce({alpha:!0,antialias:!0});f.setSize(h,b),f.setPixelRatio(window.devicePixelRatio),l.current.appendChild(f.domElement);const P=n=>new de(n,0),C=n=>Math.max(999/n,1);R.current=C(h);const L=(n,a)=>{const y=new ue,N=new me({color:11184810});for(let z=0;z<n.attributes.position.count;z+=2){const X=new v().fromBufferAttribute(n.attributes.position,z),q=new v().fromBufferAttribute(n.attributes.position,z+1),D=new v().subVectors(q,X),te=D.length(),ne=new v().addVectors(X,q).multiplyScalar(.5),ie=new he(a,a,te,8),S=new pe(ie,N);S.position.copy(ne),S.quaternion.setFromUnitVectors(new v(0,1,0),D.clone().normalize()),y.add(S)}return y},J=new le(5,1),K=P(R.current),Q=new O(J),Z=new O(K),w=L(Q,.01),g=L(Z,.01);I.add(w),I.add(g);const G=()=>{const n=window.scrollY;o.position.y=-n*b*.01/s,o.position.x=-n*h*.005/s};o.position.set(0,0,10),G();let T=new v(2,6,0);o.lookAt(T),g.position.set(5.5,8,1),k.current=o,p.current=f,t.current=I;const W=()=>{m.current={x:(Math.random()-.5)*.003,y:(Math.random()-.5)*.003,z:(Math.random()-.5)*.003}},H=()=>{m.current={x:0,y:0,z:0}},B=()=>{j.current={x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01}};B(),W();const Y=()=>{M||(g.rotation.x-=(j.current.x-m.current.x)*.1,g.rotation.y-=(j.current.y-m.current.y)*.1,g.rotation.z-=(j.current.z-m.current.z)*.1,d.current||(w.rotation.x+=m.current.x,w.rotation.y+=m.current.y,w.rotation.z+=m.current.z),f.render(I,o),u.current=requestAnimationFrame(Y))};M||Y();const ee=setInterval(()=>{B()},2e3),V=n=>{if(d.current=!0,!M){H();const a={x:n.clientX,y:n.clientY},y=a.x-E.current.x,N=a.y-E.current.y;w.rotation.x-=N*3e-4,w.rotation.y-=y*3e-4,E.current=a,H()}clearTimeout(d.current),d.current=setTimeout(()=>{d.current=!1,W()},10)},F=()=>{M||(G(),console.log("Camera position: ",o.position),o.lookAt(T))},$=()=>{h=window.innerWidth,b=window.innerHeight;const n=h/b,a=x/n;o.left=-x,o.right=x,o.top=a,o.bottom=-a,o.updateProjectionMatrix(),f.setSize(h,b),R.current=C(h);const y=P(R.current);g.geometry.dispose(),g.geometry=y};return window.addEventListener("mousemove",V),window.addEventListener("scroll",F),window.addEventListener("resize",$),()=>{clearInterval(ee),window.removeEventListener("mousemove",V),window.removeEventListener("scroll",F),window.removeEventListener("resize",$),cancelAnimationFrame(u.current),l.current.removeChild(f.domElement)}},[]),e.jsx("div",{ref:l,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})};export{Ye as A,Be as H,Ve as T};
