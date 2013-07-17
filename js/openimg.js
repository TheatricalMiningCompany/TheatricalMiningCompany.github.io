// <script type="text/javascript" src="js/openimg.js"></script>
function OpenImg(strImg,iW,iH)
   {
   iW +=40;
   iH +=50;
   var vImage = "<img src=" +strImg+ " alt=Example onclick='window.close(); return true'>";
   var vOptions= "toolbar=no,menubar=no,statusbar=no,scrollbars=yes,hotkeys=no,dependent=yes";
   vOptions +=",Width=" +iW+ ",Height=" +iH;
   var newWin= window.open('','newImg',vOptions);
   newWin.document.writeln(vImage);
   newWin.document.close();
   newWin.focus();
   }
