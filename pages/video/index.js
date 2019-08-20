import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';

export default (props) => {
  const {
    videoAccentColor,
    videoAnimationFile,
    videoDescription,
  } = props;

  return (
    <>
      <Head title="Video Development" />
      <Header
        description={videoDescription}
        animation={videoAnimationFile}
      >
        <TitleBar
          title="Video Production"
          color={videoAccentColor}
        />
      </Header>
    </>
  );
}