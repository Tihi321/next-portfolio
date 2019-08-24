import React from 'react';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';
import Body from '../../components/Body';

const Index = (props) => {
  const {
    aboutAnimationFile,
    aboutDescription,
  } = props;

  return (
    <>
      <Head title="About" />
      <Header
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
