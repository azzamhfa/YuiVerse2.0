import Head from "next/head";

import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
import Page5 from "../components/Page5";
import Page6 from "../components/Page6";

export async function getServerSideProps() {
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
        <link rel="shortcut icon" href="/sakura.ico" />
        <meta property="og:title" content="🌸YuiVerse" key="title" />
        <meta
          name="description"
          content="YuiVerse is a Kobayashi Yui Landing Page Website. This page is non-profit, not affiliated with anyone / groups, and it's fan-made that for Educational Purpose Only"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yuiverse.vercel.app/" />
        <meta
          property="og:description"
          content="YuiVerse is a Kobayashi Yui Landing Page Website. This page is non-profit, not affiliated with anyone / groups, and it's fan-made that for Educational Purpose Only"
        />
        <meta property="og:image" content="./meta.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yuiverse.vercel.app/" />
        <meta name="twitter:title" content="🌸YuiVerse" />
        <meta
          name="twitter:description"
          content="YuiVerse is a Kobayashi Yui Landing Page Website. This page is non-profit, not affiliated with anyone / groups, and it's fan-made that for Educational Purpose Only"
        />
        <meta property="twitter:image" content="./meta.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 data={posts} />
      <Page6 />
      <footer style={{ textAlign: "center" }}>
        <p>
          Made by @azzamhfa with ❤ || YuiVerse v2.4 || Last Updated : 29-12-2021
          || <a href="https://github.com/azzamhfa/YuiVerse2.0">Github Repo</a>
        </p>
      </footer>
    </div>
  );
}
