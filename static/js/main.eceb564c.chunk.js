(this.webpackJsonpcrickscore=this.webpackJsonpcrickscore||[]).push([[0],{47:function(e,t,a){e.exports=a(61)},52:function(e,t,a){},53:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/vs.27b23a52.png"},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),l=(a(52),a(23)),i=(a(53),a(40)),m=a(86),u=a(79),s=a(82),E=a(83),d=a(37),h=a.n(d),f=function(){return c.a.createElement(u.a,{position:"static"},c.a.createElement(s.a,null,c.a.createElement(E.a,{color:"inherit"},c.a.createElement(h.a,null)),c.a.createElement(i.a,{variant:"h6"},"Crick Score\u26be ")))},p=a(84),g=a(85),y=a(87),v=a(88),b=a(93),S=a(89),k=a(90),w=a(91),j=a(92),C="Enpt2JeWZMZY0L2crKWYblrZ6Qt1",O=function(e){var t=e.match,r=Object(n.useState)({}),o=Object(l.a)(r,2),u=o[0],s=o[1],E=Object(n.useState)(!1),d=Object(l.a)(E,2),h=d[0],f=d[1],O=function(e){(function(e){var t="https://cricapi.com/api/cricketScore?apikey=".concat(C,"&unique_id=").concat(e);return fetch(t).then((function(e){return e.json()})).catch((function(e){return console.log("Error: ",e)}))})(e).then((function(e){console.log(e),s(e),W()})).catch((function(e){console.log(e)}))},W=function(){f(!0)},T=function(){f(!1)};return c.a.createElement(c.a.Fragment,null,"Twenty20"==t.type?c.a.createElement("div",null,c.a.createElement(p.a,{style:{background:t.matchStarted?"#e2e2e2":"",marginTop:15}},c.a.createElement(g.a,null,c.a.createElement(m.a,{container:!0,justify:"center",alignItems:"center",spacing:4},c.a.createElement(m.a,{item:!0},c.a.createElement(i.a,{variant:"h5"},t["team-1"])),c.a.createElement(m.a,{item:!0},c.a.createElement("img",{style:{width:85},src:a(60),alt:""})),c.a.createElement(m.a,{item:!0},c.a.createElement(i.a,{variant:"h5"},t["team-2"])))),c.a.createElement(y.a,null,c.a.createElement(m.a,{container:!0,justify:"center"},c.a.createElement(v.a,{onClick:function(){O(t.unique_id)},variant:"outlined",color:"secondary"},"Show Detail"),c.a.createElement(v.a,{style:{marginLeft:5},variant:"outlined",color:"primary"},"Starting time ",new Date(t.dateTimeGMT).toLocaleString()))))):"",c.a.createElement(b.a,{open:h,onClose:T,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},c.a.createElement(S.a,{id:"alert-dialog-title"},"Match Detail..."),c.a.createElement(k.a,null,c.a.createElement(w.a,{id:"alert-dialog-description"},c.a.createElement(i.a,null,u.stat),c.a.createElement(i.a,null,"Match",c.a.createElement("span",{style:{fontStyle:"italic",fontWeight:"bold"}},u.matchStarted?"Started":"Still not started")),c.a.createElement(i.a,null,"Score",c.a.createElement("span",{style:{fontStyle:"italic",fontWeight:"bold"}}," ",u.score)))),c.a.createElement(j.a,null,c.a.createElement(v.a,{onClick:T,color:"primary",autoFocus:!0},"Close"))))};var W=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e="https://cricapi.com/api/matches?apikey=".concat(C);return fetch(e).then((function(e){return e.json()})).catch((function(e){return console.log("Error: ",e)}))})().then((function(e){return r(e.matches)})).catch((function(e){return alert("Couldn't Load Data")}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(f,null),c.a.createElement(i.a,{variant:"h3",style:{marginTop:20}},"CrickScore- Welcome To Live Cricket \u26be "),c.a.createElement(m.a,{container:!0},c.a.createElement(m.a,{sm:"2"}),c.a.createElement(m.a,{sm:"8"},a.map((function(e){return c.a.createElement(O,{key:e.unique_id,match:e})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.eceb564c.chunk.js.map