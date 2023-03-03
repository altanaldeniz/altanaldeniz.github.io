import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="mt-5 mb-5">
      <ul className="flex list-none gap-4 font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link target="_blank" href="/assets/altan_aldeniz_resume.pdf">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
