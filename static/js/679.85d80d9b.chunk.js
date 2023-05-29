"use strict";(self.webpackChunksocial_project=self.webpackChunksocial_project||[]).push([[679],{5679:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var i,r,o,a,s=t(6139),p=t(704),l=function(n){if(!n)return"Field is required"},c=t(8631),A=t(168),d=t(6444),g=d.ZP.form(i||(i=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & label {\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin-bottom: 15px;\n  }\n\n  & input {\n    padding: 5px;\n    border: none;\n    border-radius: 5px;\n    outline: none;\n  }\n\n  & small {\n    display: inline-block;\n  }\n\n  & button {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 24px;\n    color: #ffffff;\n    text-decoration: none;\n    background-color: #3577ef;\n    width: 100%;\n    padding: 5px 10px;\n    border-radius: 5px;\n    border: none;\n    width: 100px;\n\n    &:hover {\n      border-radius: 0;\n    }\n  }\n"]))),m=d.ZP.span(r||(r=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  color: #ff0000;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n\n  & img {\n    margin-right: 5px;\n  }\n"]))),h=d.ZP.div(o||(o=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 15px;\n\n  & > img {\n    margin-bottom: 10px;\n  }\n"]))),u=t(6138),x=t(184),f=(0,c.W)("input"),b=(0,p.Z)({form:"login"})((function(n){return(0,x.jsxs)(g,{onSubmit:n.handleSubmit,children:[(0,x.jsx)("label",{children:(0,x.jsx)(s.Z,{component:(0,c.W)("input"),validate:[l],name:"email",placeholder:"Email",type:"text",right:"-255",top:"-2"})}),(0,x.jsx)("label",{children:(0,x.jsx)(s.Z,{component:f,validate:[l],name:"password",placeholder:"Password",type:"password",right:"-255",top:"-2"})}),(0,x.jsxs)("label",{children:[(0,x.jsx)(s.Z,{component:"input",name:"rememberMe",type:"checkbox"}),(0,x.jsx)("small",{children:"remember me"})]}),n.captchaUrl&&(0,x.jsxs)(h,{children:[(0,x.jsx)("img",{src:n.captchaUrl,alt:"Captcha."}),(0,x.jsx)(s.Z,{component:(0,c.W)("input"),validate:[l],name:"captcha",placeholder:"Symbols for image",type:"text",right:"-255",top:"-2"})]}),n.error&&(0,x.jsxs)(m,{children:[(0,x.jsx)("img",{src:u,width:"20",height:"20",alt:"Error."}),n.error]}),(0,x.jsx)("button",{type:"submit",children:"Login"})]})})),j=d.ZP.section(a||(a=(0,A.Z)(["\n  background-color: rgba(0, 0, 0, 0.24);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px;\n\n  & h2 {\n    margin-top: 10px;\n    margin-bottom: 20px;\n    text-transform: uppercase;\n  }\n\n"]))),w=t(4080),C=t(8687),U=t(5796),Z=t(7689),v=(0,C.$j)((function(n){return{captchaUrl:n.auth.captchaUrl,isAuth:n.auth.isAuth}}),{login:U.x4})((function(n){return(0,x.jsx)(x.Fragment,{children:n.isAuth?(0,x.jsx)(Z.Fg,{to:"/profile"}):(0,x.jsxs)(j,{children:[(0,x.jsx)(w.T,{}),(0,x.jsx)("h2",{children:"Login"}),(0,x.jsx)(b,{onSubmit:function(e){n.login(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:n.captchaUrl})]})})}))},8631:function(n,e,t){t.d(e,{W:function(){return g}});var i,r,o=t(8683),a=t(5987),s=t(168),p=t(6444),l=p.ZP.div(i||(i=(0,s.Z)(["\n  position: relative;\n"]))),c=p.ZP.span(r||(r=(0,s.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n  color: rgba(53, 119, 239, 1);\n  width: 250px;\n  bottom: 0;\n  right: ",";\n  top: ",";\n\n  & img {\n    margin-right: 5px;\n  }\n"])),(function(n){var e="".concat(n.$right,"px");return void 0===n.$right&&(e="none"),e}),(function(n){var e="".concat(n.$top,"px");return void 0===n.$top&&(e="none"),e})),A=t(184),d=["input","meta"],g=function(n){return function(e){var t=e.input,i=e.meta,r=(0,a.Z)(e,d),s=i.touched&&i.error;return(0,A.jsxs)(l,{children:[(0,A.jsx)(n,(0,o.Z)((0,o.Z)({},t),r)),s&&(0,A.jsxs)(c,{$right:r.right,$top:r.top,children:[(0,A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/ElEQVR4nO2avWsUURDAt/KjUBT86rSwslG5984PBBtRBEUbQWNvFy4m3symOluNhaIgdsY/wCImqI11CNbmcjkQkliodzNL0hgjWZnLeVF2N95t3tu9PTIwsHDce/N7M2925r11nC3pUTnnenvzRb6ukUY08IRGKisg0kDLomvPPN38bSSHdO14gfc43SBH+/3tuki3FdB7hfRLI/udqPxHAb/VSH0ylpO0nL47t1MDD2rkL50aHwkFvKCAB86XPu9IBEJB/bJGqpoCCCjQrAbvkjUAcb1CfmINIKivxPNGIU4NLx1UQB8ThPCb3pk6M7R0wAwE8pGGu5OGwFZCqIgNm4I4Mby4X9JoWhC6pVTV974eigUh2SOVcMLoMIuVohXw89SNx4A+jZFiUzfaD9O8611sP80CzaRtsI4Osdm2XprNN7aRSRXyy7zr3RDVwGPmxqVCG97gBWMTut6d1gIh3ze4QPMbbnwpAE2GgS0Qjezn3PqtSBCpYrMCooEnIvuJOKV4WiAKaCVfqu0OgKw1RQZXzLZHkH1dpCthYfUocyBAD4MbvdGCZg2Ex4IeQapkDgSpHAZSzxwI0LeQ0KLlzIEg/ehdENUroaUsVLwJZK3pEI/wuHEQoNcC01CkD4mkXy1HnaYnsqwK6UEiJYp1LYaUKHKgbLpotKv0M7RobGaud2Zdv94hKuBRw2OPh0I090mfrawlz0bHhvrNVFpdkyAKef5Yyd8WCdKYEHjA3KrxqJ3Qov4NIf54pTuOSTnCG1Rp+8RR7ifSNliHe2JVud6FtiDWYfhZ+obzvwr8uCOIVogBTXUPBE3+d4NHSW5wcV937BeqymWTsxmRSxYbbXC7qoBmTg7RYceEyPVXKmEGNCmXTY6dy1BaTQjihdW7d7mfsBtqVO44xW7OO1SQUsGcB3hO3tipfAEhk8qpuBzuyVlsjI28IlWsFICxU6tpkd5AIV2VY0yF/Eb6aQVU++ujmppC/iTtqXR20hSdLX7fZdyQLXG6Q34DAPL2y/MUXbkAAAAASUVORK5CYII=",alt:"Warning.",width:"20",height:"20"}),i.error]})]})}}},6138:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABS0lEQVR4nO2VsUoDQRRFD6IgglikTCnYCDZWFvax0Eb9Af2B9PoF6fUL9AvSWdhbWESLoKjgioqChWKhUXwyMAtDeLM7k+wuInlwYeHduWeWecPAqP5yCawJPFitVgWtCbwIiJX5rlUB3negqfbKhs4LfCngb4GFMsFHCjTVcVnQjQxoqvWioZMCNwHgW4GpIsG7AdBUO0VB6wLvfeFXAptW1309460XAT5U/qrj9M+V/sGw0CWBHyX4wvFcKn2zZnlQ6JjAiW+IHF/i8ZyajEHA2xkD9OT4njN8W7HQafsA+AJfHe9b1gYFZmLArZwr0xNYtOrleFuh0FmBj4h7m6dPgbkQcDswMH2PQ7ztPGgjMKgjMC4w4bnHmho+qAnpBoacWX8MuGv8GrgZeXaPVjFrmho49LyG0b0GvqsAnGjglZLhiXfARvUv6xeM0sDGgHVgGgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=679.85d80d9b.chunk.js.map