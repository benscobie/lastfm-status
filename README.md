# Last.fm Status

Last.fm Status uses the Last.fm API to show your currently playing track.

## Install

Download the .js file and include it on the page you want to display your currently played track, such as:
```html
<script type="text/javascript" src="last_fm.js"></script>
```

Configure the .js file by changing the information (Username, API key and Update interval) in the settings section.

Add the following HTML to your page.
```html
<div id="now_playing">
	<span class="lfm">Loading</span>
</div>
```

Customize the CSS to your liking, I use the following on my website:
```css
#now_playing {
	line-height: 48px;
	height: 48px;
	color: white;
	text-align: center;
	background-color: rgba(0, 0, 0, 0.5);
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	margin-left: -100px;
	padding: 0 20px;
	min-width: 200px;
	bottom: 40px;
	left: 50%;
	position: absolute;
	overflow: hidden;
}
```

## Contribute

Feel free to improve upon this in any way.