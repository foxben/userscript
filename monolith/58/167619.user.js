// ==UserScript==
// @name		Better GPlus view by Foxter and Тандер Фалькор
// @description		Get better view of Google+ 
// ==/UserScript==

@-moz-document domain("plus.google.com") {
/*Change font for all stream*/
#contentPane{
  font-family:Arial, Helvetica, sans-serif !important;
}
 
/*Change font for comments text box*/
.Lf {
  font-family:Arial, Helvetica, sans-serif !important;
}
 
/*Change font for popup window*/
.wK {
  font-family:Arial, Helvetica, sans-serif !important;
}
 
/*Change width for stream*/
.ox {
  width: 56em !important;
}
.Dla, .Ebb, .nqa, .noa, .Kv, .Tc, .Nl {
  width: inherit !important;
}
 
/*Set width for add new post*/
.woa {
  max-width:56em !important;
}
 
/*Change notify popup window (removing grey fields)*/
.ybe, .U7b {
  padding:0px !important;
}
.l2a {
  margin: 0 !important;
}
.l2a, .ob, .f2a, .g8b, .wOb, .yOb {
  width: 383px !important;
}
.Mra {
  margin-top: 2px !important;
}
 
/*Centering pictures in posts*/
.uo {
  width:100% !important;
}
 
/*Fix margin-left on scrolling stream*/
.ci {
  margin:0px !important;
}
 
/* No scrollbar in comments */
.EB {
max-height: 100% !important;
}
 
 
}