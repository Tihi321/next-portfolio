import Lottie from 'react-lottie';
import {useState, useEffect} from 'react';

const LottieControl = (props) => {
  const {
    className = '',
    autoplay = true,
    loop = false,
    controls = true,
  } = props;

  const [data, setData] = useState('');
  const [isStopped, setIsStopped] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      fetch(props.mediaUrl)
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
      loop: loop,
      autoplay: autoplay,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'none',
      },
    };

    if (controls) {
      return (
        <div
          role="presentation"
          className={className}
          onClick={() => setIsStopped(!isStopped)}
        >
          <Lottie
            options={defaultOptions}
            isStopped={isStopped}
          />
        </div>
      );
    }

    return (
      <div
        role="presentation"
        className={className}
      >
        <Lottie
          options={defaultOptions}
        />
      </div>
    );
  }

  if (loaded) {
    return renderLottie();
  }
  return <div>Loading</div>;
}


export default LottieControl;
