import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedAnswerAtom } from '@/recoil/atoms';
import Router, { useRouter } from 'next/router';

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
    setSelectedAnswer(selectedOption);
    setCurrentQuestionIdx((prevIndex) => prevIndex + 1);

    console.log(currentQuestionIdx);
    console.log(questions.length);
    if (currentQuestionIdx + 1 >= questions.length) {
      router.push('/result');
    }
  };

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
    <div>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.options.map((option) => (
          <li key={option} onClick={() => handleAnswerSelection(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionPage;
