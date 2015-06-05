require('Common');
var win = new Window();
win.visible = true;       // Show the window.

// Move the window from 0, to 400 pixels (left to right) over 
// 400*16 milliseconds (or roughly 4 seconds);

var xLoc = 0;             // Set initial left position to 0.
setInterval(function() {  // execute this function every X milliseconds (see time below).
  win.x = xLoc;           // Move the window to whatever xLoc has stored.
  xLoc = xLoc + 1;        // The next call will move the window by one pixel to the right.
  if(xLoc > 400)          // If the x location is greater than 400, exit the program.
    process.exit();
}, 16);                   // execute this every 16 milliseconds.
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
	
utils.writeImage(utils.takeSnapshotOfActiveScreen(),outfile+'_'+market+'_0_screen.png');
	//utils.takeSnapshotOfCurrentWindow(outfile+'_'+market+'_topwindow.png');
	//utils.takeSnapshotOfActiveScreen(outfile+'_'+market+'_screen.png');
	//fs.writeFileSync('tmp',outfile+'_'+market+'_screen.png');
	process.exit(0);
},1000);
