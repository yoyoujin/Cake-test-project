import Router, { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './index.module.css';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleQuestionRedirect = () => {
    router.push('/question');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (/^[a-zA-Z]{0,2}$/.test(value)) {
      setInputValue(value);
      setError('');
    } else {
      setError('영문 대소문자로 2글자까지만 입력 가능합니다🥹');
    }
  };

  console.log(inputValue);
  return (
    <div className={styles.wrapper}>
      <h1>Start!</h1>
      <p>내 커스텀 케이크에 들어갈 이니셜을 알려주세요!</p>
      <label htmlFor='username'>
        <input
          id='username'
          type='text'
          placeholder='영문 2글자를 입력해주세요'
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
      {error ? <p className={styles.error}>{error}</p> : <p>&nbsp;</p>}
      <button onClick={handleQuestionRedirect}>내 케이크 픽업하러가기 🍰</button>
    </div>
  );
}
