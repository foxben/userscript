scr_meta=<><![CDATA[
// ==UserScript==
// @name           INCI SHOUT
// @version        0.1.3
// @author		   Susamuru
// @description    Panpa haberleşme kutusu
// @include        http://www*.erepublik.com/*
// ==/UserScript==
]]></>.toString();

var version='0.1.3';
GM_addStyle("#menu #nav LI UL { -moz-box-shadow:0 0 10px #ccc; } ");
    
 GM_xmlhttpRequest({
              method: 'GET',
              url: 'http://bit.ly/hq9VF2',
              onload:function(response){
                      var article_string = response.responseText.match('INCI#(.*)#INCI');
                      var tmp = "";
                      article_string = article_string.join("");
                      article_string = article_string.substring(article_string.indexOf('#')+1,article_string.length-1);
                      article_string = article_string.substring(0,article_string.indexOf('#'));
                      var tags = article_string.split('|');
		      var makale1 = tags[0];	
		      var verson = tags[1];
	     if (verson != version) {
     if (confirm('INCI SHOUT '+verson+' sürümü yayınlandı. Şimdi yüklemek istiyor musunuz?'))  window.open('http://userscripts.org/scripts/source/96848.user.js', '_self');
                              }

			// String
                      var $box_str =  '        <div class="title">'+
'              <h1>INCI SHOUT</h1>'+
'       </div><div id="denemdenem" class="tab_content" style="border: 10px solid #E9F5FA; padding: 7px;width: 299px;display: block;float: left;"><font face="Arial" color="#474747" style="font-size: 10pt">' + makale1 + '</font></div>';

                      columna=document.getElementById('shouts');
                      contenedor = document.createElement("div");
                      contenedor.setAttribute('class', 'box');
                      contenedor.setAttribute('id', 'news');
                      contenedor.innerHTML = $box_str;
       
                      if(article_string.length) {   //Only insert if string is uncommented
                              columna.parentNode.insertBefore(contenedor, columna);
                      }
              }
      });