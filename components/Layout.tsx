import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { AutoLink, redirecturl } from "../utils/urls";
import { useRouter } from "next/router";

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function Layout({ children, title = "Suzue" }: Props) {
  const router = useRouter();
  const [viewlang, setViewlang] = useState("default");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewlang(window.localStorage.getItem("viewlang"));
    }
  }, []);

  function setLang(lang: string) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("viewlang", lang);
      router.reload();
    }
  }
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header style={{ position: "sticky", top: 0, backgroundColor: "white" }}>
        <div style={{ display: "flex" }}>
          <p style={{ margin: 0, paddingRight: "20px", fontWeight: 700 }}>
            Suzue 紗絵
          </p>
          <nav>
            <AutoLink href="/">Home</AutoLink> |{" "}
            <AutoLink href="/about">Gallery</AutoLink> |{" "}
            <AutoLink href="/about">About</AutoLink> |{" "}
            <AutoLink href="/respect">Respect</AutoLink> |
          </nav>
          <select onChange={(e) => setLang(e.target.value)}>
            <option value="" selected={viewlang === ""}>
              Reset
            </option>
            <option value="ja" selected={viewlang === "ja"}>
              日本語
            </option>
            <option value="en" selected={viewlang === "en"}>
              English
            </option>
          </select>
        </div>
      </header>
      {children}
      <footer>
        <hr />
        <span>©2022 Suzue(@Suzue_ku / @Suzue_ch)</span>
      </footer>
    </div>
  );
}
