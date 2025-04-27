// console.js 

(function() {
  // Store the current video element (initialize as null)
  let videoElement = document.querySelector('video');

  // Function to update the video from the stream
  window.updateVideo = async function() {
    try {
      const response = await fetch('stream.json');
      const streamData = await response.json();
      const videourl = streamData.videourl;

      if (!videoElement) {
        // If no video element exists, create a new one
        videoElement = document.createElement('video');
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.controls = true;
        document.getElementById('content').appendChild(videoElement);
      }

      // Update the video URL
      videoElement.src = videourl;
      console.log('Video updated:', videourl);
    } catch (err) {
      console.error('Error updating video:', err);
    }
  };

  // Clear the current video
  window.clearVideo = function() {
    if (videoElement) {
      videoElement.remove();
      videoElement = null;
      console.log('Video cleared');
    } else {
      console.log('No video element to clear');
    }
  };

  // Get the client status (check if video exists)
  window.getClientStatus = function() {
    if (videoElement) {
      console.log('Client is running. Video source:', videoElement.src);
    } else {
      console.log('Client is running, but no video is currently displayed.');
    }
  };

  // Toggle video play/pause
  window.togglePlayPause = function() {
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        console.log('Video playing');
      } else {
        videoElement.pause();
        console.log('Video paused');
      }
    } else {
      console.log('No video element found.');
    }
  };

  // Mute or unmute the video
  window.toggleMute = function() {
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
      console.log(videoElement.muted ? 'Video muted' : 'Video unmuted');
    } else {
      console.log('No video element found.');
    }
  };

  // Set the volume of the video
  window.setVolume = function(volume) {
    if (videoElement) {
      videoElement.volume = Math.min(Math.max(volume, 0), 1); // Clamp value between 0 and 1
      console.log(`Volume set to ${volume * 100}%`);
    } else {
      console.log('No video element found.');
    }
  };

  // Skip to a specific time in the video
  window.skipVideo = function(time) {
    if (videoElement) {
      videoElement.currentTime = time;
      console.log(`Video skipped to ${time} seconds.`);
    } else {
      console.log('No video element found.');
    }
  };

  // Manually change the video source by URL
  window.changeVideoSource = function(url) {
    if (videoElement) {
      videoElement.src = url;
      videoElement.play();
      console.log(`Video source changed to: ${url}`);
    } else {
      console.log('No video element found.');
    }
  };

  // Log current video info (URL, playing status, volume)
  window.logVideoInfo = function() {
    if (videoElement) {
      console.log('Current Video Info:');
      console.log('URL:', videoElement.src);
      console.log('Playing:', !videoElement.paused);
      console.log('Volume:', videoElement.volume * 100 + '%');
      console.log('Muted:', videoElement.muted);
    } else {
      console.log('No video element found.');
    }
  };

  // Log available commands
  console.log("GioyousTV Client Control: The following commands are available:");
  console.log("  - `updateVideo()`  : Update the video based on stream data.");
  console.log("  - `clearVideo()`   : Remove the current video.");
  console.log("  - `getClientStatus()` : Check the client status.");
  console.log("  - `togglePlayPause()` : Play/Pause the video.");
  console.log("  - `toggleMute()`     : Mute/Unmute the video.");
  console.log("  - `setVolume(value)` : Set the video volume (0 to 1).");
  console.log("  - `skipVideo(time)`  : Skip the video to a specific time in seconds.");
  console.log("  - `changeVideoSource(url)` : Change the video source URL.");
  console.log("  - `logVideoInfo()`   : Log the current video URL, playing status, volume.");
})();
