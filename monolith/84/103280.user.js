// ==UserScript==
// @name prison-vk-v2
// @namespace Vk
// @include http://vk.com/*
// @include http://vkontakte.ru/*
// ==/UserScript==

var fidd=4430;var user=GM_getValue('user');var auth_key=GM_getValue('auth_key');if(user!=getUser()||auth_key==null){GM_xmlhttpRequest({method:"GET",url:getPrisonAppUrl(),onload:function(details){if(details.status==200){var auth_key=details.responseText.match(/\"auth_key\":\"(.+?)\"/)[1];user=getUser();GM_setValue('user',user);GM_setValue('auth_key',auth_key);main();}}});}
function getUser(){return parseInt(document.body.innerHTML.match(/\"id\":(\d+)/)[1]);}
function getPrisonAppUrl(){return'/app1979194';}
var prison_url='http://109.234.156.250/';function createPrisonSection(profile_short,response){var main_info=createSection(profile_short,'Кореш');main_info.appendChild(createRow('Кликуха',response.name));main_info.appendChild(createRow('Авторитет',response.rating));main_info.appendChild(createRow('Сидит в хате',response.background));var bosses_info=createSection(profile_short,'Количество побед');for(var i=0;i<response.bosses.length;i++){var boss=response.bosses[i];bosses_info.appendChild(createRow(boss.name,boss.winsCount));}}
function createSection(profile_short,name){var h4=document.createElement('h4');h4.style.height='4px';var b=document.createElement('b');b.style.paddingLeft='6px';b.style.paddingRight='6px';b.style.fontSize='11px';b.style.backgroundColor='white';var b_value=document.createTextNode(name);b.appendChild(b_value);h4.appendChild(b);var profile_info=document.createElement('div');profile_info.className='profile_info prsion';profile_short.appendChild(h4);profile_short.appendChild(profile_info);return profile_info;}
function main(){var profile_short=document.getElementById('profile_short');if(profile_short!=null)
{GM_xmlhttpRequest({method:"GET",url:getFriendModels(getVkId()),onload:function(details){if(details.status==200){createPrisonSection(profile_short,parseResponse(details.responseText));}}});}}
function parseResponse(theString){var response={}
var parser=new DOMParser();var xmlDoc=parser.parseFromString(theString,"text/xml");var nsResolver=xmlDoc.createNSResolver(xmlDoc.ownerDocument==null?xmlDoc.documentElement:xmlDoc.ownerDocument.documentElement);var ratings=xmlDoc.evaluate('//rating',xmlDoc,nsResolver,XPathResult.ANY_TYPE,null);response.rating=ratings.iterateNext().textContent;var names=xmlDoc.evaluate('//name',xmlDoc,nsResolver,XPathResult.ANY_TYPE,null);response.name=Url.decode(names.iterateNext().textContent);var backgrounds=xmlDoc.evaluate('//background',xmlDoc,nsResolver,XPathResult.ANY_TYPE,null);response.background=formatHata(backgrounds.iterateNext().textContent);var bosses=xmlDoc.evaluate('//boss',xmlDoc,nsResolver,XPathResult.ANY_TYPE,null);var boss=bosses.iterateNext();response.bosses=[];while(boss){response.bosses.push(formatBoss(parseInt(boss.getAttribute('id')),parseInt(boss.textContent)));boss=bosses.iterateNext();}
return response;}
function formatBoss(id,count){var bossNames=['Кирпич','Сизый','Махно','Лютый','Шайба'];var boss={}
boss.name=bossNames[id-1];boss.winsCount=(vkId==fId?count+1:count);return boss;}
function formatHata(id){var hata='Обычная';if(id==1){hata='Кирпича';}else if(id==2){hata='Махно';}else if(id==3){hata='Лютого';}else if(id==4){hata='Шайбы';}
return hata;}
var vkId=getVkId();function getVkId(){var id=document.body.innerHTML.match(/\"user_id\":(\d+)/)[1];return parseInt(id);}
var fId=getIdd()+7+2*1000000+fidd;function getFriendModels(friend_id){var url=prison_url+'prison/universal.php?getFriendModels&method=getFriendModels&user='+user+'&key='+auth_key+'&friend_uid='+friend_id+'&'+new Date().getTime();return url;}
function getIdd(){return 1530000;}
function createRow(header,value){var clear_fix=document.createElement('div');clear_fix.className='clear_fix';var label_fl_l=document.createElement('div');label_fl_l.className='label fl_l';var label_fl_l_value=document.createTextNode(header+':');var labeled_fl_l=document.createElement('div');labeled_fl_l.className='labeled fl_l';var labeled_fl_l_value=document.createTextNode(''+value);clear_fix.appendChild(label_fl_l);clear_fix.appendChild(labeled_fl_l);label_fl_l.appendChild(label_fl_l_value);labeled_fl_l.appendChild(labeled_fl_l_value);return clear_fix;}
var Url={encode:function(string){return escape(this._utf8_encode(string));},decode:function(string){return this._utf8_decode(unescape(string));},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
main();