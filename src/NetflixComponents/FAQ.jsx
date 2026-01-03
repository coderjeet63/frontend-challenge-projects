import React, { useState } from "react";

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const frequentlyAskedQuestions = [
    { id: 1, question: "What is Netflix?", answer: "Netflix is a streaming service..." },
    { id: 2, question: "How much does Netflix cost?", answer: "Watch Netflix for one fixed fee..." },
    { id: 3, question: "Where can I watch?", answer: "Watch anywhere, anytime..." },
    { id: 4, question: "How do I cancel?", answer: "You can cancel anytime..." },
    { id: 5, question: "What can I watch on Netflix?", answer: "Movies, TV shows, originals..." },
    { id: 6, question: "Is Netflix good for kids?", answer: "Kids profiles are included..." },
  ];

  const handleClick = (id) => {
    setOpenId(prev => (prev === id ? null : id)); // toggle
  };

  return (
    <div className="space-y-4">
      {frequentlyAskedQuestions.map((item) => (
        <div
          key={item.id}
          className="border border-white/20 p-4 rounded-lg"
        >
          <button
            onClick={() => handleClick(item.id)}
            className="w-full text-left font-semibold text-lg flex justify-between"
          >
            {item.question}
            <span>{openId === item.id ? "−" : "+"}</span>
          </button>

          {openId === item.id && (
            <p className="text-gray-300 mt-2">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
