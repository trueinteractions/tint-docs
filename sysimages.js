require('Common');
var os = require('os');
var fs = require('fs');
var utils = require('Utilities');
	var market;
	var ismac = os.platform().toLowerCase() == "darwin";
	if(ismac && os.release().indexOf("12.") > -1) market = "mountainlion";
	else if(ismac && os.release().indexOf("13.") > -1) market = "mavericks";
	else if(ismac && os.release().indexOf("14.") > -1) market = "yosemite";
	else if(!ismac && os.release().indexOf("6.") > -1) market = "win7";
	else if(!ismac && os.release().indexOf("7.") > -1) market = "win8";
	else market = "unknown";

var icons = [
	'action',
	'add',
	'advanced',
	'application',
	'back-inverse',
	'back',
	'bookmarks',
	'caution',
	'colors',
	'computer',
	'everyone',
	'folder',
	'forward-inverse',
	'forward',
	'general',
	'group',
	'home',
	'info',
	'lock',
	'network',
	'reload-inverse',
	'reload',
	'remove',
	'reveal',
	'share',
	'status-available',
	'status-none',
	'status-partially-available',
	'status-unavailable',
	'stop-inverse',
	'stop',
	'unlock',
	'user',
	'view-as-columns',
	'view-as-preview',
	'view-as-list',
	'view-as-objects',
	'view-as-tree',
	'trash',
	'trash-full'
];

var tmp = "<h1>Using System Images</h1>";
tmp += "<p>System icons are a way of providing continuity and cohesion in an application. They can be used anywhere an image is needed in Tint.  Instead of providing a URL for an image, pass in the name of the icon to use.  These are referred to in the documentation as a 'named image'.</p>";
tmp += "<div class=\"ui message important\"><h3>Copyright Notice</h3> <p>These images are used for reference, they should not be downloaded or reproduced. In addition, they may vary per operating system version. These images may not be embedded in a program, but only referenced using a 'named image'. Mac OSX icons are copyright Apple, Inc. Windows icons are copyright Microsoft, Inc.</p> </div>";
tmp += "<table class=\"ui table parameters system-images\">\n";
tmp += "<tr><th>Name</th><th>Mac OSX Yosemite</th><th>Windows 7</th></tr>\n"
for(var i=0; i < icons.length; i++) {
	var img;
	if(ismac) {
		img = utils.makeNSImage(icons[i]);
		if(img != null) {
			img = utils.makeURIFromNSImage(img).replace('data:image/png;base64,','');
			if(img == null) {
				console.log('uhoh.'+icons[i]);
			}
		} else {
			console.log('not found... '+icons[i]);
		}
	} else {
		img = utils.getImageFromString(icons[i]);
	}
	if(img) {
		tmp += "<tr><td>"+icons[i]+"</td><td><img src=\"images/sys/"+icons[i]+"_yosemite.png\"/></td><td><img src=\"images/sys/"+icons[i]+"_win7.png\"/></td></tr>";
		fs.writeFileSync('build/images/sys/'+icons[i]+'_'+market+'.png', new Buffer(img, 'base64'));
	}
	else console.log('could not find: ', icons[i]);
}
tmp += "</table>";
fs.writeFileSync('topics/sysimages.md', new Buffer(tmp));
process.exit(0);

