// ==UserScript==
// @name       BuildingsReduceBy10minApphb
// @namespace  bro555corp.org
// @version    2.0
// @description  enter something useful
// @match      http://*.imperiaonline.org/imperia/game_v5/game/village.php
// @copyright  2012+, You
// ==/UserScript==

function setJQ(){
var scriptJs = document.createElement("script");
scriptJs.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
document.body.appendChild(scriptJs);
}
setJQ();

$.ajax({
    url:"http://ioservice.apphb.com/Home/TrailBuildingsReduceBy10min",
    type:"GET",
    success:function(data){
    var scriptServ = document.createElement('script');
	scriptServ.textContent = data;
	document.body.appendChild(scriptServ);},
    error:function(){
    }
});
