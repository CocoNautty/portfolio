import{r as o,j as e,I as Ee,A as qe,B as Re,l as Se}from"./vendor-BRXMcUd4.js";import{S as Me,O as Ne,W as Le,I as Ie,a as $e,B as re,E as I,D as Pe,G as ze,M as Ce,V as f,C as oe,b as Ae}from"./three-CxVmGKO2.js";const Te="_header_10qpg_2",Be="_title_10qpg_15",We="_subtitle_10qpg_29",Ge="_shortdescription_10qpg_43",He="_jumplinks_10qpg_49",Ue="_jumplinklist_10qpg_58",Ve="_navindicator_10qpg_65",Ye="_navtext_10qpg_78",De="_jumplinkitem_10qpg_86",Fe="_active_10qpg_92",Oe="_current_10qpg_99",Je="_sociallinks_10qpg_107",Xe="_sociallinkitem_10qpg_116",Ke="_sociallinkicon_10qpg_122",Qe="_sociallinkindicator_10qpg_130",u={header:Te,title:Be,subtitle:We,shortdescription:Ge,jumplinks:He,jumplinklist:Ue,navindicator:Ve,navtext:Ye,jumplinkitem:De,active:Fe,current:Oe,sociallinks:Je,sociallinkitem:Xe,sociallinkicon:Ke,sociallinkindicator:Qe},Ze=(t,s=0)=>{const[d,h]=o.useState("");return o.useEffect(()=>{const a=window.innerHeight,n=Math.round(a*.1),p=Math.round(a*.8),r=`-${n}px 0px -${p}px 0px`,y=new IntersectionObserver(E=>{E.forEach(c=>{c.isIntersecting&&h(c.target.id)})},{rootMargin:r});return t.forEach(E=>{const c=document.getElementById(E);c&&y.observe(c)}),()=>y.disconnect()},[t,s]),d},Bt=()=>{const t=[{href:"#About",text:"About"},{href:"#Experience",text:"Experience"},{href:"#Projects",text:"Projects"}],s=({href:n,text:p,isActive:r})=>e.jsx("li",{children:e.jsxs("a",{className:`${u.jumplinkitem} ${r?u.active:""}`,href:n,children:[e.jsx("span",{className:u.navindicator}),e.jsx("span",{className:u.navtext,children:p})]})}),d=[{title:"github",icon:e.jsx(qe,{}),link:"https://github.com/CocoNautty"}],h=({title:n,icon:p,link:r})=>e.jsx("li",{className:u.sociallinkitem,title:n,children:e.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":"Github (opens in a new tab)",style:{paddingTop:"10px"},children:[e.jsx("span",{className:u.sociallinkindicator,children:"Github"}),p]})}),a=Ze(t.map(n=>n.text),50);return e.jsxs("header",{className:u.header,children:[e.jsxs("div",{children:[e.jsx("a",{href:"/",children:e.jsx("h1",{className:u.title,children:"Yixuan Chen (陈奕煊)"})}),e.jsx("h2",{className:u.subtitle,children:"MSI Student in UMich"}),e.jsx("p",{className:u.shortdescription,children:"I learn, I code, I build. I put things together and make them work."}),e.jsx("nav",{className:u.jumplinks,"aria-label":"In-page jump links",children:e.jsx("ul",{className:u.jumplinklist,children:t.map(n=>e.jsx(s,{href:n.href,text:n.text,isActive:a===n.text},n.text))})})]}),e.jsx("ul",{className:u.sociallinks,children:e.jsx(Ee.Provider,{value:{className:u.sociallinkicon},children:d.map(n=>e.jsx(h,{title:n.title,icon:n.icon,link:n.link},n.title))})})]})},et="_sectiontitle_17lkw_1",tt={sectiontitle:et},nt="_sectioncontainer_dsnsw_1",it="_titlecontainer_dsnsw_17",st="_notPinned_dsnsw_31",rt="_Pinned_dsnsw_34",ot="_wordblock_dsnsw_61",ct="_inlinelink_dsnsw_65",at="_cardcontainer_dsnsw_76",lt="_cardlist_dsnsw_94",dt="_card_dsnsw_76",mt="_experiencetimespan_dsnsw_131",ut="_experiencetitlecontainer_dsnsw_147",pt="_experiencetitle_dsnsw_147",ht="_titlecard_dsnsw_168",xt="_cardtagscontainer_dsnsw_191",_t="_cardtag_dsnsw_191",l={sectioncontainer:nt,titlecontainer:it,notPinned:st,Pinned:rt,wordblock:ot,inlinelink:ct,cardcontainer:at,cardlist:lt,card:dt,experiencetimespan:mt,experiencetitlecontainer:ut,experiencetitle:pt,titlecard:ht,cardtagscontainer:xt,cardtag:_t},me=({id:t,children:s})=>e.jsx("section",{id:t,className:l.sectioncontainer,children:s}),ue=({children:t})=>{const[s,d]=o.useState(!1),h=o.useRef(null);return o.useEffect(()=>{const a=()=>{if(h.current){const n=window.innerWidth,{top:p}=h.current.getBoundingClientRect();n<=1024&&(d(p<=5),console.log("isPinned: ",s))}};return window.addEventListener("scroll",a),window.addEventListener("resize",a),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[]),e.jsx("div",{ref:h,className:`${l.titlecontainer} ${s?l.Pinned:l.notPinned}`,children:t})},G=({children:t})=>e.jsx("p",{className:l.wordblock,children:t}),U=({href:t,children:s})=>e.jsxs("a",{className:l.inlinelink,href:t,target:"_blank",rel:"noreferrer noopener",children:[" ",s," "]}),ce=({children:t})=>e.jsxs("div",{className:l.cardcontainer,children:[e.jsx("div",{className:l.card}),t]}),ae=({children:t})=>e.jsx("header",{className:l.experiencetimespan,children:t}),le=({href:t,position:s,department:d})=>e.jsx("h3",{className:l.experiencetitlecontainer,children:e.jsx("div",{children:e.jsxs("a",{className:l.experiencetitle,href:t,target:"_blank",rel:"noreferrer noopener",children:[e.jsx("span",{className:l.titlecard}),e.jsxs("span",{children:[s," - ",e.jsxs("span",{style:{dislpay:"inline-block"},children:[d,e.jsx(Re,{style:{marginLeft:"0.25rem"}})]})]})]})})}),de=({tags:t})=>e.jsx("ul",{className:l.cardtagscontainer,children:t.map((s,d)=>e.jsx("li",{style:{marginRight:"0.375rem",marginTop:"0.5rem"},children:e.jsx("span",{className:l.cardtag,children:s})},d))}),gt=({children:t})=>e.jsx("ol",{className:l.cardlist,children:t}),Wt=()=>e.jsxs(me,{id:"About",children:[e.jsx(ue,{children:e.jsx("h2",{className:tt.sectiontitle,children:"About"})}),e.jsxs("div",{children:[e.jsx(G,{children:"As a dedicated student and passionate tech enthusiast, I am constantly exploring new technologies and discovering innovative ways to apply them to real-world challenges. I thrive on hands-on experiences, embracing the learning opportunities that arise from tackling complex problems along the way."}),e.jsxs(G,{children:["Currently, I'm pursuing a Master's degree in big data analytics in",e.jsx(U,{href:"https://www.si.umich.edu/",children:"University of Michigan School of Information (UMSI)"}),"and my coursework includes subjects such as databases, data mining, and machine learning, along with elective courses that align with my interests, like web development—a course that inspired the creation of this website."]}),e.jsxs(G,{children:["While data and web design are key components of my skill set, my expertise extends beyond these areas. I got my Bachelor's degree in Electrical and Computer Engineering from",e.jsx(U,{href:"https://en.sjtu.edu.cn/",children:"Shanghai Jiao Tong University (SJTU)"}),'where I developed a strong foundation in hardware design and programming. These experiences have greatly helped me on my journey to becoming a "full-stack engineer" (laughs).']}),e.jsxs(G,{children:["Currently, I actively engage with various technologies, including operating systems (",e.jsx(U,{href:"https://get.opensuse.org/tumbleweed/",children:"openSUSE Tumbleweed"}),"is my daily driver), web development, data analytics, machine learning, PCB design, and embedded systems. I also have different proficiencies in multiple programming languages, such as C, C++, Python, JavaScript (React.js), Go, Matlab, Verilog, and assembly."]})]})]}),wt="_sectioncontainer_18qho_1",ft="_titlecontainer_18qho_17",yt="_notPinned_18qho_31",jt="_Pinned_18qho_34",vt="_wordblock_18qho_61",bt="_inlinelink_18qho_65",kt="_cardcontainer_18qho_76",Et="_cardlist_18qho_94",qt="_card_18qho_76",Rt="_experiencetimespan_18qho_131",St="_experiencetitlecontainer_18qho_147",Mt="_experiencetitle_18qho_147",Nt="_titlecard_18qho_168",Lt="_cardtagscontainer_18qho_191",It="_cardtag_18qho_191",$t="_sectiontitle_18qho_212",Pt="_cardcontent_18qho_224",zt="_experiencecontent_18qho_233",k={sectioncontainer:wt,titlecontainer:ft,notPinned:yt,Pinned:jt,wordblock:vt,inlinelink:bt,cardcontainer:kt,cardlist:Et,card:qt,experiencetimespan:Rt,experiencetitlecontainer:St,experiencetitle:Mt,titlecard:Nt,cardtagscontainer:Lt,cardtag:It,sectiontitle:$t,cardcontent:Pt,experiencecontent:zt},Gt=()=>(o.useEffect(()=>{const t=document.querySelector(`.${k.cardlist}`),s=document.querySelectorAll(`.${k.cardcontainer}`);if(t){const d=()=>{s.forEach(a=>a.classList.add(k.dimmed))},h=()=>{s.forEach(a=>a.classList.remove(k.dimmed))};return t.addEventListener("mouseenter",d),t.addEventListener("mouseleave",h),()=>{t.removeEventListener("mouseenter",d),t.removeEventListener("mouseleave",h)}}},[]),e.jsxs(me,{id:"Experience",children:[e.jsx(ue,{children:e.jsx("h2",{className:k.sectiontitle,children:"Experience"})}),e.jsx("div",{children:e.jsxs(gt,{children:[e.jsx("li",{style:{marginBottom:"3rem"},children:e.jsxs(ce,{children:[e.jsx(ae,{children:"2024.08 - Present"}),e.jsxs("div",{className:k.cardcontent,children:[e.jsx(le,{href:"https://www.google.com/",position:"Big Data Analytics",department:"UMSI"}),e.jsx("p",{className:k.experiencecontent,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, maxime aliquid praesentium dignissimos eveniet, totam obcaecati aperiam tempora repellat incidunt facere ea. Laborum odio veritatis nam totam facere recusandae fugit."}),e.jsx(de,{tags:["Data Mining","Machine Learning","Web Design"]})]})]})}),e.jsx("li",{style:{marginBottom:"3rem"},children:e.jsxs(ce,{children:[e.jsx(ae,{children:"2021.09 - 2025.08"}),e.jsxs("div",{className:k.cardcontent,children:[e.jsx(le,{href:"https://www.google.com/",position:"Electrical and Computer Engineering",department:"SJTU"}),e.jsx("p",{className:k.experiencecontent,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, maxime aliquid praesentium dignissimos eveniet, totam obcaecati aperiam tempora repellat incidunt facere ea. Laborum odio veritatis nam totam facere recusandae fugit."}),e.jsx(de,{tags:["Circuit","Algorithm","Programming","Embedded System"]})]})]})})]})})]})),Ht=({scrollableheight:t})=>{const s=o.useRef(null),d=o.useRef(null),h=o.useRef(null),a=o.useRef(null),n=o.useRef(null),p=o.useRef(!1),r=o.useRef({x:0,y:0,z:0}),y=o.useRef({x:0,y:0,z:0}),E=o.useRef({x:0,y:0}),c=o.useRef(1);return o.useEffect(()=>{const C=window.matchMedia("(prefers-reduced-motion: reduce)").matches,S=new Me;let j=window.innerWidth,g=window.innerHeight;const pe=j/g;let M=5;const V=M/pe,x=new Ne(-M,M,V,-V,.1,1e3),w=new Le({alpha:!0,antialias:!0});w.setSize(j,g),w.setPixelRatio(window.devicePixelRatio*3/2),s.current.appendChild(w.domElement),w.domElement.style.height=`${g*1.5}px`,w.domElement.style.width=`${j*1.5}px`;const Y=i=>new Pe(i,0),D=i=>Math.max(799/i,1);c.current=D(j);let F=[[],[],[],[]];const A=(i,m,b)=>{const _=new ze,N=new Ce({color:5657696,transparent:!0,opacity:.3});for(let R=0;R<m.attributes.position.count;R+=2){const z=new f().fromBufferAttribute(m.attributes.position,R),T=new f().fromBufferAttribute(m.attributes.position,R+1),B=new f().subVectors(T,z),L=B.length(),be=new f().addVectors(z,T).multiplyScalar(.5),ke=new oe(b,b,L,8),W=new Ae(ke,N);W.position.copy(be),W.quaternion.setFromUnitVectors(new f(0,1,0),B.clone().normalize()),_.add(W),F[i].push(W)}return _},O=(i,m,b)=>{for(let _=0;_<m.attributes.position.count;_+=2){const N=new f().fromBufferAttribute(m.attributes.position,_),R=new f().fromBufferAttribute(m.attributes.position,_+1),z=new f().subVectors(R,N),T=z.length(),B=new f().addVectors(N,R).multiplyScalar(.5),L=F[i][_/2];L.geometry.dispose(),L.geometry=new oe(b,b,T,8),L.position.copy(B),L.quaternion.setFromUnitVectors(new f(0,1,0),z.clone().normalize())}},he=new Ie(4*2/3,3),xe=Y(c.current*4/9),_e=new $e(1*2/3,0),ge=new re(c.current*.4*2/3,c.current*.4*2/3,c.current*.4*2/3),we=new I(he),fe=new I(xe),ye=new I(_e),je=new I(ge),q=A(0,we,.02),$=A(1,fe,.02),v=A(2,ye,.02),J=A(3,je,.02);S.add(q),S.add($),S.add(v),S.add(J);const X=()=>{const i=window.scrollY;x.position.y=-i*g*.005/t,x.position.x=-i*j*.005/t},H=()=>{const i=window.scrollY;v.position.x=-1+i*g*.002/t,v.position.y=13-i*g*.007/t,v.position.z=1-i*g*.002/t,v.rotation.x+=2e-5*i,v.rotation.y+=4e-5*i};x.position.set(0,0,14),X();let P=new f(4,1.8,0);x.lookAt(P),q.position.set(.4,.2,-2),$.position.set(4.7,4,1),v.position.set(-1,8,1),J.position.set(P.x,P.y-1,P.z+1),H(),d.current=x,h.current=w,a.current=S;const K=()=>{r.current={x:(Math.random()-.5)*.003,y:(Math.random()-.5)*.003,z:(Math.random()-.5)*.003}},Q=()=>{r.current={x:0,y:0,z:0}},Z=()=>{y.current={x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01}};Z(),K();const ee=()=>{C||($.rotation.x-=(y.current.x-r.current.x)*.4,$.rotation.y-=(y.current.y-r.current.y)*.4,$.rotation.z-=(y.current.z-r.current.z)*.4,v.rotation.x+=(y.current.x-r.current.x)*.3,v.rotation.y+=(y.current.y-r.current.y)*.3,v.rotation.z+=(y.current.z-r.current.z)*.3,p.current||(q.rotation.x+=r.current.x*.2,q.rotation.y+=r.current.y*.2,q.rotation.z+=r.current.z*.2),w.render(S,x),n.current=requestAnimationFrame(ee))};C||ee();const ve=setInterval(()=>{Z()},2e3),te=Se.throttle(i=>{if(p.current=!0,!C){Q();const m={x:i.clientX,y:i.clientY},b=m.x-E.current.x,_=m.y-E.current.y;q.rotation.x-=_*3e-5,q.rotation.y-=b*3e-5,E.current=m,Q()}clearTimeout(p.current),p.current=setTimeout(()=>{p.current=!1,K()},10)},10),ne=()=>{C||(X(),H(),x.lookAt(P))};let ie=window.innerWidth;const se=()=>{const i=window.innerWidth;if(i===ie)return;ie=i,j=window.innerWidth,g=window.innerHeight;const m=j/g,b=M/m;x.left=-M,x.right=M,x.top=b,x.bottom=-b,x.updateProjectionMatrix(),w.setSize(j,g),w.domElement.style.height=`${g*1.5}px`,w.domElement.style.width=`${j*1.5}px`,H(),c.current=D(j);const _=Y(c.current*4/9);O(1,new I(_),.02);const N=new re(c.current*.4*2/3,c.current*.4*2/3,c.current*.4*2/3);O(3,new I(N),.02)};return window.addEventListener("mousemove",te),window.addEventListener("scroll",ne),window.addEventListener("resize",se),()=>{clearInterval(ve),window.removeEventListener("mousemove",te),window.removeEventListener("scroll",ne),window.removeEventListener("resize",se),cancelAnimationFrame(n.current),s.current.removeChild(w.domElement)}},[]),e.jsx("div",{ref:s,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})};export{Wt as A,Gt as E,Bt as H,Ht as T};
