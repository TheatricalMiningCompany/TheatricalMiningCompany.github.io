// <script type="text/javascript" src="js/mailpage-tk.js"></script>

function doMailpage(strTo,strSubject)
  {
  var preMail = '<a href="mailto:';
  var urlMail = '@terrykenney.org';
  var subMail = '?subject=' +strSubject;
  var postMail = '">Click here to start your email</a>';
  var theMail =  preMail +strTo +urlMail +subMail +postMail;
    
  var vOptions= "toolbar=no,menubar=no,statusbar=no,scrollbars=yes,hotkeys=no,dependent=yes,width=300,height=200";

  var newWin= window.open('','newMail',vOptions);
  newWin.document.writeln(theMail);
  newWin.document.writeln("<br><br>");
//  newWin.document.writeln("<h2 onclick='window.close(); return true'>(Close)<h2>");

  newWin.document.writeln("<input type=button onclick=window.close() value='close'>");

  newWin.document.close();
  newWin.focus();

  }
