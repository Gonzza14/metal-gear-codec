/*!
* Metal Gear Solid Codec.
* (c) 2013 Chris Tabor <dxdstudio@gmail.com>
* See license for more information
* <3
* https://github.com/christabor/metal-gear-codec/
*/

function initMgsCodec(options) {
	var defaults = {
		interval_speed: 300,
		animation_timeout: 1500,
		transcription: '.transcription p'
	};
	
	// Merge options with defaults
	var opts = Object.assign({}, defaults, options);
	
	var codecEl = document.getElementById('mgs-codec');
	var notesEls = codecEl.querySelectorAll(opts.transcription);
	var imgEls = codecEl.querySelectorAll('img');
	var volumeIndicator = codecEl.querySelector('#svg-volume-indicator-total');
	var audioEl = document.querySelector('audio');
	var current_note = 0;
	var max_volume = volumeIndicator.offsetHeight;
	var audioStarted = false;
	
	function fadeOut(elem, duration) {
		var opacity = 1;
		var start = Date.now();
		var interval = setInterval(function() {
			var elapsed = Date.now() - start;
			opacity = Math.max(1 - (elapsed / duration), 0);
			elem.style.opacity = opacity;
			if (opacity === 0) {
				elem.style.display = 'none';
				clearInterval(interval);
			}
		}, 10);
	}
	
	function triggerClick() {
		// advance dialogue to next note
		if (current_note < notesEls.length) {
			fadeIn(notesEls[current_note], 200);
			
			// hide previous notes
			for (var i = 0; i < current_note; i++) {
				fadeOut(notesEls[i], 100);
			}
			
			// increment forward
			current_note += 1;
		}
	}
	
	function animateCodecBar() {
		// randomize the height of the bar to simulate volume
		volumeIndicator.style.height = (Math.random() * max_volume) + 'px';
	}
	
	function init() {
		// Play audio when codec starts (user has interacted via button click)
		if (audioEl && audioEl.paused && !audioStarted) {
			audioEl.play().catch(function(err) {
				console.log('[v0] Audio playback prevented:', err);
			});
			audioStarted = true;
		}
		
		// Fade in all images
		imgEls.forEach(function(img) {
			fadeIn(img, 400);
		});
		
		// show first note
		if (notesEls.length > 0) {
			fadeIn(notesEls[0], 200);
		}
		
		// Add click listener
		codecEl.addEventListener('click', triggerClick);
		
		// Start animating the volume indicator
		setTimeout(function(){
			setInterval(animateCodecBar, opts.interval_speed);
		}, opts.animation_timeout);
	}
	
	// Start with fade out then fade in effect
	codecEl.style.opacity = '0';
	codecEl.style.display = 'none';
	codecEl.style.display = 'block';
	var opacity = 0;
	var start = Date.now();
	var interval = setInterval(function() {
		var elapsed = Date.now() - start;
		opacity = Math.min(elapsed / 200, 1);
		codecEl.style.opacity = opacity;
		if (opacity === 1) {
			clearInterval(interval);
			init();
		}
	}, 10);
}
