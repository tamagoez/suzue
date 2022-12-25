import Link from "next/link";
import Layout from "../components/Layout";
import { AutoLink } from "../utils/urls";

const IndexPage = () => (
  <>
    <h1>Suzue</h1>
    <ul>
      <li>
        <AutoLink href="/about">
          <span>Gallery</span>
        </AutoLink>
      </li>
      <li>
        <AutoLink href="/about">
          <span>Blog</span>
        </AutoLink>
      </li>
      <li>
        <AutoLink href="/about">
          <span>About</span>
        </AutoLink>
      </li>
      <li>
        <AutoLink href="/respect">
          <span>Respect</span>
        </AutoLink>
      </li>
    </ul>
  </>
);

export default IndexPage;
