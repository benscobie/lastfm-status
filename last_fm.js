var LastFMStatus = {
  defaultApiKey    : '8268a36df9e8ca5f3bf2dac06f83ef93',
  updateIntervalID : null,
  updateDelay      : 60000,
  apikey           : null,
  username         : null,
  trackInfo        : null,

  init: function(options) {
    options = options || {};
    this.apikey = (options.apikey ? options.apikey:this.defaultApiKey);
    if (options.username) {
      this.username = options.username;
    } else {
      throw 'RuntimeError: No username was specified!';
    }
    this.insertCSS();
    this.fetch();
  },

  url: function(callback) {
    return 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+this.username+'&api_key='+this.apikey+'&limit=2&format=json&callback='+callback;
  },

  insertCSS: function() {
    var style       = document.createElement('style');
    style.innerHTML = "#lfm{font-family:Georgia; color:white; text-align:center; padding:0 20px; line-height:60px; background: #DC5248;"
                      +"max-width:600px; min-width:200px;  border-top:10px solid #AA2B1D; border-bottom:10px solid #AA2B1D; font-size:15px;}"
                      +"strong{font-style:italic; text-shadow:1px -2px 4px #962215;} a, a:visited{color:#FFCFCF;}";
    document.body.appendChild(style);
  },

  fetch: function() {
    var oldScript = document.getElementById('lfm_state_json');
    if (oldScript) {
      document.body.removeChild(oldScript);
    }
    var script = document.createElement('script');
    script.src = this.url('LastFMStatus.updateInfo');
    script.id  = 'lfm_state_json'
    document.body.appendChild(script);
  },

  updateInfo: function(data) {
    var track = data.recenttracks.track[0];
    var trackInfo = {
      song    : track.name,
      artist  : track.artist["#text"],
      album   : track.album["#text"],
      image   : track.image[1]["#text"],
      playing : (track["@attr"] ? true : false)
    };
    this.trackInfo = (this.trackInfo || {});

    if (this.songChanged(trackInfo)) {
      this.trackInfo = trackInfo;
      this.updateView();
    }
    setTimeout(function() {LastFMStatus.fetch()}, this.updateDelay);
  },

  songChanged: function(newInfo) {
    return this.trackInfo.song != newInfo.song || this.trackInfo.playing != newInfo.playing;
  },

  updateView: function() {
    var statusBox = document.getElementById('lfm');
    if (!statusBox) {
      var view = document.createElement('div');
      view.id  = "lfm";
      document.body.appendChild(view);
      statusBox = document.getElementById('lfm');
    }
    var status = this.trackInfo.playing ? 'Now Playing: ' : 'Last Played: ';
    statusBox.innerHTML = status+'<strong>'+this.trackInfo.song+'</strong> by <strong>'+this.trackInfo.artist+'</strong> '+
                          '( <a href="http://www.last.fm/user/' + this.username + '">last.fm</a> )';

  }
};
