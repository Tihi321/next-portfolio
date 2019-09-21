import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-react-web';

import {
  lottieElementClass,
  spinnerClass,
  buttonsClass,
  buttonClass,
  buttonPlayClass,
  buttonStopClass,
} from './style.scss';

const LottieElement = (props) => {
  const {
    mediaUrl,
    lottieLoop,
  } = props;

  const [data, setData] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch(mediaUrl);
      const data = await response.json();

      setData(data);
      setLoaded(true);
    };

    fetchData(setData, setLoaded);
  }, []);

  const renderLottie = () => {
    const defaultOptions = {
      loop: (lottieLoop === '1'),
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <>
      <div
        className={lottieElementClass}
      >
        <Lottie
          width="auto"
          options={defaultOptions}
          isStopped={play}
          eventListeners={[
            {
              eventName: 'complete',
              callback: () => setPlay(true),
            },
          ]}
        />
      </div>
    <div className={buttonsClass}>
      <button className={`${buttonClass} ${buttonPlayClass}`} onClick={() => setPlay(false)}/>
      <button className={`${buttonClass} ${buttonStopClass}`} onClick={() => setPlay(true)}/>
    </div>
    </>
    );
  };

  if (loaded) {
    return renderLottie();
  }
  return <div className={spinnerClass}/>;
};


export default LottieElement;
