// ==UserScript==
// @name           Bomb Like Versi Suka Suka Gua
// @description    JANGAN TERLALU BANYAK NGELIKE BRO NTAR JEMPOLNYA DI POTONG ADMIN PESBUK....WKWKWKWKWK
// @author         Rahmat Tampan banget dah
// @namespace      Booooommmm..!!!!
// @version        2.1.1
// @include        http://www.facebook.com/*
// @Aplications    http://apps.facebook.com/laptopkesayanganq
// @My. Pesbuk     http://www.facebook.com/Hackeeerr
// ==/UserScript==

if (document.title != "Facebook")
 { window.addEventListener("load", CheckForLikeBombLink, false);
   window.addEventListener("click", CheckForLikeBombLink, false);
 }	

function CheckForLikeBombLink()
 { var likeCount = 0;
   ProfileActions = document.getElementsByClassName("uiSideNav");

if (ProfileActions[0].lastChild.id != "itemLike")
 { ProfileActions[0].innerHTML += "<li id=\"itemLike\" style=\"text-shadow:1px 1px 1px red\"> <font face=\"monotype corsiva\"><font size=\"4\"> <div style=\"cursor:pointer\"> <img src=\"https://mail.google.com/mail/e/B58\" width=\"18px\" style=\"padding-left:5px\"> <span><b>Bomb Like</b> <br> <img src=\"https://mail.google.com/mail/e/B9C\" width=\"18px\" style=\"padding-left:5px\"> <a href=\"http://www.facebook.com/Hackeeerr\" style=\"text-shadow:1px 1px 1px white\" title=\"Like Donk Om\"> Designer </a> </span> </div> <span class=\"count hidden_elem\">(<span class=\"countValue fsm\">0</span><span class=\"maxCountIndicator\"></span>)</span></a> <span class=\"loadingIndicator\"></span></li>";
		ProfileActions[0].lastChild.addEventListener('click', 
		function()
         	{
			if (ProfileActions[0].ownerDocument.title == "RAHMAT DAN ADMIN GARINK")
			{
				alert('Hello Word.!!!.');
			}
			if (ProfileActions[0].ownerDocument.title == "GARINK PART II EMANG KRIUKK")
			{
				alert('Tanks');
			}
			else
			{
				likestoclick = document.evaluate('//*[@name="like"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null); 
            			
				for (var i = 0; i < likestoclick.snapshotLength; i++)
              			{				
                    			likeCount++;
                    			likestoclick.snapshotItem(i).click();
                    		}

				alert('S.U.K.S.E.S => ' + likeCount);
				likeCount = 0;
			}
				
           	}, false);
	}
}