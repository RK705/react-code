(this["webpackJsonpreact-login-signup-ui-template"]=this["webpackJsonpreact-login-signup-ui-template"]||[]).push([[0],{28:function(e,t,a){e.exports=a(58)},33:function(e,t,a){},35:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a.n(c),o=a(6),s=(a(33),a(4)),i=(a(34),a(35),a(8)),m=a(11),u=a.n(m);u.a.defaults.headers.post["Content-Type"]="application/json",u.a.defaults.baseURL="https://selfie---app.herokuapp.com/";var p=function(e){return console.log("CAlling to backend Login"),u.a.post("/auth/login",e)},g=function(e){return u.a.post("/auth/register",e)},b=Object(i.g)((function(e){Object(i.f)();console.log(e);var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),m=Object(s.a)(o,2),u=m[0],g=m[1],b=Object(n.useState)(!1),f=Object(s.a)(b,2),E=f[0],d=f[1],h=Object(n.useState)(null),v=Object(s.a)(h,2),N=v[0],j=v[1];return l.a.createElement("form",null,l.a.createElement("h3",null,"Sign In"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"User Name"),l.a.createElement("input",{onChange:function(e){return r(e.target.value)},type:"text",className:"form-control",placeholder:"Enter Username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{onChange:function(e){return g(e.target.value)},type:"password",className:"form-control",placeholder:"Enter password"})),l.a.createElement("button",{onClick:function(e){e.preventDefault(),p({user:c,pass:u}).then((function(e){console.log(e),d(!0),j("LogIn SuccessFull"),localStorage.setItem("token",e.data.token),window.location="https://selfie---app.herokuapp.com/main/index.html"})).catch((function(e){console.log(e),j("Wrong Username or Password")}))},type:"submit",className:"btn btn-primary btn-block"},"Submit"),E?l.a.createElement("p",null,"Sign in Successful"):l.a.createElement("p",null,N))})),f=function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),m=Object(s.a)(o,2),u=m[0],p=m[1],b=Object(n.useState)(""),f=Object(s.a)(b,2),E=f[0],d=f[1],h=function(e,t){return t(e.target.value)},v=Object(n.useState)(null),N=Object(s.a)(v,2),j=N[0],O=N[1];return l.a.createElement("form",null,l.a.createElement("h3",null,"Sign Up"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{onChange:function(e){return h(e,d)},type:"text",className:"form-control",placeholder:"Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{onChange:function(e){return h(e,r)},type:"text",className:"form-control",placeholder:"Username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{onChange:function(e){return h(e,p)},type:"password",className:"form-control",placeholder:"Enter password"})),l.a.createElement("button",{onClick:function(t){t.preventDefault(),g({user:c,name:E,pass:u}).then((function(t){O("Registration Successfull"),e.push("/sign-in"),console.log(t)})).catch((function(){O("Registration Failed")}))},type:"submit",className:"btn btn-primary btn-block"},"Sign Up"),l.a.createElement("p",{className:"text-right"},j))};var E=function(){var e=Object(i.f)(),t=Object(n.useState)(null),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");r(e),console.log("Token set")}),[c]),l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement(o.b,{className:"navbar-brand",to:"/sign-in"},"Selfie App"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/sign-in"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/sign-up"},"Sign up")),l.a.createElement("li",{className:"nav-item"},c?l.a.createElement("p",{onClick:function(){localStorage.clear(),e.push("/sign-in")}},"Sign up"):null))))),l.a.createElement("div",{className:"auth-wrapper"},l.a.createElement("div",{className:"auth-inner"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:b}),l.a.createElement(i.a,{path:"/sign-in",render:function(){return l.a.createElement(b,{token:r})}}),l.a.createElement(i.a,{path:"/sign-up",component:f}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(o.a,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.c7aac7e5.chunk.js.map