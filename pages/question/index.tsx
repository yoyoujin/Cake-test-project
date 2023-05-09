import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedAnswerAtom } from '@/recoil/atoms';
import Router, { useRouter } from 'next/router';
import { Progress, Grid } from '@nextui-org/react';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const QuestionPage: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useRecoilState(selectedAnswerAtom);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const currentQuestion = questions[currentQuestionIdx];
  const router = useRouter();

  const handleAnswerSelection = (selectedOption: string) => {
    setSelectedAnswer([...selectedAnswer, selectedOption]);
    if (currentQuestionIdx < 11) {
      setCurrentQuestionIdx((prevIndex) => prevIndex + 1);
    }
  };

  const handleResultPageRedirect = () => {
    router.push('/result');
  };

  console.log(selectedAnswer);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch('/data/quiz.json');
        const data = await response.json();
        setQuestions(data.questions);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching question data:', error);
      }
    };

    fetchQuestion();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Grid.Container xs={10} sm={6} gap={3}>
        <Grid>
          <Progress value={((currentQuestionIdx + 1) / 12) * 100} color='warning' />
        </Grid>
      </Grid.Container>
      <div>
        <p onClick={(e) => e.stopPropagation()}>{currentQuestion.question}</p>
        <ul>
          {currentQuestion.options.map((option) => (
            <li key={option}>
              <button onClick={() => handleAnswerSelection(option)}>{option}</button>
            </li>
          ))}
        </ul>
      </div>
      {currentQuestionIdx === 11 ? (
        <button onClick={handleResultPageRedirect}>결과보러가기</button>
      ) : null}
    </>
  );
};

export default QuestionPage;
