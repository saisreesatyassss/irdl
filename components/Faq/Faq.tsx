
'use client';
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" border rounded-lg my-8 p-4 max-w-screen-xl shadow-md">
      <div className="flex justify-between items-center cursor-pointer max-w-screen-xl" onClick={toggleAccordion}>
        <h2 className="text-xl font-semibold">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-8 h-8 transition-transform transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && <p className="mt-4 text-lg">{content}</p>}
    </div>
  );
};

const data = [
  {
    title: "What is IRDL?",
    content: "1.",
  },
  {
    title: "What do I need to get started on my project?",
    content: "2.",
  },
  {
    title: "How does the process of working on a project work?",
    content: "3.",
  },
  {
    title: "Why is it beneficial to ?",
    content: "4.",
  },
];

function Faq() {
  return (
    <section className=" flex-1  flex justify-center items-center mb-8 mt-8">
      <div className="w-full max-w-xl bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">FAQ</h2>
        {data.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
}

export default Faq;
