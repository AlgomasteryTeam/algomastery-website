import React from 'react'
import ExamComponent from '../../components/ExamComponent/ExamComponent'
import './Exam.css'

const Exam = () => {

  const examData = [
    {
      question: "What is Python ?",
      options: ['Programming language', 'Code editor', 'OS', 'Mobile app'],
      correctOption: 0,
    },
    {
      question: "What is Java ?",
      options: ['Programming language', 'Code editor', 'OS', 'Mobile app'],
      correctOption: 0,
    },
    {
      question: "What is C ?",
      options: ['Programming language', 'Code editor', 'OS', 'Mobile app'],
      correctOption: 0,
    }
  ]

  return (
    <div>
      <h3>Exam section</h3>
      {/* <div className="exam-gif-div">
        <img className="exam-gif" src="assets/gifs/exam.gif" alt="Exam" />
      </div>
       */}



      <ExamComponent />


    </div>
  )
}

export default Exam