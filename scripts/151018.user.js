// ==UserScript==
// @name           Facebook gaul beta
// @namespace      http://www.ucuygudangcit.co.cc/
// @description    Replaces Bahasa Indonesia words to Basa trend on Facebook | Mengganti bahasa Facebook menjadi bahasa Gaul | Facebook-an make basa Gaul coyy
// @include        http://www.facebook.com/*
// @include        http://facebook.com/*
// @include        http://*.facebook.com/
// @include        https://www.facebook.com/*
// @include        https://facebook.com/*
// @include        https://*.facebook.com/
// @copyright      Yusuf efendi
// @license        http://creativecommons.org/licenses/by-nc-sa/3.0/us/
// @date 20120128
// @time 0433
// @version 2012.01.28.0433
// Syntax: 'Search word' : 'Replace word',
//303 /461/620/713
// ==/UserScript==

window.addEventListener('load', function(){
//Sukma Gemala - flyout navi //
document=window.document;
var a=document.createElement('div');
a.setAttribute('class', 'clearfix rfloat egoOrganicColumn'); 
a.innerHTML = '<div class="uiSelector inlineBlock mls uiSelectorRight uiSelectorNormal"><div class="wrap"><div class="wrap"><a class="uiButtonNoText" role="button" href="#" aria-haspopup="1" data-length="30" rel="toggle"><span class="imgWrap"><img class="uiProfilePhotoSmall img" src="http://a7.sphotos.ak.fbcdn.net/hphotos-ak-snc7/420989_2510687819220_1613869364_31923002_654756270_n.jpg" alt="" img"=""></span><span class="uiButtonText"></span></a><div class="uiSelectorMenuWrapper uiToggleFlyout"><div role="menu" class="uiMenu uiSelectorMenu"><div class="UIImageBlock clearfix ego_unit"><a class="UIImageBlock_Image UIImageBlock_SMALL_Image" href=""><img class="UIImageBlock clearfix ego_unit img" src="http://a7.sphotos.ak.fbcdn.net/hphotos-ak-snc7/420989_2510687819220_1613869364_31923002_654756270_n.jpg" alt=""></a><div class="egoProfileTemplate UIImageBlock_Content UIImageBlock_SMALL_Content"><span class="ego_title">Facebook Sunda</span><div><span class="uiLinkSubtle">v 2012.01.27.0052</span></div><iframe rel="async-post" frameborder="0" scrolling="no" allowtransparency="true" style="border: medium none; overflow: hidden; width: 130px; height: 20px;" src="/plugins/like.php?action=like&amp;layout=button_count&amp;href=http%3A%2F%2Fsarwasunda.blogspot.com%2F2010%2F06%2Ffacebook-basa-sunda.html&amp;show_faces=true&amp;width=130&amp;colorscheme=light&amp;height=20"></iframe></div></div><div class="ego_column"><div class="ego_section"><div class="uiHeader uiHeaderTopAndBottomBorder mbs uiSideHeader"><div class="clearfix uiHeaderTop cfloat"><a class="uiHeaderActions" href="/plugins/recommendations.php?site=http%3a%2f%2fsarwasunda.blogspot.com%2f&amp;height=350&amp;width=250&amp;header=false&amp;colorscheme=light&amp;border_color=%23fff&amp;rel_dialog=1" target="iframe2" title="aktivitas  | facebook">Ketak Sobat</a> | <a rel="dialog-post" href="/ajax/profile/connect.php?profile_id=1613869364&amp;rel_dialog=1&amp;src=top_bar&amp;ref=ts" class="mas mas uiHeaderActions">Hayu Sosobatan</a></div></div></div></div><div ego_column=""><iframe id="iframe2" allowtransparency="true" border="0" frameborder="0" height="350" marginheight="0" marginwidth="0" scrolling="no" width="250" style="margin-left:-4px" src=""></iframe></div></div></div></div></div></div>';
//var b=document.getElementById('pageNav');
var b=document.getElementById('pageHead');
b.insertBefore(a, b.firstChild);
//yusuf efendi - vocabulary //
var words={"lain kali":"jelek","perusahaan":"kerja","situs web":"my web","kutipan":"diary","pasangan":"pacar genjus","sepupu":"sepupu","keponakan":"ponakan","nenek":"nyai","kakek":"aki","paman":"mamang","menikah sejak":"resmi genjus tanggal","pandangan":"pandangan","bahasa":"bahase","tertarik pada":"suka genjus ke","tempat tinggal":"my home","angkatan":"jabatan","silahkan":"sok","bersekolah":"skola","sekolahmu":"skola sia","sekolahnya":"skolanya","sekolah":"skola","hingga":"sampe","peristiwa":"peristiwa","kesukaan":"kesukaan","daftar":"daptar","buat iklan":"masang iklan genjusmu","menambahkan":"ke pengen minta genjus","terbaik":"terbagus","yuk":"sok","pakai":"pake","yg":"yang","teratas":"paling atas","bekas":"urut","menangkan":"rebut","buat kamu":"buat sia","buat anda":"buat you","lihat semua":"liat semua >>","favoritmu":"favorit gw","lho":"lho","damai":"piss","berbagai":"rupa-rupa","suka sama suka":"pada resep","suka sama":"lagi genjus ke","ngefans sama":"ngefans ke","benda":"barang","tersembunyi":"gk keliatan","memainkan":"mainin","mainkan":"mainkan","main":"maen","anda lewatkan":"lu","penuh":"pinu lewatin","tertunda":"ketunda","bertanggal":"bertanggal","menit yang lalu":"kali genjus","berulang tahun":"sedang berulang tahun hari ini, minta traktiran...?","penanda":"penanda","dengan menyarankan":"dengan menyarankan","kabar berita":"kabar genjus","berita":"berita", "bersponsor":"sponsor","membicarakan":"ngomongin","tersebut":"tersebut","topik":"topik","terkait":"terkait","siapa pun":"siapa bae","didukung":"disponsor","didukung":"disponsor","pendukung":"sponsor","dukungan":"dukungan","dukung":"dukung","tergabung":"tergabung","pernah":"pernah","petunjuk":"petunjuk","minta":"minta","penyuntingan":"pembuatan","sunting":"ganti","pemiliknya":"pemiliknya","pemilik":"pemilik","asyik":"aseekk","apakah ini":"apaan nihh?","begitu":"gitu","begini":"gini","tak peduli":"gk peduli","peduli":"peduli","mungkinkah":"mungkinkah","mungkin":"mungkin","lebih baik":"lebih bae","pedih":"sakit","hati":"hate","lagi":"deui","entahlah":"teuinglah","entah":"teuing","kata hati":"kata hate","Anda sedang":"gw lagi","mengobrol":"ngobrol","Obrolan":"yang ol","ketersediaan":"ketersediaan","batasi":"batasi","pencarian":"pencarian temen genjus","Suara":"suara","Komentari":"komen genjus aja","ajukan":"ajukan","acara apa yang akan anda adakan":"bikin acara yuk?","untuk mulai saling berhubungan":"buat yang mau saling terhubung","membantu anda terhubung dan":"membantu lo terhubung dan","jalin hubungan kembali dengannya":"minta CLBK","jadilah orang pertama":"jadilah orang gelo","berhubungan dengan mereka":"berhubungan dengan mereka","yang lalu":"gk berenti2","yang anda pilih":"yang lo pilih","yang anda masukkan":"yang lo masukin","yang anda maksud":"yang lo maksud","yang anda isikan":"yang lo isikan","yang anda ambil":"yang lo ambil","yang anda":"yang lo","untuk itu":"untuk itu","ulang tahun":"ulang tahun","tingkat lanjut":"tingkat lanjut","tingkah laku":"perilaku","tidak selalu":"gk selalu","tidak mungkin":"mustahil","tidak cukup":"gk cukup","tidak benar"gk bener"salah"salah"tidak apa-apa":"gk apa2","tidak akan":"gk bakal","tidak ada":"gk ada","tidak ada"gk ada"taya","tetap masuk":"tetep masuk","terus terang":"jujur jujuran","terulang kembali":"terulang kembali","tertimbun longsor":"ketiban longsor","terlebih lagi":"terlebih lagi","terlebih dulu":"lebih dulu","terlebih dahulu":"lebih dahulu","terima kasih":"thanks","terakhir kali":"terakhir kali","tepuk tangan":"keprok","teman-teman":"friends","teman dari teman":"temen temennya","temannya teman":"temennya temen","teliti lebih dahulu":"teliti lebih dulu","teliti dahulu":"teliti dulu","tambahkan sebagai":"jadikan","takkan":"gk bakal","tak mungkin":"mustahil","tak akan":"gk bakalan","tahun lalu":"tahun kmaren","tahun baru":"new year","surat kabar":"surat genjus","sumber air":"sumber air","suka cita":"bungah","sudut pandang":"pandangan","suami-istri":"suami-bini","siapa-siapa saja":"siapa2 aja","setiap kali":"setiap kali","sesuai sekali":"pantes amat","sesuai abjad":"luyu jeung abjad","serba-serbi":"rupa-rupa","serba serbi":"rupa-rupa","sepakbola":"maen bola","senang hati":"girang","selamat jalan":"wilujeng angkat","selamat datang":"met dateng","selain itu":"sajaba ti eta","sedang berlangsung":"keur lumangsung","sebagian besar":"kalolobaan","sebagai contoh":"contona","saya seorang":"kuring teh","saya kira":"disangka ku kuring","sampai kapan pun":"nepi ka iraha wae","salah satunya":"salah sahijina","salah satu":"salah sahiji","saat ini":"skrg ini","saat coba":"waktu nyobaan","rumah tangga":"laki-rabi","pertama kali":"mimiti","perlu untuk":"perlu","perangkat lunak":"sopwer","penurunan berat":"nurunkeun beurat","pengalaman":"pangalaman","pencarian orang":"pencarian buat genjus","pencari teman":"pencari temen genjus","pemotongan hewan":"Qurban","paling tidak":"sahenteuna","paling baru":"berita baru","pada umumnya":"umumna","pada diri":"ka diri","orang-orangnya":"jalma-jalmana","orang yang mungkin anda kenal":"kenal gk sama nih orang?","orang yang":"orang yang","orang tuanya":"ortu nya","orang tua":"ortu nya","orang menyukai ini":"suka genjus","orang menyukai":"suka genjus","orang lainnya":"urang liana","orang lain":"batur","orang lain":"jalma lian","oleh-oleh":"oleh-oleh","oleh sebab itu":"kusabab kitu","oleh karena itu":"ku kituna","nyaman sekali":"tumaninah pisan","ngobrol dengan teman":"ngadu bako","nggak mungkin":"mustahil","mulailah berhubungan":"mimitian pidulur","mulai sms":"mimitian sms","mulai dari":"ti mimiti","merujuk pada":"gugon ka","menulis di":"nulis di","meninggal dunia":"maot","menikah dengan":"genjus sama","mengindonesia":"nga-indonesia","mengambil alih":"ngahak","mencari tahu":"mikanyaho","mata air":"cinyusu","masukkan kembali":"asupkeun deui","masih banyak lagi":"rea-rea deui","mana pun":"mana wae oge","malam hari":"jero peuting","mafia wars game":"perang mafia","luka berat":"tatu parna","luar biasa":"rongkah","lihat ke":"ilikan ka","lebih lanjut":"saterusna","lebih dulu":"leuwih tiheula","lebih dahulu":"leuwih tiheula","lama-kelamaan":"lila-lila","lalu lintas":"patalimarga","laki-laki":"lalaki","lagi-lagi":"kitu deui","kurun waktu":"waktu","kiriman terdahulu":"kiriman dahulu","kiriman dinding":"kiriman wall","kiri-kanan":"kenca-katuhu","kini berteman dengan":"menggenjus dengan","kerjasama":"gawe babarengan","kerja sama":"gawe babarengan","kemudian hari":"poe kahareupnakeun","kelebihan teknik":"kaunggulan teknik","ke dalam":"kana jero","kawan-kawan":"parakanca","kata-kata":"kekecapan","kata sandi":"sandi kecap","karena itu":"ku kituna","kali ini":"ayeuna","kadang-kadang":"sakapeung","kabar serupa":"beja nu sarupa","kabar berita":"berita baru","ka diska":"kana diska","jenis kelamin":"jenis kelamin","jangan-jangan":"boa-boa","itu adalah":"itu teh","ini adalah":"ini teh","indah sekali":"endah pisan","ibu kota":"bapak kota","hutan lindung":"leuweung tutupan","hanya dengan":"ukur ku","hanya":"ukur","hati-hati":"ati-ati","hari itu":"poe eta","hari ini":"poe ieu","hari bersejarah":"poe nu miboga ajen sajarah","harap tunggu":"tungguan","harap bersabar":"sing sabar","hapus dari teman":"udah gk perawan","halaman lain":"kacaloka liana","foto dinding":"potret na bilik","efek samping":"efek samping","di waktu mendatang":"dina waktu nu bakal datang","di bawah umur":"can sawawa","ditandai dalam":"ditandaan dina","disebutkan bahwa":"nyebutkeun yen","dibagikan orang lain":"dibagikeun ku batur","di sekitar":"sabudeureun","di sebuah":"dina hiji","di dinding":"dina bilik","di dalamnya":"di jerona","di dalam":"di jero","di bawah":"di handapeun","dengan teliti":"kalayan tarapti","dengan teknik":"make tehnik","dengan sendirinya":"ku sorangan","dengan nol":"ku enol","dengan lebih banyak":"kalayan leuwih loba","dengan demikian":"ku kituna","dengan cara":"make cara","orang-orang":"pirang-pirang jalma","masing-masing":"sewang-sewang","diam-diam":"rerencepan","anak-anak":"barudak","hati-hati":"ati-ati","sehari-hari":"sapopoe","dari program":"tina program","dari pada":"tibatan","dari kotak":"tina kotak","dari komputer":"tina komputer","dari induk":"tina indung","dari daftar":"tina daptar","dalam rangka":"dina raraga","dalam negeri":"jero nagara","dalam kehidupan":"dina kahirupan","dalam album":"dina album","cukup untuk":"mahi keur","copot program":"piceun program","colek kembali":"toel deui","cari tahu":"piwanoh","cari orang":"teangan jalma","cantik sekali":"geulis pisan","cantik jelita":"geulis kawanti-wanti","bulu tangkis":"badminton","buah tangan":"oleh-oleh","buah kain":"lambar lawon","buah dada":"pinareup","blokir orang ini":"blokir orang jelek ini","beruntung sekali":"untung pisan","berterus terang":"balaka","berterimakasih sekali":"nganuhunkeun pisan","berteman dengan":"nyobat jeung","bertekuk lutut":"taluk","bertahun-tahun":"mangtaun-taun","berkata-kata":"kedal ucap","berkat anda":"kulantaran anjeun","berita populer":"wartos populer","berikut ini":"di handap ieu","beri tahu":"bejaan","berhubungan kelamin":"sapatemon","berhubungan intim":"sapatemon","berhubungan badan":"sapatemon","bergabung ke":"ngagabung jeung","belakangan ini":"kadieunakeun","bekerja sama":"digawe babarengan","baru saja":"cikeneh","barangsiapa":"sing saha","barang siapa":"sing saha","banjir bandang":"caah rongkah","baik sekali":"alus pisan","bahasa asing":"basa kosta","badan pengawasan":"badan pengawasan","badan kesehatan":"badan kasehatan","atas terjadinya":"kana kajadian","atas segala":"tina sagala","apa yang anda pikirkan":"mikiran naon","anda masukkan":"diasupkeun ku anjeun","anda lakukan":"dipigawe ku anjeun","anda kerjakan":"dipigawe ku anjeun","ambil bagian":"miluan","ambil alih":"cekel","alat undang":"pangulem","akun lain":"akun sejen","akan tetapi":"tapi","akan dapat":"bakalan","ada kemungkinan":"jigana","ada banyak orang":"rea","apa pun":"naon wae","terhubung dengan":"hubungan jeung","senin pukul":"senen tabuh","selasa pukul":"salasa tabuh","rabu pukul":"rebo tabuh","kamis pukul":"kemis tabuh","jum'at pukul":"juma'ah tabuh","sabtu pukul":"saptu tabuh","minggu pukul":"minggu tabuh","terakhirnya":"panungtungna","temannya":"sobatna","tautannya":"panumbuna","statusnya":"statusna","selengkapnya":"salengkepna","selanjutnya":"satuluyna","sebelumnya":"samemehna","profilnya":"propilna","dindingnya":"bilikna","mengisinya":"ngeusian eta","lainnya":"liana","katanya":"majarkeun teh","fotonya":"potretna","albumnya":"albumna","misalnya":"misalna","kepadanya":"ka inyana","berteman":"nyobat","berlangganan":"ngalanggan","beriklan":"masang iklan","berdasarkan":"dumasar kana","berbagi":"babagi","mengomentari":"mairan","menelusuri":"ngotektak","mengirimi":"ngirim","melalui":"ngaliwatan","mengenali":"mikawanoh","melindungi":"nyalindungan","mendaftarlah":"mangga daptar","menjadi":"jadi","mengimpor":"ngimpor","mengganti":"ngaganti","mendaftar":"daptar","mencari":"neangan","memberi":"mere","memuat...":"dipulut...","melihat":"ningali","memiliki":"ngabogaan","memilih":"milih","memutuskan":"nangtukeun","membagikan":"ngabagikeun","menawarkan":"nawaran","merekomendasikan":"ngasorkeun","menyukai":"mikaresep","menyimpan":"neundeun","menyarankan":"nyarankeun","meninggalkan":"ninggalkeun","menampilkan":"nembrakeun","memberikan":"maparin","mengendalikan":"ngadalikeun","menemukan":"manggihan","menggunakan":"make","memasukkan":"ngasupkeun","memasukan":"ngasupkeun","mematikan":"mareuman","menghidupkan":"ngahirupkeun","melakukannya":"migawena","menyesuaikan":"nyaluyukeun","mengenalinya":"wanoh ka inyana","membantu":"mantuan","mencakup":"ngawengku","mengelola":"ngokolakeun","mengontrol":"ngontrol","tersebar":"sumebar","terkecil":"pangleutikna","terdahulu":"pangheulana","tercepat":"panggancangna","terbesar":"pangbadagna","terbaru":"panganyarna","kunjungilah":"sok longok","itulah":"eta pisan","cobalah":"cobaan","bacalah":"sok baca","tandai":"tandaan","perbarui":"kiwarikeun","pelajari":"piwanoh","kunjungi":"longok","komentari":"tulis pairan","jelajahi":"sungsi","kenali":"piwanoh","dibuat":"dijieun","dilihat":"ditempo","ditandai":"ditandaan","dikenali":"dipiwanoh","diperbarui":"dikiwarikeun","dipelajari":"dipiwanoh","dikunjungi":"dilongok","dikomentari":"dipairan","dijelajahi":"disungsi","usulkan":"usulkeun","tetapkan":"tangtukeun","temukan":"paluruh","tampilkan":"tembrakeun","sembunyikan":"sumputkeun","sarankan":"asorkeun","laporkan":"laporkeun","lampirkan":"seselkeun","kendalikan":"kadalikeun","jadikan":"jadikan","hubungkan":"kaitkan","gunakan":"pake","dapatkan":"dapatkan","biarkan":"antepin","bagikan":"bagiin","sesuaikan":"saluyukeun","tambahkan":"tambahin","pamerkan":"tembongkeun","pikirkan":"alami saat ini","ditambahkan":"ditambahkeun","sehingga":"nepikeun ka","terhubung":"nyambung","tertentu":"nu tangtu","terlihat":"katempo","terkirim":"dikirimkeun","tersedia":"disayagikeun","termasuk":"kaasup","bersama":"babarengan","berlaku":"lumaku","bepergian":"iinditan","pertemanan":"sosobatan","permintaan":"permintaan","permainan":"kaulinan","pengendalian":"pangadalian","pengaturan":"panataan","pemberitahuan":"iber","pembaruan":"kiwarian","pertanyaan":"patalekan","belakang":"tukang","depan":"hareup","ketentuan":"katangtuan","kesalahan":"kasalahan","keamanan":"kaamanan","kebijakan":"kawijakan","kemampuan":"kamampuh","dibagikan":"dibagikeun","diterapkan":"diterapkeun","semakin":"mingkin","makin":"mingkin","seperti":"saperti","colekan":"colekan","catatan":"diary","undangan":"undangan","tautan":"link","penyaring":"panyaring","pengguna":"pamake","pengembang":"pamekar","komentar":"pairan","kendali":"kadali","kata":"kecap","karier":"karir","halaman":"halaman","foto":"foto gw","email":"imel","dinding":"wall","beranda":"lihat berita","bendera":"bandera","minta bantuan":"pitulung","aktivitas":"yang lo lakuin","video":"vidio","teman":"prend","pusat":"puseur","pesan":"sms","nomor":"nomer","sesuatu":"taeun","tambahan":"panambah","cari temen genjus":"pamaluruhan","pencari":"cari temen genjus","penelusur":"panyungsi","anak":"budak","gratis":"haratis","bantu":"tulungan","upload":"unggahkeun","undang":"ondang","lacak":"sungsi","kelola":"atur","buat":"jieun","cari":"teangan","colek":"cium","sunting":"ganti","masuk":"masuk","kembali":"balik deui","keluar":"bosen","lihat":"ilikan","semenit":"semenit","sejam":"sajam","sehari":"sapoe","barusan":"barusan","saat":"nalika","sekarang":"skrg","kini":"kini","pagi":"isuk","kemarin":"kmaren","tahun":"taun","sore":"pasosore","hari":"poe","besok":"isukan","lampau":"heubeul","senin":"senen","selasa":"selasa","sabtu":"saptu","rabu":"rebo","kamis":"kemis","jum'at":"juma'ah","sekitarnya":"sabudeureuna","seorang":"saurang","sendiri":"sorangan","sebuah":"hiji","sebagian":"sabagian","beberapa":"beberapa","sekitar":"sekitar","semua":"all","banyak":"loba","sederhana":"basajan","khusus":"husus","mirip":"sarupa","lebih":"leuwih","lengkap":"lengkep","secara":"sacara","sama":"sarua","ketika":"nalika","kenal":"wanoh","sampai":"nepi","dalam":"jeroeun","nol":"enol","seribu":"sarebu","ribu":"rebu","satu":"satu","enam":"enam","sembilan":"sembilan","delapan":"delapan","empat":"mpat","tiga":"tiga","sepuluh":"sapuluh","sebelas":"sebelas","kesemua":"sakabeh","suka":"resep","bangga":"reueus","benci":"ngewa","rindu":"sono","lupa":"teu inget","tampil":"midang","harus":"kudu","boleh":"meunang","seberapa":"sabaraha","berapa":"berapa","kenapa":"ku naon","mengapa":"naha","siapa":"siapa","bagaimanakah":"kumaha","bagaimana":"kumaha","apakah":"naon","apa":"ape","ataukah":"atawa","sekalipun":"sok sanajan","ada":"ade","adalah":"teh","akan":"bakal","atau":"atawa","ataupun":"atawa","bahwa":"bahwa","baru":"anyar","belum":"acan","beri":"bere","agar":"agar","dan":"jeung","dapat":"bisa","dari":"ti","daripada":"tibatan","dengan":"reujeung","sebagai":"salaku","ini":"ini","itu":"itu","jika":"kalo","juga":"juga","karena":"karena","ke":"ka","kepada":"ka","lain":"lian","mau":"hayang","oleh":"ku","bagi":"pikeun","pada":"dina","saja":"wae","sana":"ditu","sangat":"kacida","setelah":"sanggeus","sini":"dieu","sudah":"geus","telah":"geus","tentang":"ngeunaan","tidak":"teu","untuk":"pikeun","yang":"nu","yen":"bahwa","saya":"kuring","perempuan":"awewe","orangtua":"kolot","orang tua":"kolot","orang lain":"batur","orang utan":"orang utan","orang":"jalma","nama":"ngaran","mereka":"arinyana","lelaki":"lalaki","kami":"kuring saparakanca","dia":"inyana","anu":"taeun tea","anda":"anjeun","aku":"kuring","":""};
//JoeSimmons prepareRegex //
String.prototype.prepareRegex=function(){return this.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g,"\\$1")};function isOkTag(a){return("pre,blockquote,code,input,button,textarea, form, input, label ".indexOf(","+a)==-1)}var regexs=new Array(),replacements=new Array();for(var word in words){if(word!=""){regexs.push(new RegExp("\\b"+word.prepareRegex().replace(/\*/g,'[^ ]*')+"\\b",'gi'));replacements.push(words[word])}}var texts=document.evaluate(".//text()[normalize-space(.)!='']",document.body,null,6,null),text="";for(var i=0,l=texts.snapshotLength;(this_text=texts.snapshotItem(i));i++){if(isOkTag(this_text.parentNode.tagName.toLowerCase())&&(text=this_text.textContent)){for(var x=0,l=regexs.length;x<l;x++){text=text.replace(regexs[x],replacements[x]);this_text.textContent=text}}}
}, false );