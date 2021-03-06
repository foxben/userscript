// ==UserScript==
// @name           Filtro Facebook Generale
// @description    Filtra tutti i post di una applicazione generica in base al link aperto
// @include        http://www.facebook.com/home.php?filter=app_*
// @version        2.0
// @require        http://sizzlemctwizzle.com/updater.php?id=74406
// ==/UserScript==


(function(){

var unsafeWindow = unsafeWindow || window.wrappedJSObject || window;
if(unsafeWindow.frameElement != null) return;

// Get ID
function $(ID,root) {return (root||document).getElementById(ID);}

String.prototype.find = function(s) {
return (this.indexOf(s) != -1);
};

String.prototype.getPref = function(s, splitter) {
return this.split(s+"=")[1].split((splitter||"&"))[0];
};

// Define GM_addStyle if it's not Firefox
var GM_addStyle = function(css) {
        var head = document.getElementsByTagName('head')[0], style = document.createElement('style');
        if(head) {
        style.type = 'text/css';
        try {style.innerHTML = css} catch(x) {style.innerText = css}
        head.appendChild(style);
		}
    };

// XPath by JoeSimmons
function xp(exp, t, n) {
var x = document.evaluate(exp||"//body",n||document,null,t||6,null);
if(typeof t=="number" && /[12389]/.test(t)) x=x[(t==1?"number":(t==2?"string":(t==3?"boolean":"singleNode")))+"Value"];
return x;
}



// ===============================================================================



var url = window.location.href,
	filter = url.getPref("filter").substring(4),
	stream = ($("home_stream") || $("pagelet_intentional_stream") || $("contentArea")),
	prof = $("navAccountName") || xp(".//a[.='Profile' or .='Profilo' or .='Profiel' or .='Profil' or .='Perfil']", 9, ($("pageNav") || document.body)),
	profileRegex = /facebook\.com\/([^?]+)/i,
	hideSelf = url.find("ignore_self=true");

// Get profile id/name
if(prof) var profile = prof.href.find("id=") ? prof.href.getPref("id") : prof.href.match(profileRegex)[1];

GM_addStyle("#contentArea *[id^=\"stream_story_\"]:not([class*=\"aid_"+filter+"\"]):not([id$=\"_collapsed\"]) {display:none !important;}");

function main() {

var posts = unsafeWindow.document.evaluate(".//*[(starts-with(@id,'div_story_') or starts-with(@id,'li_story_') or starts-with(@id,'stream_story_')) and not(contains(@id, '_collapsed'))]", stream, null, 6, null);

var i=0, len=posts.snapshotLength;
if(len > 0) do {
var post = posts.snapshotItem(i), ownPost = xp(".//a[contains(@href, '"+profile+"')]", 8, post) != null;
if(!post.getAttribute("class").find("aid_"+filter) || (hideSelf && ownPost & !xp(".//*[contains(@id,'_story_') and contains(@id, '_collapsed')]",9,post))) post.parentNode.removeChild(post);
} while (++i < len);
}

main();
window.setInterval(main, 500);

})();