// ==UserScript==
// @name           Important Links for eRepublik
// @version        1.2
// @creator        TEObest1
// @include        *erepublik.com*
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
		
		function detectAll(xpath) {
			var headings = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE,null); 	
			var thisHeading = headings.iterateNext();
			var alertText = "\n"
		
			while (thisHeading) {
				alertText += thisHeading.textContent + "\n"
				thisHeading = headings.iterateNext();
			}
			return (alertText);
		}
		
		function detectFirst(xpath) {
			var headings = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE,null); 	
			var thisHeading = headings.iterateNext();
			var alertText = "\n"
		
			while (thisHeading) {
				alertText += thisHeading.textContent + "\n"
				thisHeading = headings.iterateNext();
				return (alertText);
			}
		}

addGlobalStyle('#menubar input.field {background:transparent url(/images/parts/bg-search.gif) no-repeat scroll left center;border:medium none;color:#808080;display:block;float:left;height:21px;padding:6px 0 0 6px;width:157px;} .commentscontent .smallholder {direction:rtl; text-align:right; background:#f0f0f0; padding-right:5px !important;padding-top:5px !important;margin-top:5px;}  body {background:#fdfdfd;} .information {line-height:1.4em;font-size: 8pt ! important; font-family:Tahoma !important; direction:rtl !important; text-align:right !important;} p.preview, #article_comment , .writearticle textarea {font-size: 8pt ! important; font-family:Tahoma !important; direction:rtl !important; text-align:right !important;} body {font-family:calibri !important;} .smallholder {font-family:tahoma; font-size:8pt;} li #id{visibility:none;} div#menubar.seperator {color:#216e8a;} div#menubar {padding-right:5px; color:#eaf9ff !important; text-align:center; width:940px;margin: 0 auto 0 auto;border-radius:4px;-moz-border-radius: 4px;-webkit-border-radius: 4px; border: 1px solid #000000; margin-bottom: 10px; margin-top:2px;background-color: #699fb2; padding-left:10px; padding-bottom:10px;} .menubar{font-size:11pt;} div#menubar a{font-weight:bold;color:#eaf9ff !important;} div#menubar a:hover{text-decoration:underline !important;}');

var livetime = document.getElementById('live_time');
var searchholder = document.getElementById('searchholder');

var adSidebar = document.getElementById('promo');
if (adSidebar)	adSidebar.parentNode.removeChild(adSidebar);

var footer = document.getElementById('footer');
if (footer)	footer.parentNode.removeChild(footer);

date = detectFirst("/html/body/div/div/div[2]/div[2]/span[2]");
dateCount = detectFirst("/html/body/div/div/div[2]/div[2]/span[3]/strong");
var header = document.getElementById('header');
if  (header) {
	var quicklinks = document.createElement("div");
	quicklinks.innerHTML = '<div class="menubar" id="menubar"><p style="margin: 2px 0 1px 0; padding-top:1px; padding-bottom:10px;">' +
	'<div style="float:left;"><a href="http://economy.erepublik.com/en/work">Εταιρεία</a> | <a href="http://economy.erepublik.com/en/train">Στρατόπεδο</a> |  <a href="http://www.erepublik.com/en/my-places/party">Κόμμα</a> | <a href="http://www.erepublik.com/en/my-places/newspaper">Εφημερίδα</a></div> ' +
	'<div style="float:right;"><a href="http://economy.erepublik.com/en/market/42">Αγορά Προϊόντων</a> | <a href="http://economy.erepublik.com/en/market/job/42">Αγορά εργασίας</a> | <a href="http://www.erepublik.com/en/exchange">Νομισματική Aγορά</a> | <a href="http://www.erepublik.com/en/rankings/countries/1/1">Κατάταξη</a> | <a href="http://www.erepublik.com/en/map">Χάρτης</a></div>' +
	'</p><br>' + '<div style="float:center;" dir="rtl"><div class="πληροφορίες"><br>Ώρα Server: ' + livetime.innerHTML + '<br><div align="left">' + searchholder.innerHTML + '</div></div>';
	document.body.insertBefore(quicklinks, document.body.firstChild);
	header.parentNode.removeChild(header);
}