import React, {useEffect, useState, useRef} from 'react';
import {useRouter} from 'next/router';
import VideoPage from './components/page';
import Modal from '../../components/Modal';
import YoutubeElement from '../../components/Youtube';

import {
  youtubeTitleClass,
} from './style.scss';

const Video = (props) => {
  const {
    videoAnimationFile,
    videoDescription,
    videoLootieLoop,
    openNavCallback,
    projects,
    slugs,
  } = props;

  const [project, setProject] = useState({});
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);
  

  const router = useRouter();

  const onCloseCallback = () => {
    window.history.replaceState({}, document.title, '/video');
    videoRef.current.srcdoc = '';
  };

  useEffect(() => {
    openNavCallback(false);
  }, []);

  useEffect(() => {
    const {
      query: {
        slug,
      },
    } = router;

    if (slugs.length > 0) {
      const index = slugs.indexOf(slug);
  
      if (index >= 0) {
        setProject(() => {
          return projects[index];
        });
        setShowModal(() => {
          return true;
        });
      } else {
        onCloseCallback();
      }
    }
  }, [slugs]);

  return (
    <>
      {(showModal) &&
        (
          <Modal
            onClose={onCloseCallback}
          >
            <YoutubeElement
              title={project.title}
              link={project.link}
              videoRef={videoRef}
            />
            <div className={youtubeTitleClass}>
              {project.title}
            </div>
          </Modal>
        )}
      <VideoPage
        description={videoDescription}
        animation={videoAnimationFile}
        projects={projects}
        lottieLoop={videoLootieLoop}
      />
    </>
  );
};

Video.getInitialProps = async function({client}) {

  // custom api call per page
  const api = await client.fetch('props');

  return {api};
};

export default Video;
