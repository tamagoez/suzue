import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <>
    <h1>Suzue</h1>
    <ul>
      <li>
        <Link href="/about">
          <span>Gallery</span>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <span>Blog</span>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <span>About</span>
        </Link>
      </li>
      <li>
        <Link href="/respect">
          <span>Respect</span>
        </Link>
      </li>
    </ul>
  </>
);

export default IndexPage;
