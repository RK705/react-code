(this["webpackJsonpreact-login-signup-ui-template"]=this["webpackJsonpreact-login-signup-ui-template"]||[]).push([[0],{28:function(e,t,a){e.exports=a(58)},33:function(e,t,a){},35:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a.n(c),o=a(6),s=(a(33),a(4)),m=(a(34),a(35),a(8)),i=a(11),u=a.n(i);u.a.defaults.headers.post["Content-Type"]="application/json",u.a.defaults.baseURL="https://selfie---app.herokuapp.com/";var p=function(e){return console.log("CAlling to backend Login"),u.a.post("/auth/login",e)},b=function(e){return u.a.post("/auth/register",e)},g=Object(m.g)((function(e){Object(m.f)();console.log(e);var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),u=i[0],b=i[1],g=Object(n.useState)(!1),f=Object(s.a)(g,2),E=f[0],d=f[1],h=Object(n.useState)(null),v=Object(s.a)(h,2),N=v[0],j=v[1];return l.a.createElement("form",null,l.a.createElement("h3",null,"Sign In"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"User Name"),l.a.createElement("input",{onChange:function(e){return r(e.target.value)},type:"text",className:"form-control",placeholder:"Enter Username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{onChange:function(e){return b(e.target.value)},type:"password",className:"form-control",placeholder:"Enter password"})),l.a.createElement("button",{onClick:function(e){e.preventDefault(),p({user:c,pass:u}).then((function(e){console.log(e),d(!0),j("LogIn SuccessFull"),localStorage.setItem("token",e.data.token),window.location="https://selfie---app.herokuapp.com/main/index.html"})).catch((function(e){console.log(e),j("Wrong Username or Password")}))},type:"submit",className:"btn btn-primary btn-block"},"Submit"),E?l.a.createElement("p",null,"Sign in Successful"):l.a.createElement("p",null,N))})),f=function(){var e=Object(m.f)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),u=i[0],p=i[1],g=Object(n.useState)(""),f=Object(s.a)(g,2),E=f[0],d=f[1],h=function(e,t){return t(e.target.value)},v=Object(n.useState)(null),N=Object(s.a)(v,2),j=N[0],O=N[1];return l.a.createElement("form",null,l.a.createElement("h3",null,"Sign Up"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{onChange:function(e){return h(e,d)},type:"text",className:"form-control",placeholder:"Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{onChange:function(e){return h(e,r)},type:"text",className:"form-control",placeholder:"Username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{onChange:function(e){return h(e,p)},type:"password",className:"form-control",placeholder:"Enter password"})),l.a.createElement("button",{onClick:function(t){t.preventDefault(),b({user:c,name:E,pass:u}).then((function(t){O("Registration Successfull"),e.push("/sign-in"),console.log(t)})).catch((function(){O("Registration Failed")}))},type:"submit",className:"btn btn-primary btn-block"},"Sign Up"),l.a.createElement("p",{className:"text-right"},j))};var E=function(){Object(m.f)();var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");c(e),console.log("Token set")}),[a]),l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement(o.b,{className:"navbar-brand",to:"/sign-in"},"Selfie App"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/sign-in"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/sign-up"},"Sign up")),l.a.createElement("li",{className:"nav-item"}))))),l.a.createElement("div",{className:"auth-wrapper"},l.a.createElement("div",{className:"auth-inner"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:g}),l.a.createElement(m.a,{path:"/sign-in",render:function(){return l.a.createElement(g,{token:c})}}),l.a.createElement(m.a,{path:"/sign-up",component:f}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(o.a,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.d6ee7b72.chunk.js.map