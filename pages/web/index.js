import React, {useEffect} from 'react';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';

const Web = (props) => {
  const {webAnimationFile, webDescription, openNavCallback} = props;

  useEffect(() => {
    openNavCallback(false);
  }, []);

  return (
    <>
      <Head title="Web Development" />
      <Header description={webDescription} animation={webAnimationFile}>
        <TitleBar title="Web Development" />
      </Header>
    </>
  );
};

export default Web;
