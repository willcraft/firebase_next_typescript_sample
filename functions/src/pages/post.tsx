import * as React from 'react'

import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';

const Post = ({ stars, id }: { stars: number; id: number }) => {
  const router = useRouter();
  console.log(router.query.id, router, stars, id);
  return (
    <>
      <Head>
        <title>Post {id}</title>
      </Head>
      <h1>TEST id={id}</h1>
      <p>{stars}</p>
    </>
  );
};

Post.getInitialProps = async ({ query }: { query: any }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  const { id } = query;
  return { stars: json.stargazers_count, id };
};

export default Post;
