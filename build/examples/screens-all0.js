require('Common');
var Screens = require('Screens');
var all = Screens.all;
all.forEach(function(screen, i) {
  console.log('The sharpness (scale factor) of screen '+i+' is:'+screen.scaleFactor);
  console.log('The color resolution (bitsPerPixel) of screen '+i+' is:'+screen.bitsPerPixel);
  console.log('The width of screen '+i+' is: '+screen.bounds.width+' in logical pixels.');
  console.log('The height of screen '+i+' is: '+screen.bounds.height+' in logical pixels.');
  // The position of a screen is normalized across all screens.  For example if screen 1 is 
  // 0,0 and screen 2 is at left (x) 1025 and top (y) 0 its right to screen 1. 
  // Screens can overlap. When mirroring your display two screens will return the same X/Y.
  console.log('Screen '+i+' left is: '+screen.bounds.x+' in logical pixels.');
  console.log('Screen '+i+' top is: '+screen.bounds.y+' in logical pixels.');
  // Note that visibleBounds is the work area e.g., where windows are allowed
  // if no menubar (in osx), or taskbar exists the width, height will be the same as bounds.
  console.log('The workarea width of screen '+i+' is: '+screen.visibleBounds.width);
  console.log('The workarea height of screen '+i+' is: '+screen.visibleBounds.height);
  console.log('The workarea starts at left: '+screen.visibleBounds.x);
  console.log('The workarea starts at top: '+screen.visibleBounds.y);
});
setTimeout(function() {	
	var file = process.argv[1];
	var fs = require('fs');
	process.argv[2]='tests';
	var utils = require('../../../Tint/test/tools/utilities.js');
	var outfile = file.replace('examples/','images/').replace('examples\\','images\\').replace('.js','');
	var os = require('os');
	var market = "";
	var ismac = os.platform().toLowerCase() == "darwin";
	if(ismac && os.release().indexOf("12.") > -1) market = "mountainlion";
	if(ismac && os.release().indexOf("13.") > -1) market = "mavericks";
	if(ismac && os.release().indexOf("14.") > -1) market = "yosemite";
	if(!ismac && os.release().indexOf("6.") > -1) market = "win7";
	if(!ismac && os.release().indexOf("7.") > -1) market = "win8";
	
	//utils.takeSnapshotOfCurrentWindow(outfile+'_'+market+'_topwindow.png');
	//utils.takeSnapshotOfActiveScreen(outfile+'_'+market+'_screen.png');
	//fs.writeFileSync('tmp',outfile+'_'+market+'_screen.png');
	process.exit(0);
},1000);
