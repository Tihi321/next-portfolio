import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';

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
      <div />
      <div
        dangerouslySetInnerHTML={{__html: aboutDescription}}
      />
    </>
  );
}