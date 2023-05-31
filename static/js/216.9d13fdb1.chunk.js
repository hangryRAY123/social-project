"use strict";(self.webpackChunksocial_project=self.webpackChunksocial_project||[]).push([[216],{8216:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,o,i,u,a,s,f,c,l=t(168),p=t(6444),d=p.ZP.section(r||(r=(0,l.Z)(["\n  background-color: rgba(0, 0, 0, 0.24);\n  border-radius: 10px;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),g=t(8683),h=t(5671),x=t(3144),v=t(136),y=t(516),m=t(8687),b=t(2938),w=t(2791),P=p.ZP.ul(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n"]))),j=p.ZP.li(i||(i=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 25px;\n\n  & img {\n    border-radius: 50%;\n    margin-right: 10px;\n    transition: 0.3s ease;\n  }\n\n  & h3 {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 20px;\n  }\n\n  & span {\n    font-family: 'Lato', 'Tahoma', sans-serif;\n    font-weight: 700;\n    font-size: 13px;\n    line-height: 13px;\n  }\n\n  & div:first-of-type {\n    margin-right: 20px;\n    width: 250px;\n  }\n\n  & span {\n    display: inline-block;\n  }\n\n  & a:hover img {\n    border-radius: 0;\n  }\n"]))),k=p.ZP.button(u||(u=(0,l.Z)(["\n  font-family: 'Lato', 'Tahoma', sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  color: #000000;\n  background-color: #ffffff;\n  border: none;\n  padding: 0;\n  border-radius: 5px;\n  padding: 10px;\n  width: 130px;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.5;\n    border-radius: 0;\n  }\n\n  &:disabled {\n    opacity: 0.2;\n    pointer-events: none;\n  }\n"]))),C=p.ZP.button(a||(a=(0,l.Z)(["\n  font-family: 'Lato', 'Tahoma', sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  color: #ffffff;\n  background-color: #3577ef;\n  border: none;\n  padding: 0;\n  border-radius: 5px;\n  padding: 10px;\n  width: 130px;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.5;\n    border-radius: 0;\n  }\n\n  &:disabled {\n    opacity: 0.2;\n    pointer-events: none;\n  }\n"]))),Z=p.ZP.div(s||(s=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  & button:first-of-type {\n    margin-right: 10px;\n  }\n\n  & button:last-of-type {\n    margin-left: 5px;\n  }\n"]))),F=p.ZP.button(f||(f=(0,l.Z)(["\n  font-family: 'Lato', 'Tahoma', sans-serif;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 400;\n  border: none;\n  padding: 10px 5px;\n  border-radius: 10px 5px;\n  min-width: 40px;\n  color: ",";\n  background-color: ",";\n  pointer-events: ",";\n  margin-right: 5px;\n\n  &:hover {\n    opacity: 0.5;\n    border-radius: 0;\n  }\n\n  &:disabled {\n    opacity: 0.2;\n    pointer-events: none;\n  }\n"])),(function(n){var e="#000000";return n.$currentPage===n.$e&&(e="#ffffff"),e}),(function(n){var e="#ffffff";return n.$currentPage===n.$e&&(e="#3577ef"),e}),(function(n){var e="all";return n.$currentPage===n.$e&&(e="none"),e})),z=p.ZP.button(c||(c=(0,l.Z)(["\n  font-family: 'Lato', 'Tahoma', sans-serif;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 400;\n  border: none;\n  background-color: #ffffff;\n  border-radius: 10px 5px;\n\n  &:hover {\n    background-color: #3577ef;\n    color: #ffffff;\n    opacity: 1;\n  }\n\n  &:disabled {\n    opacity: 0.2;\n    pointer-events: none;\n  }\n"]))),U=t(9948),A=t(1087),$=t(184),L=function(n){for(var e,t=Math.ceil(n.totalUsersCount/n.pageSize),r=[],o=1;o<=t;o++)r.push(o);var i=n.currentPage,u=i-3<0?0:i-3,a=i+2,s=r.slice(u,a);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(P,{children:null!==(e=n.users)&&void 0!==e&&e.length?(0,$.jsx)($.Fragment,{children:n.users.map((function(e){return(0,$.jsxs)(j,{children:[(0,$.jsx)(A.OL,{to:"/profile/".concat(e.id),children:(0,$.jsx)("img",{src:null!=e.photos.small?e.photos.small:U,width:"50",height:"50",alt:"Avatar."})}),(0,$.jsx)("div",{children:(0,$.jsx)("h3",{children:e.name})}),(0,$.jsx)("div",{children:e.followed?(0,$.jsx)(C,{onClick:function(){return n.onUnfollow(e.id)},type:"button",disabled:n.isFollowingProgress.some((function(n){return n===e.id})),children:"Unfollow"}):(0,$.jsx)(k,{onClick:function(){return n.onFollow(e.id)},type:"button",disabled:!n.isAuth||n.isFollowingProgress.some((function(n){return n===e.id})),children:"Follow"})})]},e.id)}))}):null}),(0,$.jsxs)(Z,{children:[1!==n.currentPage&&(0,$.jsx)(z,{type:"button",onClick:function(){n.getChangeUsers(n.currentPage-1)},children:"Prev"}),s.map((function(e){return(0,$.jsx)(F,{$e:e,$currentPage:n.currentPage,onClick:function(){n.getChangeUsers(e)},type:"button",children:e},e)})),n.currentPage!==n.totalUsersCount&&(0,$.jsx)(z,{type:"button",onClick:function(){n.getChangeUsers(n.currentPage+1)},children:"Next"})]})]})},S=t(5400),T=t(7781),E="NOT_FOUND";var O=function(n,e){return n===e};function q(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?O:r,i=t.maxSize,u=void 0===i?1:i,a=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),f=1===u?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:E},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return E}return{get:r,put:function(e,o){r(e)===E&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,s);function c(){var e=f.get(arguments);if(e===E){if(e=n.apply(null,arguments),a){var t=f.getEntries().find((function(n){return a(n.value,e)}));t&&(e=t.value)}f.put(arguments,e)}return e}return c.clearCache=function(){return f.clear()},c}function R(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,u=0,a={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(a=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var f=a.memoizeOptions,c=void 0===f?t:f,l=Array.isArray(c)?c:[c],p=function(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}(r),d=n.apply(void 0,[function(){return u++,s.apply(null,arguments)}].concat(l)),g=n((function(){for(var n=[],e=p.length,t=0;t<e;t++)n.push(p[t].apply(null,arguments));return i=d.apply(null,n)}));return Object.assign(g,{resultFunc:s,memoizedResultFunc:d,dependencies:p,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),g}}var M=R(q),N=M((function(n){return n.usersPage.users}),(function(n){return n})),_=M((function(n){return n.usersPage.pageSize}),(function(n){return n})),D=M((function(n){return n.usersPage.totalUsersCount}),(function(n){return n})),I=M((function(n){return n.usersPage.currentPage}),(function(n){return n})),K=M((function(n){return n.usersPage.isFetching}),(function(n){return n})),W=M((function(n){return n.usersPage.isFollowingProgress}),(function(n){return n})),B=M((function(n){return n.auth.isAuth}),(function(n){return n})),G=function(n){(0,v.Z)(t,n);var e=(0,y.Z)(t);function t(){return(0,h.Z)(this,t),e.apply(this,arguments)}return(0,x.Z)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,$.jsx)($.Fragment,{children:this.props.isFetching?(0,$.jsx)(S.p,{}):(0,$.jsx)(L,(0,g.Z)({},this.props))})}}]),t}(w.Component),H={getUsers:b.Rf,getChangeUsers:b.FW,onUnfollow:b.MK,onFollow:b.zy},J=(0,T.qC)((0,m.$j)((function(n){return{users:N(n),pageSize:_(n),totalUsersCount:D(n),currentPage:I(n),isFetching:K(n),isFollowingProgress:W(n),isAuth:B(n)}}),H))(G),Q=function(){return(0,$.jsx)(d,{children:(0,$.jsx)(J,{})})}}}]);
//# sourceMappingURL=216.9d13fdb1.chunk.js.map