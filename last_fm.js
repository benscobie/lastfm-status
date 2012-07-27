$(document).ready(function(){
	var settings = {
		username: 'Sc00by22',
		apikey: '7644924d2acf3d8b0e750956b0da3cfe',
		updateInterval: 60000,
	}
	
	var curName;
	var nowPlaying;
	var lastFMUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + settings.username + '&api_key=' + settings.apikey + '&limit=1&format=json&callback=?';
	
	function getLastFM() {
		$.getJSON(lastFMUrl, function(data){
			$.each(data.recenttracks.track, function(i, item){
				var playing = $(this).attr("@attr") ? true : false;
				if (curName != item.name || nowPlaying != playing) { // Track status has changed
					nowPlaying = playing;
					curName = item.name;
					$('.lfm').fadeOut('normal', function() {
						if ( playing ) {
							$('.lfm').html("Now Playing: ").fadeIn('normal');
						} else {
							$('.lfm').html("Last Played: ").fadeIn('normal');
						}
						$('.lfm').append("<strong>" + curName + "</strong> by <strong>" + item.artist['#text'] + "</strong> ");
						$('.lfm').append("( <a href=\"http://www.last.fm/user/" + settings.username + "\">last.fm</a> )");

						/* This re-centers the div box after the contents have changed as I use a fluid width 
						Remove this if you use your own CSS or don't want this "feature" */
						setTimeout(function(){
							$('#now_playing').css('margin-left', -$("#now_playing").outerWidth() / 2); 
						}, 1)
					});
				}
				return false;
			});
		});
		setTimeout(getLastFM, settings.updateInterval);
	}
	getLastFM();
});