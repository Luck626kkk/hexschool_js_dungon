(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(31)},19:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(10),s=a.n(l),c=a(33),i=(a(19),a(3)),o=a(4),u=a(7),m=a(5),p=a(8),f=(a(21),a(22),a(34)),v=function(){return n.a.createElement("h1",{className:"py-3"},"Home")},b=(a(24),function(){for(var e,t,a,r,l,s,c,i,o=[],u=2;u<=9;u++)for(var m=u,p=1;p<=9;p++)o.push(n.a.createElement("p",{className:"one"},m," X ",p," = ",m*p));return e=o.slice(0,9),t=o.slice(9,18),a=o.slice(18,27),r=o.slice(27,36),l=o.slice(36,45),s=o.slice(45,54),c=o.slice(54,63),i=o.slice(63,72),n.a.createElement("div",{className:"wrap"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"title"},n.a.createElement("div",{className:"x-top"},"\xd7"),n.a.createElement("hr",{className:"line-top"}),n.a.createElement("div",{className:"x-top"},"\xd7"),n.a.createElement("h1",{className:"title-cn"},"\u4e5d\u4e5d\u4e58\u6cd5\u8868"),n.a.createElement("h1",{className:"title-en"},"Multiplication Chart"),n.a.createElement("div",{className:"x-btm"},"\xd7"),n.a.createElement("hr",{className:"line-btm"}),n.a.createElement("div",{className:"x-btm"},"\xd7")),n.a.createElement("div",{className:"chart"},n.a.createElement("h2",{className:"number"},"2"),e),n.a.createElement("div",{className:"chart"},n.a.createElement("h2",{className:"number"},"3"),t),n.a.createElement("div",{className:"chart"},n.a.createElement("h2",{className:"number"},"4"),a),n.a.createElement("div",{className:"chart"},n.a.createElement("h2",{className:"number"},"5"),r),n.a.createElement("div",{className:"chart"},n.a.createElement("h2",{className:"number"},"6"),l),n.a.createElement("div",{className:"chart"},n.a.createElement("h2",{className:"number"},"7"),s),n.a.createElement("div",{className:"chart"},n.a.createElement("h2",{className:"number"},"8"),c),n.a.createElement("div",{className:"chart"},n.a.createElement("h2",{className:"number"},"9"),i)),n.a.createElement("div",{className:"footer"},"Copyright \xa9 2019 HexSchool. All rights reserved."))}),h=(a(26),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).equalClick=function(e){var t=a.state.answerArray.filter(function(e){return","!==e}).join(""),r=parseInt(t);a.setState({partB:r},function(){var t,r,n,l=parseInt(a.state.partA),s=parseInt(a.state.partB),c=[];switch(a.state.symbol){case 1:r=(t=l+s).toString(),console.log(a.state.partA,a.state.partB,a.state.symbol,a.state.calculate);for(var i=0;i<r.length;i++)c.push(r.slice(i,i+1));n=y(c.join("")),a.setState({answerArray:n,symbol:e,partA:t});break;case 2:r=(t=l-s).toString();for(var o=0;o<r.length;o++)c.push(r.slice(o,o+1));n=y(c.join("")),a.setState({answerArray:n,symbol:e,partA:t});break;case 3:r=(t=l*s).toString();for(var u=0;u<r.length;u++)c.push(r.slice(u,u+1));n=y(c.join("")),a.setState({answerArray:n,symbol:e,partA:t});break;case 4:r=(t=l/s).toString();for(var m=0;m<r.length;m++)c.push(r.slice(m,m+1));n=y(c.join("")),a.setState({answerArray:n,symbol:e,partA:t})}})},a.addClick=function(){if(null===a.state.partA){var e=a.state.answerArray.filter(function(e){return","!==e}).join(""),t=parseInt(e);a.setState({partA:t,calculate:!0,symbol:1})}else if(null!==a.state.partA&&null===a.state.partB){var r=a.state.answerArray.filter(function(e){return","!==e}).join(""),n=parseInt(r);a.setState({partB:n,calculate:!0,symbol:1},function(){a.equalClick(1)})}else if(5===a.state.symbol){var l=a.state.answerArray.filter(function(e){return","!==e}).join(""),s=parseInt(l);a.setState({partB:s,calculate:!0,symbol:1})}else if(null!==a.state.partA&&null!==a.state.partB){var c=a.state.answerArray.filter(function(e){return","!==e}).join(""),i=parseInt(c);a.setState({partB:i,calculate:!0,symbol:1},function(){a.equalClick(1)})}},a.subtractClick=function(){if(null===a.state.partA){var e=a.state.answerArray.filter(function(e){return","!==e}).join(""),t=parseInt(e);a.setState({partA:t,calculate:!0,symbol:2})}else if(null!==a.state.partA&&null===a.state.partB){var r=a.state.answerArray.filter(function(e){return","!==e}).join(""),n=parseInt(r);a.setState({partB:n,calculate:!0,symbol:2},function(){a.equalClick(2)})}else if(5===a.state.symbol){var l=a.state.answerArray.filter(function(e){return","!==e}).join(""),s=parseInt(l);a.setState({partB:s,calculate:!0,symbol:2})}else if(null!==a.state.partA&&null!==a.state.partB){var c=a.state.answerArray.filter(function(e){return","!==e}).join(""),i=parseInt(c);a.setState({partB:i,calculate:!0,symbol:2},function(){a.equalClick(2)})}},a.multiplication=function(){if(null===a.state.partA){var e=a.state.answerArray.filter(function(e){return","!==e}).join(""),t=parseInt(e);a.setState({partA:t,calculate:!0,symbol:3})}else if(null!==a.state.partA&&null===a.state.partB){var r=a.state.answerArray.filter(function(e){return","!==e}).join(""),n=parseInt(r);a.setState({partB:n,calculate:!0,symbol:3},function(){a.equalClick(3)})}else if(5===a.state.symbol){var l=a.state.answerArray.filter(function(e){return","!==e}).join(""),s=parseInt(l);a.setState({partB:s,calculate:!0,symbol:3})}else if(null!==a.state.partA&&null!==a.state.partB){var c=a.state.answerArray.filter(function(e){return","!==e}).join(""),i=parseInt(c);a.setState({partB:i,calculate:!0,symbol:3},function(){a.equalClick(3)})}},a.division=function(){if(null===a.state.partA){var e=a.state.answerArray.filter(function(e){return","!==e}).join(""),t=parseInt(e);a.setState({partA:t,calculate:!0,symbol:4})}else if(null!==a.state.partA&&null===a.state.partB){var r=a.state.answerArray.filter(function(e){return","!==e}).join(""),n=parseInt(r);a.setState({partB:n,calculate:!0,symbol:4},function(){a.equalClick(4)})}else if(5===a.state.symbol){var l=a.state.answerArray.filter(function(e){return","!==e}).join(""),s=parseInt(l);a.setState({partB:s,calculate:!0,symbol:4})}else if(null!==a.state.partA&&null!==a.state.partB){var c=a.state.answerArray.filter(function(e){return","!==e}).join(""),i=parseInt(c);a.setState({partB:i,calculate:!0,symbol:4},function(){a.equalClick(4)})}},a.clear=function(){a.setState({answerArray:["0"],calculationArray:[],partA:null,partB:null,answer:0,symbol:0,calculate:!1,dot:!1})},a.delete=function(){var e=a.state.answerArray.length,t=a.state.answerArray.splice(e-1,1);a.setState({answerArray:t})},a.state={answerArray:["0"],calculationArray:[],partA:null,partB:null,answer:0,symbol:0,calculate:!1,dot:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.partA,this.state.partB,this.state.symbol,this.state.calculate),n.a.createElement("div",{className:"wrap"},n.a.createElement("div",{className:"calculator"},n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"expression"}),n.a.createElement("div",{className:"result"},this.state.answerArray)),n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"number ",onClick:function(){return e.numberClick(7)}},"7"),n.a.createElement("div",{className:"number ",onClick:function(){return e.numberClick(8)}},"8"),n.a.createElement("div",{className:"number ",onClick:function(){return e.numberClick(9)}},"9"),n.a.createElement("div",{className:"operator ",onClick:this.division},"\xf7"),n.a.createElement("div",{className:"number ",onClick:function(){return e.numberClick(4)}},"4"),n.a.createElement("div",{className:"number ",onClick:function(){return e.numberClick(5)}},"5"),n.a.createElement("div",{className:"number ",onClick:function(){return e.numberClick(6)}},"6"),n.a.createElement("div",{className:"operator ",onClick:this.multiplication},"\xd7"),n.a.createElement("div",{className:"number",onClick:function(){return e.numberClick(1)}},"1"),n.a.createElement("div",{className:"number",onClick:function(){return e.numberClick(2)}},"2"),n.a.createElement("div",{className:"number",onClick:function(){return e.numberClick(3)}},"3"),n.a.createElement("div",{className:"operator",onClick:this.addClick},"+"),n.a.createElement("div",{className:"number",onClick:function(){return e.numberClick(0)}},"0"),n.a.createElement("div",{className:"number"},"00"),n.a.createElement("div",{className:"number"},"."),n.a.createElement("div",{className:"operator",onClick:this.subtractClick},"-"),n.a.createElement("div",{className:"all-clear",onClick:this.clear},"AC"),n.a.createElement("div",{className:"backspace",onClick:this.delete},"\u232b"),n.a.createElement("div",{className:"equal",onClick:function(){return e.equalClick(5)}},"="))))}},{key:"numberClick",value:function(e){if(!1===this.state.calculate&&!1===this.state.dot)if("0"===this.state.answerArray[0])this.setState({answerArray:[e]});else{var t=this.state.answerArray.filter(function(e){return","!==e});t.push(e);var a=y(t.join(""));this.setState({answerArray:a})}else this.setState({calculate:!1,answerArray:[e]})}}]),t}(r.Component));function y(e){for(var t=[],a=0,r=(e=(e||0).split("")).length-1;r>=0;r--)a++,t.unshift(e[r]),a%3||0==r||t.unshift(",");return t}var d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(f.a,{path:"/",exact:!0,component:v}),n.a.createElement(f.a,{path:"/MultiplicationChart",component:b}),n.a.createElement(f.a,{path:"/Calculator",component:h}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(c.a,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.81c88eb0.chunk.js.map