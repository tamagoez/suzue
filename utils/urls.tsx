import Link from "next/link";
import { useRouter } from "next/router";

export function AutoLink({ href, children }: { href: string; children: any }) {
  return (
    <>
      <Link href={replaceurl(href)}>{children}</Link>
    </>
  );
}

export function redirecturl() {
  // const router = useRouter();
  const url = location.pathname + location.search;
  location.replace(replaceurl(url));
}

export function replaceurl(href: string) {
  let lang = "ja";
  const avalang = ["ja", "en"];
  let lSlang = "ja";
  if (typeof window !== "undefined") {
    let lSlang = window.localStorage.getItem("viewlang");

    if (!lSlang) {
      let navigatorlang = window.navigator.language.substring(0, 2).toString();
      if (avalang.includes(navigatorlang) === false) navigatorlang = "en";
      window.localStorage.setItem("viewlang", navigatorlang);
      lSlang = navigatorlang;
    }
    if (avalang.includes(lSlang) === false) lSlang = "en";
    console.log(lSlang);
  }
  if (href.substring(1, 3) !== lSlang && href !== "/") {
    if (href.substring(3, 4) === "/") return `/${lSlang}/${href.substring(4)}`;
    else return `/${lSlang}${href}`;
  } else {
    return href;
  }
}
