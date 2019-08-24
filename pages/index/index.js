import React from 'react';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';

import {
  textClass,
} from './style.scss';

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
        description={aboutDescription}
      >
        <TitleBar
          title="About"
        />
      </Header>
      <div
        className={textClass}
        dangerouslySetInnerHTML={{__html: aboutDescription}}
      />
    </>
  );
};

export default Index;
