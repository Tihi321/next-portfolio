import LottieControl from './LottieControl';

const LottieElement = (props) => {
  const {
    className = 'lottie-element-class',
    autoplay = true,
    loop = false,
    controls = true,
    mediaUrl,
  } = props;


  return(
    <LottieControl
      mediaUrl={mediaUrl}
      autoplay={autoplay}
      loop={loop}
      controls={controls}
      className={className}
    />
  )
};

export default LottieElement;
