import { useEffect, useState } from 'react';

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
            <div className=' p-5 bg-red-400 grid'> 
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Articles;