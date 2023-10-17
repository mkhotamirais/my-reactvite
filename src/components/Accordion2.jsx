import { useState } from "react";

// yt monsterlessons academy
const data = [
  {
    title: "acc1",
    content: "content1",
  },
  {
    title: "acc2",
    content: "content2",
  },
  {
    title: "acc3",
    content: "content3",
  },
];
const Accordion2 = () => {
  const [buka, setBuka] = useState(null);
  return (
    <>
      {data.map(({ title, content }, i) => (
        <div key={i}>
          <div onClick={() => setBuka(i)}>{title}</div>
          {buka == i && <div>{content}</div>}
        </div>
      ))}
    </>
  );
};

export default Accordion2;
