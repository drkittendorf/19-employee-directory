(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{51:function(e,t,a){e.exports=a(99)},56:function(e,t,a){},57:function(e,t,a){},81:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),l=a.n(c),s=(a(56),a(22));a(57);var i=function(){return r.a.createElement(s.a,{bg:"dark",variant:"dark",className:"display-flex content-center mb-4"},r.a.createElement(s.a.Brand,{href:"/",className:"text-black"},r.a.createElement("h1",null,"Dale's Employee Directory")))},u=a(18),o=a.n(u),m=a(43),d=a(23),f=a(50),p=(a(81),a(49)),b=a.n(p),h=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([{label:"Last",field:"last",sort:"dsc",width:100},{label:"First",field:"first",sort:"dsc",width:100},{label:"Email",field:"email",sort:"dsc",width:100},{label:"Photo",field:"picture",sort:"dsc",width:100}]),s=Object(d.a)(l,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://randomuser.me/api/?results=200&nat=us");case 2:t=e.sent,a=t.data.results.map((function(e){return{first:e.name.first,last:e.name.last,email:e.email,picture:r.a.createElement("img",{src:e.picture.thumbnail,alt:e.name.first})}})),c(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(f.c,{className:"table",striped:!0,bordered:!0,data:{columns:s,rows:a}})};var E=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(h,null))};l.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.1f396f04.chunk.js.map