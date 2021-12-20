import Head from "next/head";

import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
import Page5 from "../components/Page5";
import Page6 from "../components/Page6";

export async function getStaticProps() {
  const res = await fetch("https://api-yuiverse.herokuapp.com/data");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>YuiVerse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 data={posts} />
      <Page6 />
      <footer style={{ textAlign: "center" }}>
        <p>
          Made by @azzamhfa with ❤ || YuiVerse v2.3 || Last Updated : 20-12-2021
          || <a href="https://github.com/azzamhfa/YuiVerse2.0">Github Repo</a>
        </p>
      </footer>
    </div>
  );
}
