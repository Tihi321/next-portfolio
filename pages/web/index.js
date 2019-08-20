import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';

export default (props) => {
  const {
    webAccentColor,
    webAnimationFile,
    webDescription,
  } = props;

  return (
    <>
      <Head title="Web Development" />
      <Header
        description={webDescription}
        animation={webAnimationFile}
      >
        <TitleBar
          title="Web Development"
          color={webAccentColor}
        />
      </Header>
    </>
  );
}