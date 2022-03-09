import React, { useEffect, useState } from "react"
import Question from "./Question"

import "../assets/scss/main.scss"
import FAQForm from "./FAQForm"

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

  // Create a function to send a POST request in the component tracking state that will be updated after we get the response.
  const addNewQuestion = async (formPayload) => {
    debugger
    try {
      // Have to specify the method if we don't want to use the default of GET
      const response = await fetch("/api/v1/questions", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(formPayload),
      })
      if (!response.ok) {
        if (response.status === 422) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      }
      const body = await response.json()
      debugger
      // Use the spread operator to keep all previous values of "questions"
      // and add the new body.question
      // Then set the whole new array in state
      setQuestions([...questions, body.question])
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
      <FAQForm addNewQuestion={addNewQuestion} />
      <div className="question-list">{questionListItems}</div>
    </div>
  )
}

export default FAQList
