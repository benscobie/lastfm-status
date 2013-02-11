# Last.fm Status

Last.fm Status utilises the Last.fm API to show your currently playing track on a website using JavaScript.

## Install

Download the last_fm.js file and include it on the page(s) you want to display your currently playing track. The following code is usually placed inside the head tags:
```html
<script type="text/javascript" src="last_fm.js"></script>
<script>
	window.onload = function() {
		LastFMStatus.init({
			username: "desired user name"
		});
	};
</script>
```

Preferably you would specify your own Last.fm API Key (aquired at www.last.fm/api) like so:
```js
<script>
	window.onload = function() {
		LastFMStatus.init({
			username: "desired user name",
			apikey: "key"
		});
	};
</script>
```

Add the following HTML to your page where you want it to be displayed. If this block is not added then the track information will appear at the bottom of the page.
```html
<div id="lfm">Loading</div>
```

Customize the CSS to your liking and add it to your stylesheet:
```css
#lfm {
	font-family: Georgia;
	color: white;
	text-align: center;
	padding: 0 20px;
	line-height: 60px;
	background: #DC5248;
	max-width: 600px;
	min-width: 200px; 
	border-top: 10px solid #AA2B1D;
	border-bottom: 10px solid #AA2B1D;
	font-size: 15px;
}

strong {
	font-style: italic;
	text-shadow: 1px -2px 4px #962215;
}

a, a:visited {
	color:#FFCFCF;
}
```

## Example:

See a demo by Sfate here: http://sfate.github.com/lastfm-status/

## Contribute

Feel free to improve upon this in any way.
