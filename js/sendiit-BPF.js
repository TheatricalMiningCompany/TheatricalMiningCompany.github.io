// <script type="text/javascript" src="js/sendit-BPF.js"></script>

function doMailBPF(strTo,strSubject)
  {
  var preMail = '<a href="mailto:';
  var urlMail = '@baltplayfest.com';
  var subMail = '?subject=' +strSubject;
  var postMail = '">Mail Me</a>';
  var theMail =  preMail +strTo +urlMail +subMail +postMail;
//  var theMail =  '"mailto:' +strTo +urlMail +subMail +'"';
  return theMail;
  }
