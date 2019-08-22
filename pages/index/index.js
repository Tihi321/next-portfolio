import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';

import {
  textClass,
} from './style.scss';

export default (props) => {
  const {
    aboutAccentColor,
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
          color={aboutAccentColor}
        />
      </Header>
      <div
        className={textClass}
        dangerouslySetInnerHTML={{__html: aboutDescription}}
      />
    </>
  );
}