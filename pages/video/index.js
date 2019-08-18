import Navbar from '../../components/Navbar';
import Head from '../../components/Head';

export default (props) => {

  console.log(props);
  return (
    <>
      <Head title="Video Development" />
      <Navbar />
      <div>Video</div>
    </>
  );
}