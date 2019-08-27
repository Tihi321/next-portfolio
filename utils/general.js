export function generateSlug(string) {
  return string.toLowerCase().replace(/\s+/g, '-');
}

export function getExtension(string) {
  return (string.match(/\.([^.]*?)(?=\?|#|$)/) || [])[1];
}

export function getYoutubeId(string) {

  let videoId = string.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');

  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  return videoId;
}
