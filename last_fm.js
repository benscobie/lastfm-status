$(document).ready(function(){
	var settings = {
		number: 2, // 1 doesn't work for tracks that aren't currently playing
		username: 'Sc00by22',
		apikey: '7644924d2acf3d8b0e750956b0da3cfe',
		updateInterval: 60000,
	}
	
	var curName;
	var nowPlaying;
	var artist;
	var nextGet = settings.updateInterval;
	var calls = 0;
	var lastFMUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + settings.username + '&api_key=' + settings.apikey + '&limit=' + settings.number + '&format=json&callback=?';
	
	function getLastFM() {
		$.getJSON(lastFMUrl, function(data){
			$.each(data.recenttracks.track, function(i, item){
				if ( $(this).attr("@attr") ) {
					var playing = true;
				}
				if (curName != item.name || nowPlaying != playing) { // Track status has changed
					alert("Track status has changed, updating");
					nowPlaying = playing;
					curName = item.name;
					artist = item.artist['#text'];
					$('.lfm').fadeOut('normal', function() {
						if ( playing ) {
							$('.lfm').html("Now Playing: ").fadeIn('normal');
						} else {
							$('.lfm').html("Last Played: ").fadeIn('normal');
						}
						$('.lfm').append("<strong>" + curName + "</strong> by <strong>" + artist + "</strong> ");
						$('.lfm').append("( <a href=\"http://www.last.fm/user/Sc00by22\">last.fm</a> )");
						
						setTimeout(function(){
							$('#now_playing').css('margin-left', -$("#now_playing").outerWidth() / 2);
						},1)
					});
					/* 
						We don't want to set a new timeout if there is no track playing at the moment, because a duration doesn't exist.
						The reason we don't do this on the first call is because we might be part way through a long track, such as an hour long podcast.
						Doing it this way means we are accurate within the updateInterval variable timeout and saves pointless calls.
					*/
					if (calls > 1 && playing) {
						alert("Okay, now we want to set a new timeout");
						var trackTime = 'http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=' + settings.apikey + '&artist=' + artist + '&track=' + curName + '&format=json&callback=?';
						$.getJSON(trackTime, function(data){
							$.each(data, function(i, item){
								if (item.duration > settings.updateInterval) {
									nextGet = item.duration;
								} else {
									nextGet = settings.updateInterval;
								}
								return false;
							});
						});
					} else if (calls > 1 && !playing) {
						alert("Resetting the timer because no song is playing at the moment");
						calls = 0;
						nextGet = settings.updateInterval;
					} else {
						alert("Not setting a new timeout yet");
					}
				}
				return false;
			});
		});
		calls += 1;
		setTimeout(getLastFM, nextGet);
	}
	getLastFM();
});