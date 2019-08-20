import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';

export default (props) => {
  const {
    androidAccentColor,
    androidAnimationFile,
    androidDescription,
  } = props;

  return (
    <>
      <Head title="Android Development" />
      <Header
        description={androidDescription}
        animation={androidAnimationFile}
      >
        <TitleBar
          title="Android Development"
          color={androidAccentColor}
        />
      </Header>
    </>
  );
}