(this["webpackJsonpreact-login-signup-ui-template"]=this["webpackJsonpreact-login-signup-ui-template"]||[]).push([[0],{28:function(e,a,t){e.exports=t(58)},33:function(e,a,t){},35:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),o=t(6),s=(t(33),t(4)),m=(t(34),t(35),t(8)),u=t(11),i=t.n(u);i.a.defaults.headers.post["Content-Type"]="application/json",i.a.defaults.baseURL="http://localhost:3333";var p=function(e){return console.log("CAlling to backend Login"),i.a.post("/auth/login",e)},b=function(e){return i.a.post("/auth/register",e)},g=Object(m.g)((function(e){Object(m.f)();console.log(e);var a=Object(n.useState)(""),t=Object(s.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),i=u[0],b=u[1],g=Object(n.useState)(!1),E=Object(s.a)(g,2),f=E[0],d=E[1],h=Object(n.useState)(null),v=Object(s.a)(h,2),N=v[0],j=v[1];return l.a.createElement("form",null,l.a.createElement("h3",null,"Sign In"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"User Name"),l.a.createElement("input",{onChange:function(e){return c(e.target.value)},type:"text",className:"form-control",placeholder:"Enter Username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{onChange:function(e){return b(e.target.value)},type:"password",className:"form-control",placeholder:"Enter password"})),l.a.createElement("button",{onClick:function(e){e.preventDefault(),p({user:r,pass:i}).then((function(e){console.log(e),d(!0),j("LogIn SuccessFull"),localStorage.setItem("token",e.data.token),window.location="https://selfie---app.herokuapp.com/main/index.html"})).catch((function(e){console.log(e),j("Wrong Username or Password")}))},type:"submit",className:"btn btn-primary btn-block"},"Submit"),f?l.a.createElement("p",null,"Sign in Successful"):l.a.createElement("p",null,N))})),E=function(){var e=Object(m.f)(),a=Object(n.useState)(""),t=Object(s.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),i=u[0],p=u[1],g=Object(n.useState)(""),E=Object(s.a)(g,2),f=E[0],d=E[1],h=Object(n.useState)(!1),v=Object(s.a)(h,2),N=v[0],j=v[1],O=function(e,a){return a(e.target.value)},w=Object(n.useState)(null),S=Object(s.a)(w,2),k=S[0],y=S[1];return l.a.createElement("form",null,l.a.createElement("h3",null,"Sign Up"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{onChange:function(e){return O(e,d)},type:"text",className:"form-control",placeholder:"Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{onChange:function(e){return O(e,c)},type:"text",className:"form-control",placeholder:"Username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{onChange:function(e){return O(e,p)},type:"password",className:"form-control",placeholder:"Enter password"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Confirm Password"),l.a.createElement("input",{onChange:function(e){e.target.value!=i?(y("Password do not match"),j(!1)):(y("Password Match"),j(!0))},type:"password",className:"form-control",placeholder:"Enter password"})),l.a.createElement("button",{onClick:function(a){a.preventDefault(),N?b({user:r,name:f,pass:i}).then((function(a){y("Registration Successfull"),e.push("/sign-in"),console.log(a)})).catch((function(){y("Username already taken")})):y("Ensure password matches")},type:"submit",className:"btn btn-primary btn-block"},"Sign Up"),l.a.createElement("p",{className:"text-right"},k))};var f=function(){Object(m.f)();var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");r(e),console.log("Token set")}),[t]),l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement(o.b,{className:"navbar-brand",to:"/sign-in"},"Selfie App"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/sign-in"},"Sign In")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/sign-up"},"Sign Up")),l.a.createElement("li",{className:"nav-item"}))))),l.a.createElement("div",{className:"auth-wrapper"},l.a.createElement("div",{className:"auth-inner"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:g}),l.a.createElement(m.a,{path:"/sign-in",render:function(){return l.a.createElement(g,{token:r})}}),l.a.createElement(m.a,{path:"/sign-up",component:E}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(o.a,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.c956a179.chunk.js.map