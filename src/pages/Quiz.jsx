import React from 'react'
import { quizzes } from '../data/data'
import { useParams } from 'react-router-dom'
import Test from '../components/Test/Test'
function Quiz() {

  const {title} = useParams()

   const selectedQuiz = quizzes.find(
    (quiz) => quiz.title === title
  );

  if (!selectedQuiz) {
    return <h2>Test topilmadi</h2>;
  }



  return (
    <div>
      {
        quizzes && <Test questions={selectedQuiz}/>
      }
    </div>
  )
}

export default Quiz