import { useState } from "react";
import { data } from "../dataPagination.js";

const Pagination1 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 3;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const record = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <>
      <table className="border w-full text-xl">
        <thead className="text-left">
          <tr className="border-b-2">
            <th>No</th>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {record.map(({ id, name, email }, i) => (
            <tr key={i} className="border-b odd:bg-slate-50 hover:bg-slate-100">
              <td>{i + 1}</td>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pag flex mt-2">
        <button disabled={currentPage === 1 && true} onClick={prevPage} className="btn-pag">
          Prev
        </button>
        {numbers.map((num, i) => (
          <button key={i} onClick={() => changeCPage(num)} className={`${currentPage === num && "active"} btn-pag`}>
            {num}
          </button>
        ))}
        <button disabled={currentPage === nPage && true} onClick={nextPage} className="btn-pag">
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination1;
