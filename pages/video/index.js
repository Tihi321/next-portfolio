import React, {useEffect} from 'react';
import VideoPage from './components/page';

const Video = (props) => {
  const {
    videoAnimationFile,
    videoDescription,
    openNavCallback,
    projects,
  } = props;

  useEffect(() => {
    openNavCallback(false);
  }, []);

  return (
    <VideoPage
      description={videoDescription}
      animation={videoAnimationFile}
      projects={projects}
    />
  );
};

Video.getInitialProps = async function({client: {cachedFetch}}) {

  // custom api call per page
  const api = await cachedFetch('props');

  return {api};
};

export default Video;
