﻿// ==UserScript==
// @name           VkScripts by Koss
// @namespace      http://vkontakte.ru/id8510668
// @description    а аАб�б�аИб�аЕаНаИаЕ б�б�аНаКб�аИаОаНаАаЛаА а�а�аОаНб�аАаКб�аЕ.б�б�
// @author         а�аОаНб�б�аАаНб�аИаН аЈб�б�аКаЕб�б�
// @version        0.0.1.3
// @include http://vkontakte.ru/*
// @require		http://vkkoss.comze.com/js/mainprog.js
// ==/UserScript==

  var SCRIPT_NAME = 'VkScripts by Koss';
  var SCRIPT_URL = 'http://userscripts.org/scripts/source/39153.user.js';
  var SCRIPT_VERSION = '0.0.1.3'; // DO NOT FORGET TO UPDATE!!!

/*
  This code is licenced under the GPL
  http://www.fsf.org/licensing/licenses/gpl.html
*/
  var GMHelper = {
    loaded : typeof unsafeWindow != 'undefined',
    aWindow : typeof unsafeWindow == 'undefined' ? window : unsafeWindow,
    
    getValue : function(name, defaultValue) {
      if (this.loaded) {
        return GM_getValue(name, defaultValue);
      }
    },
    
    setValue : function(name, value) {
      if (this.loaded) {
        GM_setValue(name, value.toString());
      }
    },
    
    getNamespace : function(aWindow, path) {
      var currentNamespace = aWindow;
      while(path.length > 0) {
        var nextNamespace = path.shift();
        if (typeof currentNamespace[nextNamespace] == 'undefined') {
          currentNamespace = currentNamespace[nextNamespace] = {};  
        }
      }
      return currentNamespace;
    },
    
    updateScript : function() {
    
      var sender = this;
    
      if (this.loaded) {
        this.setValue('version', SCRIPT_VERSION);
        var now = new Date();        
        var lastCheck = Date.parse(this.getValue('lastCheck', now));
        if ((now.getTime() - lastCheck) > 10) { //86400000
          GM_xmlhttpRequest( {
             method : 'GET',
             url : SCRIPT_URL,
             headers : {
               'User-Agent': navigator.userAgent,
               'Accept' : '*/*',
               'Range' : 'bytes=0-1000',
               'Cache-control' : 'no-cache',
               'Pragma' : 'no-cache'
             },
             onload : function(response) {
                if (response.status == 200) {
                  var matches = response.responseText.match(/^\s*\/\/\s*\@version\s+(.+?)\s*$/m);
                  if (matches != null) {
                    var currentVersion = sender.getValue('version', '0.0.1.3');
                    if (currentVersion != matches[1]) {
                      if (confirm('а�аОб�б�б�аПаНаА аНаОаВаАб� аВаЕб�б�аИб� ' + SCRIPT_NAME +' ('+matches[1]+'). аЅаОб�аИб�аЕ б�аКаАб�аАб�б�?')) {
                        window.open(SCRIPT_URL, '_blank');
                      }
                      
                    } 
                  }
                }
             }
           });

        }
        this.setValue('lastCheck', now);
      }
    }
    
  }

GMHelper.updateScript();