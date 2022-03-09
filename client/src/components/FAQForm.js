import React, { useState } from "react"

const FAQForm = (props) => {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: "",
  })

  const handleChange = (event) => {
    setNewQuestion({
      ...newQuestion,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewQuestion(newQuestion)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="question">Question</label>
      <input
        id="question"
        name="question"
        onChange={handleChange}
        value={newQuestion.question}
      />

      <label htmlFor="answer">Answer</label>
      <input
        id="answer"
        name="answer"
        onChange={handleChange}
        value={newQuestion.answer}
      />

      <input type="submit" value="Add A new Question" />
    </form>
  )
}

export default FAQForm
