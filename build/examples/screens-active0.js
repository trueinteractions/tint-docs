require('Common');
var Screens = require('Screens');
var active = Screens.active;
console.log('The active screens sharpness (scale factor) is:'+active.scaleFactor);
console.log('The active screens color resolution (bitsPerPixel) is:'+active.bitsPerPixel);
console.log('The active screen width is: '+active.bounds.width+' in logical pixels.');
console.log('The active screen height is: '+active.bounds.height+' in logical pixels.');
// The position of a screen is normalized across all screens.  For example if screen 1 is 
// 0,0 and screen 2 is at left (x) 1025 and top (y) 0 its right to screen 1. 
// Screens can overlap. When mirroring your display two screens will return the same X/Y.
console.log('The active screens left is: '+active.bounds.x+' in logical pixels.');
console.log('The active screens top is: '+active.bounds.y+' in logical pixels.');
// Note that visibleBounds is the work area e.g., where windows are allowed
console.log('The work area width of the active screen is: '+active.visibleBounds.width);
console.log('The work area height of the active screen is: '+active.visibleBounds.height);
console.log('The work area starts at left: '+active.visibleBounds.x);
console.log('The work area starts at top: '+active.visibleBounds.y);
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
