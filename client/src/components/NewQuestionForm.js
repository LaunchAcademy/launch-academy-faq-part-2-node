import React, { useState } from 'react';

const NewQuestionForm = (props) => {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: ""
  })
  console.log(newQuestion);

  const handleChange = (event) => {
    // debugger
    setNewQuestion({
      ...newQuestion,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.postQuestion(newQuestion)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="question">Question:
        <input 
          id="question" 
          type="text" 
          name="question"
          value={newQuestion.question}
          onChange={handleChange}
        />
      </label>
      
      <label htmlFor="answer">Answer:
        <input 
          id="answer"
          type="text"
          name="answer"
          value={newQuestion.answer}
          onChange={handleChange}
        />
      </label>

      <input type="submit" />
    </form>
  )
}

export default NewQuestionForm