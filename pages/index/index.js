import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';

import {
  textClass,
} from './style.scss';

export default (props) => {
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
}