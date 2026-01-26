import React from 'react'
import { Link } from 'react-router-dom'
import "./Result.css"

function Result({ title, correctAnswerCount, questionsLength, answers }) {
  return (
    <div className="result__head">
      <div className="result__right">
        <h1 className="result__title">
          <span>Test tugallandi</span>
          <br />
          <span>Sizning natijangiz...</span>
        </h1>
      </div>
      <div className="result__left">
        <div className="result__left__content">
          <div className="res__left__title">
            <span>{title}</span>
          </div>

          <div className="res__left__correct">
            {correctAnswerCount} / {questionsLength}
          </div>

          <p>Ta to‘g‘ri topdingiz {correctAnswerCount} ta savoldan</p>
        </div>

        <div className="result__buttons">
          <Link className="result__btn_try" to="/">
            Qayta topshirish
          </Link>

          <Link
            className="result__btn_review"
            to="/review"
            state={{ answers }}
          >
            Natijani ko'rish
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Result