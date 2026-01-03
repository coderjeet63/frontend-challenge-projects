import React, { useState } from 'react';

function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() === "") return;

    setMessage((prev) => [
      ...prev,
      inputValue,
    ]);

    setInputValue("");
  };

  return (
    <div className="min-h-screen bg-blue-300 flex justify-center items-center">
      <div className="w-[500px] rounded-2xl bg-blue-500 flex flex-col gap-3 p-4 border-amber-200 border-2">
        
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="flex-1 h-10 px-2 border-2 rounded"
          />
          <button
            onClick={handleClick}
            className="px-4 py-2 h-10 bg-amber-300 rounded"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {message.map((msg, index) => (
            <li
              key={index}
              className="bg-white px-3 py-2 rounded shadow"
            >
              {msg}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default ToDo;
