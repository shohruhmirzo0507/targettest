import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Review.css"


function Review() {
  const location = useLocation()
  const {answers} = location.state || {answers:[]}
  console.log(answers);
  
  return (
    <div className='review__main'>
      <h1 className='review__title'>Sizning Javoblaringiz</h1>
      {answers.map((item, index) => (
        <div
          key={index}
          className={`review__item ${
            item.isCorrect ? "correct" : "incorrect"
          }`}
        >
          <h3>
             {item.question}
          </h3>
          <p>
            Sizning javobingiz: {item.selectedAnswer}{" "}
            {item.isCorrect ? "✅" : "❌"}
          </p>
          {!item.isCorrect && <p>To‘g‘ri javob: {item.correctAnswer}</p>}
        </div>
      ))}
     <div className="review__btn__centre">
      <Link to="/" className="review__btn">
        Bosh sahifaga qaytish
      </Link>
     </div>

    </div>
  )
}

export default Review