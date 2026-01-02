import React, { useState } from 'react'

function QuizApplication() {

  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [score, setScore] = useState(0)
  const[finalScore,setFinalScore]=useState(null);

  const quizData = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
      ],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      id: 2,
      question: "Which hook is used to manage state in React?",
      options: ["useEffect", "useContext", "useState", "useReducer"],
      correctAnswer: "useState"
    },
    {
      id: 3,
      question: "Which method is used to render lists in React?",
      options: ["forEach", "map", "filter", "reduce"],
      correctAnswer: "map"
    }
  ]

  const calculate = (e, quizIndex) => {
    const selectedAns = e.target.value

    setSelectedAnswers(prev => ({
      ...prev,
      [quizIndex]: selectedAns
    }))

    if (selectedAns === quizData[quizIndex].correctAnswer) {
      setScore(prev => prev + 1)
    } else {
      setScore(prev => prev - 1)
    }
  }

    const submitScore = () => {
        setFinalScore(score);
    }


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 mb-10">
      <div className="w-full max-w-3xl px-4">
        
        <h1 className="text-3xl font-bold text-center mb-2">
          Quiz Application
        </h1>

        <p className="text-center text-lg font-semibold mb-8">
          Score: <span className="text-blue-600">{finalScore==null? 0:finalScore}</span>
        </p>

        {quizData.map((quiz, quizIndex) => (
          <div
            key={quiz.id}
            className="bg-white rounded-xl shadow-md p-6 mb-6"
          >
            <h3 className="text-lg font-semibold mb-4">
              {quiz.question}
            </h3>

            <div className="space-y-3">
              {quiz.options.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition"
                >
                  <input
                    type="radio"
                    name={`question-${quiz.id}`}
                    value={option}
                    onChange={(e) => calculate(e, quizIndex)}
                    className="accent-blue-600"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

        <button onClick={submitScore} className=" bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>

    </div>
  )
}

export default QuizApplication
