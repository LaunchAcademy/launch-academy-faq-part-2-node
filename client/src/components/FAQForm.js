import React, { useState } from "react"

const FAQForm = (props) => {
  // We set the keys of our initial state to be the same that we will use as htmlFor, name, and id on the input fields within the form.
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: "",
  })

  const handleChange = (event) => {
    // This will update the newQuestion state with every character change in both input fields
    // ...newQuestion will use all current key/value pairs in newQuestion
    // [event.currentTarget.name]: event.currentTarget.value will update one of those values with the current value of the input field that was typed into based on the input fields "name".
    setNewQuestion({
      ...newQuestion,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    // we must prevent the default behavior of a form submission
    event.preventDefault()

    // We can then pass the current state as an argument to the function which will send a POST request.  It's important that newQuestion is in the correct data structure that our backend is expecting!
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
