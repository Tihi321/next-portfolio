import React, {useEffect} from 'react';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';
import Body from '../../components/Body';

const Index = (props) => {
  const {
    aboutAnimationFile,
    aboutDescription,
    aboutPage,
    openNavCallback,
  } = props;

  useEffect(() => {
    openNavCallback(false);
  }, []);

  return (
    <>
      <Head title="About" />
      <Header
        description={aboutPage}
        animation={aboutAnimationFile}
      >
        <TitleBar
          title="About"
        />
      </Header>
      <Body>
        <div
          dangerouslySetInnerHTML={{__html: aboutDescription}}
        />
      </Body>
    </>
  );
};

export default Index;
