import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const QuestionPage: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useRecoilState(selectedAnswerAtom);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

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
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
          <ul>
            {question.options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionPage;
