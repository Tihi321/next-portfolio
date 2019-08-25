import React, {useEffect} from 'react';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';

const Android = (props) => {
  const {
    androidAnimationFile,
    androidDescription,
    openNavCallback,
  } = props;

  useEffect(() => {
    openNavCallback(false);
  }, []);


  return (
    <>
      <Head title="Android Development" />
      <Header
        description={androidDescription}
        animation={androidAnimationFile}
      >
        <TitleBar
          title="Android Development"
        />
      </Header>
    </>
  );
};

export default Android;
