!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([,,,function(e,t,n){n(4),e.exports=n(11)},function(e,t,n){"use strict";n.r(t);n(5),n(6),n(7),n(8),n(9),n(10);var r=document.getElementsByClassName("playerscore--player1--score")[0],o=document.getElementsByClassName("playerscore--player2--score")[0],a=document.getElementsByClassName("currentScore--score--player1")[0],s=document.getElementsByClassName("currentScore--score--player2")[0],c=document.getElementsByClassName("rolldice--text")[0],l=document.getElementsByClassName("hold--text")[0],i=document.getElementsByClassName("newgame--text")[0],u=document.getElementsByClassName("playerslate--player1--indicator")[0],d=document.getElementsByClassName("playerslate--player2--indicator")[0],p=document.getElementsByClassName("finalScore--container")[0],m=document.getElementsByClassName("dice-1")[0],f=document.getElementsByClassName("dice-2")[0],g=!0,y=50;function x(){return Math.floor(6*Math.random()+1)}function C(){(g=!g)?(u.classList.remove("disp"),d.classList.add("disp")):(d.classList.remove("disp"),u.classList.add("disp"))}function v(e){return e>=y}c.addEventListener("click",(function(){var e,t,n,c=x(),l=x();e=l,t="./img/"+c.toString()+".png",n="./img/"+e.toString()+".png",m.style.background="url("+t+")",m.style.backgroundPosition="center",m.style.backgroundSize="cover",f.style.background="url("+n+")",f.style.backgroundPosition="center",f.style.backgroundSize="cover",function(e,t,n){var c=function(e,t){return e===t===1?2:(1===e||1===t)&&1}(t,n);if(!1===c){var l=t+n;if(e){l=parseInt(a.textContent)+l;a.textContent=l}else{l=parseInt(s.textContent)+l;s.textContent=l}}else 1===c?(e?a.textContent="0":s.textContent="0",C()):(e?r.textContent="0":o.textContent="0",C())}(g,c,l)})),l.addEventListener("click",(function(){g?(currentScore=parseInt(a.textContent)+parseInt(r.textContent),r.textContent=currentScore,a.textContent="0",v(parseInt(r.textContent))&&(alert("Player 1 Won!")||window.location.reload())):(currentScore=parseInt(s.textContent)+parseInt(o.textContent),o.textContent=currentScore,s.textContent="0",v(parseInt(o.textContent))&&(alert("Player 2 Won!")||window.location.reload()));C()})),i.addEventListener("click",(function(){location.reload()})),p.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),parseInt(p.value)>0?(y=parseInt(p.value),p.value="",placeholderString="final score = "+y.toString(),p.placeholder=placeholderString):y=50)}))},function(e,t,n){e.exports=n.p+"img/1.png"},function(e,t,n){e.exports=n.p+"img/2.png"},function(e,t,n){e.exports=n.p+"img/3.png"},function(e,t,n){e.exports=n.p+"img/4.png"},function(e,t,n){e.exports=n.p+"img/5.png"},function(e,t,n){e.exports=n.p+"img/6.png"},function(e,t,n){}]);