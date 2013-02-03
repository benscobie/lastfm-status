# Last.fm Status

Last.fm Status uses the Last.fm API to show your currently playing track.

## Install

Download the .js file or use lastest and include it on the page you want to display your currently played track, such as:
```html
<script type="text/javascript" src="https://raw.github.com/Sfate/lastfm-status/master/last_fm.js"></script>
```

Add the following HTML to your page. If div block not added then info will appear at the end of page.
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

## Example:

See demo here: http://sfate.github.com/lastfm-status/

## Contribute

Feel free to improve upon this in any way.
