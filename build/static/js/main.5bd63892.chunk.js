(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=t(2),l=t(3),i=t.n(l),m="http://localhost:3001/api/persons",s=function(){return i.a.get(m).then((function(e){return e.data}))},d=function(e){return i.a.post(m,e).then((function(e){return e.data}))},f=function(e){return i.a.delete(m+"/".concat(e)).then((function(n){return e}))},h=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},p=(t(36),function(e){return r.a.createElement("div",null,e.persons.map((function(n,t){return r.a.createElement("div",{key:t},!0===e.persons[t].name.toUpperCase().includes(e.filter.toUpperCase())&&r.a.createElement("div",null,e.persons[t].name," ",e.persons[t].number,r.a.createElement("button",{onClick:function(){window.confirm("Delete ".concat(n.name))&&e.delete(n.id)}},"delete")))})))}),b=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{onChange:e.handleFilter}))},v=function(e){return null===e.message?r.a.createElement(r.a.Fragment,null):e.message.includes("has already been removed from server")?r.a.createElement("div",{className:"error"},e.message):r.a.createElement("div",{className:"style"},e.message)},g=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),l=Object(o.a)(c,2),i=l[0],m=l[1],g=Object(a.useState)(""),w=Object(o.a)(g,2),j=w[0],N=w[1],O=Object(a.useState)(""),C=Object(o.a)(O,2),y=C[0],k=C[1],S=Object(a.useState)(null),T=Object(o.a)(S,2),F=T[0],P=T[1];Object(a.useEffect)((function(){s().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:F}),r.a.createElement(E,{handleFilter:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(b,{addPerson:function(e){console.log(),e.preventDefault();var n={name:i,number:j};if(t.some((function(e){return e.name===i}))){var a=t.find((function(e){return e.name===i})).id,r=t.find((function(e){return e.id===a})).name;window.confirm("".concat(i," is already added to phonebook,\n          replace the old number with a new one?"))&&h(a,n).then((function(e){u(t.map((function(n){return n.id!==a?n:e}))),P("Updated ".concat(r)),setTimeout((function(){return P(null)}),3e3)})).catch((function(e){P("Information of ".concat(r," has already been removed from server")),setTimeout((function(){P(null)}),3e3),u(t.filter((function(e){return e.id!==a})))}))}else d(n).then((function(e){console.log(e),u(t.concat(e)),m(""),N(""),P("Added ".concat(n.name)),setTimeout((function(){return P(null)}),3e3)}))},newName:i,newNumber:j,handleNameChange:function(e){m(e.target.value)},handleNumberChange:function(e){N(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(p,{filter:y,persons:t,delete:function(e){f(e).then((function(n){u(t.filter((function(n){return n.id!==e})));var a=t.find((function(n){return n.id===e})).name;P("deleted user ".concat(a)),setTimeout((function(){return P(null)}),3e3)}))}}))};c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5bd63892.chunk.js.map