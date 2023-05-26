"use strict";(self.webpackChunksocial_project=self.webpackChunksocial_project||[]).push([[714],{2618:function(n,t,i){i.r(t),i.d(t,{UserProfile:function(){return cn},default:function(){return pn}});var e,o,a,s,r=i(8683),l=i(5671),c=i(3144),d=i(136),p=i(516),h=i(8687),u=i(2791),f=i.p+"static/media/ui-designer.0ee336426bded9735233.jpg",g=i(168),x=i(6444),m=x.ZP.form(e||(e=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n\n  & textarea {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n    color: rgba(141, 141, 141, 1);\n    border: none;\n    padding: 0;\n    border-radius: 5px;\n    resize: none;\n    padding: 10px;\n    margin-bottom: 20px;\n    background-color: #ffffff;\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  & textarea::placeholder {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n    color: rgba(141, 141, 141, 1);\n  }\n\n  & button {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 16px;\n    color: rgba(255, 255, 255, 1);\n    background-color: #3577ef;\n    border: none;\n    padding: 0;\n    border-radius: 5px;\n    padding: 5px;\n    width: 130px;\n    align-self: flex-end;\n    cursor: pointer;\n\n    &:hover {\n      opacity: 0.5;\n      border-radius: 0;\n    }\n\n    &:disabled {\n      opacity: 0.2;\n    }\n  }\n"]))),b=i(5078),A=i(8631),j=i(184),v=(0,A.W)("textarea"),w=i(3055),y=(0,h.$j)(null,(function(n){return{addPost:function(t){var i=(0,w.Wl)(t);n(i)}}}))((function(n){return(0,j.jsx)(b.l0,{onSubmit:function(t){n.addPost(t.message)},validate:function(n){var t,i={};return n.message||(i.message="Field is required"),(null===(t=n.message)||void 0===t?void 0:t.length)>10&&(i.message="Max length is 10 symbols"),i},children:function(n){var t=n.handleSubmit;return(0,j.jsxs)(m,{onSubmit:t,children:[(0,j.jsx)(b.gN,{component:v,name:"message",placeholder:"Message...",cols:"30",rows:"3"}),(0,j.jsx)("button",{type:"submit",children:"Send"})]})}})})),Z=x.ZP.ul(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),k=x.ZP.li(a||(a=(0,g.Z)(["\n  position: relative;\n  margin-bottom: 15px;\n  display: grid;\n  grid-template-columns: 32px auto;\n  column-gap: 15px;\n  background-color: #ffffff;\n  padding: 10px;\n  border-radius: 5px;\n\n  & img {\n    border-radius: 5px;\n    grid-row: 1/3;\n  }\n\n  & h3 {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 14px;\n    grid-column: 2;\n  }\n\n  & time {\n    display: inline-flex;\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 24px;\n    grid-column: 2;\n    margin-bottom: 10px;\n  }\n\n  & p {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 15px;\n    line-height: 20px;\n    grid-column: 2/-1;\n  }\n\n  & span {\n    position: absolute;\n    bottom: -5px;\n    right: -5px;\n    display: flex;\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 18px;\n    padding: 3px;\n    background-color: #ffffff;\n    border-radius: 5px;\n    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);\n  }\n\n  & span > img {\n    margin-right: 3px;\n  }\n"]))),I=i(1513),L=(0,h.$j)((function(n){return{posts:n.profilePage.posts}}))((function(n){var t=n.posts;return(0,j.jsx)(Z,{children:null!==t&&void 0!==t&&t.length?(0,j.jsx)(j.Fragment,{children:t.map((function(n){return(0,j.jsxs)(k,{children:[(0,j.jsx)("img",{src:I,width:"32",height:"32",alt:"Avatar."}),(0,j.jsx)("h3",{children:"Amilia Luna"}),(0,j.jsx)("time",{children:n.time}),(0,j.jsx)("p",{children:n.message}),(0,j.jsxs)("span",{children:[(0,j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMHSURBVHgBdVNZbExRGP7OuVvvbB1tpzNNiglVSkMirSAidgki1ggvvEh4kOCFeCCIhz4hPBARjxKJqCWEWCJUPSASqVYXomZsM9OZuXNn7n6P20tIipP8Z/nX7/wLwX8WY4xTUt3VpGLQ/lK42NbWZv1Lj4xlmA8PzKLk1l5a17SKRJI1jFAKJV10RwYeMH32KWHFxa7/BYVxY+EB99USk+mdjLk9jDmDHg15917GzHuMvd3omNfaT7IrV7i/EFhXlx7iJ8knMGOL9+I9kj2p9Os/hrfpo1rAx4ewXvedFzd37/rtoHznYLvsXn1O2jdQBAUwTvAkIggTfBVGPUNH9942ULHB3jyAlmtaH9x0uXM0FPivnQfJzCRVX/SAj4konS2AREREjyXASRxyR9JgaQeh3QHYBe9sjEMYfnnIS/R1kul7Gg492fDtc29IbugZD06rQJQkqIoG8ygPKS7C3FnEuFgURqEEWleLj/VDGL9QZeWWCxN5Qc3UW7YqV745yL4pI+bYMDUDH8IupsWngAuYGFQ+IDDAAFFELvUVpZk6HNsh+vDTqbRcKgiGZaNpeRjDzTqejeTxrKQiuKMGfICCEILYrlp0Vcro9mR9DSqa10VhmhYsVZF4hJNZXeOd6ASbm7N3AkZWa8h80jBxTQzE5v00JxbUQNnnIlItoK4lAE5QUHznQJi1aMivwkBHc3eiMTs3VFvnVS8KV6CgEvlTZA+9azIQywXRFGj5LNLvpbSx9u4kvwpOcMbZbOrOXLFKwc1b30F5EeFoFYIBzndSqThQCgZM3cDGlVXIfdFgCU1nWltbTfKr72nv8ek3ItWp1XwkhLtdBTCXwXFcHwDHjaKhWDa/GpyhI58JvGo5/Hg+IVMM6ncTIW5866VtSqHhvpEtYumcCBriMmSZ96m+PuDzWFFF/rv8Ora4Y82oMcYOk4eE7z+5ZI+r9u+v4nKNgvwzibbmwLAjGUdKnmvZfr2DJBLlv2ZhjCMhdfv07PzbR9MJDBqaPG8wuf7wcw+pMVb3B9kpXSTPDU6mAAAAAElFTkSuQmCC",width:"16",height:"16",alt:"Like."}),n.likes]})]},n.id)}))}):null})})),C=x.ZP.div(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  box-sizing: border-box;\n\n  & h2 {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 20px;\n  }\n"]))),S=function(){return(0,j.jsxs)(C,{children:[(0,j.jsx)("h2",{children:"My posts"}),(0,j.jsx)(y,{}),(0,j.jsx)(L,{})]})},P=i(9948),T=i(5400);var V=i.p+"static/media/facebook.f9ea8d03dd7ca5b6d8f291a3ca6ab966.svg";var z=i.p+"static/media/twitter.c2ab3867c9f67e83cb54209f56ce28f5.svg";var B=i.p+"static/media/instagram.a6d84d26d0572c198e106992ca0296cf.svg";var N,E,U,F,R,M,Q,K,X,Y=i.p+"static/media/vk.ba729f0add075e936cf09547f42b5698.svg",W=x.ZP.ul(N||(N=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-self: center;\n  grid-column: 1;\n"]))),D=x.ZP.li(E||(E=(0,g.Z)(["\n  margin-right: 15px;\n\n  & a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 30px;\n    background-color: rgba(232, 232, 232, 1);\n    border-radius: 50%;\n  }\n\n  & img {\n    border-radius: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]))),G=function(n){var t=n.contacts;return(0,j.jsxs)(W,{children:[(0,j.jsx)(D,{children:(0,j.jsxs)("a",{href:"https://".concat(t.facebook),children:[(0,j.jsx)("img",{src:V,width:"7",height:"14",alt:"Facebook."}),(0,j.jsx)("span",{className:"visually-hidden",children:"Facebook."})]})}),(0,j.jsx)(D,{children:(0,j.jsxs)("a",{href:"https://".concat(t.twitter),children:[(0,j.jsx)("img",{src:z,width:"14",height:"11",alt:"Twitter."}),(0,j.jsx)("span",{className:"visually-hidden",children:"Twitter."})]})}),(0,j.jsx)(D,{children:(0,j.jsxs)("a",{href:"https://".concat(t.instagram),children:[(0,j.jsx)("img",{src:B,width:"14",height:"14",alt:"Instagram."}),(0,j.jsx)("span",{className:"visually-hidden",children:"Instagram."})]})}),(0,j.jsx)(D,{children:(0,j.jsxs)("a",{href:"https://".concat(t.vk),children:[(0,j.jsx)("img",{src:Y,width:"14",height:"14",alt:"Vkontakte."}),(0,j.jsx)("span",{className:"visually-hidden",children:"Linkedin."})]})})]})},H=i(9439),O=x.ZP.div(U||(U=(0,g.Z)(["\n  & span {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 19px;\n    line-height: 19px;\n    cursor: pointer;\n    background-color: rgb(250, 250, 250);\n    min-width: 250px;\n    border-radius: 5px;\n    padding: 5px;\n  }\n\n  & input {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 15px;\n    line-height: 15px;\n    border: none;\n    outline: none;\n    background-color: #3577ef;\n    color: #ffffff;\n    min-width: 250px;\n    border-radius: 5px;\n    padding: 5px;\n  }\n"]))),q=function(n){var t=(0,u.useState)(!1),i=(0,H.Z)(t,2),e=i[0],o=i[1],a=(0,u.useState)(n.status),s=(0,H.Z)(a,2),r=s[0],l=s[1];(0,u.useEffect)((function(){l(n.status)}),[n.status]);return(0,j.jsx)(O,{children:e?(0,j.jsx)("input",{autoFocus:!0,onBlur:function(){o(!1),n.updateStatus(r)},value:r,onChange:function(n){l(n.target.value)},type:"text"}):(0,j.jsx)("span",{onClick:function(){o(!0)},children:r||"No status"})})},J=x.ZP.div(F||(F=(0,g.Z)(["\n  display: grid;\n  grid-template-columns: 200px auto;\n  column-gap: 20px;\n  padding: 20px;\n  box-sizing: border-box;\n\n  & > img {\n    grid-column: 1;\n    grid-row: 1/4;\n    border-radius: 50%;\n    margin-bottom: 20px;\n  }\n\n  & > div {\n    margin-bottom: 20px;\n  }\n\n  & h2 {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 19px;\n    grid-column: 2;\n    margin-right: 15px;\n  }\n\n  & b {\n    grid-column: 2;\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 14px;\n    margin-bottom: 20px;\n  }\n\n  & button {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 16px;\n    color: rgba(255, 255, 255, 1);\n    background-color: #3577ef;\n    border: none;\n    padding: 0;\n    border-radius: 5px;\n    padding: 5px;\n    width: 130px;\n    align-self: flex-end;\n    cursor: pointer;\n    grid-column: 2;\n\n    &:hover {\n      opacity: 0.5;\n      border-radius: 0;\n    }\n\n    &:disabled {\n      opacity: 0.2;\n    }\n  }\n"]))),$=x.ZP.ul(R||(R=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  grid-column: 2;\n"]))),_=x.ZP.li(M||(M=(0,g.Z)(["\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  & small {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 14px;\n    margin-bottom: 2px;\n  }\n\n  & a,\n  span {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n    text-decoration: none;\n    color: #000000;\n  }\n"]))),nn=x.ZP.div(Q||(Q=(0,g.Z)(["\n  display: flex;\n  margin-bottom: 5px;\n  align-items: center;\n"]))),tn=function(n){var t=n.profile,i=n.status,e=n.updateStatus;return(0,j.jsx)(j.Fragment,{children:t?(0,j.jsxs)(J,{children:[(0,j.jsx)("img",{src:null!=t.photos.large?t.photos.large:P,width:"200",height:"200",alt:"Avatar."}),(0,j.jsxs)("div",{children:[(0,j.jsxs)(nn,{children:[(0,j.jsx)("h2",{children:t.fullName}),(0,j.jsx)(q,{status:i,updateStatus:e})]}),(0,j.jsx)("b",{children:t.aboutMe})]}),(0,j.jsxs)($,{children:[t.contacts.website?(0,j.jsxs)(_,{children:[(0,j.jsx)("small",{children:"Website"}),(0,j.jsx)("a",{href:"https://".concat(t.contacts.website),children:t.contacts.website})]}):null,t.contacts.youtube?(0,j.jsxs)(_,{children:[(0,j.jsx)("small",{children:"Youtube"}),(0,j.jsx)("a",{href:"https://".concat(t.contacts.youtube),children:t.contacts.youtube})]}):null,t.contacts.github?(0,j.jsxs)(_,{children:[(0,j.jsx)("small",{children:"Github"}),(0,j.jsx)("a",{href:"https://".concat(t.contacts.github),children:t.contacts.github})]}):null,t.contacts.mainLink?(0,j.jsxs)(_,{children:[(0,j.jsx)("small",{children:"Mainlink"}),(0,j.jsx)("a",{href:"https://".concat(t.contacts.mainLink),children:t.contacts.mainLink})]}):null,t.lookingForAJob?(0,j.jsxs)(_,{children:[(0,j.jsx)("small",{children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443"}),(0,j.jsx)("span",{children:t.lookingForAJobDescription})]}):null]}),(0,j.jsx)(G,{contacts:t.contacts}),(0,j.jsx)("button",{type:"button",children:"Message"})]}):(0,j.jsx)(T.p,{})})},en=x.ZP.section(K||(K=(0,g.Z)(["\n  background-color: rgba(0, 0, 0, 0.24);\n  border-radius: 10px;\n  box-sizing: border-box;\n"]))),on=x.ZP.img(X||(X=(0,g.Z)(["\n  object-fit: cover;\n  object-position: bottom;\n  border-radius: 10px 10px 0 0;\n"]))),an=function(n){return(0,j.jsxs)(en,{children:[(0,j.jsx)(on,{src:f,width:"920",height:"400",alt:"Work desc."}),(0,j.jsx)(tn,(0,r.Z)({},n)),(0,j.jsx)(S,{})]})},sn=i(7689),rn=i(5603),ln=i(7781),cn=function(n){(0,d.Z)(i,n);var t=(0,p.Z)(i);function i(){return(0,l.Z)(this,i),t.apply(this,arguments)}return(0,c.Z)(i,[{key:"componentDidMount",value:function(){this.props.getProfile(this.props.router.params.userId,this.props.id),this.props.getStatus(this.props.router.params.userId,this.props.id)}},{key:"render",value:function(){return(0,j.jsx)(an,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})}}]),i}(u.Component),dn={getProfile:w.Ai,getStatus:w.lR,updateStatus:w.Nf},pn=(0,ln.qC)((function(n){return function(t){var i=(0,sn.TH)(),e=(0,sn.s0)(),o=(0,sn.UO)();return(0,j.jsx)(n,(0,r.Z)((0,r.Z)({},t),{},{router:{location:i,navigate:e,params:o}}))}}),rn.D,(0,h.$j)((function(n){return{profile:n.profilePage.profile,id:n.auth.id,status:n.profilePage.status,isAuth:n.auth.isAuth}}),dn))(cn)},8631:function(n,t,i){i.d(t,{W:function(){return u}});var e,o,a=i(8683),s=i(5987),r=i(168),l=i(6444),c=l.ZP.div(e||(e=(0,r.Z)(["\n  position: relative;\n"]))),d=l.ZP.span(o||(o=(0,r.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n  color: rgba(53, 119, 239, 1);\n  width: 250px;\n  bottom: 0;\n  right: ",";\n  top: ",";\n\n  & img {\n    margin-right: 5px;\n  }\n"])),(function(n){var t="".concat(n.$right,"px");return void 0===n.$right&&(t="none"),t}),(function(n){var t="".concat(n.$top,"px");return void 0===n.$top&&(t="none"),t})),p=i(184),h=["input","meta"],u=function(n){return function(t){var i=t.input,e=t.meta,o=(0,s.Z)(t,h),r=e.touched&&e.error;return(0,p.jsxs)(c,{children:[(0,p.jsx)(n,(0,a.Z)((0,a.Z)({},i),o)),r&&(0,p.jsxs)(d,{$right:o.right,$top:o.top,children:[(0,p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/ElEQVR4nO2avWsUURDAt/KjUBT86rSwslG5984PBBtRBEUbQWNvFy4m3symOluNhaIgdsY/wCImqI11CNbmcjkQkliodzNL0hgjWZnLeVF2N95t3tu9PTIwsHDce/N7M2925r11nC3pUTnnenvzRb6ukUY08IRGKisg0kDLomvPPN38bSSHdO14gfc43SBH+/3tuki3FdB7hfRLI/udqPxHAb/VSH0ylpO0nL47t1MDD2rkL50aHwkFvKCAB86XPu9IBEJB/bJGqpoCCCjQrAbvkjUAcb1CfmINIKivxPNGIU4NLx1UQB8ThPCb3pk6M7R0wAwE8pGGu5OGwFZCqIgNm4I4Mby4X9JoWhC6pVTV974eigUh2SOVcMLoMIuVohXw89SNx4A+jZFiUzfaD9O8611sP80CzaRtsI4Osdm2XprNN7aRSRXyy7zr3RDVwGPmxqVCG97gBWMTut6d1gIh3ze4QPMbbnwpAE2GgS0Qjezn3PqtSBCpYrMCooEnIvuJOKV4WiAKaCVfqu0OgKw1RQZXzLZHkH1dpCthYfUocyBAD4MbvdGCZg2Ex4IeQapkDgSpHAZSzxwI0LeQ0KLlzIEg/ehdENUroaUsVLwJZK3pEI/wuHEQoNcC01CkD4mkXy1HnaYnsqwK6UEiJYp1LYaUKHKgbLpotKv0M7RobGaud2Zdv94hKuBRw2OPh0I090mfrawlz0bHhvrNVFpdkyAKef5Yyd8WCdKYEHjA3KrxqJ3Qov4NIf54pTuOSTnCG1Rp+8RR7ifSNliHe2JVud6FtiDWYfhZ+obzvwr8uCOIVogBTXUPBE3+d4NHSW5wcV937BeqymWTsxmRSxYbbXC7qoBmTg7RYceEyPVXKmEGNCmXTY6dy1BaTQjihdW7d7mfsBtqVO44xW7OO1SQUsGcB3hO3tipfAEhk8qpuBzuyVlsjI28IlWsFICxU6tpkd5AIV2VY0yF/Eb6aQVU++ujmppC/iTtqXR20hSdLX7fZdyQLXG6Q34DAPL2y/MUXbkAAAAASUVORK5CYII=",alt:"Warning.",width:"20",height:"20"}),e.error]})]})}}},5603:function(n,t,i){i.d(t,{D:function(){return l}});var e=i(8683),o=i(7689),a=i(8687),s=i(184),r=function(n){return{isAuth:n.auth.isAuth}},l=function(n){return(0,a.$j)(r)((function(t){return(0,s.jsx)(s.Fragment,{children:t.isAuth?(0,s.jsx)(n,(0,e.Z)({},t)):(0,s.jsx)(o.Fg,{to:"/login"})})}))}},1513:function(n,t,i){n.exports=i.p+"static/media/my-avatar.f702215cbcb13609cf2e.jpg"}}]);
//# sourceMappingURL=714.7c40af95.chunk.js.map