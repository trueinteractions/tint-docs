require('Common');
var win = new Window();
win.visible = true;
var urlLocation = new TextInput();
var toolbar = new Toolbar();
var backButton = new Button();
var forwardButton = new Button();

backButton.image = 'back'; // named system icon
forwardButton.image = 'forward'; // named system icon

// Use 'space' for a OS-determined variable length space between items.
toolbar.appendChild([backButton, forwardButton, 'space', urlLocation, 'space']);
win.toolbar = toolbar;

urlLocation.alignment = 'center';
urlLocation.linewrap = false;
urlLocation.scrollable = true;
urlLocation.value = 'A text input field';
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
	
utils.writeImage(utils.takeSnapshotOfWindow(win),outfile+'_'+market+'_0_window.png');
	//utils.takeSnapshotOfCurrentWindow(outfile+'_'+market+'_topwindow.png');
	//utils.takeSnapshotOfActiveScreen(outfile+'_'+market+'_screen.png');
	//fs.writeFileSync('tmp',outfile+'_'+market+'_screen.png');
	process.exit(0);
},1000);
