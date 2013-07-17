// <script type="text/javascript" src="js/sendit.js"></script>

function doMail(strTo,strSubject)
  {
  var preMail = '<a href="mailto:';
  var urlMail = '@terrykenney.org';
  var subMail = '?subject=' +strSubject;
  var postMail = '">Click here to start mail</a>';
//  var theMail =  strTo +urlMail +subMail;
  var theMail =  preMail +strTo +urlMail +subMail +postMail;
//  var theMail =  '"mailto:' +strTo +urlMail +subMail +'"';
  return theMail;
  }
