const input = document.querySelector('input');
const button = document.querySelector('button');
const downloadLink = document.querySelector('#download-link');

async function downloadTikTokVideo(url) {
  const response = await fetch(url);
  const json = await response.json();

  const videoUrl = json.video.download_url;

  const anchor = document.createElement('a');
  anchor.href = videoUrl;
  anchor.download = 'tiktok.mp4';
  downloadLink.appendChild(anchor);
}

button.addEventListener('click', () => {
  const url = input.value;
  downloadTikTokVideo(url);
});
