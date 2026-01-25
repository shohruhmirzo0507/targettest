import React from 'react'
import { quizzes } from '../data/data'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Test from '../components/Test/Test'
function Quiz() {
  const {title} = useParams()
  useEffect(()=>{
    document.title = "Quiz" + title
  }, [title])
  return (
    <div>
      {
        quizzes && <Test questions={quizzes[0]}/>
      }
    </div>
  )
}

export default Quiz