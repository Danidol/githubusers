(this.webpackJsonptrying=this.webpackJsonptrying||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(4),i=c.n(s),j=(c(9),c(2)),a=c(0),h=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(!0),i=Object(j.a)(s,2),h=i[0],l=i[1],o=Object(r.useState)(!1),b=Object(j.a)(o,2),d=b[0],u=b[1];return Object(r.useEffect)((function(){fetch("https://api.github.com/users").then((function(e){if(e.ok)return e.json();throw l(!1),u(!0),new Error("Users don't exist")})).then((function(e){n(e),l(!1)})).catch((function(e){return console.log(e)}))}),[]),h?Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("h1",{children:"loading..."})}):d?Object(a.jsxs)("div",{className:"message",children:[Object(a.jsx)("h1",{children:"error..."}),Object(a.jsx)("p",{children:"check if the url is correct"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"GitHub Users"})}),Object(a.jsx)("div",{className:"container",children:c.map((function(e){var t=e.login,c=e.id,r=e.avatar_url,n=e.url;return Object(a.jsxs)("div",{className:"user",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:r,alt:t}),Object(a.jsx)("h3",{children:t})]}),Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:n,children:n})]},c)}))})]})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.efceccb3.chunk.js.map