# Last.fm Status - No jQuery

Last.fm Status uses the Last.fm API to show your currently playing track.

## Install

Download the .js file or use the lastest from here and include it on the page you want to display your last or currently playing track, such as:
```html
<script type="text/javascript" src="https://raw.github.com/benscobie/lastfm-status/nojquery/last_fm.js"></script>
```

Add the following HTML to your page. If the div block is not added then the track info will appear at the end of the page.
```html
<div id="lfm">Loading</div>
```

```js
window.onload = function() {
  LastFMStatus.init({
    username: "desired user name"
  });
};
```

Preferably you would specify your own Last.fm API Key by using the following instead:
```js
window.onload = function() {
  LastFMStatus.init({
    username: "desired user name",
	apikey: "key"
  });
};
```


## Example:

See demo here: http://sfate.github.com/lastfm-status/

## Contribute

Feel free to improve upon this in any way.
