(async () => {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get('redirect') === 'true';
  const blob = params.get('blob') === 'true';

  let currentVideoUrl = null; // Store the current video URL
  let videoElement = null; // Store the current video element

  const fetchAndUpdateVideo = async () => {
    try {
      const response = await fetch('stream.json');
      const streamData = await response.json();
      const videourl = streamData.videourl;

      // Check if the video URL has changed
      if (videourl !== currentVideoUrl) {
        currentVideoUrl = videourl;

        // If a video element exists, remove it and add the new one
        if (videoElement) {
          videoElement.remove();
        }

        // Create a new video element
        videoElement = document.createElement('video');
        videoElement.src = videourl;
        videoElement.autoplay = true;
        videoElement.loop = true;  // Ensures the video loops automatically
        videoElement.controls = true;
        videoElement.className = 'tv-video';
        document.getElementById('content').appendChild(videoElement);

        // Make the video unpauseable by continuously checking its state
        videoElement.addEventListener('play', () => {
          setInterval(() => {
            if (videoElement.paused) {
              videoElement.play();
            }
          }, 100);
        });
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  // Initial video load
  await fetchAndUpdateVideo();

  // Set an interval to periodically check for a new video
  setInterval(fetchAndUpdateVideo, 5000); // Check every 5 seconds
})();
