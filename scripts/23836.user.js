// ==UserScript==
// @name           TeXify Google Reader
// @namespace      http://texifygooglereader.steneteg.se
// @description    Translates the TeX syntax _{foo} to <sub>foo</sub> and ^{bar} to <sup>bar</sup> in Google reader. Very common in rss-feeds from scientific journals. 
// @include        http://www.google.com/reader/*
// @include        https://www.google.com/reader/*
// @include        http://reader.google.com/reader/*
// @include        https://reader.google.com/reader/*
// ==/UserScript==

const DEBUG = false;

const p1 = /_\{(.*?)\}\s?/g;
const p2 = /\^\{(.*?)\}\s?/g;

function texify(e){
	if (e.target.tagName=="DIV"){
		var el=e.target;
	
   			var s = node.data;
   			
   			if(p1.test(s) || p2.test(s)){
	   			var res = document.createElement("span");
   				res.innerHTML = s.replace(p1,"<sub>$1</sub>").replace(p2,"<sup>$1</sup>");
   				node.parentNode.replaceChild(res,node); 	
   			}
		}	
	}
}
 
var entries=document.getElementById("entries");