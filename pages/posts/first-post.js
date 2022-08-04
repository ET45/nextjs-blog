import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnLoad"
          onLoad={() => console.log(`script loaded correctly`)}
        />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </h2>
    </Layout>
  );
}
