import { usernameAtom } from '@/recoil/atoms';
import React from 'react';
import { useRecoilValue } from 'recoil';

const ResultPage = () => {
  const username = useRecoilValue(usernameAtom);

  console.log(username[0]);
  console.log(username[1]);
  return (
    <>
      <h1>ResultPage</h1>
      <p>{username}</p>
    </>
  );
};

export default ResultPage;
