import Navbar from '../../components/Navbar';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';

export default ({data}) => {
  const {
    aboutOptions: {
      aboutAccentColor,
      aboutAnimationFile,
      aboutDescription,
    },
  } = data;
  console.log(aboutAnimationFile);
  return (
    <>
      <Head title="About" />
      <Navbar
        color={aboutAccentColor}
      />
      <Header
        description={aboutDescription}
        animation={aboutAnimationFile}
      >
        <TitleBar
          title="About"
          color={aboutAccentColor}
        />
      </Header>
    </>
  );
}