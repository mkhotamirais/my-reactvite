import { useState } from "react";
import { data } from "../dataAccordion.js";
const Accordion1 = () => {
  const [selected, setSelected] = useState(null);
  function openContent(i) {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  }
  return (
    <div className="border text-xl px-8">
      {data.map(({ title, content }, i) => (
        <div key={i}>
          <div onClick={() => openContent(i)} className="border-b w-full cursor-pointer flex justify-between items-center">
            <h3 className="capitalize font-semibold">{title}</h3>
            <span>{selected === i ? "-" : "+"}</span>
          </div>
          <p className={`${selected === i ? "h-auto" : "h-0"} overflow-hidden text-base transition-all duration-500`}>
            {content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Accordion1;
