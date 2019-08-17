import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a title="About me page">About</a>
          </Link>
        </li>
        <li>
          <Link href="web">
            <a title="Web projects page">Web</a>
          </Link>
        </li>
        <li>
          <Link href="video">
            <a title="Video production page">Video</a>
          </Link>
        </li>
        <li>
          <Link href="android">
            <a title="Android development projects page">Android</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
