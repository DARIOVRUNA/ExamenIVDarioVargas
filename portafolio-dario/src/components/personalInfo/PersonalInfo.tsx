import React from "react";

const PersonalInfo = () => {
  return (
    <div className="card .bg-secondary.bg-gradient item"  >
      <div className="card-body">
        <h5 className="card-title">Dario Vargas Rojas</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Systems engineering student</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">Age: 23</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">I live in San Ramón Norte</h6>
        <h6  className="card-subtitle mb-2 text-body-secondary">linkedin link</h6>
        <a href="#" className="card-link">
        https://www.linkedin.com/in/dario-vargas-3107a2272/
        </a>
      </div>
    </div>
  );
};

export default PersonalInfo;
