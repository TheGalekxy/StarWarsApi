(this["webpackJsonpstarwars-api-app"]=this["webpackJsonpstarwars-api-app"]||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),c=a.n(s),o=(a(17),a(1)),p=a(2),l=a.n(p),i=a(9),u=a(3),h=a(6),m=a(7),g=a(10),f=a(8),b=a(11),d=function(e){var t=e.name,a=e.gender,n=e.weight,s=e.species;return r.a.createElement("div",{className:"tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(s,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null," ",t," "),r.a.createElement("p",null," Gender: ",a," "),r.a.createElement("p",null," Weight: ",n," ")))},w=function(e){var t=e.people;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(d,{key:t[a].url,species:t[a].species,name:t[a].name,gender:t[a].gender,weight:t[a].mass})})))},v=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-light-gray w-20 tc",type:"search",placeholder:"Search Star Wars Characters",onChange:t}))},y=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"80vh"}},e.children)},j=(a(19),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(g.a)(this,Object(f.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={people:[],searchfield:""},e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=["https://swapi.py4e.com/api/people/","https://swapi.py4e.com/api/people/?page=2","https://swapi.py4e.com/api/people/?page=3","https://swapi.py4e.com/api/people/?page=4","https://swapi.py4e.com/api/people/?page=5","https://swapi.py4e.com/api/people/?page=6","https://swapi.py4e.com/api/people/?page=7","https://swapi.py4e.com/api/people/?page=8","https://swapi.py4e.com/api/people/?page=9"];(function(){var a=Object(u.a)(l.a.mark((function a(){var n,r,s,c,p,h,m,g,f,b,d,w;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Promise.all(t.map(function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:n=a.sent,r=Object(i.a)(n,9),s=r[0],c=r[1],p=r[2],h=r[3],m=r[4],g=r[5],f=r[6],b=r[7],d=r[8],w=[].concat(Object(o.a)(s.results),Object(o.a)(c.results),Object(o.a)(p.results),Object(o.a)(h.results),Object(o.a)(m.results),Object(o.a)(g.results),Object(o.a)(f.results),Object(o.a)(b.results),Object(o.a)(d.results)),e.setState({people:w}),console.log("page1",s.results),console.log("page2",c.results),console.log("page3",p.results),a.next=24;break;case 21:a.prev=21,a.t0=a.catch(0),console.log(a.t0);case 24:case"end":return a.stop()}}),a,null,[[0,21]])})));return function(){return a.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this.state,t=e.people,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Star Wars Api Project"),r.a.createElement(v,{searchChange:this.onSearchChange}),r.a.createElement(y,null,r.a.createElement(w,{people:n}))):r.a.createElement("h1",null," Loading.... ")}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(20);c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.72ec61a6.chunk.js.map