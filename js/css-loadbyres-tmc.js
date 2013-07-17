//
// js to load css based on screen resolution
// TNC version
//
function resCSS()
  {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' )
    {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    }
  else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) 
    {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
    } 
  else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) 
    {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
    }
 // window.alert( 'Width = ' + myWidth );
 // window.alert( 'Height = ' + myHeight );

  myWidth=myWidth+16;

  if (myWidth > 1000)
    {
    document.styleSheets[0].addImport("URL('css/tmc1200.css');");
    }
  else
    {
    document.styleSheets[0].addImport("URL('css/tmc800.css');");
    }
  }
  
function getBrowserWidth()
  {
  if (window.innerWidth)
    {
    return window.innerWidth;
	}  
  else if (document.documentElement && document.documentElement.clientWidth != 0)
    {
    return document.documentElement.clientWidth;
	}
  else if (document.body){return document.body.clientWidth;} return 0;
  }
  
function dynamicLayout()
  {
  var browserWidth = getBrowserWidth();

  //Load Thin CSS Rules
  if (browserWidth > 1000)
    {
    changeLayout("tmc1200");
    }
  //Load 800 CSS Rules
  else
    {
    changeLayout("tmc800");
    }
  }
  
// changeLayout is based on setActiveStyleSheet function by Paul Sowdon 
// http://www.alistapart.com/articles/alternate/
function changeLayout(description)
  {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++)
    {
	if(a.getAttribute("title") == description){a.disabled = false;}
	else if(a.getAttribute("title") != "default"){a.disabled = true;}
    }
 }

//addEvent() by John Resig
function addEvent( obj, type, fn )
  { 
  if (obj.addEventListener)
    { 
    obj.addEventListener( type, fn, false );
	}
  else if (obj.attachEvent)
    { 
	obj["e"+type+fn] = fn; 
	obj[type+fn] = function(){ obj["e"+type+fn]( window.event ); } 
	obj.attachEvent( "on"+type, obj[type+fn] ); 
	} 
  } 

//Run dynamicLayout function when page loads and when it resizes.
addEvent(window, 'load', dynamicLayout);
addEvent(window, 'resize', dynamicLayout);