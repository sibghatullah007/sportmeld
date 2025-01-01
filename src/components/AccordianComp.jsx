'use client';
import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-lg shadow-md mb-4 p-[1px] max-w-[600px] ${
        isOpen
          ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          : "bg-gray-800"
      }`}
    >
      <div className="bg-zinc-950 rounded-lg overflow-hidden p-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div
          className="flex justify-between items-center p-3"
        >
          <h3 className={`text-[18px] md:[text-20px] lg:text-[22px] font-bold ${isOpen?'text-white':'text-gray-400'}`}>{question}</h3>
          <button className="text-[24px] text-gray-600 font-medium transform transition-transform duration-300">
            {isOpen ? "-" : "+"}
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96":"max-h-0"
          }`}
        >
          <p className="p-2 px-3 text-gray-300">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
