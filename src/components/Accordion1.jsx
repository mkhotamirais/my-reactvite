// youtube: the tech team
import { useState } from "react";

const data = [
  {
    title: "title1",
    content: "content1",
  },
  {
    title: "title2",
    content: "content2",
  },
  {
    title: "title3",
    content: "content3",
  },
];

const Accordion1 = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (e, i) => {
    const content = e.target.nextElementSibling;
    if (selected === i) {
      content.style.maxHeight = 0;
      return setSelected(null);
    }
    content.style.maxHeight = `${content.scrollHeight}px`;
    setSelected(i);
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="border p-3">
        {data.map(({ title, content }, i) => (
          <div className="" key={i}>
            <div
              className="flex justify-between cursor-pointer"
              onClick={(e) => toggle(e, i)}
            >
              {title}
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div
              className={`max-h-0 overflow-hidden ease-linear transition-all duration-500`}
            >
              {content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion1;
