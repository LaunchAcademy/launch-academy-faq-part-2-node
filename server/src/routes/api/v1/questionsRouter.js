import express from "express"

import Question from "../../../models/Question.js"

const questionsRouter = new express.Router()

// "/api/v1/questions"
questionsRouter.get("/", (req, res) => {
  
  return res.status(200).json({ questions: Question.findAll() })
})

questionsRouter.post("/", (req, res) => {
  console.log(req.body);

  const question = new Question(req.body)
  console.log(question);
  if(question.save()) {
    console.log(question);
    res.status(201).json({ question })
    // res.status(201).json({ question: question })
  } else {
    res.status(422).json({ errors: question.errors })
  }
})

export default questionsRouter