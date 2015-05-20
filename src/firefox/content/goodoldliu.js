// ==UserScript==
// @name           Good Old LiU
// @version        0.1
// @description    Use the good old LiU-style
// @include        http*://*.liu.se*
// @run_at document_start
// ==/UserScript==
 
 
if(window.location.href.indexOf("liu.se") > -1) {
var sheets = document.getElementsByTagName("link");
 
for (var i=0; i<sheets.length; ++i) {
    if (sheets[i].href.indexOf('content.css') != -1) {
        sheets[i].href = 'https://goodoldliu.github.io/liu-old-content/content.css';
    }
    if (sheets[i].href.indexOf('screen.css') != -1) {
        sheets[i].href = 'https://goodoldliu.github.io/liu-old-content/screen.css';
    }
    if (sheets[i].href.indexOf('start-screen.css') != -1) {
        sheets[i].href = 'https://goodoldliu.github.io/liu-old-content/startsida-screen.css';
    }
}
 
var myDiv = document.getElementById("logo");
 
if(myDiv != null)
{
  myDiv.innerHTML = "<a href='https://www.liu.se/?l=en' accesskey='1'><img class='screen sign' src='https://goodoldliu.github.io/liu-old-content/sigill-huvud.png' alt='LiUs logotype'><div id='head-title-html'><h1><span class='smaller'>Welcome to </span><br>Linköping University</h1></div><img class='handheld' alt='LiUs logotype' src='https://goodoldliu.github.io/liu-old-content/sigill.png' height='0' width='0'></a><img class='print' alt='LiUs logotype' src='https://goodoldliu.github.io/liu-old-content/logo-print.png' height='0' width='0'>";
}
 
  
/*!
 * Dynamically changing favicons with JavaScript
 * Works in all A-grade browsers except Safari and Internet Explorer
 * Demo: https://mathiasbynens.be/demo/dynamic-favicons
 */
 
// HTML5, baby! https://mathiasbynens.be/notes/document-head
document.head = document.head || document.getElementsByTagName('head')[0];
 
function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}
 
changeFavicon('https://goodoldliu.github.io/liu-old-content/faviconnn.ico');
    
}
