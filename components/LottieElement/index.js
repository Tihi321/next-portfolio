import React, {useState, useEffect} from 'react';
import Lottie from 'react-lottie';

import {
  lottieElement,
} from './style.scss';

const LottieElement = (props) => {
  const {
    mediaUrl,
  } = props;

  const [data, setData] = useState('');
  const [loaded, setLoaded] = useState(false);

  const dummyUrl01 = '/static/data/dino-dance.json';
  const dummyUrl02 = '/static/data/earth.json';

  useEffect(() => {
    const fetchData = () => {
      fetch(dummyUrl01)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setData(response);
          setLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
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
