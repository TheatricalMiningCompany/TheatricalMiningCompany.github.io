// <script type="text/javascript" src="js/mailpage-bpf.js"></script>
// add a button to the HTML
// <input type=button onclick="Javascript:doMailpage('terry','test',this.name)" value="send email" name="mailbox">

function doMailpage(strTo,strSubject,btnName)
  {
  var preMail = '<a href="mailto:';
  var urlMail = '@baltplayfest.com';
  var subMail = '?subject=' +strSubject +'"';
  var postMail = ' onblur=window.close()>Click here to start mail to ' +strTo +'</a>';
  var theMail =  preMail +strTo +urlMail +subMail +postMail;

// set window options
  var vOptions = "toolbar=no,menubar=no,statusbar=no,scrollbars=yes,hotkeys=no,dependent=yes,width=300,height=200,top=100,left=100";

  var newWin= window.open('','newMail',vOptions);
  newWin.document.writeln(theMail);
  newWin.document.writeln("<br><br>");

  newWin.document.writeln("<input type=button onclick=window.close() value='close'>");

  newWin.document.close();
  newWin.focus();

  }
