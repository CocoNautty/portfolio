import{r as t,S as H,O as j,W as k,D as C,M as T,a as Y,j as P,V as b}from"./index-DCCp5dq8.js";const D=()=>{const u=t.useRef(null),z=t.useRef(null),E=t.useRef(null),y=t.useRef(null),w=t.useRef(null),s=t.useRef(!1),a=t.useRef({x:0,y:0,z:0});return t.useEffect(()=>{const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=new H,S=window.innerWidth/window.innerHeight;let r=5;const h=r/S,e=new j(-r,r,h,-h,.1,1e3),n=new k({alpha:!0,antialias:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(window.devicePixelRatio),u.current.appendChild(n.domElement);const L=new C(5,1),W=new T({color:13421772,wireframe:!0}),i=new Y(L,W);m.add(i),e.position.set(0,0,10);let f=new b(2,5,0);e.lookAt(f),z.current=e,E.current=n,y.current=m;const R=()=>{a.current={x:(Math.random()-.5)*.001,y:(Math.random()-.5)*.001,z:(Math.random()-.5)*.001}},A=()=>{a.current={x:0,y:0,z:0}};R();const p=()=>{c||(s.current||(i.rotation.x+=a.current.x,i.rotation.y+=a.current.y,i.rotation.z+=a.current.z),n.render(m,e),w.current=requestAnimationFrame(p))};c||p();const x=o=>{if(s.current=!0,!c){A();const d=o.clientX/window.innerWidth*2-1,l=-(o.clientY/window.innerHeight)*2+1;i.rotation.x+=d*.01,i.rotation.y+=l*.01}clearTimeout(s.current),s.current=setTimeout(()=>{s.current=!1,R()},1e3)},v=()=>{if(!c){const o=window.scrollY;e.position.y=-o*.001,e.lookAt(f)}},g=()=>{const o=window.innerWidth,d=window.innerHeight,l=o/d,M=r/l;e.left=-r,e.right=r,e.top=M,e.bottom=-M,e.updateProjectionMatrix(),n.setSize(o,d)};return window.addEventListener("mousemove",x),window.addEventListener("scroll",v),window.addEventListener("resize",g),()=>{window.removeEventListener("mousemove",x),window.removeEventListener("scroll",v),window.removeEventListener("resize",g),cancelAnimationFrame(w.current),u.current.removeChild(n.domElement)}},[]),P.jsx("div",{ref:u,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})};export{D as T};
