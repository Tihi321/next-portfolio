import React, {useEffect, useState} from 'react';
import uuidv4 from 'uuid/v4';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';
import Body from '../../components/Body';
import ListItem from '../../components/ListItem';

const Android = (props) => {
  const {
    androidAnimationFile,
    androidDescription,
    androidLootieLoop,
    openNavCallback,
    androidProjects,
  } = props;

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    openNavCallback(false);
    setProjects(() => {
      return JSON.parse(androidProjects);
    });
  }, []);

  const projectElements = projects.map((projectItem) => {
    return (
      <div
        key={uuidv4()}
      >
        <ListItem
          project={projectItem}
        />
      </div>
    );
  });


  return (
    <>
      <Head title="Android Development" />
      <Header
        description={androidDescription}
        animation={androidAnimationFile}
        lottieLoop={androidLootieLoop}
      >
        <TitleBar
          title="Android Development"
        />
      </Header>
      <Body>
        <ul>
          {projectElements}
        </ul>
      </Body>
    </>
  );
};

Android.getInitialProps = async function({client}) {

  // custom api call per page
  const api = await client.fetch('props');

  return {api};
};

export default Android;
