import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  // openIndex er en state-variabel, som holder styr på hvilket spørgsmål der er åbent - starter som null, altså intet er åbent
  const [openIndex, setOpenIndex] = useState(null);

  // funktionen der holder styr på hvilket spørgsmål / svar der skal åbnes eller lukkes
  const handleToggle = (index) => {
    // hvis det samme spørgsmål klikkes igen efter åbning, så lukkes det
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: "What is the iWatch?", answer: "The iWatch is a smart device that helps you keep track of your health, receive notifications, and more." },
    { question: "How does the iWatch work?", answer: "The iWatch works by synchronizing with your iPhone, allowing you to receive notifications and use apps directly from your wrist." },
    { question: "What are the benefits of the iWatch?", answer: "The benefits of the iWatch include health monitoring, notifications, workout assistance, and much more." },
  ];

  return (
    // her henter vi accordionitem komponentet og de forskellige props den indeholder - spørgsmålet, svaret, en boolean der tjekker om spørgsmålet er åbent og en funktion der åbner og lukker sektionen
    <div className="max-w-md mx-auto mt-8 space-y-2">
      {questions.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />
      ))}
    </div>
  );
};

export default Accordion;
