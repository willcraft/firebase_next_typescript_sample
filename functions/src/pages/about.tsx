import * as React from 'react';

import { useEffect, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
}

export default () => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User>({ id: 1, name: 'test' });

  const test = 'test';

  const onIncliment = () => setCount(count + 1);

  const onReset = () => setCount(0);

  useEffect(() => {
    console.log('useeffect');
    setUser({
      id: 2,
      name: 'TEST!!!!!!',
    });
  }, [setCount]);

  return (
    <>
      <Head>
        <title>Counter</title>
      </Head>
      <h1>
        {test} : {count}
      </h1>
      <span>
        {user.id} : {user.name}
      </span>
      <p onClick={onIncliment}>CLICK</p>
      <p onClick={onReset}>RESET</p>
      <Link href={{ pathname: '/post', query: { id: count } }} as={`/post/${count}`}>
        <a>POST!!!</a>
      </Link>
    </>
  );
};