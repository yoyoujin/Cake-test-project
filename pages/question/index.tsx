import React, { useEffect, useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const QuestionPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

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
