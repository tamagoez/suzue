import Link from "next/link";

export default function JaEkuIndex() {
  return (
    <>
      <h1>Suzue_ku</h1>
      <ul>
        <li>
          <Link href="/eku/gallery">
            <span>Gallery</span>
          </Link>
        </li>
        <li>
          <Link href="/eku/blog">
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link href="/eku/about">
            <span>About</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
