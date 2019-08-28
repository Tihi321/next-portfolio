import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-react-web';

import {
  lottieElement,
} from './style.scss';

const LottieElement = (props) => {
  const {
    mediaUrl,
  } = props;

  const [data, setData] = useState('');
  const [loaded, setLoaded] = useState(false);

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
      loop: true,
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div
        className={lottieElement}
      >
        <Lottie
          width="auto"
          options={defaultOptions}
        />
      </div>
    );
  };

  if (loaded) {
    return renderLottie();
  }
  return <div>Loading</div>;
};


export default LottieElement;
