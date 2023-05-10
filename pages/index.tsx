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

    if (value.length >= 3) {
      setError('입력값은 영문 대소문자로 2글자까지만 입력 가능합니다.');
    } else if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value)) {
      setError('입력값에는 한글이 포함될 수 없습니다 🥹');
    } else {
      setError('');
      setInputValue(value);
    }
  };

  console.log(inputValue);
  return (
    <div className={styles.wrapper}>
      <h1>Start!</h1>
      <p>내 커스텀 케이크에 들어갈 영어 이니셜을 알려주세요!</p>
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
