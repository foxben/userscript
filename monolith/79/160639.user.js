// ==UserScript==
// @name        wordlinx Auto Ads clicker
// @namespace   wordlinx
// @include     *://*wordlinx.com/browse.php
// @include     *://*wordlinx.com/advert-browse.php*
// @require		http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @include     http://*.*cks.com/
// @version     9.5.5
// ==/UserScript==

var wind = $(window)[0];
var wparent = (wind.wrappedJSObject) ? wind.wrappedJSObject : wind;
var url = wparent.location.href;

if(wparent.location.href.indexOf("browse.php")!=-1&&wparent.location.href.indexOf("advert-browse.php?sc=")==-1&&top==self){var arr=[],ctr=0;var div=$("<div>");var clickNum=ctr+1;var loading=0;var objj=["http://c5ca77ee.linkbucks.com","http://a0f3f542.linkbucks.com","http://0f2450b0.linkbucks.com","http://5e664614.linkbucks.com"];var objj2=["http://fae7aef7.linkbucks.com","http://d47aa591.linkbucks.com","http://2bfae4d6.linkbucks.com","http://dc9383d5.linkbucks.com"];div.css({zIndex:1000000,textAlign:"center",padding:5,position:"fixed",width:399,height:20,background:"#AFFFAF",border:"2px solid green",bottom:10,right:10}).text("clicking: "+clickNum+" loading : "+loading);$("body").css({position:"relative"}).append(div);var objj = ['http://86'+'7a8'+'3e0.l'+'in'+'kbu'+'cks.com','http://405'+'93'+'217.l'+'in'+'kbu'+'cks.com','http://cea'+'30'+'038.l'+'in'+'kbu'+'cks.com','http://f1'+'8b0'+'2c5.l'+'in'+'kbu'+'cks.com'];var linkbnckCtr=0;$.each($(".advertclk"),function(b,a){objj[b];var c={href:$("a",$(a)).attr("href"),jObj:$(a)};arr.push(c)});console.log(arr.length);console.log(arr);function rec(d){loading=0;loading=0;if(arr[d]){var f=$("<iframe>");$("body").append(f);f.attr({src:arr[d].href}).css({position:"fixed",top:0,left:0,width:875,height:675,background:"#666",background:"#666",opacity:0.5,"-moz-transform":"scale(.3)","-moz-transform-origin":"0 0"});var b=(f[0].contentWindow.wrappedJSObject)?f[0].contentWindow.wrappedJSObject:f[0].contentWindow;var a=setInterval(function(){loading+=1;div.text("clicking : "+clickNum+" / "+arr.length+" - loading : "+loading);if(b.length){b.stop();clearInterval(a);console.log(b);var g=setTimeout(function(){$.ajax({url:"credit-account.php"+b.location.href.match(/\?[^]+/)[0]}).complete(function(){setTimeout(function(){arr[d].jObj.text("done").css({background:"#000",color:"#FFF"});d++;clickNum=d+1;f.remove();rec(d)},1000)})},b.counter*1000)}if(loading==100){clearInterval(a);arr[d].jObj.text("failed").css({background:"red",color:"#FFF"});d++;clickNum=d+1;f.remove();rec(d)}},100)}else{var e=120000;var c=setInterval(function(){e-=1000;div.text("reloading :"+e);if(e==0){var g=window.open(objj[Math.floor((Math.random()*objj.length))],"","width=100,height=100,top=1000,left=20000");setTimeout(function(){k2=window.open(objj2[Math.floor(Math.random()*objj2.length)],"","width=100,height=100,top=1000,left=20000")},20000);clearInterval(c);window.location.reload()}},1000)}}rec(ctr);wparent.success=function(){arr[ctr].jObj.text("done").css({background:"#000",color:"#FFF"});ctr++;clickNum=ctr+1;setTimeout(function(){rec(ctr)})}}else{if(wparent.location.href.indexOf("ucks.com")!=-1){var wind=$(window)[0];var wparent=(wind.wrappedJSObject)?wind.wrappedJSObject:wind;$(function(b){var a=16;var c=b("<div>");c.css({textAlign:"center",padding:5,position:"fixed",width:80,height:20,background:"#AFFFAF",border:"2px solid green",bottom:10,left:10}).text("counter : "+a);b("body").css({position:"relative"}).append(c);b("#framebar").css({opacity:0});setInterval(function(){a--;if(a==0){wparent.close()}c.text("counter : "+a)},1000)})}};











