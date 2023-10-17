import { useState } from "react";
import data from "./paginationData.json";

const Pagination1 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 4;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {records.map(({ id, name, email }, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prevPage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li className={`page-item ${currentPage === n ? "active" : ""}`} key={i}>
              <a href="#" className="page-item" onClick={() => changeCPage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination1;
