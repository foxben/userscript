// ==UserScript==
// @name           JJ - adv remove
// @namespace      JJ
// @include        http://*.livejournal.com/*
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
addGlobalStyle('.adv { display:none; ! important; }');