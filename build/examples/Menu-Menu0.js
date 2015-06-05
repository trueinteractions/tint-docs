require('Common');
var win = new Window(); // Create a new window.
win.visible = true; // make sure the window is shown.
// Create a menu in OSX
var mainMenu = new Menu();
var appleMenu = new MenuItem(application.name, '');
var fileMenu = new MenuItem('File', '');
var editMenu = new MenuItem('Edit', '');
var windowMenu = new MenuItem('Window', '');
var helpMenu = new MenuItem('Help', '');
mainMenu.appendChild(appleMenu);
mainMenu.appendChild(fileMenu);
mainMenu.appendChild(editMenu);
mainMenu.appendChild(windowMenu);
mainMenu.appendChild(helpMenu);

var appleSubmenu = new Menu(application.name);
appleSubmenu.appendChild(new MenuItem('About '+application.name, ''));
appleSubmenu.appendChild(new MenuItemSeparator());
appleSubmenu.appendChild(new MenuItem('Hide '+application.name, 'h'))
   .addEventListener('click', function() { application.visible = false; });
appleSubmenu.appendChild(new MenuItem('Hide Others', ''))
   .addEventListener('click', function() { application.hideAllOtherApplications(); });
appleSubmenu.appendChild(new MenuItem('Show All', ''))
   .addEventListener('click', function() { application.unhideAllOtherApplications(); });
appleSubmenu.appendChild(new MenuItemSeparator());
appleSubmenu.appendChild(new MenuItem('Quit '+application.name, 'q'))
   .addEventListener('click', function() { process.exit(0); });
appleMenu.submenu = appleSubmenu;

var fileSubmenu = new Menu('File');
fileSubmenu.appendChild(new MenuItem('New File', 'f'));
fileSubmenu.appendChild(new MenuItem('Open...', 'o'));
fileSubmenu.appendChild(new MenuItem('Save', 's'));
fileSubmenu.appendChild(new MenuItem('Save As...', 'S', 'shift'));
fileSubmenu.appendChild(new MenuItemSeparator());
fileSubmenu.appendChild(new MenuItem('Close', 'c', 'cmd'));
fileMenu.submenu = fileSubmenu;

var editSubmenu = new Menu('Edit');
var undo = new MenuItem('Undo', 'u');
undo.addEventListener('click', function() { application.undo(); });
editSubmenu.appendChild(undo);
editSubmenu.appendChild(new MenuItem('Redo', 'r'))
   .addEventListener('click', function() { application.redo(); });
editSubmenu.appendChild(new MenuItemSeparator());
editSubmenu.appendChild(new MenuItem('Copy', 'c'))
   .addEventListener('click', function() { application.copy(); });
editSubmenu.appendChild(new MenuItem('Cut', 'x'))
    .addEventListener('click', function() { application.cut(); });
editSubmenu.appendChild(new MenuItem('Paste', 'p'))
   .addEventListener('click', function() { application.paste(); });
editMenu.submenu = editSubmenu;

var windowSubmenu = new Menu('Window');
windowSubmenu.appendChild(new MenuItem('Minimize', 'm'))
    .addEventListener('click', function() { win.state = "minimized"; });
windowSubmenu.appendChild(new MenuItem('Zoom', ''))
    .addEventListener('click', function() { win.state = "maximized"; });
windowSubmenu.appendChild(new MenuItemSeparator());
windowSubmenu.appendChild(new MenuItem('Bring All to Front', ''))
    .addEventListener('click', function() { win.bringToFront(); });
windowSubmenu.appendChild(new MenuItemSeparator());
windowMenu.submenu = windowSubmenu;

var helpSubmenu = new Menu('Help');
helpSubmenu.appendChild(new MenuItem('Website', ''));
helpSubmenu.appendChild(new MenuItem('Online Documentation', ''));
helpSubmenu.appendChild(new MenuItem('License', ''));
helpMenu.submenu = helpSubmenu;

win.menu = mainMenu;
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
