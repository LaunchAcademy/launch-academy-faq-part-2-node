import React, { useState, useEffect } from 'react'
import Question from './Question'
import { hot } from "react-hot-loader/root"

import NewQuestionForm from './NewQuestionForm'

// import "../assets/scss/main.scss"


const FAQList = props => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const getAllQuestions = async () => {
    try {
      const response = await fetch("/api/v1/questions")
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      // debugger
      const responseBody = await response.json()
      // debugger
      setQuestions(responseBody.questions)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  }

  useEffect(() => {
    getAllQuestions()
  }, [])

  const toggleQuestionSelect = id => {
    if (id === selectedQuestion) {
      setSelectedQuestion(null)
    } else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map(question => {
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

  const postQuestion = async (formData) => {
    // POST fetch
    // debugger
    try {
      const response = await fetch("/api/v1/questions", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(formData)
      })
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const responseBody = await response.json()
      // debugger
      // setQuestions(questions.concat(responseBody.question))

      setQuestions([
        ...questions,
        responseBody.question
      ])
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  }

  return (
    <div className="page">
      <h1>We Are Here To Help</h1>
      <NewQuestionForm postQuestion={postQuestion} />
      <div className="question-list">{questionListItems}</div>
    </div>
  )
}

export default hot(FAQList)
