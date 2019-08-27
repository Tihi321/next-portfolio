import React, {useEffect, useState} from 'react';
import uuidv4 from 'uuid/v4';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';
import Body from '../../components/Body';
import ListItem from '../../components/ListItem';

const Web = (props) => {
  const {
    webAnimationFile,
    webDescription,
    webProjects,
    openNavCallback,
  } = props;

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    openNavCallback(false);
    setProjects(() => {
      return JSON.parse(webProjects);
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
      <Head title="Web Development" />
      <Header description={webDescription} animation={webAnimationFile}>
        <TitleBar title="Web Development" />
      </Header>
      <Body>
        <ul>
          {projectElements}
        </ul>
      </Body>
    </>
  );
};

Web.getInitialProps = async function({client: {cachedFetch}}) {

  // custom api call per page
  const api = await cachedFetch('props');

  return {api};
};

export default Web;
