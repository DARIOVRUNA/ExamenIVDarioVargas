import React, { useEffect, useState } from 'react';

interface Repo {
  name: string;
  description: string;
  html_url: string;
  private: boolean;
}

const Carousel = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://api.github.com/users/DARIOVRUNA/repos');
      const data = await response.json();
      setRepos(data.filter((repo: Repo) => !repo.private));
    };

    fetchApi();
  }, []);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? repos.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === repos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {repos.length > 0 ? (
          repos.map((repo, index) => (
            <div
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
              data-bs-interval="10000"
              key={repo.name}
            >
              <div>
                <h5>{repo.name}</h5>
                <p>{repo.description}</p>
                <a href={repo.html_url}>Ver repositorio</a>
              </div>
            </div>
          ))
        ) : (
          <div className="carousel-item active" data-bs-interval="10000">
            <p>Loading...</p>
          </div>
        )}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" onClick={handlePrevClick}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" onClick={handleNextClick}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
