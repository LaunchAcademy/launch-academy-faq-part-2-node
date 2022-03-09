import React, { useEffect, useState } from "react"
import Question from "./Question"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

const FAQList = (props) => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  const getQuestions = async () => {
    try {
      const response = await fetch("/api/v1/questions")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const questionsData = await response.json()
      setQuestions(questionsData.questions)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])

  const toggleQuestionSelect = (id) => {
    if (id === selectedQuestion) {
      setSelectedQuestion(null)
    } else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map((question) => {
    let selected
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => {
      toggleQuestionSelect(question.id)
    }

    return (
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className="page">
      <h1>We Are Here To Help</h1>
      <div className="question-list">{questionListItems}</div>
    </div>
  )
}

export default hot(FAQList)
