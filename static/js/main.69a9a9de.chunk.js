(this.webpackJsonpfrontend_test=this.webpackJsonpfrontend_test||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e){e.exports=JSON.parse('{"name":"frontend_test","version":"0.1.0","private":true,"homepage":"https://asherfoster.com/frontend-challenge","dependencies":{"@types/jest":"24.0.18","@types/node":"12.7.11","@types/react":"16.9.5","@types/react-dom":"16.9.1","react":"^16.10.2","react-dom":"^16.10.2","react-router-dom":"^5.1.2","react-scripts":"3.2.0","typescript":"3.6.3"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@testing-library/react":"^9.3.0","@types/react-router-dom":"^5.1.3"}}')},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(24),n(8)),l=n(5),u=n(9),s=n(10),m=r.a.createContext({items:[],total:0,itemCount:0,add:function(){},set:function(){},get:function(){return null},remove:function(){}});m.displayName="CartContext";var p=function(){var e=localStorage.getItem("cartItems");return e?JSON.parse(e):[]}();var d=function(e){function t(e,t){l((function(n){var a,r=n.find((function(t){return t.product.name===e.name}));if(r)if(0===t){var c=n.findIndex((function(e){return e===r}));n.splice(c,1)}else r.quantity=t;else n.push({product:e,quantity:t});return a=n,localStorage.setItem("cartItems",JSON.stringify(a)),Object(s.a)(n)}))}function n(e){return i.find((function(t){return t.product.name===e.name}))||null}var c=Object(a.useState)(p),o=Object(u.a)(c,2),i=o[0],l=o[1],d={items:i,total:i.reduce((function(e,t){return e+t.product.price*t.quantity}),0),itemCount:i.reduce((function(e,t){return e+t.quantity}),0),add:function(e,a){var r=n(e);t(e,r?r.quantity+a:a)},set:t,get:n,remove:function(e){t(e,0)}};return r.a.createElement(m.Provider,{value:d},e.children)},f=function(){return r.a.createElement(m.Consumer,null,(function(e){var t=e.itemCount;return r.a.createElement("nav",{className:"flexWrap",style:{padding:"1em 0"}},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement("span",{className:"flex"}),r.a.createElement(i.b,{to:"/cart"},"Cart",t?" (".concat(t,")"):""))}))};n(30);function h(e){return"$"+Math.round(100*e)/100}var v=function(e){return r.a.createElement(m.Consumer,null,(function(t){var n=t.add;return r.a.createElement("div",{className:"flexWrap alignCenter"}," ",r.a.createElement("div",null,r.a.createElement("p",null,e.product.name),r.a.createElement("i",null,h(e.product.price))),r.a.createElement("span",{className:"flex"}),r.a.createElement("button",{onClick:function(){return n(e.product,1)}},"Add to cart"))}))},E=(n(31),[{name:"Plumpy Nut",price:25.76},{name:"Measles Vaccine",price:90.51},{name:"Therapeutic Milk",price:56.14},{name:"Pencils",price:13.9},{name:"School Bags",price:19.45}]),y=["4 sided triangle","Antikythera mechanism","Canard Dig\xe9rateur","Centennial Light","Clocky","Digital sundial","Dreamachine","Electronic voice phenomenon","Hedy Lamarr","History of perpetual motion machines","Klerksdorp sphere","List of inventors killed by their own inventions","Marvin Heemeyer","Mosquito laser","One red paperclip","Parking chair","Pigeon photography","Project Cybersyn","Royal Mail rubber band","Russian floating nuclear power station","Spork","Tempest Prognosticator","Turboencabulator","Uncanny valley","Useless machine","Wheat lamp","Wrap rage","Xianxingzhe"],g=r.a.createContext({products:[],add:function(){}}),b=function(e){var t=Object(a.useState)(E),n=Object(u.a)(t,2),c=n[0],o=n[1];var i={products:c,add:function(){var e={name:y[Math.floor(Math.random()*y.length)],price:100*Math.random()};c.find((function(t){return t.name===e.name}))&&alert("Oi, stop trying to break this >:("),o([].concat(Object(s.a)(c),[e]))}};return r.a.createElement(g.Provider,{value:i},e.children)},C=function(){return r.a.createElement("div",{className:"productsPage"},r.a.createElement("h2",null,"Welcome to Acme Inc."),r.a.createElement("i",null,'"We\'ll take your money, at a discount!"'),r.a.createElement(g.Consumer,null,(function(e){var t=e.products,n=e.add;return r.a.createElement("div",null,r.a.createElement("ul",{className:"productList"},t.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(v,{product:e}))}))),r.a.createElement("button",{onClick:n},"Add a mystery item"))})))},k=(n(32),function(){return r.a.createElement(m.Consumer,null,(function(e){var t=e.items,n=e.total,a=e.set,c=e.remove;return r.a.createElement("div",{className:"cart"},r.a.createElement("h2",null,"You have ",t.length," items in your cart"),r.a.createElement("ul",{className:"cartItems"},t.map((function(e){return r.a.createElement("li",{key:e.product.name,className:"flexWrap"},r.a.createElement("button",{onClick:function(){return c(e.product)}},"Remove"),r.a.createElement("p",null,e.product.name),r.a.createElement("span",{className:"flex"}),r.a.createElement("input",{type:"number",value:e.quantity,onChange:function(t){return a(e.product,+t.target.value)}}),r.a.createElement("i",{className:"cartItemTotal"},h(e.quantity*e.product.price)))}))),r.a.createElement("div",{className:"flexWrap"},r.a.createElement("span",{className:"flex"}),r.a.createElement("p",{style:{marginRight:"1em"}},"Cart total: ",h(n)),r.a.createElement("a",{className:"button",href:"#",onClick:function(){return window.location.href="https://youtu.be/dQw4w9WgXcQ"}},"Checkout")))}))}),N=n(33).homepage,x=function(){return r.a.createElement(d,null,r.a.createElement(b,null,r.a.createElement(i.a,{basename:N},r.a.createElement("div",{className:"app"},r.a.createElement(f,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/cart",component:k}),r.a.createElement(l.a,{path:"/",component:C}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.69a9a9de.chunk.js.map