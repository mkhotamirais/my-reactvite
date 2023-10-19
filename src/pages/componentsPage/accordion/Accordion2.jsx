import { useState } from "react";
import { data } from "../dataAccordion.js";

const Accordion2 = () => {
  return (
    <>
      <div className="border text-xl px-8">
        {data.map((item, i) => (
          <Acc2 key={i} item={item} />
        ))}
      </div>
    </>
  );
};

const Acc2 = ({ item: { title, content } }) => {
  const [openacc, setOpenacc] = useState(false);
  return (
    <div>
      <div onClick={() => setOpenacc(!openacc)} className="border-b w-full cursor-pointer flex justify-between items-center">
        <h3 className="capitalize font-semibold">{title}</h3>
        <span>+</span>
      </div>
      {openacc && <p className="overflow-hidden text-base transition-all duration-500">{content}</p>}
    </div>
  );
};
Acc2.propTypes;

export default Accordion2;
