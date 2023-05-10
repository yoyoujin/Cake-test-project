import Router, { useRouter } from 'next/router';
import styles from './index.module.css';

export default function Home() {
  const router = useRouter();
  const handleQuestionRedirect = () => {
    router.push('/question');
  };
  return (
    <div className={styles.wrapper}>
      <h1>Start!</h1>
      <p>내 커스텀 케이크에 들어갈 이니셜을 알려주세요!</p>
      <label htmlFor='username'>
        <input id='username' type='text' placeholder='이니셜을 입력해주세요!' />
      </label>
      <span>💡 영문 이니셜 두글자만 입력 가능합니당</span>
      <button onClick={handleQuestionRedirect}>내 케이크 픽업하러가기 🍰</button>
    </div>
  );
}
