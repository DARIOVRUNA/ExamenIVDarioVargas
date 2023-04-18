import React, { useEffect, useState } from 'react'

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const Carousel = () => {
  const url = "https://api.github.com/users/DARIOVRUNA/repos"
  const [repos, setRepos] = useState<Repo[]>([])

  const fetchApi = async () => {
    const response = await fetch(url);
    const data: Repo[] = await response.json();
    setRepos(data);
  };

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {repos.map((repo, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={repo.id}>
            <div className="d-block w-100">
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
              <a href={repo.html_url}>Ver en Github</a>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
