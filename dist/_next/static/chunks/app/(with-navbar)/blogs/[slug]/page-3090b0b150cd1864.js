(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[153],{98244:(e,t,r)=>{Promise.resolve().then(r.bind(r,82991))},82991:(e,t,r)=>{"use strict";r.d(t,{default:()=>_});var i=r(95155),o=r(35761),a=r(63592),n=r(93369),s=r(10810),l=r(49234),d=r(51239),c=r(46106),x=r(894),p=r(87215),h=r(30405),m=r(23160),g=r(34133),b=r(926),u=r(64564),f=r(5565),y=r(48173),j=r.n(y),v=r(12115),A=r(98650),k=r(52746),w=r(78416),C=r(89718),S=r(79371),z=r(86748),W=r(63794),R=r(36417),F=r(27753),I=r(74867);let P=e=>{let{onClose:t,feedbackType:r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(R.A,{sx:{m:0,p:2,backgroundColor:"background.paper"},children:[(0,i.jsx)(s.A,{variant:"h6",component:"div",sx:{fontWeight:600},children:(()=>{switch(r){case"bug":return"Report a Bug";case"feature":return"Request a Feature";case"praise":return"Share Your Praise";default:return"General Feedback"}})()}),(0,i.jsx)(x.A,{onClick:t,sx:{position:"absolute",right:8,top:8,color:"text.secondary"},children:(0,i.jsx)(I.A,{})})]}),(0,i.jsx)(F.A,{sx:{mt:1,height:"60vh",minHeight:400,p:0},children:(0,i.jsx)("iframe",{src:(()=>{switch(r){case"bug":return"https://tally.so/embed/wLErVl";case"feature":return"https://tally.so/embed/w7JAe0";case"praise":return"https://tally.so/embed/mYo6yW";default:return"https://tally.so/embed/mRZNlj"}})(),width:"100%",height:"100%",frameBorder:"0",marginHeight:0,marginWidth:0,title:"Feedback Form",style:{background:"transparent",border:"none"}})})]})},E=[{type:"general",label:"General Feedback",icon:(0,i.jsx)(C.A,{})},{type:"bug",label:"Report a Bug",icon:(0,i.jsx)(S.A,{})},{type:"feature",label:"Feature Request",icon:(0,i.jsx)(z.A,{})},{type:"praise",label:"Share Praise",icon:(0,i.jsx)(W.A,{})}];function B(){let[e,t]=(0,v.useState)(null),[r,o]=(0,v.useState)(!1),[n,l]=(0,v.useState)("general"),d=()=>{t(null)},c=e=>{l(e),d(),o(!0)},p=()=>{o(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{sx:{position:"fixed",bottom:20,left:20,zIndex:9999,display:"flex",flexDirection:"column",alignItems:"flex-start"},children:(0,i.jsx)(x.A,{onClick:e=>{t(e.currentTarget)},sx:{backgroundColor:"primary.main",color:"white","&:hover":{backgroundColor:"primary.dark",transform:"translateY(-4px)"},width:48,height:48,borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",transition:"all 0.2s ease-in-out"},children:(0,i.jsx)(C.A,{})})}),(0,i.jsx)(A.A,{anchorEl:e,open:!!e,onClose:d,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"},PaperProps:{sx:{mt:-1,minWidth:220,borderRadius:"12px",backgroundColor:"rgba(255, 255, 255, 0.9)",backdropFilter:"blur(10px)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.08)"}},children:E.map(e=>(0,i.jsxs)(k.A,{onClick:()=>c(e.type),sx:{py:1.5,px:2,display:"flex",alignItems:"center",gap:2,borderRadius:"8px",mx:.5,my:.5,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.04)"}},children:[(0,i.jsx)(a.A,{sx:{color:"primary.main",display:"flex",alignItems:"center"},children:e.icon}),(0,i.jsx)(s.A,{sx:{fontWeight:500,fontSize:"0.9rem"},children:e.label})]},e.type))}),(0,i.jsx)(w.A,{open:r,onClose:p,maxWidth:"lg",fullWidth:!0,children:(0,i.jsx)(P,{feedbackType:n,onClose:p})})]})}var O=r(94206);let D={background:"linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},L={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},T={hidden:{scale:1.2,opacity:0},visible:{scale:1,opacity:1,transition:{duration:.8,ease:"easeOut"}}},X={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};function _(e){var t;let{post:r,relatedPosts:y}=e,A=(0,o.A)(),{scrollYProgress:k}=(0,p.L)(),w=(0,h.z)(k,{stiffness:100,damping:30,restDelta:.001}),[C,S]=(0,v.useState)(!1),z=(0,m.G)(k,[0,1],[0,100]),[W,R]=(0,v.useState)(0);return(0,v.useEffect)(()=>{let e=z.onChange(e=>R(e));return()=>e()},[z]),(0,v.useEffect)(()=>{{let e=()=>{S(window.scrollY>400)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{component:g.P.div,style:{position:"fixed",top:0,left:0,right:0,height:"4px",background:"linear-gradient(to right, #6366f1, #8b5cf6, #d946ef)",transformOrigin:"0%",scaleX:w,zIndex:A.zIndex.appBar+1}}),(0,i.jsxs)(a.A,{sx:{minHeight:"500px",position:"relative",overflow:"hidden",bgcolor:"white",borderBottom:"1px solid",borderColor:"divider",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,i.jsx)(a.A,{sx:{position:"absolute",top:0,left:0,right:0,bottom:0,opacity:.03,backgroundImage:"radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)",backgroundSize:"40px 40px",zIndex:1}}),(0,i.jsx)(n.A,{maxWidth:"xl",children:(0,i.jsxs)(a.A,{sx:{display:"flex",alignItems:"center",gap:{xs:4,md:8},position:"relative",zIndex:2},children:[(0,i.jsxs)(a.A,{component:g.P.div,variants:X,initial:"hidden",animate:"visible",sx:{flex:1,paddingRight:"40px"},children:[(0,i.jsx)(s.A,{variant:"h1",sx:{fontSize:{xs:"2rem",sm:"2.5rem",md:"3rem"},fontWeight:700,fontFamily:"'Plus Jakarta Sans', sans-serif",...D,mb:2},children:r.title}),(0,i.jsxs)(a.A,{sx:{display:"flex",gap:2,flexWrap:"wrap",mb:3},children:[(0,i.jsx)(l.A,{icon:(0,i.jsx)(b.A,{sx:{fontSize:16}}),label:"".concat(r.readTime),sx:{borderRadius:"8px",background:"transparent",border:"1px solid",borderColor:(0,d.X4)(A.palette.primary.main,.3),color:A.palette.primary.main,"& .MuiChip-icon":{color:A.palette.primary.main}}}),(0,i.jsx)(l.A,{label:"Expert Insights",sx:{borderRadius:"8px",background:"transparent",border:"1px solid",borderColor:(0,d.X4)(A.palette.success.main,.3),color:A.palette.success.main}}),null===(t=r.tags)||void 0===t?void 0:t.map((e,t)=>(0,i.jsx)(l.A,{label:e,sx:{borderRadius:"8px",background:"transparent",border:"1px solid",borderColor:(0,d.X4)(A.palette.secondary.main,.3),color:A.palette.secondary.main}},t))]})]}),(0,i.jsxs)(a.A,{component:g.P.div,variants:T,initial:"hidden",animate:"visible",sx:{width:"600px",height:"400px",position:"relative",borderRadius:"24px",overflow:"hidden",boxShadow:"0 20px 40px rgba(0,0,0,0.1)",flex:"0 0 auto",display:"flex",alignItems:"center",justifyContent:"center",background:"#ffffff"},children:[(0,i.jsx)(a.A,{sx:{position:"relative",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent"},children:(0,i.jsx)(f.default,{src:r.imgSrc,alt:r.title,fill:!0,style:{objectFit:"contain",margin:"auto",borderRadius:"24px"},onLoadingComplete:e=>{e.naturalWidth/e.naturalHeight>1.5?(e.style.width="100%",e.style.height="auto"):(e.style.height="100%",e.style.width="auto")},priority:!0})}),(0,i.jsx)(a.A,{sx:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(45deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 50%, rgba(217,70,239,0.1) 100%)",mixBlendMode:"overlay",pointerEvents:"none"}})]})]})})]}),(0,i.jsx)(n.A,{maxWidth:"lg",sx:{py:8},children:(0,i.jsxs)(a.A,{component:g.P.div,variants:L,initial:"hidden",animate:"visible",children:[(0,i.jsx)(a.A,{sx:{"& > *":{mb:4},"& h1":{fontSize:"2.5rem",fontWeight:700,color:"text.primary",mb:3},"& h2":{fontSize:"2rem",fontWeight:600,color:"text.primary",mb:2},"& h3":{fontSize:"1.75rem",fontWeight:600,color:"text.primary",mb:2},"& p":{fontSize:"1.125rem",lineHeight:1.8,color:"text.secondary",mb:4},"& ul, & ol":{pl:4,mb:4,"& li":{mb:1,fontSize:"1.125rem",color:"text.secondary"}},"& blockquote":{borderLeft:"4px solid",borderColor:"primary.main",pl:4,py:1,my:4,fontStyle:"italic",color:"text.secondary"},"& code":{bgcolor:"grey.100",p:.5,borderRadius:1,fontFamily:"monospace",fontSize:"0.875em"},"& pre":{bgcolor:"grey.900",color:"common.white",p:2,borderRadius:2,overflowX:"auto","& code":{bgcolor:"transparent",color:"inherit"}},"& img":{maxWidth:"100%",height:"auto",borderRadius:2,my:4},"& a":{color:"primary.main",textDecoration:"none","&:hover":{textDecoration:"underline"}}},children:(0,i.jsx)(O.o,{children:r.content})}),y.length>0&&(0,i.jsxs)(a.A,{sx:{mt:8},children:[(0,i.jsx)(s.A,{variant:"h4",sx:{mb:4,fontWeight:600},children:"Related Posts"}),(0,i.jsx)(a.A,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"},gap:4},children:y.map(e=>(0,i.jsxs)(c.A,{component:j(),href:"/blogs/".concat(e.slug),sx:{p:3,textDecoration:"none",transition:"transform 0.2s","&:hover":{transform:"translateY(-4px)"}},children:[(0,i.jsx)(s.A,{variant:"h6",sx:{mb:2,color:"text.primary"},children:e.title}),(0,i.jsx)(s.A,{variant:"body2",sx:{color:"text.secondary"},children:e.description})]},e.slug))})]})]})}),(0,i.jsx)(a.A,{component:g.P.div,initial:{opacity:0},animate:{opacity:C?1:0},transition:{duration:.3},sx:{position:"fixed",bottom:"2rem",right:"2rem",zIndex:1e3},children:(0,i.jsx)(x.A,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},sx:{bgcolor:(0,d.X4)(A.palette.primary.main,.1),"&:hover":{bgcolor:(0,d.X4)(A.palette.primary.main,.2)},width:48,height:48},children:(0,i.jsx)(u.A,{sx:{color:A.palette.primary.main}})})}),(0,i.jsx)(a.A,{sx:{position:"fixed",bottom:20,right:20},children:(0,i.jsx)(B,{})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[943,766,878,970,173,70,464,198,354,441,517,358],()=>t(98244)),_N_E=e.O()}]);