import { useEffect, useState } from "react";

const Pagination2 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const data = await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <div id="pagination2" className="container">
      <h1 className="main-heading text-center">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Paginate postsPerPage={postsPerPage} totalPost={posts.length} paginate={paginate} />
    </div>
  );
};

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="text-center pt-32">Loading...</h2>;
  }
  return (
    <>
      {posts.map(({ id, title, body }) => (
        <div key={id} className="post border my-2">
          <h3 className="post-title">{title.slice(0, 15)}</h3>
          <p className="post-body">{body.slice(0, 60)}</p>
        </div>
      ))}
    </>
  );
};
Posts.propTypes;

const Paginate = ({ postsPerPage, totalPost, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [activePage, setActivePage] = useState(1);
  function handlePageClick(num) {
    setActivePage(num);
    paginate(num);
  }
  return (
    <>
      {pageNumbers.map((num) => (
        <button
          onClick={() => handlePageClick(num)}
          key={num}
          className={`border px-2 hover:bg-blue-500 ${activePage === num ? "active" : ""}`}
        >
          {num}
        </button>
      ))}
    </>
  );
};
Paginate.propTypes;

export default Pagination2;
