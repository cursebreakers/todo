(()=>{"use strict";function e(){console.log("loading home.js...");const e=document.getElementById("content"),n=document.createElement("h3");let t=document.createElement("p");const o=document.createElement("p");n.innerHTML="Random Task",t.innerHTML="Task details",o.innerHTML="Due Today",e.appendChild(n),e.appendChild(t),e.appendChild(o),console.log("home.js loaded")}!function(){console.log("loading index.js...");const n=document.getElementById("content"),t=document.getElementById("info");document.getElementById("home").addEventListener("click",(()=>{n.innerHTML="",e()})),t.addEventListener("click",(()=>{n.innerHTML="",function(){console.log("loading info.js...");const e=document.getElementById("content"),n=document.createElement("h3");let t=document.createElement("p");const o=document.createElement("p");n.innerHTML="Made by:",t.innerHTML="Esau @ Cursebreakers",o.innerHTML="For: The Odin Project: JavaScript Course",e.appendChild(n),e.appendChild(t),e.appendChild(o),console.log("info.js loaded")}()})),console.log("index.js loaded"),e()}(),alert("Hello!")})();