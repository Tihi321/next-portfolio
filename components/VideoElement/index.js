const VideoElement = (props) => {
  const {
    mediaUrl,
  } = props;

  return (
    <figure className="video-element">
      <video
        className="media-video-class"
        controls={false}
        muted={true}
        autoPlay={true}
      >
        <source src={mediaUrl} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </figure>
  );
};

export default VideoElement;
