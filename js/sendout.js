<-- sendmail code -->
function doMail (receiver,subject)
  {
  var theMail = new SendMail();
  theMail.To = receiver;
  theMail.Subject = subject;
  theMail.send();
  }