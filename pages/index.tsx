import Router, { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const handleQuestionRedirect = () => {
    router.push('/question');
  };
  return (
    <>
      <h1>Start!</h1>
      <button onClick={handleQuestionRedirect}>내 케이크 픽업하러가기 🍰</button>
    </>
  );
}
