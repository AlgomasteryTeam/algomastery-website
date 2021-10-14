import React from 'react'
import ExamComponent from '../../components/ExamComponent/ExamComponent'
import './Exam.css'

const Exam = () => {

  const examData = [
    {
      question: "What is Python ?",
      options: ['Programming language', 'Code editor', 'OS', 'Mobile app'],
      correctOption: 0,
      hint: 'Python is great',
    },
    {
      question: "What is Java ?",
      options: ['Code editor', 'Programming language', 'OS', 'Mobile app'],
      correctOption: 1,
      hint: 'Java is superb'
    },
    {
      question: "What is C ?",
      options: ['OS', 'Code editor', 'Programming language', 'Mobile app'],
      correctOption: 2,
      hint: 'C is decent'
    }
  ]

  return (
    <div>
      <h3>Exam section</h3>
      {/* <div className="exam-gif-div">
        <img className="exam-gif" src="assets/gifs/exam.gif" alt="Exam" />
      </div>
       */}



      <ExamComponent examData={examData} />


    </div>
  )
}

export default Exam